import * as actions from './actionTypes'

export default function userAdded(description){
  return {
    type: actions.USER_ADD,
    users: {[description.username]: [description.firstName, description.lastName, description.investment, description.password]}
  }
}
