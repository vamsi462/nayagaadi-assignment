import {userConstants} from '../constants'


function login(email, password){

    function request(user){
        return{ type:userConstants.LOGIN_REQUEST,user}
    }
     function success(user){
        return{ type:userConstants.LOGIN_SUCCESS,user}
    }
     function failure(error){
        return{ type:userConstants.LOGIN_FAILURE,error}
    }
}

function logout(){
    return {type:userConstants.LOGOUT};
}

function register(user){

    function request(user){
        return{ type:userConstants.REGISTER_REQUEST,user}
    }
     function success(user){
        return{ type:userConstants.REGISTER_SUCCESS,user}
    }
     function failure(error){
        return{ type:userConstants.REGISTER_FAILURE,error}
    }
}


export const userActions ={
    login,logout,register
}