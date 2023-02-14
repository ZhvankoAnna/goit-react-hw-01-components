import styled from 'styled-components';

export const FriendItem = styled.li`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  border-radius: 2px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Status = styled.span`
  margin: 0;
  padding: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;
`;

export const FriendName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;
