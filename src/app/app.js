import * as React from 'react';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainGalery from './main-galery/main-galery';
import Albums from './album-galery/albums';
import Photo from './photo-galery/photo';

const PHOTO_LIPRARY_URL = 'https://jsonplaceholder.typicode.com/photos';
const PHOTO_LIMIT = 300;

export default class App extends Component {
  state = {
    galery: {}
  }

  sortedAlbumsGalery = (dertyGalery = []) => {
    if (dertyGalery.length) {
      let sortedGalery = {};

      dertyGalery.forEach((photo, i) => {
        if (i < PHOTO_LIMIT) {
          if (!sortedGalery.hasOwnProperty(photo.albumId)) {
            sortedGalery[photo.albumId] = [];
          }
          sortedGalery[photo.albumId].push(photo);
        }
      });

      return sortedGalery;
    }
  }

  componentDidMount() {
    fetch(PHOTO_LIPRARY_URL)
      .then(response => response.json())
      .then(json => this.setState({galery: this.sortedAlbumsGalery(json)}))
      .catch((err) => console.log('Response Error', err));
  }

  render() {
    return (
      <Router>
          <header className="header">
            <Link className="header__button" to="/">Home</Link>
          </header>

        <Switch>
          <Route exact path="/">
            <MainGalery galery={this.state.galery}/>
          </Route>
          <Route path="/album/:id">
            <Albums galery={this.state.galery}/>
          </Route>
        </Switch>

        <Route path="/photo/:id">
          <Photo galery={this.state.galery}/>
        </Route>
      </Router>
    );
  }
}