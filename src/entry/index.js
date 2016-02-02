import React from 'react'
import {Provider} from 'react-redux';
import configStore from '../store/configStore';
import { render } from 'react-dom';
import Welcome from '../app/Welcome';
import ceshi from '../app/ceshi';
import {Router, Route} from 'react-router';

const store = configStore();

render(<div><Provider store={store}>
	<Router>
		<Route path="/" component={ceshi}>
			<Route path="ceshi" component={Welcome}/>
		</Route> 
	</Router>
</Provider></div>, document.getElementById('app'));
