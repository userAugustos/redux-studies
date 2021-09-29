//criando um reducer
import produce from "immer";

export default function Reserve(state = [], action: any) {
  switch (action.type) {
    case "ADD_RESERVE":
      return produce(state, (draft: any) => {
        draft.push(action.trip);
      });

    case "DELETE_RESERVE":
      return produce(state, (draft: any) => {
        const tripIndex = draft.findIndex((trip: any) => trip.id === action.id);

        tripIndex >= 0 && draft.splice(tripIndex, 1);
      });

    case "UPDATE_AMOUNT":
      return produce(state, (draft: any) => {
        const tripIndex = draft.findIndex((trip: any) => trip.id === action.id);

        tripIndex >= 0 && (draft[tripIndex].amount = Number(action.amount));
      });

    default:
      return state;
  }
}
