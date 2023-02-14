import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  margin: 20px auto;
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  display: block;
  margin-bottom: 36px;
  width: 120px;
  border-radius: 50%;
  background-color: #e5e0e0;
`;

export const UserName = styled.p`
  margin: 18px 0;
  font-size: 36px;
  font-weight: 700;
`;

export const NickName = styled.p`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #a9a9a9;
`;

export const Location = styled.p`
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #a9a9a9;
`;
export const List = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  width: calc(100% / 3);
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border: 1px solid darkgray;
  background-color: #f4f2f2;
`;

export const Category = styled.span`
  color: #a9a9a9;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 18px;
`;
