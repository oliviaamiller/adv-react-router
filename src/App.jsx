import { Route, Switch, Redirect, Link } from 'react-router-dom';
import ArtList from './views/Art/List';
import ArtDetails from './views/Art/Details';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/art/:id">
          <Link to="/">{'All Artworks'}</Link>
          <ArtDetails />
        </Route>
        <Route path="/art">
          <ArtList />
        </Route>
        <Route exact path="/">
          <Redirect to="/art" />
        </Route>
      </Switch>
    </Router>
  );
}
