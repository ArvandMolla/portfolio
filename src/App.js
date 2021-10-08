import "./App.css";
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import TopNav from "./components/TopNav.jsx";
import Footer from "./components/Footer.jsx";
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
      <Footer />
    </Router>
  );
}

export default App;
