/**
*
* SideNav
*
*/

import React, { PureComponent } from 'react';
// Styled components
import Header from './styles/Header';
import Logo from './styles/Logo';
import Wrapper from './styles/Wrapper';


class SideNav extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      logoIsHovered: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({ logoIsHovered: true });
  }

  render() {
    return (
      <Wrapper>
        <Logo
          isHovered={this.state.isHovered}
          onFocus={this.handleHover}
          onMouseOver={this.handleHover}
        >
          <Header>Kelsonic.io</Header>
        </Logo>
      </Wrapper>
    );
  }
}

export default SideNav;
