import React, { useReducer } from 'react'



interface PressedButtonState {
    home: boolean,
    projects: boolean,
    contact: boolean
}
interface PressedButtonAction {
    type: string
}

const reducer = (state: PressedButtonState, action: PressedButtonAction) => {
    switch (action.type) {
        case 'home':
            return {
                ...state,
                home: true,
                projects: false,
                contact: false
            }
        case 'projects':
            return {
                ...state,
                home: false,
                projects: true,
                contact: false
            }
        case 'contact':
            return {
                ...state,
                home: false,
                projects: false,
                contact: true
            }
        default:
            return state;
    }
}


export default reducer