import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'components/uielements/appbar';
import Tabs, { Tab } from 'components/uielements/tabs';
import Form from './ReduxForm'
import EnhancedTable from './MaterialUiTables/enhancedTable';

function TabContainer(props) {
  return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class BasicTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="View Agents" />
            <Tab label="Add Agents" />
            <Tab label="Roles" />
          </Tabs>
        </AppBar>
        {
          value === 0 && 
          <TabContainer>
            <EnhancedTable  {...this.props}  />
          </TabContainer>
        }
        {
          value === 1 && 
          <TabContainer>
            <Form />
          </TabContainer>
        }
        {
          value === 2 && 
          <TabContainer>

          </TabContainer>
        }
      </div>
    );
  }
}

BasicTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default BasicTabs;