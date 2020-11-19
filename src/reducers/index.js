import { combineReducers } from 'redux';
import {alert} from './alert_reducer';
import { registration} from './register-reducer';
import {authentication} from './auth_reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    alert
});

export default rootReducer;