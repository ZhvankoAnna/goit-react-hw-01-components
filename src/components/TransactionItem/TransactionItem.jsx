import PropTypes from 'prop-types';
import {TableItem, BodyElem} from './TransactionItem.styled.jsx';

export const TransactionItem = ({transactions}) => {
    return transactions.map(({id,type,amount,currency}) => <TableItem key={id}>
    <BodyElem>{type}</BodyElem>
    <BodyElem>{amount}</BodyElem>
    <BodyElem>{currency}</BodyElem>
  </TableItem>)
}

TransactionItem.prototype = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
)