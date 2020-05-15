import axios from 'axios';
export const FETCH_NASA_PICS = 'FETCH_NASA_PICS';

export const fetchNasaPics = () => {
//here need to make an async request and redux-thunk allows us to return function instead of object//

    return dispatch  => {
        dispatch ({ type: FETCH_NASA_PICS });

        axios.get('https://api.nasa.gov/planetary/apod?api_key=B0bRgPlPK8AhGk1GR6QXb1zpfwiL4FWMyhb84kYY')
        .then(res => {
            console.log(res, 'Do we have Data???????')
        })
    }

}

