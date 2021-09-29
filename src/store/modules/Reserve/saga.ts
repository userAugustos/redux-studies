import { tripProps } from "../../../utils/TripInterfaces";
import api from "../../../services/api";
import { select, call, put, all, takeLatest } from "redux-saga/effects";

import { AddReserve, updateAmountReserve } from "./actions";

function* ReqReserveDetails({ id }: tripProps): any {
  const TripExist = yield select((state) =>
    state.Reserve.find((trip: any) => trip.id === id)
  );

  const myStock = yield call(api.get, `stock/${id}`);

  const currentStock = TripExist ? TripExist.amount : 0;

  if (currentStock < myStock.data.amount) {
    if (TripExist) {
      let amount = TripExist.amount + 1;
      return yield put(updateAmountReserve(id, amount));
    }

    const response = yield call(api.get, `trips/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(AddReserve(data));
  } else {
    return alert("Este é o limite de Viagens disponivel!");
  }
}

function* ReqUpdateAmount({ id, amount }: tripProps): any {
  if (amount <= 0) return;

  const myStock = yield call(api.get, `stock/${id}`);

  if (amount <= myStock.data.amount) {
    return yield put(updateAmountReserve(id, amount));
  }
}

export default all([
  takeLatest("REQ_RESERVE", ReqReserveDetails),
  takeLatest("REQ_UPDATE_AMOUNT", ReqUpdateAmount),
]);
