import{ FETCH_NASA_PICS, FETCH_NASA_PICS_SUCCESS } from '../actions/nasaAction';
// import{ FETCH_NASA_PICS_SUCCESS } from '../actions/nasaAction'
// import{ FETCH_NASA_PICS_FAILURE } from '../actions/nasaAction'


const initialState = {
    isFetching: false,
    nasaPic: {},
    error: ''
}

export const nasaReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_NASA_PICS:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_NASA_PICS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                nasaPic: action.payload
            }
        default: 
            return state;
    }
}