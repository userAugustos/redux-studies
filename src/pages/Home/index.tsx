import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { ReqReserveDetails } from "../../store/modules/Reserve/actions";
import { tripProps } from "../../utils/TripInterfaces";

import { Container, TripLi, Button } from "./styles";

export const Home = () => {
  const dispatch = useDispatch();

  const [trips, setTrips] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadTrips = async () => {
    const response = await api.get("trips");
    setTrips(response.data);

    setIsLoading(false);
  };

  const handleBookTrip = (id: tripProps["id"]) => {
    dispatch(ReqReserveDetails(id));
  };

  useEffect(() => {
    loadTrips();
  }, []);

  return (
    <Container>
      {!isLoading && (
        <ul>
          {trips.map((trip: tripProps) => (
            <TripLi key={trip.id} canBuy={trip.status}>
              <img src={trip.image} alt="Foto do Destino" />
              <section>
                <h5>{trip.title}</h5>
                <span>{trip.status ? "Disponivel" : "Indisponivel"}</span>
                <Button
                  canBuy={trip.status}
                  onClick={() => handleBookTrip(trip.id)}
                >
                  Reservar
                </Button>
              </section>
            </TripLi>
          ))}
        </ul>
      )}
    </Container>
  );
};
