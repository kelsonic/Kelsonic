/*
 *
 * Project
 *
 */

import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectProject from './selectors';
import messages from './messages';

class Project extends PureComponent {
  render() {
    return (
      <div>
        <Helmet
          title="Project"
          meta={[
            { name: 'description', content: 'Description of Project' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Project.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Project: makeSelectProject(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
