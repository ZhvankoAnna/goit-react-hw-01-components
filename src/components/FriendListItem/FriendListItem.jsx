import PropTypes from 'prop-types';
import './friend-list-item.css';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => <li key={id} className="item">
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
);
};

FriendListItem.prototype = PropTypes.arrayOf(
  PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })
);
