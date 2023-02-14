import { TransactionItem } from '../TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  HeaderElem,
  TableBody,
} from './TransactionHistory.styled.jsx';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHeader>
        <tr>
          <HeaderElem>Type</HeaderElem>
          <HeaderElem>Amount</HeaderElem>
          <HeaderElem>Currency</HeaderElem>
        </tr>
      </TableHeader>
      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
