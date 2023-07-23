
import PropTypes from 'prop-types';

import css from './Button.module.css'
const Button = ({ images, getMoreImages }) => {
    if (images.length>0 ) return (
        <><button
            className={css.Button}
            type="button"
            onClick={getMoreImages}>
            Load more
        </button></>
    )
}

Button.propTypes = {
   images: PropTypes.arrayOf(PropTypes.shape(PropTypes.object.isRequired)).isRequired,

   getMoreImages: PropTypes.func.isRequired
   
}
export default Button