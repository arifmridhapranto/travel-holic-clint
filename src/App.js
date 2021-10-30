import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Plans from "./components/Plans/Plans";
import SinglePlan from "./components/SinglePlan/SinglePlan";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PlanPost from "./pages/PlanPost";

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
          <Route exact path='/addplan'>
            <Header></Header>
            <PlanPost></PlanPost>
            <Footer></Footer>
          </Route>
          <Route exact path='/plans'>
            <Header></Header>
            <Plans></Plans>
            <Footer></Footer>
          </Route>
          <Route exact path='/singleplan/:id'>
            <Header></Header>
            <SinglePlan></SinglePlan>
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
