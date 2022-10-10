import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { GlobalStyle } from "shared/components";
import NavBar from "../NavBar";
import routes from "../../routes";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Link to="/">
        <NavBar/>
      </Link>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
