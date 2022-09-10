
import React from 'react';
import logo from '../../pages/images/user-icon.jpg';

import styled from 'styled-components';


const StyledImage = styled.img`
   padding: 20px 20px 20px 20px;
   
`;

const HeaderBar = styled.header`
    width: 99%;
    ${'' /* padding: 0.5em 1em; */}
    display: flex;
    height: 64px;
    position: fixed;
    align-items: center;
    background-color: silver;
    ${'' /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25); */}
    z-index: 1;

`;

 


const Header = () => {
return (
    <HeaderBar>
       <StyledImage src={logo} alt="user Logo" height="40" />
        {/* <img src={logo} alt="user Logo" height="40" /> */}
    </HeaderBar>
    );
};

export default Header;