import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    font-weight: 900;
  }
`;

export const Row = styled.div`
  margin-top: 1rem;
  display: flex;

  & > * {
    flex: 0 1 100%;

    &:not(:first-child) {
      margin-left: 2rem;
    }
  }
`;

export const Col = styled.div`
  ul {
    list-style-type: none;

    a {
      text-decoration: none;
      color: white;
    }

    li {
      padding: 8px;
      margin-bottom: 7px;
      color: #ffffff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      &:hover {
        background-color: #242424;
      }
    }
  }
`;

export const Image = styled.div`
  max-width: ${props => props.width};
  height: auto;
`;
