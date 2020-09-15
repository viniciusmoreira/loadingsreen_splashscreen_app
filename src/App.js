import React from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Loading from './pages/Loading';
import Auth from './pages/Auth';

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="loading" component={Loading} initial />
            <Scene key="auth" component={Auth} />
          </Scene>
        </Router>
      </>
    );
  }
}

export default App;
