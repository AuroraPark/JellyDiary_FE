import styled from "styled-components";

export const WritePageDescContainer = styled.div`
  padding: 0 80px;
`;

export const DiaryTitleContainer = styled.div`
  p:nth-child(1) {
    color: black;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0;
    cursor: default;
  }
  p:nth-child(2) {
    margin: 0 0 6px 0;
    font-size: 14px;
    color: #515e72;
    cursor: default;
  }

  input {
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    border: 1px solid #cad1dc;
    padding: 0 7px;
    font-size: 16px;
  }
`;

export const DiaryDateContainer = styled.div`
  margin-top: 24px;

  p:nth-child(1) {
    color: black;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0;
    cursor: default;
  }
  p:nth-child(2) {
    margin: 0 0 6px 0;
    font-size: 14px;
    color: #515e72;
    cursor: default;
  }

  input {
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    border: 1px solid #cad1dc;
    padding: 0 6px;
    font-size: 16px;

    &::-webkit-calendar-picker-indicator {
      border-left: 2px solid #cad1dc;
      padding-left: 6px;
      cursor: pointer;
      font-size: 18px;
    }
  }
`;

export const WritePageDetailContainer = styled.div`
  p:nth-child(1) {
    color: black;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0;
    cursor: default;
  }
  p:nth-child(2) {
    margin: 0 0 6px 0;
    font-size: 14px;
    color: #515e72;
    cursor: default;
  }

  textarea {
    border: 1px solid #cad1dc;
    resize: none;
    width: 100%;
    height: 240px;
    box-sizing: border-box;
    padding: 6px 3px;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
      padding-left: 4px;
    }
  }
`;
