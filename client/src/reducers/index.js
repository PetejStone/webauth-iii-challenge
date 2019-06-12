import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    SUBMIT_START,
    SUBMIT_SUCCESS,
    SUBMIT_FAIL

} from '../actions';
const initialState = {
    users: [],
    isLoggingIn: false,
    error: null,
    isLoading: false,
    pending: false,
    submitFail: false,
    credentials: []

    // Array characters, Boolean fetching, null error.
  };

  export const rootReducer = (state=initialState, action)=> {
        switch (action.type) {
            case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            }
            case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                credentials: action.payload
            }
            case LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                error: action.payload,
                pending: false
            }
        
            case SUBMIT_START:
            return {
            ...state,
            isLoading: true,
            submitFail: false
            }
            case SUBMIT_FAIL:
            return {
            ...state,
            isLoading: false,
            submitFail: true
            }

            case SUBMIT_SUCCESS:
            return {
            ...state,
            users: action.payload,
            isLoading: false
            }
           
       
           
            
        default:
            return state;
      }
  }