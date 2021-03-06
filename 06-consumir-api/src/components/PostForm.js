import React from "react";

class PostForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="body">Content</label>
          <textarea id="body" />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}

export default PostForm;
