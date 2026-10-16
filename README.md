# ⚛️ Building React Apps with TypeScript (GoMyCode)

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?logo=typescript&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)]()
[![Student](https://img.shields.io/badge/Student-Karma--22%20(Darius%20Ange)-blue.svg)]()

> Projet réalisé dans le cadre du **Bootcamp Full Stack Software Developer de GoMyCode**.  
> Ce checkpoint met en œuvre la migration et le typage strict de deux composants React fondamentaux (un composant fonctionnel et un composant de classe) depuis JavaScript (JSX) vers TypeScript (TSX).

---

## 📋 Table des Matières

- [Objectifs du Checkpoint](#-objectifs-du-checkpoint)
- [Cahier des Charges & Validation](#-cahier-des-charges--validation)
- [1. Conversion du Composant Fonctionnel (Greeting)](#1-conversion-du-composant-fonctionnel-greeting)
- [2. Conversion du Composant de Classe (Counter)](#2-conversion-du-composant-de-classe-counter)
- [Installation & Démarrage](#-installation--démarrage)
- [Auteur](#-auteur)

---

## 🎯 Objectifs du Checkpoint

1. **Composant Fonctionnel `Greeting`** :
   - Définir une interface pour les props : `GreetingProps { name: string; }`.
   - Typer le composant avec `React.FC<GreetingProps>`.
   - Expliquer chaque étape de la conversion par des commentaires détaillés.
2. **Composant de Classe `Counter`** :
   - Définir une interface pour les props : `CounterProps { initialCount?: number; }`.
   - Définir une interface pour le state : `CounterState { count: number; }`.
   - Hériter de `Component<CounterProps, CounterState>`.
   - Typer le state et les méthodes gestionnaires (`increment`, `decrement`, `reset`).
3. Fournir une application Vite + React + TypeScript interactive avec vérification stricte du compilateur (`tsc --noEmit`).

---

## ✅ Cahier des Charges & Validation

| Consigne GoMyCode | Réalisation | Statut |
| :--- | :--- | :---: |
| **Interface GreetingProps** | `name: string` défini et validé | ✅ Conforme |
| **Typage de Greeting** | `React.FC<GreetingProps>` avec commentaires pédagogiques | ✅ Conforme |
| **Interfaces Counter** | `CounterProps` et `CounterState { count: number; }` | ✅ Conforme |
| **Typage de Counter** | `class Counter extends Component<CounterProps, CounterState>` | ✅ Conforme |
| **Commentaires explicatifs** | Étapes 1 et 2 commentées en détail dans chaque composant | ✅ Conforme |
| **Vérification TypeScript** | Compilateur en mode strict `tsc --noEmit` zéro erreur | ✅ Conforme |

---

## 1. Conversion du Composant Fonctionnel (Greeting)

### Avant (JavaScript JSX) :
```javascript
import React from 'react';

const Greeting = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

### Après (TypeScript TSX) :
```typescript
import React from 'react';

// Étape 1 : Définition de l'interface des Props
export interface GreetingProps {
  name: string;
}

// Étape 2 : Typage du composant fonctionnel
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

---

## 2. Conversion du Composant de Classe (Counter)

### Avant (JavaScript JSX) :
```javascript
import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

### Après (TypeScript TSX) :
```typescript
import React, { Component } from 'react';

// Étape 1 : Définition des interfaces des Props et du State
export interface CounterProps {
  initialCount?: number;
}
export interface CounterState {
  count: number;
}

// Étape 2 : Typage générique Component<Props, State>
class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: this.props.initialCount ?? 0
  };

  increment = (): void => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

---

## 🚀 Installation & Démarrage

```bash
# 1. Cloner le dépôt
git clone https://github.com/Karma-22/gomycode-building-react-apps-with-ts-checkpoint.git
cd gomycode-building-react-apps-with-ts-checkpoint

# 2. Installer les dépendances
npm install

# 3. Vérifier le typage strict TypeScript
npm run type-check

# 4. Lancer le serveur de développement
npm run dev
```

---

## 👨‍💻 Auteur

- **Darius Ange (Karma-22)**  
- Profil GitHub : [https://github.com/Karma-22](https://github.com/Karma-22)  
- GoMyCode Full Stack Software Developer Bootcamp
