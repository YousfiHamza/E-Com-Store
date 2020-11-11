import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionPage from "./collectionPage.component";
import { isCollectionsLoaded } from "../../redux/shop/shop.selector";

// the state needs to have the same name as the ones WITHSPINNER is waiting for.
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !isCollectionsLoaded(state),
});

// the container renders nothing, it just passes the props !
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
