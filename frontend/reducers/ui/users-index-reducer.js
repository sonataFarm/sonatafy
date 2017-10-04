import { RECEIVE_USERS_INDEX_ITEMS } from '../../actions/user-actions';
import { REMOVE_CURRENT_USER } from '../../actions/session-actions';

const _empty = {
  items: [],
  allUsersLoaded: false
};

const UsersIndexReducer = (state = _empty, action) => {
  switch (action.type) {

    case RECEIVE_USERS_INDEX_ITEMS:
      const { users } = action.payload;
      const userIDs = Object.keys(users).map(id => parseInt(id));

      if (!userIDs[0]) {
        return {
          ...state,
          allUsersLoaded: true
        };
      }

      const playlistIDs = Object.keys(action.payload.playlists)
        .map(id => parseInt(id));

      const usersIndexItems = userIDs.map(
        userID => (
          [
            userID,
            playlistIDs.filter(
              playlistID => users[userID].playlists.includes(playlistID)
            )
          ]
        )
      );
      return {
        ...state,
        items: [
          ...state.items,
          ...usersIndexItems
        ]
      };

    case REMOVE_CURRENT_USER:
      return _empty;

    default:
      return state;
  }
}

export default UsersIndexReducer;
