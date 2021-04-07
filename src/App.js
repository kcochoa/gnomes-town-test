import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchResult from "./pages/SearchResult";
import GnomeDetails from "./pages/GnomeDetails";
import HomePage from "./pages/HomePage";

function App() {
  return (
   <Router>
      <Switch>
      <Route path="/all-gnomes" exact>
        <SearchResult />
      </Route>
      <Route path="/gnome/:id" exact>
        <GnomeDetails />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>

   </Router> 
   
  );
}

export default App;
