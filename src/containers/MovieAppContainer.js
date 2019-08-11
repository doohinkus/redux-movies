import { connect } from 'react-redux';
import { 
  fetchMoviesByCompany, 
  fetchMoviesByKeyword, 
  filterMoviesByRating, 
} from '../redux/movieDuck';
//importing this way prevents this file from having lots of component imports
import MovieApp from '../components/MovieApp';

function mapStateToProps(state){
  return {
    data: state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchMoviesByCompany: (company) => dispatch(fetchMoviesByCompany(company)),
    fetchMoviesByKeyword: (keyword) => dispatch(fetchMoviesByKeyword(keyword)),
    filterMoviesByRating: (rating) => dispatch(filterMoviesByRating(rating)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieApp);