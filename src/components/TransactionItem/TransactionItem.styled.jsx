import styled from 'styled-components';

export const TableItem = styled.tr`
  color: #7a7878;

  :nth-child(2n) {
    width: 100%;

    background-color: #f4f2f2;
  }
`;

export const BodyElem = styled.td`
  padding: 8px 36px;
  border: 1px solid #f4f2f2;

  font-size: 14px;

  :first-child {
    text-align: left;
  }
`;
