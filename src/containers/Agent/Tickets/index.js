import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import IntlMessages from 'components/utility/intlMessages';
import LayoutWrapper from 'components/utility/layoutWrapper';
import { Row, FullColumn } from 'components/utility/rowColumn';
import BasicTabs from './basicTabs';
import Papersheet from 'components/utility/papersheet';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  iconRoot: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  scrollRoot: {
    flexGrow: 1,
    width: 'auto',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

class TabsExamples extends Component {
  render() {
    const { props } = this;
    return (
      <LayoutWrapper>
        <Row>
          <FullColumn>
            <Papersheet title={<IntlMessages id="sidebar.basictabs" />}>
              <BasicTabs {...props} />
            </Papersheet>
          </FullColumn>
         </Row>
      </LayoutWrapper>
    );
  }
}
export default withStyles(styles)(TabsExamples);
