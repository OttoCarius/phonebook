import styled from 'styled-components';
import bgImage from '../img/iphone2.png';

const Box = styled.div`
  width: 420px;
  min-height: 860px;

  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  background: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 420px) {
    min-width: 300px;
    min-height: 500px;
    background-size: contain;
  }

  @media screen and (min-width: 2000px) {
    width: 480px;
  }
`;

export default Box;
