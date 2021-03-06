import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Nav } from "./components";
import { Context } from "./context/Context";
import { Home, Register, Login, Write, Settings, Single } from "./pages";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
