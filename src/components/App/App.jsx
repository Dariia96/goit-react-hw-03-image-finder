import  { Component } from "react";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { getImagesBySearch } from "Api/api";
import Button from "../Button/Button";
import Loader from "../Loader";
import Modal from "../Modal/Modal";
import css from './App.module.css'



class App extends Component {
  
  state = {
    images: [],
    totalHits: '',
    search: '',
    error: "",
    page: 1,
    isLoading: false,
    modalURL: "",
    showModal: false, 
  }
  
  handleSearch = (word) => {
    this.setState({
      search: word,
      page: 1,
      images: [],
      error: "",
      showModal: false,
      modalURL: "",
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search || prevState.page !== this.state.page) {
      this.apiImages()
    }
	}

  apiImages = async () => {
     this.setState({ isLoading: true });
		try {
			
			const data = await getImagesBySearch (this.state.search, this.state.page )
      this.setState({
        images: this.state.images.concat(data.hits),
        totalHits: data.totalHits
      })
			
		} catch (error) {
			this.setState({
				error: error.message,
				
      }) 
			console.log(error.message)
    }
    finally{this.setState({ isLoading: false});}
      
  }
  getMoreImages = () => {
    this.setState({
    page: this.state.page + 1,
    showModal: false, })
  }
  
  showModal = (data) => {
     this.setState({ modalURL: data, showModal: true }) 
    /*if (e.target.nodeName !== 'IMG') {
     this.setState({  showModal: false })
    return
    }*/
  }
   
  render() {
    return (
      <>
      <div className={css.App}>
     <Searchbar
          handleSearch={this.handleSearch} />
        <ImageGallery hits={this.state.images}
          showModal={this.showModal}
          
        />
          {(this.state.images.length < this.state.totalHits && !this.state.isLoading) &&
            (<Button getMoreImages={this.getMoreImages}
            images={this.state.images} />)}
        <Loader
          isLoading={this.state.isLoading} />
        {this.state.showModal && (
          <Modal largeImageURL={this.state.modalURL}/>) }
        </div>
      </>
    )
  
  }
}

export default App


