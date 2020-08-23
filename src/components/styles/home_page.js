import styled from 'styled-components';

export const PageTitle = styled.div`
  color: #b88f83;
  text-align: center;
  margin: 2rem;
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (min-width: 628px) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: 788px) {
    font-size: 3.2rem;
  }
`;

export const FrontPage = styled.article`
  margin: 1rem 2rem;

  ol {
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

  h3 {
    color: inherit;
  }

  span {
    font-size: 1.3rem;
    color: #b88f83;
    padding-left: 1rem;
  }
`;
