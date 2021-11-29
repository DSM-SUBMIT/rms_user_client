import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const DetailReport = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100%;
  box-sizing: border-box;
  background-color: ${color.background};
  padding-bottom: 55px;
  > div:nth-child(2) {
    width: 800px;
    margin: 0 auto;
    padding-top: 54px;
  }
`;

export const ReportPage = styled.div`
  width: 800px;
  height: 1131px;
  background-color: white;
  border: 1px solid black;
`;

export const ReportCover = styled.p`
  font-size: 16px;
  letter-spacing: 3px;
  margin: 69px 0px 0px 58px;
`;

export const ReportTitle = styled.p`
  font-size: 34px;
  font-weight: bold;
  margin-top: 84px;
  text-align: center;
`;

export const ReportTitleBox = styled.div`
  width: 584px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 140px auto 160px auto;
  > p {
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  > tr:first-child {
    height: 56px;
  }
  > tr:last-child {
    height: 71px;
  }
  > tr {
    text-align: center;
    > td {
      border: 2px solid black;
    }
    > td:first-child {
      width: 183px;
      font-size: 26px;
      letter-spacing: 3px;
    }
    > td:last-child {
      width: 408px;
      font-size: 21px;
      font-weight: bold;
    }
  }
`;

export const SchoolName = styled.p`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin-top: 128px;
`;

export const ReportContentBox = styled.div<{ isSecondPage?: boolean }>`
  width: 676px;
  padding: 10px;
  ${({ isSecondPage }) => css`
    height: ${isSecondPage ? '959px' : '974px'};
    margin: ${isSecondPage ? '10px auto' : '77px auto'};
  `}
  border: 1px solid black;
  word-break: break-all;
  > p {
    font-size: 18px;
  }
`;

export const ReportContentTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  height: 29px;
  margin-top: 53px;
  margin: 53px 0px 0px 61px;
  > span {
    font-size: 16px;
    font-weight: 300;
    margin-right: 10px;
  }
`;

export const DownloadBtn = styled.div`
  width: 800px;
  display: flex;
  justify-content: end;
  margin: 30px auto 55px auto;
  > div {
    width: 150px;
    height: 50px;
    background-color: ${color.main};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    > p {
      color: white;
      font-size: 20px;
    }
  }
`;
