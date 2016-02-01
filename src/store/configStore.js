import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../reducer/app'

const buildStore = compose(applyMiddleware(thunk))(createStore);

export default function configStore(initialState){
	const store = buildStore(rootReducers, initialState);
	return store;
}