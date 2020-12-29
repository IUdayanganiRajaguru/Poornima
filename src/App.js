import React from 'react';
import SlideMenu from './Component/SlideMenu';
import HeaderBar from './Component/HeaderBar';
import {makeStyles,CssBaseline,Grid} from '@material-ui/core'
import Medicine from './pages/Medicine/Medicine';
import Drug from './pages/Drug/Drug';
import useTable from './Component/useTable';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Prescription from './pages/prescription/Prescription';
import Profile from './pages/Profile/Profile';
import Record from './pages/Record/Record'
import BottomAppBar from './Component/BottomAppBar';
//import HeaderBar from '../../../../../Downloads/HeaderBar';
import Welcome from './Component/Welcome';
import WelcomePage from './pages/Wel/WelcomePage'
import './App.css'
//import SlideMenu from './Component/SlideMenu'
import Main from './Main'




function App() {

 

  
  return (
   <Router>
     <Main/>
   </Router>
  );
}

export default App;


