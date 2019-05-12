import React from 'react';
import HambugerNav from '../HambugerNav/HambugerNav';
import Navigation from '../Navigation/Navigation';
import { Consumer } from '../../context/context';
import './Header.css';

class Header extends React.Component {
/*     constructor(props) {
      super(props);
    } */
    render() {
      return (
        <Consumer>
          {context => 
            {
              return (
                <div className="header-container">
                  <img className="header-container__logo" alt="logo"/>
                  <nav className="header-container__navigation">
                    <Navigation/>
                  </nav>
                  {context &&
                    <nav className="header-container__hambuger">
                      <HambugerNav/>
                    </nav>
                  }
                </div>   
              )
            }
          }

        </Consumer>
      )    
    }
}

    export default Header;