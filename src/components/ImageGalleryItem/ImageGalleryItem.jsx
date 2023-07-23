import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ hit: {  webformatURL,  largeImageURL } }) => {
    return (
        <li  className={css.ImageGalleryItem}  >
        
            <img className={css.ImageGalleryItemImage}  src={webformatURL} alt=""  data-source={largeImageURL} />
        </li>
    )
}


ImageGalleryItem.propTypes = {
    hit: PropTypes.objectOf(PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired
    }).isRequired).isRequired,
    
   
}
export default ImageGalleryItem