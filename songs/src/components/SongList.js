import { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className=" content">{song.title}</div>
          <b>
            {song.title === this.props.favoriteTitle.favorite && "Favorite!"}
          </b>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// mapStateToProps
// As the first argument passed in to connect, mapStateToProps
// is used for selecting the part of the data from the store that the connected component needs.
//  It's frequently referred to as just mapState for short.
// It is called every time the store state changes.
const mapStateToProps = (state) => {
  return { songs: state.songs, favoriteTitle: state.favorite };
};

// Connect
// The connect() function connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs
// from the store, and the functions it can use to dispatch actions to the store.
export default connect(mapStateToProps, { selectSong })(SongList);
