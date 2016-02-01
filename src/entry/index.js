import React from 'react'
import {Provider} from 'react-redux';
import configStore from '../store/configStore';
import { render } from 'react-dom'
import Welcome from '../app/Welcome'

const store = configStore();

render(<div><Provider store={store}><Welcome /></Provider></div>, document.getElementById('app'));
