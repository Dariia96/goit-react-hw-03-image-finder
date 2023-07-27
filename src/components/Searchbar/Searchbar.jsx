import React from "react";
import css from './Searchbar.module.css'

import  { Component } from "react";

class Searchbar extends Component {
  state = {
    searchWord: '',
  }

  handleChangeWord = (e) => {
		this.setState({
			searchWord: e.target.value.trim(),
		})
    }
    handleSubmit = (e) => {
        e.preventDefault()
		const word = this.state.searchWord
		
		

		this.props.handleSearch(word)
		this.setState({
		searchWord: ''
	    })
       
	}



  render() {
    return (<><header className="searchbar">
        <form className={css.SearchForm }
        onSubmit={this.handleSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChangeWord}
                
    />
  </form>
</header>
    </>
        
    )}
   
}


export default Searchbar