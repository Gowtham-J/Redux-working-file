// Actions
// It carries a payload of information from your application to store. As discussed earlier, actions are plain
// JavaScript object that must have a type attribute to indicate the type of action performed.
export const selectSong = (song) => {
  //  Return an Action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
