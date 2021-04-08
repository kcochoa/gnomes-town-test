import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ListHabitants from "./pages/ListHabitants";
import HabitantDetails from "./pages/HabitantDetails";
import HomePage from "./pages/HomePage";

function App() {
  return (
   <Router>
      <Switch>
      <Route path="/all-habitants" exact>
        <ListHabitants />
      </Route>
      <Route path="/habitant/:id" exact>
        <HabitantDetails />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>

   </Router> 
   
  );
}

export default App;
