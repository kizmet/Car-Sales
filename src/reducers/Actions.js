export const ADD_FEATURE = "ADD_FEATURE";
export const LOAD_FEATURES = "LOAD_FEATURES";
export const REMOVE_FEATURES = "REMOVE_FEATURES";

export const loadFeatures = (features, dispatch) => {
  dispatch({
    type: LOAD_FEATURES,
    payload: features
  });
};

export const addFeature = item => dispatch => {
  dispatch({
    type: ADD_FEATURE,
    payload: item
  });
};

export const removeFeature = item => dispatch => {
  dispatch({
    type: REMOVE_FEATURES,
    payload: item
  });
};
