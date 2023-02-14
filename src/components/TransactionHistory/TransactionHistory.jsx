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
        <TransactionItem transactions={transactions} />
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
