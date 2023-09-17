import {
  FreeShipContainer,
  ShipLogoContainer,
  FreeShipText,
  CountDownContainer,
} from './index.styles';
import ShipCartIcon from '../../assets/pics/ship-icon.webp';
import CountDownPng from '../../assets/pics/count-down.png';

export const FreeShipAd = () => {
  return (
    <FreeShipContainer>
      <ShipLogoContainer>
        <img alt="" src={ShipCartIcon} />
      </ShipLogoContainer>
      <FreeShipText>
        <span>Free shipping</span>
        <span>On all orders</span>
      </FreeShipText>
      <CountDownContainer>
        <img alt="" src={CountDownPng} />
      </CountDownContainer>
    </FreeShipContainer>
  );
};
