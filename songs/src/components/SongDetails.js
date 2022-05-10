import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) return <div>Select a song</div>;
  return (
    <div>
      <h1>Details for:</h1>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

// mapStateToProps
// As the first argument passed in to connect, mapStateToProps
// is used for selecting the part of the data from the store that the connected component needs.
//  It's frequently referred to as just mapState for short.
// It is called every time the store state changes.

const mapStateProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

// Connect
// The connect() function connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs
// from the store, and the functions it can use to dispatch actions to the store.
export default connect(mapStateProps)(SongDetail);
