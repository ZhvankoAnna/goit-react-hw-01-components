import styled from 'styled-components';

export const Container = styled.section`
  width: 480px;
  margin: 40px auto;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  background-color: #fbfbfb;
`;

export const Title = styled.h2`
  padding-top: 18px;
  padding-bottom: 18px;
  text-align: center;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  width: calc(100% / 5);
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #ffffff;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
`;
