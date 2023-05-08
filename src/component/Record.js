import styled from "styled-components";

const StyledRecord = styled.div`
    background-color: white;
    width: 800px;
    padding: 10px 10px;
    margin: 1vw 5vw;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
`;

const StyledSpanDate = styled.span`
    color: gray;
    font-weight: bold;
    font-size: smaller;
`;


function Record({record}){
    return(
        <StyledRecord>
            <StyledSpanDate>{record[2]}</StyledSpanDate>
            <span>{record[1]} {record[0]}</span>
            <span>선생님 확인: X</span>
        </StyledRecord>
    );
}

export default Record;