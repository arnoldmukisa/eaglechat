import React, { Component } from "react";
import { connect } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
// import moment from "moment";
import Button from "components/uielements/button";
import { FormControlLabel } from "components/uielements/form";
import notification from "components/notification";
// import Tooltip from "components/uielements/tooltip";
import actions from "redux/chat/actions";

// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'components/uielements/input';
// import { FormHelperText } from 'components/uielements/form';

import { MenuItem } from 'components/uielements/menus';
import { Form, Select, FormControls } from 'containers/UiElements/Select/select.style';

// import firebase from 'firebase';
import {
  AddUserDialog,
  AddUserForm,
  // Input, 
  // InputLabel,  
  Radio,
  RadioGroup,
  FormGroup,
  FormLabel,
  FormControl,
} from "containers/Agent/Chat/message.style";

const theme = createMuiTheme({
  overrides: {
    MuiDialog: {
      paperWidthSm: {
        maxWidth: "450px"
      }
    },
    MuiInput: {
      input: {
        fontSize: 14,
        fontWeight: 400,

        "@media (max-width: 767px)": {
          width: "100%"
        }
      }
    },
    MuiFormLabel: {
      root: {
        transform: "translate(0, 1.5px) scale(0.75)",
        transformOrigin: "top left"
      }
    }
  }
});

class AddUser extends Component {

  handleCancel = () => {
    this.props.updateNewUsersProp({ modalActive: false });
  };

  initAddUser = () => {
    this.props.updateNewUsersProp({
      modalActive: true,
      name: "",
      email: "",
      gender: "",
      role: "",
    });
  };

  emailExists = newUser =>
    this.props.email.findIndex(
      user => user.email === newUser.email
    ) !== -1;

  addUser = () => {
    const { user, addNewUsersProp, addNewUser } = this.props;
    if (addNewUsersProp.email) {
      // if (!this.emailExists(addNewUsersProp)) {
      //   notification("error", "Email already exists");
      // } else {
      //   addNewUser(user, addNewUsersProp);
      //   notification("success", "New user created successfuly");
      // }
        notification("success", "New user created successfuly");
    } else {
      notification("error", "please add new user");
    }
  };

    state = {
      role: ''
    };

    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };

  render() {
    const {
      addNewUsersProp,
      modalActive,
      name,
      email,
      gender,
      role,
      updateNewUsersProp
    } = this.props;
    return (
      <div>
          <Button onClick={this.initAddUser} fullWidth>
            Add agent
          </Button>
        <MuiThemeProvider theme={theme}>
          <AddUserDialog open={modalActive} onClose={this.handleCancel}>
            <p className="ModalTitle">Add New Agent</p>
            <AddUserForm>
              <FormGroup>
                <FormControl>
                  <Input
                    label="Name"
                    placeholder="Enter Name"
                    value={name || ""}
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={event => {
                      addNewUsersProp.name = event.target.value;
                      updateNewUsersProp(addNewUsersProp);
                    }}
                  />
                </FormControl>

                <FormControl>
                  <Input
                    label="Email"
                    placeholder="Email Address"
                    value={email || ""}
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={event => {
                      addNewUsersProp.email = event.target.value;
                      updateNewUsersProp(addNewUsersProp);
                    }}
                  />
                </FormControl>
              </FormGroup>

              <FormGroup>
                <FormLabel component="legend">Gender</FormLabel>

                <RadioGroup
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={event => {
                    addNewUsersProp.gender = event.target.value;
                    updateNewUsersProp(addNewUsersProp);
                  }}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                 
                </RadioGroup>
              </FormGroup>

              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="role-simple">Role</InputLabel>
                  <Select
                    value={role}
                    onChange={event => {
                    addNewUsersProp.role = event.target.value;
                    updateNewUsersProp(addNewUsersProp);
                  }}
                    input={<Input id="role" />}
                  >
                    <MenuItem value="">
                      <em>General</em>
                    </MenuItem>
                    <MenuItem value={'Admissions'}>Admissions</MenuItem>
                    <MenuItem value={'Finance'}>Finance</MenuItem>
                    <MenuItem value={'Sports'}>Sports</MenuItem>
                    <MenuItem value={'Registrar'}>Registrar</MenuItem>
                    <MenuItem value={'Business'}>Business</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>

              <FormGroup className="btnWrapper">
                <Button color="secondary" onClick={this.handleCancel}>
                  Cancel
                </Button>
                <Button color="primary" onClick={this.addUser}>
                  Add Agent
                </Button>
              </FormGroup>
            </AddUserForm>
          </AddUserDialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, users, addNewUsersProp } = state.Chat;
  return { user, users, addNewUsersProp, ...addNewUsersProp };
}
export default connect(mapStateToProps, actions)(AddUser);
