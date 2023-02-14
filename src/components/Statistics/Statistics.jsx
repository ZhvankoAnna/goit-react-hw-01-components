import PropTypes from 'prop-types';
import {
  Container,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './statistics.styled.jsx';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
