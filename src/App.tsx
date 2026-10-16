import React, { useState } from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import './App.css';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('Darius Ange (Karma-22)');
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-wrapper">
          <div className="logo-group">
            <span className="logo-icon">⚛️</span>
            <div>
              <h1 className="logo-title">React<span>TypeScript</span></h1>
              <p className="logo-subtitle">Building React Apps with TypeScript Checkpoint • GoMyCode</p>
            </div>
          </div>
          <div className="header-badges">
            <span className="badge badge-ts">TypeScript 5 Strict</span>
            <span className="badge badge-react">React 18</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Navigation Tabs */}
        <div className="view-toggle-bar">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'demo' ? 'active' : ''}`}
            onClick={() => setActiveTab('demo')}
          >
            🎮 Démo Interactive en Direct
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            📜 Comparatif Code : JS vs TS
          </button>
        </div>

        {activeTab === 'demo' ? (
          <div className="demo-grid">
            {/* Section 1: Greeting */}
            <section className="section-card">
              <div className="section-header">
                <h2>1. Composant Fonctionnel : <code>Greeting</code></h2>
                <span className="badge-tag">Props Type Check</span>
              </div>
              <p className="section-desc">
                Passez dynamiquement une chaîne de caractères à la prop <code>name: string</code>.
              </p>

              <div className="name-input-group">
                <label htmlFor="name-input" className="input-label">Modifier le nom en direct :</label>
                <input
                  id="name-input"
                  type="text"
                  className="text-input"
                  value={userName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                  placeholder="Tapez un nom..."
                />
              </div>

              {/* Rendu du composant fonctionnel Greeting */}
              <Greeting name={userName || 'Visiteur'} />
            </section>

            {/* Section 2: Counter */}
            <section className="section-card">
              <div className="section-header">
                <h2>2. Composant de Classe : <code>Counter</code></h2>
                <span className="badge-tag">State & Props Type Check</span>
              </div>
              <p className="section-desc">
                Composant de classe héritant de <code>Component&lt;CounterProps, CounterState&gt;</code>.
              </p>

              {/* Rendu du composant de classe Counter */}
              <Counter initialCount={0} />
            </section>
          </div>
        ) : (
          <div className="code-comparison-container">
            {/* Greeting comparison */}
            <div className="code-card">
              <h3>Composant Fonctionnel : <code>Greeting</code></h3>
              <div className="code-split">
                <div className="code-col">
                  <div className="code-badge js-badge">Avant : JavaScript (JSX)</div>
                  <pre><code>{`// Greeting.js
import React from 'react';

const Greeting = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;`}</code></pre>
                </div>

                <div className="code-col">
                  <div className="code-badge ts-badge">Après : TypeScript (TSX)</div>
                  <pre><code>{`// Greeting.tsx
import React from 'react';

// 1. Interface stricte pour les Props
export interface GreetingProps {
  name: string;
}

// 2. Typage avec React.FC<GreetingProps>
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;`}</code></pre>
                </div>
              </div>
            </div>

            {/* Counter comparison */}
            <div className="code-card">
              <h3>Composant de Classe : <code>Counter</code></h3>
              <div className="code-split">
                <div className="code-col">
                  <div className="code-badge js-badge">Avant : JavaScript (JSX)</div>
                  <pre><code>{`// Counter.js
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
export default Counter;`}</code></pre>
                </div>

                <div className="code-col">
                  <div className="code-badge ts-badge">Après : TypeScript (TSX)</div>
                  <pre><code>{`// Counter.tsx
import React, { Component } from 'react';

// 1. Interfaces des Props et du State
export interface CounterProps {
  initialCount?: number;
}
export interface CounterState {
  count: number;
}

// 2. Héritage générique typé
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
export default Counter;`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>
            Projet réalisé par <strong>Karma-22 (Darius Ange)</strong> pour le Bootcamp GoMyCode Full Stack.
          </p>
          <div className="footer-tags">
            <span className="tag">TypeScript 5</span>
            <span className="tag">React.FC</span>
            <span className="tag">Component&lt;Props, State&gt;</span>
            <span className="tag">Strict Mode</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
