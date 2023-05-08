import styled from "styled-components";

const StyledHomework = styled.div`
    background-color: white;
    width: 230px;
    padding: 5px 10px;
    margin: 5px 0px;
    border-radius: 6px;
`;

const StyledSubject = styled.div`
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 3px;
    color: gray;
    border-bottom: 1px solid gray;
    margin-bottom: 5px;
`;

function Homework({homework}){
    return (
        <StyledHomework> <StyledSubject>{homework[1]}</StyledSubject> {homework[0]}</StyledHomework>
    );
}

export default Homework;