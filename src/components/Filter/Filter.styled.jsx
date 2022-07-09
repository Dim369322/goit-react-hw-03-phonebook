import styled from 'styled-components';

export const FilterInput = styled.input`
  width: 170px;
  border: 0.5px solid #d8d8d8;

  &:focus,
  &:hover {
    outline: none;
    border: 2px solid #5da9e9;
    border-radius: 4px;
  }
`;

export const FilterText = styled.p`
  margin: 0px 0px 5px 0px;
`;
