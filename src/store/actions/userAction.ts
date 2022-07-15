import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = (path: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get(path)
            let resArray: any[];
            resArray = []
            for (let i in response.data.items) {
                const user = await axios.get('https://api.github.com/users/' + response.data.items[i].login)
                resArray[+i] = ({...user.data})
            }
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: resArray})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Error loading users'
            })
        }
    }
}