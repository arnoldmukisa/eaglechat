import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import SimplePanel from './panel';
import LayoutWrapper from 'components/utility/layoutWrapper';
import Papersheet, {
  DemoWrapper
} from 'components/utility/papersheet';
import { Row,FullColumn } from 'components/utility/rowColumn';
import Widget from 'components/widget'


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.3%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.text.lightDivider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary[500],
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

class ExpansionPanelExamples extends Component {
  render() {
    const { props } = this;
    return (
      <LayoutWrapper>

        <Row>
          <FullColumn>
            <Papersheet
              title="FAQ"
              codeBlock="UiElements/ExpansionPanel/simplePanel.js"
            >
            <p>
              Here are the frequently asked questions about EagleChat
            </p>
            <DemoWrapper>
              <SimplePanel {...props} />
            </DemoWrapper>
            </Papersheet>
          </FullColumn>
        </Row>
        <Widget />
      </LayoutWrapper>
    );
  }
}
export default withStyles(styles)(ExpansionPanelExamples);
