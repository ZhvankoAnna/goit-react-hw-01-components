import PropTypes from 'prop-types';
import './transaction-item.css';

export const TransactionItem = ({transactions}) => {
    return transactions.map(({id,type,amount,currency}) => <tr key={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>)
}

TransactionItem.prototype = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
)