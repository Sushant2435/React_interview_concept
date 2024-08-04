import React from "react"
import styled from 'styled-components';

const Stylecompnent = () => {
    return (
        <>
            <DivContainer>
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
    color: red;
    font-size: 1.5em;
    p{
    color:blue;
    border:2px solid black;
    }
    
`;