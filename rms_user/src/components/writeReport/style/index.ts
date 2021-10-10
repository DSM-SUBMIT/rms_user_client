import styled from 'styled-components';
import { color } from '../../../style';

export const Main = styled.main`
    width: 100%;
    display: flex;
    background-color: ${color.background};
    display: flex;
    justify-content: center;
`

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

export const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 40px 0;
`

export const FormDiv = styled.section`
    width: 640px;
    height: 325px;
    border: 1px solid ${color.border};
    padding: 50px 70px;
    .tab { white-space: pre; }
`

export const AddPage = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 30px 0;
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
`

export const Button = styled.button`
    cursor: pointer;
    width: 160px;
    height: 50px;
    border: none;
    background-color: white;
    border-radius: 10px;
    box-shadow: 3px 4px 5px ${color.border};
    color: ${color.main};
    font-size: 16px;
    :hover {
        background-color: ${color.main};
        color: white;
    }
`