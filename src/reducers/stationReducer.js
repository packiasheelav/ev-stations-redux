import { GET_STATIONS, STATIONS_LOADING } from '../actions/types';

const initialState = {
	stations: [],
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_STATIONS:
			return {
				...state,
				stations: action.payload,
				loading: false
			};
		case STATIONS_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
