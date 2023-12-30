import  { combineReducers } from 'redux';
import { inqueryReducer } from './queryReducer';
// import { firebaseEmailPasswordReducer as regularUser } from './authReducer'
const rootReducer = combineReducers({
    //  regularUser, normalAuth, addProduct,
    inqueryReducer
})
export default rootReducer
