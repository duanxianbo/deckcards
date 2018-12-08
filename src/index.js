import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {CardsContainer} from './cards';

function Index() {
  return <Provider store={store}><CardsContainer/></Provider>;
}

ReactDOM.render(<Index />, document.getElementById('index'));
