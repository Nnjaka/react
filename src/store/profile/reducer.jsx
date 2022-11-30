import { Reducer } from 'redux';
import { CHANGE_NAME, TOGGLE_PROFILE } from './actions';


const initialState ={
    name: 'someName',
    visible: true,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_PROFILE: {
            return {
                ...state, 
                visible: !state.visible,
            }
        }
        case CHANGE_NAME: {
            return {
              ...state,
              name: action.name,
            };
          }
        default:
            return state;
    }
};