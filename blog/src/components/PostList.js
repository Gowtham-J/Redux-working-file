import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className=" ui relaxed divided list">{this.renderList()}</div>;
  }
}

// mapStateToProps
// As the first argument passed in to connect, mapStateToProps
// is used for selecting the part of the data from the store that the connected component needs.
//  It's frequently referred to as just mapState for short.
// It is called every time the store state changes.

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

// Connect
// The connect() function connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs
// from the store, and the functions it can use to dispatch actions to the store.
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
