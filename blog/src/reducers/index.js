import { combineReducers } from "redux";
import PostReducers from "./PostReducers";
import UserReducer from "./UserReducer";

// Reducers
// A reducer is a pure function that
// takes an action and the previous state of the application and returns the new state.

export default combineReducers({ posts: PostReducers, users: UserReducer });
// CombineReducers
// The combineReducers helper function turns an object whose values are different
// reducing functions into a single reducing function you can pass to createStore .
