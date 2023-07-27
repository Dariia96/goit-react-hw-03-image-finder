import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

import css from "./ImageGallery.module.css"

import React from 'react'

const ImageGallery = ({ hits, showModal}) => {
const openModal = (e) => {
    if (e.target.nodeName === 'IMG') { showModal(e.target.dataset.source)}
    if (e.target.nodeName !== 'IMG') {
    return
    }
  }
  
    if(hits)
        return (<ul className={css.ImageGallery}
           onClick={openModal}>
            {hits.map((hit) => <ImageGalleryItem key={hit.id} hit={hit} />)}
        </ul>)
    
	
}
ImageGallery.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.shape(PropTypes.object.isRequired)).isRequired,

    showModal: PropTypes.func.isRequired
   
}
export default ImageGallery


