import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchNasaPics} from '../actions/nasaAction'
import styled from 'styled-components'

const Container = styled.div`
    background-image: url('https://wallpaperplay.com/walls/full/0/1/9/200801.jpg');
    border-radius: 5rem;
    box-shadow: 0 0 20px 15px black;
    margin: 5rem;
    color: white;
    margin: 2rem;
`
const Header = styled.h1`
font-family: Times, Times New Roman, serif;
font-weight: bold;
text-shadow: 4px 4px 5px red, 4px 4px 8px #888;
color: gold;
`
const Title = styled.h4`
text-shadow: 0px 0px 2px magenta;	

`
const Image = styled.img`
box-shadow: 0 0 20px 15px red;
margin: 2rem;
border: 2px solid gold;
border-radius: 2rem;
color:red;
    &:hover{
        box-shadow: 0 0 25px 20px gold;
        border: 2px solid red;


    }
`
const Paragraph = styled.p`
font-family: Brush Script MT, Brush Script Std, cursive;
font-size: 40px;
text-shadow: 4px 10px 5px magenta;
margin: 2rem 10rem;
padding: 0 0 3rem 0;
color: white;
font-weight: bold
`


const NasaComponent = props => {
    console.log(props, 'WWWHHHAAATTT we have here????')

    useEffect(() => {
        props.fetchNasaPics();

    }, []);

    return(
        <Container>
            <Header>NASA Picture of The Day</Header>
            {props.isFetching && <h3> fetching data......</h3>}
            {/* here picture of the day should be displayed */}
            {/* {props.nasaPic && props.nasaPic.map((picData) => { */}
                {/* return ( */}
                    <div>
                        <Title> Title: {props.nasaPic.title}</Title>
                        <Image src = {props.nasaPic.url} alt = 'Picture of The Day'/>
                        <Paragraph>
                            <p>Date: {props.nasaPic.date}</p>
                            <p>Explanation: {props.nasaPic.explanation}</p>
                        </Paragraph>
                        
                    </div>
                {/* ) */}
            {/* })} */}
        </Container>
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
export default connect(mapStateToProps, {fetchNasaPics})         (NasaComponent);


// note what does it mean prop.nasaPic.map is not a function error. need to ask this question//