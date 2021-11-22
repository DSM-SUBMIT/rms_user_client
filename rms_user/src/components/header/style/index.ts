import styled from 'styled-components';
import { color } from '../../../style';

export const HeaderBox = styled.div`
  height: 55px;
  padding-top: 8px;
  background: white;
`;

export const HeaderContent = styled.div`
  width: 801px;
  height: 40px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center; ;
`;

export const MainLogo = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: ${color.main};
  :hover {
    color: ${color.main};
  }
`;

export const UserBox = styled.div`
  img {
    vertical-align: middle;
  }
`;

export const UserName = styled.span`
  font-size: 15px;
  color: #000000;
  margin-left: 4px;
`;
