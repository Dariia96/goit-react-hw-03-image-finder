import axios from "axios";


axios.defaults.baseURL = 'https://pixabay.com/api/'

/*export const getAllUsers = async () => {
	const { data } = await axios('hits')
	return data
}*/

export const getImagesBySearch = async (query, page=1) => {
    const { data } = await axios(`?q=${query}&page=${page}&key=36867426-6bfbd52b6dcfdc96ad83106d5&image_type=photo&orientation=horizontal&per_page=12`)
    console.log(data)
	return data
}