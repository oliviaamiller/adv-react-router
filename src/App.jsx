import { Route, Switch } from 'react-router-dom';
import ArtList from './views/Art/List';
import ArtDetails from './views/Art/Details';

export default function App() {
  return (
    <Switch>
      <Route path="/" >
        <ArtList />
      </Route>
      <Route path="/art/:id">
        <ArtDetails />
      </Route>
    </Switch>
  )
}
