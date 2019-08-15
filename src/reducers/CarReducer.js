import { LOAD_FEATURES, ADD_FEATURE, REMOVE_FEATURES } from "./Actions";
import { initialState } from "./initialState";

function CarReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      };
    case REMOVE_FEATURES:
      const id = action.payload.id;
      console.log(id);
      const newFeatures = state.car.features.filter(
        feature => feature.id !== id
      );
      return {
        ...state,
        car: {
          ...state.car,
          features: newFeatures
        }
      };
    default:
      return state;
  }
}
export default CarReducer;
