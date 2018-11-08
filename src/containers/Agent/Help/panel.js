import React from "react";
import PropTypes from "prop-types";
import Typography from "material-ui/Typography";
import Icon from "components/uielements/icon/index.js";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "components/uielements/expansionPanel";

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography className={classes.heading}>What is EagleChat</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            EagleChat is, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography className={classes.heading}>Does this mean I can directly talk to the school coach if I want a sports based scholarship?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Yes, and the same applies to Admissions, Business ... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nostrum, suscipit molestias, fugiat aliquam assumenda.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography className={classes.heading}>Another Question ...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem asperiores assumenda animi consequuntur ducimus quo hic. Architecto non alias, libero illum, optio veniam neque voluptatum consequuntur, reiciendis numquam quasi explicabo?
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SimpleExpansionPanel;
