import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from '../actions/actions'
import { Link } from 'react-router-dom'
import RedditAppSubPicker from '../components/RedditAppSubPicker'
import RedditAppPosts from '../components/RedditAppPosts'

class RedditAppDisplay extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
    this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render() {
    const { selectedSubreddit, posts, isFetching } = this.props
    return (
      <div>
        <header className="header clearfix" align="center">
            <h2 className="text-muted">Reddit App</h2>
        </header>
        <main role="main">
          <div className="jumbotron">
            <h2>Please enter a subreddit name in the input below</h2>
          </div>
          <div>
            <RedditAppSubPicker
              value={selectedSubreddit}
              onChange={this.handleChange}
            />
            <br/><p>
                {!isFetching &&
                  <center><a href="#" onClick={this.handleRefreshClick} className='btn btn-success'>
                    Refresh
                  </a></center>}
            </p>
            {isFetching && posts.legth === 0 && <h2>Loading...</h2>}
            {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
            {posts.length > 0 &&
              <div style={{ opacity: isFetching ? 0.5 : 1}}>
                <RedditAppPosts posts={posts} />
              </div>}
          </div>
          <center><Link to="/" className="btn btn-info"> Go Back Home </Link></center><br/>
        </main>
      </div>
    )
  }
}

RedditAppDisplay.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(RedditAppDisplay)
