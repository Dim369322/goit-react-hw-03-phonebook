import styled from 'styled-components';

export const DeleteButton = styled.button`
  width: 70px;
  height: 20px;
  margin-left: 10px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;

  &:focus,
  &:hover {
    border: none;
    outline: none;
    background-color: #3c91e6;
  }
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  &:first-child {
    margin-top: 0px;
  }
`;