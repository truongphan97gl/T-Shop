import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectIsCollectionsFetching} from "../../redux/shop/shop.selectors";
import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner.components";
import CollectionsOverview from "./collections-overviews.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionsOverviewsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewsContainer
