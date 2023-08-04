import styled from "styled-components";

const MainHeader = styled.h2`
  margin-bottom: 8px;
  position: relative;
  text-align: center;
  font-family: "NotoSerif-Bold", sans-serif;
  font-size: 50px;
  color: #112e41;
  text-transform: capitalize;

  &::before {
    content: "${(props) => props.contentvalue}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Noto Serif", serif;
    font-size: 130px;
    font-style: italic;
    letter-spacing: 6px;
    white-space: nowrap;
    color: rgba(17, 46, 65, 0.031);
  }

  @media (min-width: 2000px) {
    & {
      margin-bottom: 0.77vh;
      font-size: 3vw;
      &::before {
        font-size: 7.8vw;
      }
    }
  }
`;

export default MainHeader;
