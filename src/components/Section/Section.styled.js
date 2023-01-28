import styled from 'styled-components';

export const SectionBox = styled.section`
  display: block;
  margin: 0px auto;

  padding: 20px 60px;
  width: 300px;
  background: linear-gradient(to right, #be93c5, #7bc6cc);

  :first-child {
    border-radius: 10px 10px 0px 0px;
    margin-top: 50px;
  }
  :last-child {
    border-radius: 0px 0px 10px 10px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  margin: 0;
`;
