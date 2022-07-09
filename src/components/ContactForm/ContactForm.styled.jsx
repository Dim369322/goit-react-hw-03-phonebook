import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid grey;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  &:first-child {
    margin-top: 10px;
  }
`;

export const FormInput = styled.input`
  width: 170px;
  margin-bottom: 15px;
  margin-top: 5px;
  border: 0.5px solid #d8d8d8;

  &:focus,
  &:hover {
    outline: none;
    border: 2px solid #5da9e9;
    border-radius: 4px;
  }
`;

export const FormButton = styled.button`
  width: 100px;
  height: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;

  &:focus,
  &:hover {
    border: none;
    outline: none;
    background-color: #3c91e6;
  }
`;
