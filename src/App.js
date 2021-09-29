import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import TopNav from "./components/TopNav.jsx";
import Home from "./views/Home.jsx";
function App() {
  return (
    <Router>
      <TopNav />
      <Route>
        <Route
          render={(routerProps) => <Home {...routerProps} />}
          path="/"
          exact
        />
      </Route>
    </Router>
  );
}

export default App;
