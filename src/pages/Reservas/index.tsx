import React from "react";
import { MdDeleteForever, MdRemoveCircle, MdAddCircle } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Container, ReserveCard, Button } from "./styles";
import { tripProps } from "../../utils/TripInterfaces";
import {
  RemoveReserve,
  ReqUpdateAmountReserve,
} from "../../store/modules/Reserve/actions";

export const Reservas = () => {
  const dispatch = useDispatch();
  const reserves = useSelector((state: any) => state.Reserve);

  const handleDeleteReserve = (e: any) => {
    if (e?.currentTarget?.id) {
      dispatch(RemoveReserve(e?.currentTarget?.id));
    }
  };

  const handleDecrementAmount = (reserve: any) => {
    if (reserve.amount <= 0) {
      return;
    }
    dispatch(ReqUpdateAmountReserve(reserve.id, reserve.amount - 1));
  };

  const handleAddAmount = (reserve: any) => {
    dispatch(ReqUpdateAmountReserve(reserve.id, reserve.amount + 1));
  };

  return (
    <Container>
      <h3>Você solicitou {reserves.lenght} Reserva</h3>
      {reserves.map((reserve: tripProps) => (
        <ReserveCard key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <div>
            <MdRemoveCircle onClick={() => handleDecrementAmount(reserve)} />
            <p>Quantidade: {reserve.amount}</p>
            <MdAddCircle onClick={() => handleAddAmount(reserve)} />
          </div>
          <button
            id={`${reserve.id}`}
            onClick={() => handleDeleteReserve(reserve)}
          >
            <MdDeleteForever size="25px" />
          </button>
        </ReserveCard>
      ))}
      <Button>Reservar</Button>
    </Container>
  );
};
