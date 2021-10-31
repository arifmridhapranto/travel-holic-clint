import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Plans from "./components/Plans/Plans";
import SinglePlan from "./components/SinglePlan/SinglePlan";
import AuthProvider from "./contextApi/AuthProvider";
import AboutUs from "./pages/AboutUs";

import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PlanPost from "./pages/PlanPost";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyBooking from "./pages/MyBooking";
import ManageOrders from "./pages/ManageOrders";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path='/home'>
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path='/about'>
              <Header></Header>
              <AboutUs></AboutUs>
              <Footer></Footer>
            </Route>
            <Route exact path='/contact'>
              <Header></Header>
              <ContactUs></ContactUs>
              <Footer></Footer>
            </Route>
            <PrivateRoute exact path='/addplan'>
              <Header></Header>
              <PlanPost></PlanPost>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path='/plans'>
              <Header></Header>
              <Plans></Plans>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path='/singleplan/:id'>
              <Header></Header>
              <SinglePlan></SinglePlan>
              <Footer></Footer>
            </PrivateRoute>
            <Route exact path='/login'>
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <PrivateRoute exact path='/mybookings'>
              <Header></Header>
              <MyBooking></MyBooking>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path='/manageorders'>
              <Header></Header>
              <ManageOrders></ManageOrders>
              <Footer></Footer>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
