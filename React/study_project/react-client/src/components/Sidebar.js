import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'
import Submenu from './SubMenu'
import { IconContext } from 'react-icons/lib'

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
   margin-left: 2rem; 
   font-size: 2rem;
   height: 80px;
   display: flex;
   justify-content: flex-start;
   align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: ${({sidebar}) => (sidebar ? '300px' : '80px')};
    height: 150%;
    display: flex;
    justify-content: center;
    // position: fixed;
    top: 10;
    // left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    left: ${({sidebar}) => (sidebar ? '0' : '0')};
    transition: 350ms;
    z-index: 10;
`;

const SiderWrap = styled.nav`
    width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar]  = useState(false)

    const showSidebar = ()=> setSidebar(!sidebar)
    
    return (
        <div style={{display:"flex",height:"100vh"}}>
        <IconContext.Provider value={{ color: '#fff'}}>
            {/* <Nav>
                <NavIcon to="#">
                    {{sidebar} ?
                    <AiIcons.AiFillRightCircle onClick={showSidebar}/> :
                    <AiIcons.AiFillRightCircle onClick={showSidebar}/>}
                </NavIcon>
            </Nav> */}
            <SidebarNav sidebar={sidebar}>
                <SiderWrap>
                    <NavIcon to="#" onClick={showSidebar}>
                        { sidebar ? 
                            <div style={{width:"300px", textAlign: "right", padding:"3px"}}><AiIcons.AiFillLeftCircle /></div> : 
                            <div><AiIcons.AiFillRightCircle /></div>}
                    </NavIcon>
                    {SidebarData.map((item,index) => {
                        return <Submenu item={item} key={index} sidebar={sidebar}/>;
                    })}
                </SiderWrap>
            </SidebarNav>
            </ IconContext.Provider>
            </div>
    );
};

export default Sidebar;