import React from 'react';
import axios from 'axios';
import _ from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      content: {},
      showPopup: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  componentDidMount() {
    var self = this;
    axios
      .get("http://www.omdbapi.com/?i=tt3896198&apikey=81f5bea7&s=marvel")
      .then((response) => {
        self.setState({ movies: response.data.Search })
      }).catch(function (err) { console.error(err); });
  }

  handleOnClick(imdbID) {
    var self = this;
    var url = "http://www.omdbapi.com/?apikey=81f5bea7&i=" + imdbID;
    axios
      .get(url)
      .then(function (response) {
        self.setState({ content: response.data })
      })
    this.setState({ showPopup: true });
  }

  handleOnClose() {
    this.setState({ showPopup: false });
  }

  render() {
    var self = this;
    var list = _.map(this.state.movies, function (movie, i) {
      return (<div key={"movie-" + i}>
      <h3>{movie.Title} [{movie.imdbID}]</h3>
      <p>
        <span>{movie.Year}</span>
        <button onClick={e => self.handleOnClick(movie.imdbID)} >Test</button>
      </p>
      </div>);
    });

    var popupClassName = "";
    if (this.state.showPopup) {
      popupClassName = "show";
    }

    var thisMovie = this.state.content;
    return (
      <div className="App">
        <header className="App-header">
          {list}
        </header>
        <div id="PopUp" className={popupClassName}>
        <button onClick={this.handleOnClose}>close</button>
          <h3>{thisMovie.Title}</h3>
          <div>
            <span>Actors</span>
            <span>{thisMovie.Actors}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
