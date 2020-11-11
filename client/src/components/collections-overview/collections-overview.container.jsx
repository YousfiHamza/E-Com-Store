import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../with-spinner/with-spinner.component";

import CollectionOverView from "./collections-overview.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

// the state needs to have the same name as the ones WITHSPINNER is waiting for.
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// the container renders nothing, it just passes the props !
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverView);

export default CollectionOverviewContainer;
