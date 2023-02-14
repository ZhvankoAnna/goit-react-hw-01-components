import PropTypes from 'prop-types';
import { TableItem, BodyElem } from './TransactionItem.styled.jsx';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableItem>
      <BodyElem>{type}</BodyElem>
      <BodyElem>{amount}</BodyElem>
      <BodyElem>{currency}</BodyElem>
    </TableItem>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
