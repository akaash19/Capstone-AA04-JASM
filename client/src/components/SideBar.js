import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
  
      <Menu>
        <a className="title" href="">
          Families:
        </a>
  
        <a className="menu-item" href="">
          Mary Anderson's Family
        </a>
  
        <a className="menu-item" href="">
          Molly Anderson's Family
        </a>
  
        <a className="menu-item" href="">
          Bob Anderson's Family
        </a>
  
        <a className="menu-item" href="">
          Elizabeth Anderson's Family
        </a>
  
        <a className="menu-item" href="">
          Brody Anderson's Family
        </a>
      </Menu>
    );
  };