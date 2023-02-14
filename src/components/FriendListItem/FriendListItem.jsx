import PropTypes from 'prop-types';
import { FriendItem, FriendName, Status } from './friendListItem.styled.jsx';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <FriendItem key={id}>
      <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
