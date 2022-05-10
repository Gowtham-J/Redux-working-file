import { combineReducers } from "redux";

// Reducers
// A reducer is a pure function that
// takes an action and the previous state of the application and returns the new state.

const songReducer = () => {
  return [
    { title: "Watermelon Sugar", duration: "2:50" },
    { title: "As it was", duration: "3:00" },
    { title: "No time die", duration: "3:30" },
    { title: "Two moons", duration: "2:00" },
    { title: "Sun flower", duration: "1:50" },
  ];
};

const favoriteSong = () => {
  return {
    favorite: "As it was",
  };
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectSongReducer,
  favorite: favoriteSong,
});
// CombineReducers
// The combineReducers helper function turns an object whose values are different
// reducing functions into a single reducing function you can pass to createStore .
