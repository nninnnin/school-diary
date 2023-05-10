import styled from "styled-components";
import Record from "./Record";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3vw;
    margin-left: 110px;
`;

function Records({records}){
    return (
        <>
        <StyledDiv>
            {records.map(record => {
                return(
                    <Record record={record}/>
                );
            })}
        </StyledDiv>
        </>
    );
}

export default Records;