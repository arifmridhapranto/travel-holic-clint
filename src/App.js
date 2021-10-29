import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className='App'>
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
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
