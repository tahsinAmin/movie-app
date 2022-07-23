import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/movie/:imdbID' component={MovieDetail}/>
          <Route component={PageNotFound}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

// Movie Detail design remaining 30:00 (2)
// Movie Carousal, searchbar design remaning 03:00 (3)
// continue from 24:58 (3)

