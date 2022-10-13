import React from "react";
import styled from "styled-components";


const LayoutContainer = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
`

const Layout = ({children}) => {
    return <LayoutContainer>
        {children}
    </LayoutContainer>
};

//  const Layout = ({children}) => {
//     return <div className="layout">{children}</div>
//  };

export default Layout;