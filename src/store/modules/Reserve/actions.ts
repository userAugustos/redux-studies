import { tripProps } from "../../../utils/TripInterfaces";

export const ReqReserveDetails = (id: tripProps["id"]) => {
  return {
    type: "REQ_RESERVE", //type
    id, //payload
  };
};

export const AddReserve = (trip: tripProps) => {
  return {
    type: "ADD_RESERVE",
    trip,
  };
};

export const ReqRemoveReserve = (ReversiveID: any) => {
  const id = parseInt(ReversiveID);
  return {
    type: "DELETE_RESERVE",
    id,
  };
};

export const RemoveReserve = (ReversiveID: any) => {
  const id = parseInt(ReversiveID);
  return {
    type: "DELETE_RESERVE",
    id,
  };
};

export const ReqUpdateAmountReserve = (
  id: tripProps["id"],
  amount: tripProps["amount"]
) => {
  return {
    type: "REQ_UPDATE_AMOUNT",
    id,
    amount,
  };
};

export const updateAmountReserve = (
  id: tripProps["id"],
  amount: tripProps["amount"]
) => {
  return {
    type: "UPDATE_AMOUNT",
    id,
    amount,
  };
};
