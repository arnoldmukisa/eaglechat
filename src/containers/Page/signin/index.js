import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import signinImg from "images/signup.svg";
// import fbBtnSvg from "images/facebook-app-symbol.svg";
// import gpBtnSvg from "images/google-plus.svg";
// import authBtnSvg from "images/auth0.svg";
// import Button from "components/uielements/button";
import authAction from "redux/auth/actions";
// import TextField from "components/uielements/textfield";
// import IntlMessages from "components/utility/intlMessages";
import Scrollbars from "components/utility/customScrollBar";
import SignInStyleWrapper from "./signin.style";
// import Auth0 from "helpers/auth0";
import Firebase from "helpers/firebase";
import FirebaseLogin from "components/firebase";

const { login } = authAction;
class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    username: "",
    password: ""
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  handleLogin = () => {
    const { login } = this.props;
    const { username, password } = this.state;
    login({ username, password });
    this.props.history.push("/dashboard/home");
  };
  onChangeUsername = event => this.setState({ username: event.target.value });
  onChangePassword = event => this.setState({ password: event.target.value });
  render() {
    const from = { pathname: "/dashboard" };
    const { redirectToReferrer, username, password } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="mateSignInPage">
        <div className="mateSignInPageImgPart">
          <div className="mateSignInPageImg">
            <img src={signinImg} alt="Kiwi standing on oval" />
          </div>
        </div>

        <div className="mateSignInPageContent">
          
          <Scrollbars style={{ height: "100%" }}>
            <div className="mateSignInPageGreet">
              <h1>Welcome to Eagle Chat</h1>
              
            </div>
            
              
                      
            <div className="mateLoginOtherBtn">
              
             
              <div className="mateLoginOtherBtnWrap">
                {Firebase.isValid && <FirebaseLogin login={this.handleLogin} />}
              </div>
              <div className="mateLoginOtherBtnWrap">
                {Firebase.isValid && (
                  <FirebaseLogin signup={true} login={this.handleLogin} />
                )}
              </div>
            </div>
          </Scrollbars>
        </div>
      </SignInStyleWrapper>
    );
  }
}
export default connect(
  state => ({
    isLoggedIn: state.Auth.idToken !== null ? true : false
  }),
  { login }
)(SignIn);
