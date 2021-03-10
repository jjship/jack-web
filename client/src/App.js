import './Styles/style.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home } from './Home/Home';
// import { About } from './About/About';
// import { Age } from './Age/Age';
// import { Contact } from './home/Home';
// import { Faq } from './Faq/Faq';
// import { Privacy } from './Privacy/Privacy';
// import { Prizes } from './Prizes/Prizes';
// import { Regulations } from './Regulations/Regulations';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/about" component={About} />
        <Route path="/age" component={Age} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/prizes" component={Prizes} />
        <Route path="/regulations" component={Regulations} /> */}
      </Switch>
    </main>
  );
}

export default App;
