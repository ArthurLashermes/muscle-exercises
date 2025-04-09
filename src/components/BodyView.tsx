import React, { useState, useEffect, useRef, useCallback } from 'react';
import { exercises, Exercise } from '../data/exercises';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './BodyView.css';

// Interface pour les exercices dans la liste d'entraînement
interface WorkoutExercise extends Exercise {
  sets: number;
  reps: number;
  restTime: number;
}

const BodyView: React.FC = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [workoutList, setWorkoutList] = useState<WorkoutExercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  const [exerciseDetails, setExerciseDetails] = useState({
    sets: 3,
    reps: 10,
    restTime: 60
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [workoutName, setWorkoutName] = useState("Liste d'entraînement");
  const [isEditingWorkoutName, setIsEditingWorkoutName] = useState(false);
  const workoutNameInputRef = useRef<HTMLInputElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleMuscleClick = useCallback((muscleId: string) => {
    setSelectedMuscle(muscleId === selectedMuscle ? null : muscleId);
    setShowPopup(true);
    
    // Mettre à jour les classes CSS pour le style de sélection
    if (svgRef.current) {
      const allMuscles = svgRef.current.querySelectorAll('.muscle');
      allMuscles.forEach(muscle => {
        if (muscle.id === muscleId) {
          muscle.classList.toggle('selected');
        } else {
          muscle.classList.remove('selected');
        }
      });
    }
  }, [selectedMuscle]);

  useEffect(() => {
    // Charger le SVG externe
    fetch('/corps.svg')
      .then(response => response.text())
      .then(svgText => {
        if (svgRef.current) {
          // Insérer le contenu du SVG dans notre élément
          svgRef.current.innerHTML = svgText;
          
          // Ajouter les gestionnaires d'événements aux groupes cliquables
          const muscleGroups = svgRef.current.querySelectorAll('g[id]');
          muscleGroups.forEach(group => {
            // Exclure le groupe "corps" des éléments cliquables
            if (group.id !== 'corps') {
              group.classList.add('muscle');
              group.addEventListener('click', () => handleMuscleClick(group.id));
            }
          });
        }
      })
      .catch(error => console.error('Erreur lors du chargement du SVG:', error));
  }, [handleMuscleClick]);

  useEffect(() => {
    // Focus sur l'input du nom de l'entraînement quand on passe en mode édition
    if (isEditingWorkoutName && workoutNameInputRef.current) {
      workoutNameInputRef.current.focus();
    }
  }, [isEditingWorkoutName]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedMuscle(null);
    setShowExerciseForm(false);
    setSelectedExercise(null);
    setEditingIndex(null);
    setIsEditingWorkoutName(false);
    
    // Réinitialiser les classes CSS
    if (svgRef.current) {
      const allMuscles = svgRef.current.querySelectorAll('.muscle');
      allMuscles.forEach(muscle => {
        muscle.classList.remove('selected');
      });
    }
  };

  const handleExerciseClick = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setShowExerciseForm(true);
    setEditingIndex(null);
    setExerciseDetails({
      sets: exercise.sets || 3,
      reps: exercise.reps || 10,
      restTime: exercise.restTime || 60
    });
  };

  const handleAddToWorkout = () => {
    if (selectedExercise) {
      const newExercise: WorkoutExercise = {
        ...selectedExercise,
        sets: exerciseDetails.sets,
        reps: exerciseDetails.reps,
        restTime: exerciseDetails.restTime
      };
      
      if (editingIndex !== null) {
        // Mettre à jour un exercice existant
        const updatedWorkoutList = [...workoutList];
        updatedWorkoutList[editingIndex] = newExercise;
        setWorkoutList(updatedWorkoutList);
        setEditingIndex(null);
      } else {
        // Ajouter un nouvel exercice
        setWorkoutList([...workoutList, newExercise]);
      }
      
      setShowExerciseForm(false);
      setSelectedExercise(null);
    }
  };

  const handleRemoveFromWorkout = (index: number) => {
    const newWorkoutList = [...workoutList];
    newWorkoutList.splice(index, 1);
    setWorkoutList(newWorkoutList);
  };

  const handleEditExercise = (index: number) => {
    const exercise = workoutList[index];
    setSelectedExercise(exercise);
    setExerciseDetails({
      sets: exercise.sets,
      reps: exercise.reps,
      restTime: exercise.restTime
    });
    setEditingIndex(index);
    setShowExerciseForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExerciseDetails({
      ...exerciseDetails,
      [name]: parseInt(value) || 0
    });
  };

  const handleWorkoutNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutName(e.target.value);
  };

  const handleWorkoutNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingWorkoutName(false);
  };

  const handleWorkoutNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditingWorkoutName(false);
    } else if (e.key === 'Escape') {
      setWorkoutName("Liste d'entraînement");
      setIsEditingWorkoutName(false);
    }
  };

  const handleGeneratePDF = () => {
    if (workoutList.length > 0 && pdfRef.current) {
      console.log("Génération du PDF avec", workoutList.length, "exercices");
      
      // Rendre le conteneur PDF visible temporairement
      pdfRef.current.style.display = 'block';
      
      html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        logging: true
      }).then(canvas => {
        // Cacher à nouveau le conteneur PDF
        if (pdfRef.current) {
          pdfRef.current.style.display = 'none';
        }
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${workoutName || 'entrainement'}.pdf`);
      });
    }
  };

  const filteredExercises = selectedMuscle
    ? exercises.filter((exercise: Exercise) => exercise.muscle === selectedMuscle)
    : [];

  return (
    <div className="body-container">
      <div className="body-view">
        <div className="svg-container">
          <svg ref={svgRef} viewBox="0 0 2346 2286" xmlns="http://www.w3.org/2000/svg">
            {/* Le contenu du SVG sera chargé dynamiquement */}
          </svg>
        </div>

        {showPopup && selectedMuscle && (
          <div className="exercises-popup">
            <div className="popup-header">
              <div className="popup-header-content">
                <img src="/logo.png" alt="Logo" className="popup-logo" />
                <h2>Exercices pour {selectedMuscle}</h2>
              </div>
              <button className="close-button" onClick={handleClosePopup}>×</button>
            </div>
            <div className="popup-content">
              {!showExerciseForm ? (
                <>
                  <div className="workout-name-container">
                    {isEditingWorkoutName ? (
                      <form onSubmit={handleWorkoutNameSubmit} className="workout-name-form">
                        <input
                          ref={workoutNameInputRef}
                          type="text"
                          value={workoutName}
                          onChange={handleWorkoutNameChange}
                          onBlur={() => setIsEditingWorkoutName(false)}
                          onKeyDown={handleWorkoutNameKeyDown}
                          className="workout-name-input"
                          placeholder="Nom de l'entraînement"
                        />
                      </form>
                    ) : (
                      <div className="workout-name-display" onClick={() => setIsEditingWorkoutName(true)}>
                        <h3>{workoutName}</h3>
                        <button className="edit-name-button">✎</button>
                      </div>
                    )}
                  </div>
                  
                  <div className="workout-actions">
                    <button 
                      className="generate-pdf-button"
                      onClick={handleGeneratePDF}
                      disabled={workoutList.length === 0}
                      title="Générer PDF"
                    >
                      📋
                    </button>
                  </div>
                  
                  {workoutList.length > 0 ? (
                    <>
                      <ul className="workout-list">
                        {workoutList.map((exercise, index) => (
                          <li key={`${exercise.id}-${index}`} className="workout-item">
                            <div className="workout-item-header">
                              <h4>{exercise.name}</h4>
                              <div className="workout-item-actions">
                                <button 
                                  className="edit-button" 
                                  onClick={() => handleEditExercise(index)}
                                >
                                  ✎
                                </button>
                                <button 
                                  className="remove-button" 
                                  onClick={() => handleRemoveFromWorkout(index)}
                                >
                                  ×
                                </button>
                              </div>
                            </div>
                            <div className="workout-details">
                              <span>{exercise.sets} séries</span>
                              <span>{exercise.reps} répétitions</span>
                              <span>{exercise.restTime} sec de repos</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="empty-workout">Aucun exercice dans votre entraînement</p>
                  )}
                  
                  <h3>Exercices disponibles</h3>
                  <ul>
                    {filteredExercises.map((exercise: Exercise) => (
                      <li key={exercise.id} onClick={() => handleExerciseClick(exercise)}>
                        <h3>{exercise.name}</h3>
                        <p>{exercise.description}</p>
                        <span className="difficulty">{exercise.difficulty}</span>
                        {exercise.equipment && (
                          <div className="equipment">
                            <strong>Équipement :</strong> {exercise.equipment}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="exercise-form">
                  <h3>{editingIndex !== null ? 'Modifier l\'exercice' : 'Ajouter à l\'entraînement'}</h3>
                  <div className="form-group">
                    <label>Exercice :</label>
                    <p className="selected-exercise">{selectedExercise?.name}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="sets">Séries :</label>
                    <input 
                      type="number" 
                      id="sets" 
                      name="sets" 
                      value={exerciseDetails.sets} 
                      onChange={handleInputChange}
                      min="1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reps">Répétitions :</label>
                    <input 
                      type="number" 
                      id="reps" 
                      name="reps" 
                      value={exerciseDetails.reps} 
                      onChange={handleInputChange}
                      min="1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="restTime">Temps de repos (secondes) :</label>
                    <input 
                      type="number" 
                      id="restTime" 
                      name="restTime" 
                      value={exerciseDetails.restTime} 
                      onChange={handleInputChange}
                      min="0"
                    />
                  </div>
                  <div className="form-actions">
                    <button className="cancel-button" onClick={() => setShowExerciseForm(false)}>
                      Annuler
                    </button>
                    <button className="add-button" onClick={handleAddToWorkout}>
                      {editingIndex !== null ? 'Mettre à jour' : 'Ajouter à l\'entraînement'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Conteneur PDF */}
      <div ref={pdfRef} className="pdf-container">
        <div className="pdf-header">
          <h1>{workoutName || 'Mon entraînement'}</h1>
          <p className="pdf-date">{new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="pdf-workout-list">
          {workoutList.length > 0 ? (
            workoutList.map((exercise, index) => (
              <div key={index} className="pdf-workout-item">
                <h3>{index + 1}. {exercise.name}</h3>
                <div className="pdf-workout-details">
                  {exercise.sets && <p><strong>Séries:</strong> {exercise.sets}</p>}
                  {exercise.reps && <p><strong>Répétitions:</strong> {exercise.reps}</p>}
                  {exercise.restTime && <p><strong>Temps de repos:</strong> {exercise.restTime} secondes</p>}
                </div>
                {exercise.description && (
                  <p className="pdf-exercise-description"><strong>Description:</strong> {exercise.description}</p>
                )}
                {exercise.equipment && (
                  <p className="pdf-equipment"><strong>Équipement:</strong> {exercise.equipment}</p>
                )}
              </div>
            ))
          ) : (
            <p className="pdf-empty-workout">Aucun exercice dans la liste</p>
          )}
        </div>

        <div className="pdf-footer">
          <p>Généré le {new Date().toLocaleString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
};

export default BodyView; 