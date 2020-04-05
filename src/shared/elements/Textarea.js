import styled from 'styled-components'

export const Textarea = styled.textarea`
  padding: 1rem 2rem;
  background: #d9e2ec;
  color: inherit;
  font-size: 1.5rem;
  font-family: inherit;
  border: none;
  line-height: inherit;

  &:focus {
    box-shadow: 0 0 0 3px rgba(118, 169, 250, 0.45);
    outline: none;
  }
`
