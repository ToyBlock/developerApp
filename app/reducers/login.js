'use strict'

import createReducer from '../utils/create-reducer'

import {LOGIN} from '../constant'

const initialState = {
    username: '',
    password: ''
}

const actionHandler = {
    [LOGIN.LOGIN]: (state, action) => {
        return Object.assign({}, state, {
            username: action.data.username,
            password: action.data.password
        })
    },
    [LOGIN.EDIT]: (state, action) => {
        return Object.assign({}, state, action.data)
    }
}

export default createReducer(initialState, actionHandler)
