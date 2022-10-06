import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle, RouteWithSubRoutes } from "shared/components";
import NavBar from "../NavBar";
import routes from "../../routes";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar>CINEFLIX</NavBar>
      <Routes>
        {routes.map((route, i) => (
          <Route Key={i} path={route.path} element={route.component}/>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
