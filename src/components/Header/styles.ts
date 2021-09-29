import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const ReservesDiv = styled.div`
  color: #03a9f4;

  strong {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  max-width: 110px;
  max-height: 90px;
  cursor: pointer;
`;
