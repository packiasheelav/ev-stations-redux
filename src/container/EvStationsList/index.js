import React, { Component } from 'react';
import LoadMap from '../LoadMap';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getStations } from '../../actions/getStations';
import PropTypes from 'prop-types';
import './LoadStations.css';

class EvStationsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiKey: 'AIzaSyCGfeG6ePnKR9c98Ubo-w3SNDTaGAiZbrM',
			map: null,
			mapConfig: {
				center: { lat: 60.192059, lng: 24.945831 },
				zoom: 13,
				disableDefaultUI: true,
				zoomControl: true
			},
			markers: [],
			show: false,
			dataStations: '',
			dataStationsStatus: '',
			stationDetailId: '',
			statusDetail: '',
			stationDetailInfo: '',
			isLoading: true,
			loading: false,
			error: ''
		};
	}

	componentDidMount() {
		this.props.getStations();
		window.initMap = this.initMap;
		this.addScriptTag(
			'https://maps.googleapis.com/maps/api/js?key=' + this.state.apiKey + '&libraries=places&callback=initMap'
		);
	}
	initMap = () => {
		this.setState({
			map: new window.google.maps.Map(this.refs.map, this.state.mapConfig)
		});
	};

	addScriptTag(src) {
		let ref = window.document.getElementsByTagName('script')[0];
		let script = window.document.createElement('script');
		script.src = src;
		script.async = true;
		ref.parentNode.insertBefore(script, ref);
	}

	render() {
		const { stations } = this.props.stations;
		return (
			<div>
				<div ref="map" id="mapId" />
			</div>
		);
	}
}

EvStationsList.propTypes = {
	getStations: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	stations: state.stations
});

export default connect(
	mapStateToProps,
	{ getStations }
)(EvStationsList);
