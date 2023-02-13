import {FriendListItem} from '../FriendListItem/FriendListItem'
import PropTypes from 'prop-types';
import './friend-list.css';

export const FriendList = ({friends}) => {
  return <ul className="friend-list">
    <FriendListItem friends={friends} />
  </ul>;
};

FriendList.prototype = PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  );