import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Book from './pages/Book';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/book/:id" component={Book}/>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
