import React from "react";
import { useSelector } from "react-redux";
import { Container, Image, ReservesDiv } from "./styles";
import { useHistory } from "react-router";

import Logo from "../../assets/logo.svg";

const Header = () => {
  const reserveQtd = useSelector((state: any) => state.Reserve);

  const history = useHistory();

  const handleGoHome = () => {
    history.push("/");
  };

  const handleGoReserves = () => {
    reserveQtd.length !== 0 && history.push("/reservas");
  };

  return (
    <Container>
      <div onClick={handleGoHome}>
        <Image src={Logo} alt="Nossa Logo" />
      </div>
      <ReservesDiv>
        <section>
          <strong onClick={handleGoReserves}>
            {reserveQtd.length === 0
              ? `Nenhuma Reserva`
              : `${reserveQtd.length} Reservas`}
          </strong>
        </section>
      </ReservesDiv>
    </Container>
  );
};

export default Header;
