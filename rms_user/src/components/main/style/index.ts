import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const Main = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${color.background};
  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    padding-top: 54px;
  }
  .pagination {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    cursor: pointer;
  }
  .currentPage {
    font-size: 14px;
    font-weight: bold;
  }
  .pageLableBtn {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const ChooseField = styled.div`
  width: 190px;
  height: 233px;
  background: white;
  border: 1px solid ${color.border};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 25px 25px;
  margin-right: 80px;
  > div > p {
    font-size: 13px;
    color: #5f5f5f;
  }
`;

export const ChooseFieldTitle = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: black;
  margin-bottom: 11px;
`;

export const CheckBox = styled.div<{
  isClick: boolean;
}>`
  width: 12px;
  height: 12px;
  margin-right: 7px;
  cursor: pointer;
  ${({ isClick }) => css`
    background-color: ${isClick ? color.main : '#c4c4c4'};
  `}
`;

export const CheckLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 9px;
`;

export const Project = styled.div`
  width: 526px;
  height: 110px;
  background-color: white;
  border: 1px solid ${color.border};
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 13px 37px;
  margin-bottom: 10px;
  cursor: pointer;
  > div {
    display: flex;
    gap: 5px;
    margin-top: 4px;
  }
`;

export const ProjectClassification = styled.p`
  height: 16px;
  font-size: 10px;
`;

export const ProjectTitle = styled.p`
  height: 22px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 4px;
`;

export const ProjectWriter = styled.p`
  height: 17px;
  font-size: 12px;
`;

export const ProjectField = styled.div`
  height: 18px;
  padding: 0px 10px;
  border: 1px solid ${color.main};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 10px;
    color: ${color.main};
  }
`;

export const NoProjectList = styled.p`
  width: 526px;
  margin: 50px 0px;
  text-align: center;
`;
