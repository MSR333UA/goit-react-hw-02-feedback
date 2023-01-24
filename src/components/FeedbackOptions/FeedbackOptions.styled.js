import styled from 'styled-components';

export const BtnList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 10px;

  padding: 0;
  margin: 30px 0 0;
`;

export const BtnFeedback = styled.button`
  border-radius: 5px;
  border: 1px solid blue;
  font-weight: 600;

  padding: 5px 10px;

  text-transform: capitalize;
  cursor: pointer;
  :active {
    background-color: #00d4ff;
  }
`;
