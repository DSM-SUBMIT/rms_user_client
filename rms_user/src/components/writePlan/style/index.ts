import styled from 'styled-components';
import { color } from '../../../style';

export const Main = styled.main`
    width: 100%;
    display: flex;
    background-color: ${color.background};
    text-align: center;
    justify-content: center;
`

export const Form = styled.form`
    margin: 100px 320px;
`

export const Plan = styled.div`
    width: 800px;
    padding: 55px 80px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;​
    span {
        text-align: center;
    }
`

export const TitleName = styled.h1`
    margin: 10px;
`

export const PlanContent = styled.section`
    margin: 30px 0;
    textarea {
        width: 100%;
        height: 250px;
        border: none;
        resize: none;
        background-color: #fbfbfb;
        padding: 25px;
        font-size: 16px;
        box-shadow: 2px 2px 5px ${color.border};
        margin: 10px;
    }
    input {
        padding: 5px;
        margin: 5px;
    }
`

export const PlanContentResult = styled.div`
    display: flex;
    flex-direction: column;
`
export const InputDiv = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    label {
        margin-left: 5px;
    }
`

export const ButtonGroup = styled.div`
    margin: 70px;
    display: flex;
    justify-content: space-around;
    button {
        cursor: pointer;
        width: 160px;
        height: 50px;
        border: none;
        background-color: white;
        border-radius: 10px;
        box-shadow: 3px 4px 5px ${color.border};
        color: ${color.main};
        font-size: 16px;
    }
`
