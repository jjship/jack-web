import './Styles/style.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home/Home';
import { About } from './About/About';
// import { Age } from './Age/Age';
import { Contact } from './Contact/Contact';
import { Faq } from './Faq/Faq';
// import { Privacy } from './Privacy/Privacy';
import { Prizes } from './Prizes/Prizes';
// import { Regulations } from './Regulations/Regulations';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/age" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Route path="/privacy" component={Home} />
        <Route path="/prizes" component={Prizes} />
        <Route path="/regulations" component={Home} />
      </Switch>
    </main>
  );
}

export default App;
