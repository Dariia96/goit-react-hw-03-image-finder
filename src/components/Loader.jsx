
import { ThreeDots} from 'react-loader-spinner'
import PropTypes from 'prop-types';
const Loader = ({ isLoading }) => {
    if (isLoading ) return (
        <>
           <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
        </>
    )
}
Loader.propTypes = {
      isLoading : PropTypes.bool.isRequired
   
}

export default Loader