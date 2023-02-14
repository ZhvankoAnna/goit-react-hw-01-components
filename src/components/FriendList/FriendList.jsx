import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendsList } from './friendList.styled.jsx';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      <FriendListItem friends={friends} />
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
