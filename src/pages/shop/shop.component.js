import React from "react";
import {Route} from 'react-router-dom'
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) => (
  <div className="shop-page">
   <Route exact path={`${match.path}`} component ={PreviewCollection}/>
   <Route path= {`${match.path}/:collectionId`} component ={CollectionPage}/>
  </div>
);

export default ShopPage;
