import axios from 'axios';
import { GET_STATIONS, STATIONS_LOADING } from './types';

export const getStations = () => dispatch => {
  dispatch(setStationsLoading());
  axios.get(`https://api.virta.fi/v4/stations`).then(res =>
    dispatch({
      type: GET_STATIONS,
      payload: res.data
    })
  );
};

export const setStationsLoading = () => {
  return {
    type: STATIONS_LOADING
  };
};


