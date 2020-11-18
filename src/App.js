import "./App.css";
import { Link, BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import VehiclesPage from "./components/Home/VehiclesPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <Router>
      <div classNameName='App'>
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
        <Route exact path='/' component={VehiclesPage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
}

export default App;
