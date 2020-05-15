import{ FETCH_NASA_PICS } from '../actions/nasaAction'

const initialState = {
    isFetching: false,
    nasaPic: [],
    error: ''
}

export const nasaReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_NASA_PICS:
            return {
                ...state,
                isFetching: true
            }
        default: 
            return state;
    }
}