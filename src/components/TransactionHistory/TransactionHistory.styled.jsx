import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin: 40px auto;
  border: 1px solid #ffffff;
  border-collapse: collapse;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  text-align: center;
`;

export const TableHeader = styled.thead`
  background-color: deepskyblue;
`;

export const HeaderElem = styled.th`
  width: calc(100% / 3);
  padding: 12px;
  border: 1px solid #ffffff;

  color: #ffffff;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  width: 100%;
  border: 1px solid #f4f2f2;

  background-color: #ffffff;
`;
