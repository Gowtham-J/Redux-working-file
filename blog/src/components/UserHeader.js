import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) return null;

    return <div className="header">{user.name}</div>;
  }
}

// mapStateToProps
// As the first argument passed in to connect, mapStateToProps
// is used for selecting the part of the data from the store that the connected component needs.
//  It's frequently referred to as just mapState for short.
// It is called every time the store state changes.

const mapStateToProps = (state, ownState) => {
  return { user: state.users.find((user) => user.id === ownState.userId) };
};

// Connect
// The connect() function connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs
// from the store, and the functions it can use to dispatch actions to the store.
export default connect(mapStateToProps)(UserHeader);
