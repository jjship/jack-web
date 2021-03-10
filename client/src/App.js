import './styles/style.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home } from './home/Home';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </main>
  );
}

export default App;
