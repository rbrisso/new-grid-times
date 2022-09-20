import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupLaptop>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupLaptop>
        <Logo />
        <SubscribeWrapper>
          <SubscribeButton>Subscribe</SubscribeButton>
            <SubscribeText>Already a subscriber?</SubscribeText>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ( ${QUERIES.laptopAndUp} ) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupLaptop = styled.div`
  display: none;
  
  @media ( ${QUERIES.laptopAndUp} ) {
    display: flex;
    gap: 24px;

    /*
      FIX: Remove the inline spacing that comes with
      react-feather icons.
    */
    svg {
      display: block;
    }
  }
  
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ( ${QUERIES.tabletAndUp} ) {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ( ${QUERIES.laptopAndUp} ) {
    margin-top: 16px;
    margin-bottom: 72px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    justify-items: start;
  }
`;

const SubscribeWrapper = styled.div`
    display: none;

  @media ( ${QUERIES.laptopAndUp} ) {
    display: revert;
    position: relative;
    justify-self: flex-end;
  }
`;
const SubscribeButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  text-transform: uppercase;
  padding: 10px 24px;
  border-radius: 4px;
  font-family: var(--font-family-sans-serif);
  font-weight: var(--font-weight-bold);
  font-size: 1rem;
`;
const SubscribeText = styled.a`
  position: absolute;
  width: 100%;
  margin-top: 8px;
  text-align: center;
  font-size:  0.875rem;
  font-weight: var(--font-weight-normal);
  font-family: var(--font-family-serif);
  color: var(--color-gray-900);
  text-decoration: underline;
  font-style: italic;
`;
export default Header;
