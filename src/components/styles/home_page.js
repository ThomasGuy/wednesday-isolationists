import styled from 'styled-components';

export const PageTitle = styled.div`
  color: #b88f83;
  text-align: center;
  margin: 2rem 0;
  font-size: 1rem;
  font-weight: bold;

  @media screen and (min-width: 368px) {
    font-size: 1.3rem;
    font-weight: 600;
  }

  @media screen and (min-width: 568px) {
    font-size: 1.7rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
    font-weight: 900;
  }

  @media screen and (min-width: 968px) {
    font-size: 2.8rem;
  }
`;

export const FrontPage = styled.article`
  margin: 1rem 0;

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
  }
`;
