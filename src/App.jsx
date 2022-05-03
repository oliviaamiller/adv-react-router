import { Route, Switch } from 'react-router-dom';
import ArtList from './views/Art/List';
import ArtDetails from './views/Art/Details';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ArtList />
        </Route>
        <Route path="/art/:id">
          <ArtDetails />
        </Route>
      </Switch>
    </Router>
  );
}
