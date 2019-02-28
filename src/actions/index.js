import axios from 'axios';



export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILS = 'FETCH_DATA_FAILS';
export const FETCH_DATA = 'FETCH_DATA';
export const DATA_SAVE_SUCCESS = 'DATA_SAVE_SUCCESS';

// default function to display redux action format

export const fetchingStarts = () => {
    return {
        type: FETCH_DATA_START,
        isFetching: true
    }
}

export function fetchingSuccess(result) {
    return {
        type: FETCH_DATA_SUCCESS,
        isFetching: false,
        data: result
    }
}


export function fetchingFails(err) {
    return {
        type: FETCH_DATA_FAILS,
        isFetching: false,
        error: err
    }
}

export function resetReduxForm() {
    return {
        type: DATA_SAVE_SUCCESS
    }
}

export function defaultFunction() {
    return dispatch => {
        dispatch(fetchingStarts())
        let url = 'https://api.suntist.com/aboutus/';
        axios.get(url)
            .then(response => {
                dispatch(fetchingSuccess(response))
            })
            .catch(err => {
                dispatch(fetchingFails(err))
            })
    }
}