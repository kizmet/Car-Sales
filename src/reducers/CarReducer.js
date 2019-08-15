import { LOAD_FEATURES, ADD_FEATURE, REMOVE_FEATURES } from "./Actions";
import { initialState } from "./initialState";

function CarReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FEATURE:
      const featuresArrayIds = state.car.features.map(f => f.id);
      if (featuresArrayIds.includes(action.payload.id)) {
        return state;
      } else {
        const featuresArray = [...state.car.features, action.payload];
        const priceTotal = featuresArray
          .map(f => f.price)
          .reduce((total, f) => {
            return total + f;
          });
        return {
          ...state,
          car: {
            ...state.car,
            features: featuresArray
          },
          additionalPrice: priceTotal
        };
      }

    case REMOVE_FEATURES:
      const id = action.payload.id;
      const newFeatures = state.car.features.filter(
        feature => feature.id !== id
      );
      let priceTotal;
      if (newFeatures.length > 0) {
        priceTotal = newFeatures
          .map(f => f.price)
          .reduce((total, f) => {
            return total + f;
          });
      } else {
        priceTotal = 0;
      }

      return {
        ...state,
        car: {
          ...state.car,
          features: newFeatures
        },
        additionalPrice: priceTotal
      };
    default:
      return state;
  }
}
export default CarReducer;
