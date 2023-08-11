import styled from "styled-components";

const MainButton = styled.button`
  padding: 28px 50px;
  display: inline-block;
  background-color: #dca73a;
  color: #fff;
  font-size: 16px;
  font-family: "NotoSerif-Regular", sans-serif;
  line-height: 0;
  text-transform: capitalize;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

  &:hover {
    background-color: #f1b233;
  }

  @media (min-width: 2000px) {
    & {
      padding: 2.7vh 2.5vw;
      font-size: 0.96vw;
      border-radius: 0.25vw;
    }
  }
`;

export default MainButton;
