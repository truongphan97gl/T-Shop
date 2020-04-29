import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import CollectionsOverviewsContainer from "../../components/collections-overviews/collections-overviews.container";
import CollectionPageContainer from "../collection/collection.container";

class Shop extends React.Component {
  componentDidMount(): void {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewsContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
