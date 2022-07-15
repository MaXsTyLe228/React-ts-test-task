export interface RepositoryState {
    repositories: any[];
    loading: boolean;
    error: null | string;
}

export enum ReposActionTypes {
    FETCH_REPS = 'FETCH_REPS',
    FETCH_REPS_SUCCESS = 'FETCH_REPS_SUCCESS',
    FETCH_REPS_ERROR = 'FETCH_REPS_ERROR',
}

interface FetchReposAction {
    type: ReposActionTypes.FETCH_REPS;
}

interface FetchReposSuccessAction {
    type: ReposActionTypes.FETCH_REPS_SUCCESS;
    payload: any[]
}

interface FetchUReposErrorAction {
    type: ReposActionTypes.FETCH_REPS_ERROR;
    payload: string;
}

export type ReposAction = FetchReposAction | FetchReposSuccessAction | FetchUReposErrorAction