import { BrowserRouter, Switch, Route } from "react-router-dom";
// import AboutMe from "../src/pages/AboutMe/AboutMe";
import Calculator from "../src/pages/Calculator/Calculator";
import AboutMeDisplay from "./pages/Calculator/AboutMeDisplay";
import MyStackDisplay from "./pages/Calculator/MyStackDisplay";
import PortfolioDisplay from "./pages/Calculator/PortfolioDisplay";
import ContactsDisplay from "./pages/Calculator/ContactsDisplay";
import CuriositiesDisplay from "./pages/Calculator/CuriositiesDisplay";
import ChatDisplay from "./pages/Calculator/ChatDisplay";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/aboutMe" component={AboutMe} /> */}
          <Route path="/calculator" component={Calculator} />
          <Route path="/aboutmedisplay" component={AboutMeDisplay} />
          <Route path="/mystackdisplay" component={MyStackDisplay} />
          <Route path="/portfoliodisplay" component={PortfolioDisplay} />
          <Route path="/contactsdisplay" component={ContactsDisplay} />
          <Route path="/curiositiesdisplay" component={CuriositiesDisplay} />
          <Route path="/chatdisplay" component={ChatDisplay} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
