// AppContainer.js
import { connect } from 'react-redux';
import {
  activateGeod,
  closeGeod,
} from '.././actions/action';
//import { Login } from '.././components/Login';
import { App } from '.././App';


const mapStateToProps = (state, ownProps) => ({  
  geod: state.geod,
});

const mapDispatchToProps = { 
  activateGeod,
  closeGeod,
};

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;  