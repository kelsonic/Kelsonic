/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

// Libraries
import React, { PureComponent } from 'react';
// External components
import SolarSystem from 'components/SolarSystem';


class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <SolarSystem />
      </div>
    );
  }
}

export default HomePage;
