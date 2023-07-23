import React from "react";
import css from './Searchbar.module.css'
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
    return (<><header className="searchbar">
        <form className={css.SearchForm }
        onSubmit={onSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
                
    />
  </form>
</header>
    </>
        
    )
}

Searchbar.propTypes = {
   
   onSubmit : PropTypes.func.isRequired
   
}
export default Searchbar