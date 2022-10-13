import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #eee;

`



const Header = () => {
    return (
       <HeaderContainer>
        <div>My Todo List</div>
        <div>connie.</div>
       </HeaderContainer>

    );
};

export default Header;