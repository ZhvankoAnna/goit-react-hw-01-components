import { TransactionItem } from '../TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import './transaction-history.css'

export const TransactionHistory = ({transactions}) => {
return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    <TransactionItem transactions={transactions}/>
  </tbody>
</table>
}

TransactionHistory.prototype = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
)