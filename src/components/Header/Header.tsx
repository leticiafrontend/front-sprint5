import React from 'react';
import {
  HeaderBlock,
  HeaderContainer,
  HeaderMobile,
  MobileDrawer,
  MobileTitle,
  MobileImg,
  MobileLogo,
  MobileLogoImg,
  HeaderDesktop,
  DesktopLogo,
  DesktopLogoImg,
  Search,
  SearchIcon,
  SearchInput,
} from './style';

import menu from '../../assets/icons/menu.svg';
import rchlo from '../../assets/icons/rchlo.svg';
import riachuelo from '../../assets/icons/riachuelo.svg';
import searchIcon from '../../assets/icons/search.svg';

import { Menu } from './Menu/Menu';
import { useFilter } from '../../hooks/useFilter';

export const Header: React.FC = () => {
  const { setSearch } = useFilter();

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (e.code === 'Enter') setSearch(value.toLowerCase());

    if (value === '') setSearch('');
  };

  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderMobile>
          <MobileDrawer>
            <MobileImg src={menu} />
            <MobileTitle>menu</MobileTitle>
          </MobileDrawer>
          <MobileLogo>
            <MobileLogoImg src={rchlo} />
          </MobileLogo>
        </HeaderMobile>
        <HeaderDesktop>
          <DesktopLogo>
            <DesktopLogoImg src={riachuelo} />
          </DesktopLogo>
        </HeaderDesktop>
        <Search>
          <SearchIcon src={searchIcon} />
          <SearchInput
            type="search"
            placeholder="O que você está procurando?"
            onKeyUp={(e) => handleSearch(e)}
          />
        </Search>
        <Menu />
      </HeaderContainer>
    </HeaderBlock>
  );
};
