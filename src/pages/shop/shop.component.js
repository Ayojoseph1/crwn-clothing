import React from "react";
import { Route } from "react-router-dom";
import {connect} from 'react-redux';
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import CollectionPage from "../collection/collection.component";
import  {updateCollections}  from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils"; 


class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

     this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        console.log(this.props);
      }
    ); 
  }

  render() {
    const { match } = this.props;
    console.log(this.props);
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={PreviewCollection} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);

