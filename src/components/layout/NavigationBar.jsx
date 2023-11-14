import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav``;
const NavbarTitle = styled.div``;
const NavbarList = styled.ul``;
const NavbarItem = styled.li``;
const NavbarLink = styled(Link)``;

// 아 하기 싫어...... navbar는 조그만데 왜이렇게 많이 들어가는거야
const NavigationBar = () => {
  return (
    <NavbarContainer>
      <NavbarTitle></NavbarTitle>
      <NavbarList>
        <NavbarItem>
          <NavbarLink to="/">메인</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/">모의 주식</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/">뉴스</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/">교육 컨텐츠</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/">나의 자산</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/">랭킹</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default NavigationBar;
