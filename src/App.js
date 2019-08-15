import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addFeature, removeFeature } from "./reducers/Actions";
const App = props => {
  const removeFeature = item => {
    props.removeFeature(item);
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    props.addFeature(item);
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  car: state.CarReducer.car,
  store: state.CarReducer.store,
  additionalPrice: state.CarReducer.additionalPrice
});

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
