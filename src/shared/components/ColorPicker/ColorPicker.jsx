import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setColor from 'actions/colorAction';
import { SketchPicker } from 'react-color';

export class ColorPicker extends Component {
  handleChangeComplete = (color) => {
    this.props.setColor(this.props.elementToBeColored, color.hex);
  };

  render() {
    return (
      <SketchPicker
        color={this.props.color}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { color: state.color.backgroundColor };
}
/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setColor }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  elementToBeColored: PropTypes.string.isRequired,
};
