import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './theme';

function Index() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App/>
      </Provider>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById('index'));
