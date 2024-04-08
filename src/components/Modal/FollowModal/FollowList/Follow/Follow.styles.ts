import styled from "styled-components";

export const FollowContainer = styled.div`
  padding: 8px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const UserContent = styled.div`
  display: flex;
`;

export const UserProfileImg = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const UserProfileDesc = styled.div`
  width: 198px;
  p {
    font-size: 16px;
    margin: 0;
  }
`;

export const FollowButton = styled.button`
  color: #0095f6;
  font-weight: 600;
  background: none;
  border: none;
`;