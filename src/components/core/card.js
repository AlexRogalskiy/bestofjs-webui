import styled from 'styled-components'

export const Card = styled.div`
  margin-bottom: 2rem;
  padding: 0;
  background-color: #fff;
  vertical-align: top;
  border: 1px solid var(--boxBorderColor);
  .inner {
    padding: 1rem;
  }
  .card-row + .card-row {
    border-top: 1px solid var(--boxBorderColor);
  }
  .link {
    display: block;
    color: var(--textPrimaryColor);
  }
  .link:hover {
    text-decoration: none;
    color: inherited;
    background-color: #fff7eb;
    color: #000;
  }
`

Card.Header = styled.div`
  padding: 1rem;
  font-size: 1rem;
  border-bottom: 1px solid var(--boxBorderColor);
  .counter,
  .comment {
    color: rgba(255, 255, 255, 0.7);
  }
  .big {
    font-size: 1.5rem;
  }
  display: flex;
  align-items: center;
  .icon {
    margin-right: 0.5rem;
  }
`

Card.Body = styled.div``

Card.Section = styled.div`
  padding: 1em;
  &:not(:first-child) {
    border-top: 1px dashed var(--boxBorderColor);
  }
`

Card.Footer = styled.div`
  padding: 1rem;
  text-align: center;
  border-top: 1px solid var(--boxBorderColor);
`
