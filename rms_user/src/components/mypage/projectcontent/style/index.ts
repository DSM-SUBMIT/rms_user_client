import styled from 'styled-components';
import { color } from '../../../../style';

export const ProjectContent = styled.div`
  width: 546px;
  height: 110px;
  background-color: white;
  border: 1px solid ${color.border};
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 13px 37px;
  margin-bottom: 16px;
  cursor: pointer;
  > div {
    display: flex;
    gap: 5px;
    margin-top: 11px;
  }
`;

export const ProjectClassification = styled.p`
  height: 16px;
  font-size: 10px;
  font-family: Noto Sans KR;
`;

export const ProjectTitle = styled.p`
  height: 22px;
  font-size: 16px;
  font-family: Noto Sans KR;
  font-weight: bold;
`;

export const ProjectWriter = styled.p`
  height: 17px;
  font-size: 12px;
  font-family: Noto Sans KR;
`;

export const ProjectField = styled.div`
  height: 20px;
  padding: 0px 10px;
  border: 1px solid ${color.main};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans KR;
  > p {
    font-size: 10px;
    color: ${color.main};
  }
`;
