import styled from 'styled-components';

export const FreeShipContainer = styled.div`
  width: 400px;
  background-color: rgba(20, 20, 20, 0.8);
  border-radius: 6px;
  margin: 5px 0 5px 30px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ShipLogoContainer = styled.div`
  width: 40px;
  /* background-color: rgba(100, 100, 100, 0.3); */
  display: flex;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
export const FreeShipText = styled.div`
  width: 100px;
  /* background-color: rgba(100, 100, 100, 0.3); */

  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    color: #adffa2;
    font-weight: bold;
    font-size: large;
  }
  span:last-child {
    color: #adffa2;
    font-weight: bold;
  }
`;
export const CountDownContainer = styled.div``;
