import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const Sidebar = (props) => {
  const content = (
    <CSSTransition 
      in={props.show}
      timeout={100}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
    <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
    )
    
    return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default Sidebar;