import { LOGIN } from '../constant';

const changeValue = value => (dispatch, getStore) => {
    return dispatch({
        type: LOGIN.EDIT,
        data: value,
    })
}

const login = data => () => {

}

export default {
    changeValue
}