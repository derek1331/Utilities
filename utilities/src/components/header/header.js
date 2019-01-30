import React from "react";
import "./header.css";
import SideMenu from '../sideMenu'

class Header extends React.Component {
    state = {
        hasBurgerBeenClicked: false
    }

// click on div
// opens panel below containing mobile menue
toggleBurger = () => {
    const sideMenu = document.getElementById('sideMenu');
    if (this.state.hasBurgerBeenClicked === false){
        sideMenu.className = 'sideMenuOpen'
        this.setState({
            hasBurgerBeenClicked: true
        })
    } else if (this.state.hasBurgerBeenClicked === true) { 
        console.log('hello')
        sideMenu.className='sideMenu'
        this.setState({
            hasBurgerBeenClicked: false
        })
    }
    console.log('hello')

}

  render() {
    return (
      <div className="header" id="header">
        <SideMenu></SideMenu>
        <div className="leftSide" id="leftSide">
          <ul className="leftSideList" id="leftSideList">
            <li className="leftSideListItem" id="leftSideListItem1">
              <a className="leftSideLink" id="leftLink1">
                Home
              </a>
            </li>
            <li className="rightSideListItem" id="leftSideListItem2">
              <a className="leftSideLink" id="leftLink2">
                About
              </a>
            </li>
            <li className="rightSideListItem" id="leftSideListItem3">
              <a className="leftSideLink" id="leftLink3">
                Other
              </a>
            </li>
          </ul>
        </div>
        <div className="middle" id="middle">
          <ul className="middleList" id="middleList">
            <li className="middleListItem" id="middleListItem1">
              <a className="middleLink" id="middleLink1" />
            </li>
            <li className="rightSideListItem" id="middeListItem2">
              <a className="middleLink" id="middleLink2">
                Brand
              </a>
            </li>
            <li className="rightSideListItem" id="middleListItem3">
              <a className="middleLink" id="middleLink3" />
            </li>
          </ul>
        </div>
        <div className="rightSide" id="rightSide">
          <ul className="rightSideList" id="rightSideList">
            <li className="rightSideListItem" id="rightSideListItem1">
              <a className="rightSideLink" id="rightLink1">
                Brand
              </a>
            </li>
            <li className="rightSideListItem" id="rightSideListItem2">
              <a className="rightSideLink" id="rightLink2">
                Brand
              </a>
            </li>
            <li className="rightSideListItem" id="rightSideListItem3">
              <a className="rightSideLink" id="rightLink3">
                Brand
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile Header */}
        <div hidden className="mobileHeader" id="mobileHeader">
          <div
            className="mobileBurger"
            id="mobileBurger"
            onClick={this.toggleBurger}
          />
          <div className="mobileBrand" id="mobileBrand">
            <span>ESPN</span>
          </div>
          <div className="mobileOther" id="mobileOther" />
          {/* Hidden Menu */}
          <ul hidden className="mobileList" id="mobileList">
            <li className="mobileListItem" id="mobileListItem1">
              <a className="mobileLink" id="mobileLink1">
                Home
              </a>
            </li>
            <li className="mobileListItem" id="mobileListItem2">
              <a className="mobileLink" id="mobileLink2">
                About
              </a>
            </li>
            <li className="mobileListItem" id="mobileListItem3">
              <a className="mobileLink" id="mobileLink3">
                Other
              </a>
            </li>
          </ul>
          <div />
        </div>
      </div>
    );
  }
}

export default Header;
