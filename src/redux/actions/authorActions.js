import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';

export function loadAutorSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

//This is a thunk
export function loadAuthors() {
    return function(dispatch) {
        return authorApi
            .getAuthors()
            .then(authors => {
                dispatch(loadAutorSuccess(authors));
            })
            .catch(error => {
                throw error;
            });
    };
}
