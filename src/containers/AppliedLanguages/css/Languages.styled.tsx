import styled from "styled-components";

export const LanguagesContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  position: relative;

  p {
    background: transparent;
    padding: 0.5rem 1rem;
    margin: 0 auto 40px;
  }

  h2 {
    margin: 0 0 10px 4px;

    @media (max-width: 1080px) {
      text-align: center;
      margin-bottom: 30px;
    }
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    p {
      margin: 4px;
      text-align: start;
      background: lightgray;
      color: black;
      padding: 8px;
      font-weight: 600;
    }

    @media (max-width: 1080px) {
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 30px;
    }

    @media (max-width: 648px) {
      grid-template-columns: repeat(2, 1fr);

      p {
        text-align: center;
      }
    }

    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
