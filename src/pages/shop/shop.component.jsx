import React from "react";
import { Route } from "react-router-dom";
import WithSpinner from "../../components/with-spinner/with-spinner.components";
import CollectionsOverview from "../../components/collections-overviews/collections-overviews.component";
import CollectionPage from "../collection/collection.component";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class Shop extends React.Component {
  state = {
    loading: true
  };

  componentDidMount(): void {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then (snapShot => {
      const transform = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(transform);
      this.setState({ loading: false });
    })

  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(Shop);
