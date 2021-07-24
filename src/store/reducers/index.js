import { combineReducers } from 'redux';
import company from './company';
import sale from './sale';
import location from './address';
import payment from './pay';
export default combineReducers({ company, sale, location, payment });
