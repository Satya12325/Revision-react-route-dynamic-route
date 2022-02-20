import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import NotExit from "../Components/NotExist";
import ProductDetails from "../Components/ProductDetails";
export default function AllpageRouts() {
  return (
    <div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/home/:id">
          <ProductDetails />
        </Route>
        <Route>
          <NotExit />
        </Route>
      </Switch>
    </div>
  );
}
