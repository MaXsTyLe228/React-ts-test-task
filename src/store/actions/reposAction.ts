import {ReposAction, ReposActionTypes} from "../../types/repository";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchRepos = (path: string) => {
    return async (dispatch: Dispatch<ReposAction>) => {
        try {
            dispatch({type: ReposActionTypes.FETCH_REPS})
            const response = await axios.get(path)
            dispatch({type: ReposActionTypes.FETCH_REPS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ReposActionTypes.FETCH_REPS,
                payload: 'Error loading repos'
            })
        }
    }
}