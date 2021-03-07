import styled from 'styled-components';

export const SoldTag = styled.span`
  background: var(--red);
  box-shadow: 1px 3px 2px var(--grey);
  transform: rotate(7deg);
  color: var(--offwhite);
  font-weight: 600;
  padding: 5px 8px;
  line-height: 0.9;
  font-size: 1.3rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;

export const SoldTagModal = styled.span`
  background: var(--red);
  box-shadow: 1px 3px 2px var(--grey);
  transform: rotate(8deg);
  color: var(--offwhite);
  font-weight: 600;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;

  padding: 5px 8px;
  font-size: 1.5rem;
  line-height: 1;

  @media screen and (min-width: 568px) {
    box-shadow: 1px 4px 2px var(--grey);
    padding: 5px 10px;
    font-size: 2.5rem;
    line-height: 1.1;
  }
`;
