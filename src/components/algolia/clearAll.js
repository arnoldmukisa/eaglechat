import React from 'react';
import { connectCurrentRefinements } from 'react-instantsearch/connectors';
import Button from '../uielements/button';

const ClearAll = ({ onSearchStateChange }) => (
  <Button
    color="primary"
    variant="raised"
    onTouchTap={() => onSearchStateChange({})}
  >
    Clear all filters
  </Button>
);
export default connectCurrentRefinements(ClearAll);
