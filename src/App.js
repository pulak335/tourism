import { BrowserRouter,Switch,Route } from 'react-router-dom';

import './App.css';

import ContextApi from './Context/ContextApi';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Addservice from './Pages/ManageSerives/Addservices';
import ManageServies from './Pages/ManageSerives/ManageSerives';
import Register from './Pages/Register/Register';
import Travel from './Pages/Travel/Travel';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <ContextApi>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route> 
          <Route exact path='/home'>
            <Home></Home>
          </Route> 
          <Route exact path='/travel'>
            <Travel></Travel>
          </Route> 
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route> 
          <PrivateRoute path='/booking'>
            <Booking></Booking>
          </PrivateRoute> 
          <Route exact path='/login'>
            <Login></Login>
          </Route> 
          <Route exact path='/register'>
            <Register></Register>
          </Route> 
          <Route exact path='/manageservice'>
            <ManageServies></ManageServies>
          </Route> 
          <Route exact path='/addservice'>
            <Addservice></Addservice>
          </Route> 
          <Route  path='*'>
            
          </Route> 
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </ContextApi>
  );
}

export default App;
