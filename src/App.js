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
	  document.body.classList.add('open');
	  this.setState({ showPopup: true });
  }

  handleOnClose() {
	document.body.classList.remove('open');
    this.setState({ showPopup: false });
  }

  render() {
	var self = this;
    var list = _.map(this.state.movies, function (movie, i) {
	var imgLink = 'img/no-image.jpg';
	return (<li key={"movie-" + i} className="Movie-items">
	  <figure className="Movie-items-img">
	  { movie.Poster === "N/A" ? <img src={imgLink}></img> : <img src={movie.Poster}></img> }
   	  </figure>
      <h3 className="Movie-items-title">{movie.Title}</h3>
      <p className="Movie-items-text">{movie.Year}
        <button onClick={e => self.handleOnClick(movie.imdbID)} >MORE INFO</button>
      </p>
      </li>);
    });

    var popupClassName = "";
    if (this.state.showPopup) {
      popupClassName = "show";
    }

	var thisMovie = this.state.content;
	if(thisMovie.Poster === "N/A"){
		var imgLink = 'img/no-image.jpg';
	} else {
		var imgLink = thisMovie.Poster;
	}
    return (
      <div className="App">
        <header className="App-header">
			<h1>MARVEL ARCHIVES</h1>
        </header>
        <section>
          <ul className="Movie">
	          {list}
		  </ul>
        </section>
        <div id="PopUp" className={popupClassName}>
			<div className="PopUp-wrapper">
				<button onClick={this.handleOnClose}>close</button>
				<div className="PopUp-inner">
					<figure className="PopUp-inner-img">
					<img src={imgLink}></img>
					</figure>
					<div className="PopUp-inner-details">
						<h3>{thisMovie.Title}</h3>
						<dl>
							<dt>Year</dt>
							<dd>{thisMovie.Year}</dd>
							<dt>Actors</dt>
							<dd>{thisMovie.Actors}</dd>
							<dt>Type</dt>
							<dd>{thisMovie.Type}</dd>
						</dl>
					</div>
				</div>
			</div>
        </div>
      </div>
    );
  }
}

export default App;
