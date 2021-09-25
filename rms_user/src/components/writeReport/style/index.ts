import styled from 'styled-components';
import { color } from '../../../style';

export const Main = styled.main`
    width: 100%;
    display: flex;
    background-color: ${color.background};
`

export const Header = styled.header``

export const Form = styled.form`
    margin: 100px 320px;
`

export const Report = styled.div`
    width: 800px;
    padding: 55px 80px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    h5 {
        text-align: center;
    }
`

export const TitleName = styled.h1`
    margin: 10px;
    text-align: center;
`

export const ReportContent = styled.section`
    margin: 30px 0;
    h3 {
        margin: 15px;
    }
    textarea {
        width: 100%;
        height: 120px;
        border: none;
        resize: none;
        background-color: #FBFBFB;
        padding: 25px;
        font-size: 16px;
        box-shadow: 2px 2px 5px ${color.border};
        margin: 10px;
    }
    input {
        margin: 10px;
    }
    span {
        margin: 15px;
        font-size: 15px;
    }
`

export const FileBox = styled.div`
    #uploadName {
        height: 40px;
        padding: 0 10px;
        vertical-align: middle;
        border: 1px solid ${color.border};
        width: 80%;
        color: #999999;
    }
    label {
        padding: 10px 20px;
        color: white;
        text-align: center;
        background-color: ${color.main};
        cursor: pointer;
        margin-right: 10px;
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
