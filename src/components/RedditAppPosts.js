import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RedditAppPosts extends Component {
  render() {
    return (
      <ol>
        {this.props.posts.map((post, i) => <p key={i} className='text-danger'><li>{post.title}</li></p>)}
      </ol>
    )
  }
}

RedditAppPosts.propTypes = {
  posts: PropTypes.array.isRequired
}
