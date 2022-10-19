import { Component } from "react";
import './styles.css';

export class Button extends Component {
  render() {
    const { text, onClick, isDisabled } = this.props;
    return (
      <button
        disabled={isDisabled}
        className="button"
        onClick={onClick}
      >
        {text}
      </button>
    )
  }
}