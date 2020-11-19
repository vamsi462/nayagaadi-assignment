import "./App.css";
import { Link, BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import VehiclesPage from "./components/Home/VehiclesPage";
import Login from "./components/Login/Login";
import {useDispatch } from "react-redux";
import { useEffect } from "react";
import{history} from './helpers'
import {alertActions} from './actions'
import { PrivateRoute } from "./components/PrivateRoute";
import {Register} from "./components/Register";


function App() {

    const dispatch = useDispatch();
     useEffect(() => {
       history.listen((location, action) => {
         // clear alert on location change
         dispatch(alertActions.clear());
       });
     }, []);
  return (
    
    <Router history = {history}>
      <div className='App'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home <span className='sr-only'>(current)</span>
                </Link>
              </li>
            </ul>
            <ul className='navbar-nav'>
              <li className='nav-item ml-auto'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Switch>
        <PrivateRoute exact path='/' component={VehiclesPage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
}

export default App;
