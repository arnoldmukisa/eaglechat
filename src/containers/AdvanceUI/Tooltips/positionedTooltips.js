import React from 'react';
import PropTypes from 'prop-types';
import PositionedTooltip from './style';
import Grid from '../../../components/uielements/grid';
import Button from '../../../components/uielements/button';
import Tooltip from '../../../components/uielements/tooltip';

function PositionedTooltips(props) {
  return (
    <PositionedTooltip>
      <Grid container justify="center">
        <Grid item>
          <Tooltip id="tooltip-top-start" title="Add" placement="top-start">
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip id="tooltip-top" title="Add" placement="top">
            <Button>top</Button>
          </Tooltip>
          <Tooltip id="tooltip-top-end" title="Add" placement="top-end">
            <Button>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Tooltip id="tooltip-left-start" title="Add" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip id="tooltip-left" title="Add" placement="left">
            <Button>left</Button>
          </Tooltip>
          <br />
          <Tooltip id="tooltip-left-end" title="Add" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid
          item
          container
          xs={6}
          alignItems="flex-end"
          direction="column"
          spacing={0}
        >
          <Grid item>
            <Tooltip
              id="tooltip-right-start"
              title="Add"
              placement="right-start"
            >
              <Button>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip id="tooltip-right" title="Add" placement="right">
              <Button>right</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip id="tooltip-right-end" title="Add" placement="right-end">
              <Button>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Tooltip
            id="tooltip-bottom-start"
            title="Add"
            placement="bottom-start"
          >
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip id="tooltip-bottom" title="Add" placement="bottom">
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip id="tooltip-bottom-end" title="Add" placement="bottom-end">
            <Button>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </PositionedTooltip>
  );
}

PositionedTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default PositionedTooltips;
