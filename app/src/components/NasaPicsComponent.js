import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchNasaPics} from '../actions/nasaAction'

const NasaComponent = props => {
    console.log(props, 'WWWHHHAAATTT we have here????')

    useEffect(() => {
        props.fetchNasaPics();

    }, []);

    return(
        <main>
            <h1>NASA Picture of The Day</h1>
            {props.isFetching && <h3> fetching data......</h3>}
            {/* here picture of the day should be displayed */}
        </main>
    )
    
}

const mapStateToProps = (state) => {
    console.log({state}, "what we have here in mSTP????????")
    return {
        isFetching: state.isFetching,
        nasaPic: state.nasaPic,
        error: state.error
    };
};
export default connect(mapStateToProps, {fetchNasaPics})(NasaComponent);