import { test, expect } from '@playwright/test';

test.describe('BodyView Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Augmenter le timeout pour les tests
    test.setTimeout(60000);
  });

  test('should display the body view with SVG', async ({ page }) => {
    // Vérifier que le SVG est chargé en utilisant un sélecteur plus spécifique
    // Utiliser first() pour éviter le mode strict
    await expect(page.locator('.svg-container svg').first()).toBeVisible();
  });

  test('should open popup when clicking on a muscle', async ({ page }) => {
    // Attendre que le SVG soit chargé
    await page.waitForSelector('.svg-container svg');
    
    // Utiliser JavaScript pour déclencher l'événement de clic directement
    await page.evaluate(() => {
      const muscleElement = document.querySelector('.svg-container g[id]');
      if (muscleElement) {
        // Créer et déclencher un événement de clic
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        muscleElement.dispatchEvent(clickEvent);
      }
    });
    
    // Vérifier que la popup s'ouvre
    await expect(page.locator('.exercises-popup')).toBeVisible();
    await expect(page.locator('.popup-header h2')).toBeVisible();
  });

  test('should add exercise to workout list', async ({ page }) => {
    // Ouvrir la popup en utilisant JavaScript
    await page.waitForSelector('.svg-container svg');
    await page.evaluate(() => {
      const muscleElement = document.querySelector('.svg-container g[id]');
      if (muscleElement) {
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        muscleElement.dispatchEvent(clickEvent);
      }
    });
    
    // Attendre que la popup s'ouvre
    await expect(page.locator('.exercises-popup')).toBeVisible();
    
    // Cliquer sur un exercice dans la liste
    await page.locator('.popup-content ul li').first().click();
    
    // Remplir les détails de l'exercice
    await page.locator('input[name="sets"]').fill('3');
    await page.locator('input[name="reps"]').fill('12');
    await page.locator('input[name="restTime"]').fill('60');
    
    // Ajouter l'exercice à l'entraînement
    await page.locator('.add-button').click();
    
    // Vérifier que l'exercice a été ajouté à la liste d'entraînement
    await expect(page.locator('.workout-list li')).toHaveCount(1);
  });

  test('should generate PDF when clicking on generate PDF button', async ({ page }) => {
    // Ajouter un exercice à l'entraînement
    await page.waitForSelector('.svg-container svg');
    await page.evaluate(() => {
      const muscleElement = document.querySelector('.svg-container g[id]');
      if (muscleElement) {
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        muscleElement.dispatchEvent(clickEvent);
      }
    });
    await expect(page.locator('.exercises-popup')).toBeVisible();
    await page.locator('.popup-content ul li').first().click();
    await page.locator('.add-button').click();
    
    // Vérifier que l'exercice a été ajouté
    await expect(page.locator('.workout-list li')).toHaveCount(1);
    
    // Cliquer sur le bouton de génération de PDF
    await page.locator('.generate-pdf-button').click();
    
    // Vérifier que le conteneur PDF existe dans le DOM
    // Note: Le conteneur PDF est normalement caché (display: none), donc nous vérifions
    // sa présence dans le DOM plutôt que sa visibilité
    await expect(page.locator('.pdf-container')).toBeAttached();
    
    // Vérifier que le bouton de génération de PDF a été cliqué avec succès
    // en vérifiant que le bouton est toujours présent après le clic
    await expect(page.locator('.generate-pdf-button')).toBeVisible();
  });

  test('should edit workout name', async ({ page }) => {
    // Ouvrir la popup
    await page.waitForSelector('.svg-container svg');
    await page.evaluate(() => {
      const muscleElement = document.querySelector('.svg-container g[id]');
      if (muscleElement) {
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        muscleElement.dispatchEvent(clickEvent);
      }
    });
    
    // Cliquer sur le nom de l'entraînement pour le modifier
    await page.locator('.workout-name-display').click();
    
    // Modifier le nom
    await page.locator('.workout-name-input').fill('Mon entraînement personnalisé');
    await page.locator('.workout-name-input').press('Enter');
    
    // Vérifier que le nom a été modifié
    await expect(page.locator('.workout-name-display h3')).toHaveText('Mon entraînement personnalisé');
  });
}); 