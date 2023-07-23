import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

import css from "./ImageGallery.module.css"

import React from 'react'

const ImageGallery = ({ hits, showModal }) => {
  
  
    if(hits)
        return (<ul className={css.ImageGallery} onClick={showModal}>{hits.map((hit) => <ImageGalleryItem key={hit.id} hit={hit}  />)}</ul>)
    
	
}
ImageGallery.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.shape(PropTypes.object.isRequired)).isRequired,

    showModal: PropTypes.func.isRequired
   
}
export default ImageGallery


