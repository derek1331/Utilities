import React from 'react';
import './sideMenu.css';

class SideMenu extends React.Component{

    // sideMenuLinkCreator () {
    //     const menu = document.getElementById('sideMenuList')
    //     array.forEach(element => {
    //         let linkName = element.name;
    //         let linkSource = element.href;
    //     });

    // }
    
    render() {
        return(
            <div className='sideMenu'id='sideMenu'>
                <ul className='sideMenuList' id='sideMenuList'>
                <li className='sideMenuLinks'>Home</li>
                <li className='sideMenuLinks'>About</li>
                <li className='sideMenuLinks'>Other</li>
                </ul>
            </div>
        )
    }
}

export default SideMenu;