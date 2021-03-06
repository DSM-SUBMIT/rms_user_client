import styled from 'styled-components';

export const SmallModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(107, 107, 107, 0.58);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
  margin: 0;
  padding: 0;
`;

export const DeleteBox = styled.div`
  width: 294px;
  height: 141px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 5px;
  img {
    margin: 10px 0px 10px 263px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 200px;
  height: 77px;
  margin: auto;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 10px;
  color: #000000;
`;

export const DeleteBtn = styled.button`
  width: 150px;
  height: 30px;
  background: #386bee;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  border: none;
  margin: 25px 18px;
  cursor: pointer;
`;
