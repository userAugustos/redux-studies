import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 2rem;

  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    margin: 0;
    padding: 0;
  }
`;

export const TripLi = styled.li<any>`
  width: 30%;
  max-width: 450px;
  min-width: 300px;

  margin: 10px auto;
  
  background: #ececec;
  color: #212121;
  
  border-radius: 0.4rem;
  box-shadow: 3px 5px 8px #1e1d1ddb;

  img{
    width: 100%;
    border-radius: 0.4rem;
  }

  section{
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    h5{
      font-size: 1.2rem; 
      font-weight: 500;
    }
    span{
      font-weight: 600;
      color: ${props => props.canBuy ? '#3cc44a' : '#cc4b4b'}
    }
  }
`;

export const Button = styled.button<any>`
  pointer-events: ${props => props.canBuy ? 'all' : 'none'};

  max-width: 80%;
  width: 9rem;
  margin: 1rem auto;
  padding: 1rem;

  background: ${props => props.canBuy ? 'rgba(82, 183, 250, 0.9)' : 'rgba(135, 138, 140, 1)'};

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  box-shadow: 1px 2px 3px #636bdfdb;
  transition: width 0.2s ease-in;

  &:hover{
    width: 10rem;    
  }
`;
