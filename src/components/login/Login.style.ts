import styled from '@emotion/styled';

export const AuthContainer = styled.div`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
`;

export const Controller = styled.div`
  margin-bottom: 0.5rem;

  & label {
    display: block;
    color: #616161;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #ccc;
  }
`;

export const LoginButton = styled.button`
  display: inline-block;
  padding: 12px 24px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #639ec3;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #0062cc;
  }
`;
