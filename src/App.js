import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import AboutMe from "../src/pages/AboutMe/AboutMe";
import MyPortfolio from "../src/pages/MyPortfolio/MyPortfolio";
import Contacts from "../src/pages/Contacts/Contacts";
import Calculator from "../src/pages/Calculator/Calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/myportfolio" component={MyPortfolio} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/calculator" component={Calculator} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
