import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './page/Header/Header';
import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';
import Footer from './page/Footer/Footer';
import PlaceOrders from './page/PlaceOrders/PlaceOrders';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
import Login from './page/Login/Login';
import MyOrders from './page/MyOrders/MyOrders';
import MangaeAllOrders from './page/ManageAllOrders/MangaeAllOrders';
import AddServices from './page/AddServices/AddServices';
import ReviewComments from './page/ReviewComments/ReviewComments';
import About from './page/About/About';


function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/home">
              <Home></Home>

            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRouter path="/placeOrders/:id">
              <PlaceOrders></PlaceOrders>

            </PrivateRouter>
            <PrivateRouter path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRouter>
            <PrivateRouter path="/manageOrders">
              <MangaeAllOrders></MangaeAllOrders>
            </PrivateRouter>
            <PrivateRouter path="/reviews">
              <ReviewComments></ReviewComments>
            </PrivateRouter>
            <PrivateRouter path="/addServices">
              <AddServices></AddServices>
            </PrivateRouter>
            <Route exact path="/login">
              <Login></Login>

            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );

}

export default App;
