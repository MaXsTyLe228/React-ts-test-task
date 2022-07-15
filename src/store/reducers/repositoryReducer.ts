import {ReposAction, ReposActionTypes, RepositoryState} from "../../types/repository";

const initialState: RepositoryState = {
    repositories: [],
    loading: false,
    error: null
}

export const repositoryReducer = (state = initialState, action: ReposAction): RepositoryState => {
    switch (action.type) {
        case ReposActionTypes.FETCH_REPS:
            return {loading: true, error: null, repositories: []}
        case ReposActionTypes.FETCH_REPS_SUCCESS:
            return {loading: false, error: null, repositories: action.payload}
        case ReposActionTypes.FETCH_REPS_ERROR:
            return {loading: false, error: action.payload, repositories: []}
        default:
            return state
    }
}