//index.js- Module

import React  from 'react'
import ReactDOM from 'react-dom';
//Import Bootstrap_package
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Routings.js
import Routings from './components/Routings.js'

//Connect REDUX_STORE_WITH_REACT to give store data access to React Component...
import { Provider } from 'react-redux';

//Redux_Store
import store from './Store/index.js'

ReactDOM.render(<Provider store={store}>
    <Routings />
</Provider>, document.getElementById('root') );