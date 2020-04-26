import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import {CollectionsOverviewsContainer} from "./collections-overviews.styles";

const CollectionsOverview = ({ collections }) => {
  return (
  <CollectionsOverviewsContainer>
    {collections.map(({ id, ...otherPropsCollection }) => (
      <CollectionPreview key={id} {...otherPropsCollection} />
    ))}
  </CollectionsOverviewsContainer>
);}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);
