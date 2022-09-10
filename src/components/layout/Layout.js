
import React from 'react';
import Header from '../header/Header';
//import Navbar from '../navbar/index';
import Navigation from '../navigation/Navigation';

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <div className="navigationWrapper">
            <Navigation />
            <main>{children}</main>
        </div>
    </React.Fragment>
    );
};
export default Layout;