import React from 'react'
import {Provider} from 'react-redux';
import configStore from '../store/configStore';
import { render } from 'react-dom'
import Welcome from '../app/Welcome'

const store = configStore();

render(<Provider></Provider>, document.getElementById('app'));
