import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {repositoryReducer} from "./repositoryReducer";

export const rootReducer = combineReducers({
    user: usersReducer,
    repos: repositoryReducer
})

export type RootState = ReturnType<typeof rootReducer>