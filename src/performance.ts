import { performance } from './firebase';
import { trace, FirebasePerformance, PerformanceTrace } from 'firebase/performance';

// Déclaration pour TypeScript
declare global {
  interface Window {
    firstInputDelay?: number;
  }
}

// Fonction pour mesurer le temps de chargement d'une page
export const measurePageLoad = (pageName: string) => {
  if (!performance) return null;
  
  try {
    const pageTrace = trace(performance, `page_load_${pageName}`);
    pageTrace.start();
    
    // Arrêter la trace lorsque la page est complètement chargée
    window.addEventListener('load', () => {
      pageTrace.stop();
      console.log(`Page ${pageName} chargée en ${(pageTrace as any).duration}ms`);
    });
    
    return pageTrace;
  } catch (error) {
    console.warn(`Erreur lors de la mesure du temps de chargement de la page ${pageName}:`, error);
    return null;
  }
};

// Fonction pour mesurer le temps d'exécution d'une fonction
export const measureFunctionExecution = async <T>(
  functionName: string,
  fn: () => Promise<T> | T
): Promise<T> => {
  if (!performance) return fn();
  
  try {
    const functionTrace = trace(performance, `function_${functionName}`);
    functionTrace.start();
    
    const result = await fn();
    
    functionTrace.stop();
    console.log(`Fonction ${functionName} exécutée en ${(functionTrace as any).duration}ms`);
    
    return result;
  } catch (error) {
    console.warn(`Erreur lors de la mesure de la fonction ${functionName}:`, error);
    return fn();
  }
};

// Fonction pour mesurer le délai de première entrée (FID)
export const measureFirstInputDelay = () => {
  if (!performance) return;
  
  try {
    // Vérifier si le polyfill a mesuré le FID
    if (typeof window.firstInputDelay !== 'undefined') {
      const fidTrace = trace(performance, 'first_input_delay');
      fidTrace.putMetric('fid', window.firstInputDelay);
      fidTrace.stop();
      console.log(`Délai de première entrée (FID): ${window.firstInputDelay}ms`);
    }
  } catch (error) {
    console.warn('Erreur lors de la mesure du délai de première entrée:', error);
  }
}; 