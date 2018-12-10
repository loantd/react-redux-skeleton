import { lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { getHomeStart, toggleShow } from './actions';
import Home from './../../components/Home';

const mapStateToProps = (state) => {
  return {
    isShow: state.reducerHome.isShow,
    data: state.reducerHome.data
  };
};
const mapDisPatchToProps = (dispatch) => {
  return {
    toggleShow: () => dispatch(toggleShow()),
    getHomeStarts: () => dispatch(getHomeStart())
  };
};
const HomeContainer = compose(
  connect(mapStateToProps, mapDisPatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getHomeStarts();
    }
  }),
)(Home);

export default HomeContainer;
