import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import {
  getStations,
} from "../../actions/getStations";
import PropTypes from "prop-types";
import "./LoadStations.css";

class EvStationsList extends Component {
  state = {
    showDetails: false
  };
  componentDidMount() {
    this.props.getStations();
  }

  render() {
    const { stations } = this.props.stations;
    console.log(this.props);
    return (
        <div>hi</div>
    );
  }
}

EvStationsList.propTypes = {
  getStations: PropTypes.func.isRequired,
//   student: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  stations: state.stations
});

export default connect(
  mapStateToProps,
  { getStations }
)(EvStationsList);
