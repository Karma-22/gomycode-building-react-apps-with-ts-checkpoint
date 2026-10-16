import React from 'react';

/**
 * ============================================================================
 * Étape 1 : Définition de l'interface des Props
 * ============================================================================
 * Nous définissons un contrat de type strict pour les props du composant.
 * La prop 'name' doit obligatoirement être une chaîne de caractères (string).
 */
export interface GreetingProps {
  name: string;
}

/**
 * ============================================================================
 * Étape 2 : Typage du Composant Fonctionnel
 * ============================================================================
 * Nous typions le composant en utilisant React.FC<GreetingProps> (FunctionComponent)
 * ou en typant directement la déstructuration ({ name }: GreetingProps).
 * Cela garantit :
 * 1. L'autocomplétion des props dans les IDE (VS Code, etc.).
 * 2. La détection immédiate à la compilation si une prop manquante ou invalide est passée.
 */
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div className="greeting-card">
      <div className="greeting-icon">👋</div>
      <div className="greeting-text">
        <span className="greeting-label">Composant Fonctionnel Typé</span>
        <h3 className="greeting-message">Bonjour, <strong>{name}</strong> !</h3>
      </div>
    </div>
  );
};

export default Greeting;
