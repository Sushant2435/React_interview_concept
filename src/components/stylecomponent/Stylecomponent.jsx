import React from "react"
import styled from 'styled-components';

const Stylecompnent = () => {
    return (
        <>
            <DivContainer className="text-center my-4">
                <h1>Style Component</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, quibusdam!</p>
            </DivContainer>
            <div>

            </div>
        </>
    )
}
export default Stylecompnent;

const DivContainer = styled.div`
    border:2px solid white;
    h1{
     color: black;
    font-weight:bold;
    font-size: 1.4em;
    }

    p{
    color:blue;
    border:2px solid black;
    display: inline;
    }
    
`;