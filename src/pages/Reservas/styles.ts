import styled from "styled-components";

export const Container = styled.main`
  padding: 1rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const ReserveCard = styled.div`
  background: #ececec;
  color: #212121;

  margin: 10px 0;

  padding: 1.2rem 0.8rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.4rem;
  box-shadow: 3px 5px 8px #1e1d1ddb;

  width: 80%;
  max-width: 1266px;
  max-height: 250px;

  img {
    width: 30%;
    min-width: 280px;
  }
  strong {
    font-size: 1.4em;
  }
  p {
    font-size: 1.1em;
    color: #575464;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.1em;

    svg {
      margin: 0 5px;
      font-size: 1.8rem;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  max-width: 80%;
  width: 9rem;
  margin: 1rem 0;
  padding: 1rem;

  background: rgba(82, 183, 250, 0.9);

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
  border: none;
  color: #fff;
  border-radius: 0.4rem;
  box-shadow: 1px 2px 3px #636bdfdb;
  transition: width 0.2s ease-in;

  &:hover {
    width: 10rem;
  }
`;
