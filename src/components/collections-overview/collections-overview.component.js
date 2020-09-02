import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import  PreviewCollection from '../preview-collection/preview-collection.component'

import './collections-overview.styles.scss'
import { selectCollectionsForPeview } from '../../redux/shop/shop.selector'

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
         {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPeview
})

export default connect(mapStateToProps)(CollectionsOverview)
