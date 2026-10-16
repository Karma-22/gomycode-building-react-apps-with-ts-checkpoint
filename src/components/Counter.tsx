import { Component } from 'react';

/**
 * ============================================================================
 * Étape 1 : Définition des interfaces des Props et du State
 * ============================================================================
 * 1. CounterProps : décrit les propriétés passées par le parent (ex: valeur initiale optionnelle).
 * 2. CounterState : décrit la structure interne du state (le compteur doit être un number).
 */
export interface CounterProps {
  initialCount?: number;
}

export interface CounterState {
  count: number;
}

/**
 * ============================================================================
 * Étape 2 : Typage du Composant de Classe avec Component<Props, State>
 * ============================================================================
 * En passant les deux types génériques à React.Component<CounterProps, CounterState>,
 * TypeScript sécurise :
 * - this.props (conforme à CounterProps)
 * - this.state (conforme à CounterState)
 * - this.setState(...) qui rejette tout champ n'appartenant pas à CounterState
 */
class Counter extends Component<CounterProps, CounterState> {
  // Initialisation typée de l'état
  public state: CounterState = {
    count: this.props.initialCount ?? 0
  };

  /**
   * Méthode pour incrémenter le compteur (+1)
   */
  public increment = (): void => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  /**
   * Méthode pour décrémenter le compteur (-1)
   */
  public decrement = (): void => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  /**
   * Méthode pour réinitialiser le compteur à 0
   */
  public reset = (): void => {
    this.setState({ count: this.props.initialCount ?? 0 });
  };

  public render() {
    return (
      <div className="counter-card">
        <div className="counter-header">
          <span className="counter-badge">Composant de Classe Typé</span>
          <h3 className="counter-title">Compteur d'État Local</h3>
        </div>

        <div className="counter-display">
          <span className="counter-label">Valeur actuelle :</span>
          <div className="counter-value">{this.state.count}</div>
        </div>

        <div className="counter-actions">
          <button
            type="button"
            className="counter-btn btn-dec"
            onClick={this.decrement}
            title="Décrémenter (-1)"
          >
            −
          </button>
          <button
            type="button"
            className="counter-btn btn-reset"
            onClick={this.reset}
            title="Remettre à zéro"
          >
            ↺
          </button>
          <button
            type="button"
            className="counter-btn btn-inc"
            onClick={this.increment}
            title="Incrémenter (+1)"
          >
            ＋
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
