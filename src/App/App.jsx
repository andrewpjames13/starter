import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ColorPicker from 'shared/components/ColorPicker/ColorPicker';
import styles from './App.module.scss';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={styles.hello} style={{ backgroundColor: this.props.backgroundColor }}>
          <ColorPicker elementToBeColored="backgroundColor" />
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { backgroundColor: state.color.backgroundColor };
}

export default connect(mapStateToProps)(App);

App.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
