import React from "react";

import SHOP_DATA from "./shop_data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherPropsCollection }) => (
          <CollectionPreview key={id} {...otherPropsCollection} />
        ))}
      </div>
    );
  }
}

export default Shop;
