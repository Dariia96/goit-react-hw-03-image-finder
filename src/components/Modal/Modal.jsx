import css from './Modal.module.css';
import PropTypes from 'prop-types';

import * as basicLightbox from 'basiclightbox'

import 'basiclightbox/dist/basicLightbox.min.css'

const Modal = ({  largeImageURL }) => {
  
  
    const instance = basicLightbox.create(`
    <div className=${css.Overlay}>
    <div className=${css.Modal}>
    <img src="${largeImageURL}" alt="" styles={{"width" : "800px", "height" : "600px" }}/>
    </div>
    </div>
`)
  instance.show()
 /* if ((showModal=true)) { instance.show() }
 if ((showModal=false)) { instance.show() }*/
       
}

Modal.propTypes = {
    largeImageURL : PropTypes.string.isRequired,
}
export default Modal