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
    search: '',
    error: "",
    page: 1,
    isLoading: false,
    modalURL: "",
    showModal: false 
  }
  handleSearch = (e) => {
    e.preventDefault();
    
    this.setState({ search: e.target[1].value })
    console.log(this.state.search)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.apiImages()
      this.setState({page: 1})
    }
	}

  apiImages = async () => {
     this.setState({ isLoading: true });
		try {
			
			const data = await getImagesBySearch (this.state.search, this.state.page )
      this.setState({ images: this.state.images.concat(data.hits)})
			
		} catch (error) {
			this.setState({
				error: error.message,
				
      }) 
			console.log(error.message)
    }
    finally{this.setState({ isLoading: false});}
      
  }
  getMoreImages = () => {
    this.setState({ page: this.state.page + 1 })
    if (this.state.page > 1) this.apiImages()
 
    console.log(this.state.page)
  }
  showModal = (e) => {
    this.setState({ modalURL: e.target.dataset.source, showModal: true })
    if (e.target.nodeName !== 'IMG') {
    return;
    }
     /*this.setState({  showModal: false })*/
    console.log(e.target.nodeName)
    }
  render() {
    return (
      <>
      <div className={css.App}>
     <Searchbar
          onSubmit={this.handleSearch} />
        <ImageGallery hits={this.state.images}
          showModal={this.showModal}
          
        />
        <Button getMoreImages={this.getMoreImages}
          images={this.state.images} />
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


