import { Component } from 'react';
import props from 'prop-types';
import './styles.css';

export class Button extends Component {
  render() {
    const { text, onClick, isDisabled } = this.props;
    return (
      <button disabled={isDisabled} className="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: props.string.isRequired,
  onClick: props.func.isRequired,
  isDisabled: props.bool,
};
