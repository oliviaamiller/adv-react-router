import { Route, Switch } from 'react-router-dom';
import ArtList from './views/Art/List';

export default function App() {
  return (
    <Switch>
      <Route path="/" >
        <ArtList />
      </Route>
    </Switch>
  )
}
