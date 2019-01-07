import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import styles from "./assets/AppStyle.js";

import { createStackNavigator, createAppContainer } from "react-navigation";
// import Image from 'react-native-remote-svg';
import SvgUri from "react-native-svg-uri";

import UserContext from "./store/user-context.js";
import Profile from "./screens/Profile/Profile.js";
// import LogIn from "../LogIn.js";
import LogIn from "./screens/Login/LogIn.js";

// import 'es6-symbol/implement';
// import {observable} from 'mobx';
// import {observer} from 'mobx-react/native';

// class ImageBackground extends React.Component<$FlowFixMeProps> {
//   setNativeProps(props: Object) {
//     // Work-around flow
//     const viewRef = this._viewRef;
//     if (viewRef) {
//       ensureComponentIsNative(viewRef);
//       viewRef.setNativeProps(props);
//     }
//   }

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.submitLogin = user => {
    //   this.setState({
    //     user
    //   });
    // };

    // this.submitLogout = () => {
    //   this.setState({
    //     user: null
    //   });
    // };

    this.submitLogout = this.submitLogout.bind(this);
    this.submitLogin = this.submitLogin.bind(this);

    this.state = {
      submitLogin: this.submitLogin,
      submitLogout: this.submitLogout
    };
  }

  submitLogin(user) {
    this.setState({
      user
    });
  }

  submitLogout() {
    this.setState({
      user: null
    });
  }

  render() {
    // const AppNav = createStackNavigator({
    //   LogIn: {screen: LogIn},
    //   Profile: {screen: Profile},
    //   // Home: {screen: Appe},
    // });

    // const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require("./assets/img/rectangle-22x.png")}
        />
        {/* <SvgUri source={require('./src/assets/img/rectangle-2.svg')} /> */}
        <SvgUri
          style={styles.logo}
          source={require("./assets/img/w-mercury-development.svg")}
        />
        <UserContext.Provider value={this.state}>
          {/* <BrowserRouter> */}
          <View>
            {!this.state.user && (
              <LogIn />
              // navigate('LogIn')

              // <Switch>
              // <Route path="/login" component={LogIn} />
              // <Redirect to="/login" />
              // </Switch>
            )}
            {this.state.user && (
              <Profile />
              // navigate('Profile')

              // <Switch>
              //   <Route path="/profile" component={Profile} />
              //   <Redirect to="/profile" />
              // </Switch>
            )}
          </View>
          {/* </BrowserRouter> */}
        </UserContext.Provider>
      </View>
    );
  }
}

// const App = createStackNavigator({
//   Home: Appe,
//   // Home: {screen: Appe},
// });

// export default createAppContainer(App);
export default App;
