import PropTypes from 'prop-types';
import {
  Container,
  Box,
  Avatar,
  UserName,
  NickName,
  Location,
  List,
  Item,
  Category,
  Quantity,
} from './profile.styled.jsx';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Box>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <NickName>@{tag}</NickName>
        <Location>{location}</Location>
      </Box>

      <List>
        <Item>
          <Category>Followers</Category>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Category>Views</Category>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Category>Likes</Category>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </List>
    </Container>
  );
};

Profile.prototype = PropTypes.shape({
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
});
