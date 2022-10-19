import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #ele9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-stytle: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: #252831;
        boder-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: -5px;
`;

const DropdownLink = styled(Link)`
    background: #414757;
    height-left: 3rem;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
`

const Submenu = ({item, sidebar})=> {
    const [subnav,setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return(
    sidebar ?
    <>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
            <div style={{width:"10%"}}>
               {item.icon}
            </div>
            <div style={{width:"60%", float:"left"}}>
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
                {item.subNav && subnav 
                ? item.iconOpend 
                : item.subNav 
                ? item.iconClosed 
                : null}
            </div>
        </SidebarLink>
        {subnav && item.subNav.map((item, index) => {
            return(
                    <DropdownLink to={item.path} key={index}>
                    <div style={{width:"15%"}}>
                        {item.icon}
                    </div>
                    <div style={{width:"60%", float:"left"}}>
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </div>
                    </DropdownLink>
            )
        })}
    </>
    :
    <>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
            <div>
                {item.icon}
            </div>
        </SidebarLink>
    </>
)};

export default Submenu;