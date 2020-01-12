import React from 'react';
import './App.css';
import Nav from './nav';
import About from './about';
import Contact from './contact';
import data from './data';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
     <div className="App">
       <header className="App-header">
           <Nav />
           <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" component={About}/>
              <Route path="/contact/:id" exact component={data}/>
              <Route path="/contact" component={Contact}/>
           </Switch>
       </header>
     </div>
    </Router>
  );
}

const Home = () => (
  <div>
     <h1>Home Page</h1>
  </div>
)

export default App;
