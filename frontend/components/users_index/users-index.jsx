import React from 'react';
import LoadingIcon from '../shared/loading';
import UsersIndexList from './users-index-list';
import { LOADING_THROTTLE_DURATION } from '../../actions/loading-actions';

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLoadComplete: false
    }

    this.trackScrolling = this.trackScrolling.bind(this);
    this.completeInitialLoad = this.completeInitialLoad.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items.length > this.props.items.length) {
      setTimeout(LOADING_THROTTLE_DURATION);
    }
  }

  componentWillMount() {
    this.props.fetchUsersIndexItems();

    setTimeout(this.completeInitialLoad, LOADING_THROTTLE_DURATION + 1000);
  }

  completeInitialLoad() {
    this.setState({ initialLoadComplete: true });
    $('#users-index-container').scroll(this.trackScrolling);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling)
  }

  trackScrolling() {
    const scrollContainer = document.getElementById('users-index-container');
    if (this.isBottom(scrollContainer)) {
      this.handleScrollToBottom.bind(this)()
    }
  }

  handleScrollToBottom() {
    if (!this.props.loading && !this.props.allUsersLoaded) {
      this.props.fetchUsersIndexItems();
    }
  }

  isBottom(el) {
    return $(el).scrollTop() + $(el).innerHeight() >= el.scrollHeight * 0.99;
  }

  render() {
    if (!this.state.initialLoadComplete) {
      return <LoadingIcon />;
    }

    const { loading, items } = this.props;

    const body = items[0] ? <UsersIndexList items={items} /> : null;
    const loadingIcon = loading ? <div className="loading-container"><LoadingIcon /></div> : null;

    return (
      <div
        id="users-index-container"
        className="users-index-container scroll-wrapper scrollbar">
        { body }
        { loadingIcon }
      </div>
    );
  }
}

export default UsersIndex;
