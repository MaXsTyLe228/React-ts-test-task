import * as UserActionCreators from './userAction'
import * as ReposActionCreators from './reposAction'

export default {
    ...UserActionCreators,
    ...ReposActionCreators
}