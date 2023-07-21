import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;

  @media (min-width: 576px) {
    & {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    & {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    & {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    & {
      max-width: 1170px;
      padding: 0 1.125rem;
    }
  }
  @media (min-width: 2000px) {
    & {
      max-width: 70vw;
      padding: 0 1.05vw;
    }
  }
`;
export default StyledContainer;
