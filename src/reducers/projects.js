import { FETCHED_ONE_PROJECT, FETCHED_PROJECTS } from '../actions/projects/fetch'
import {
  PROJECT_CREATED,
  PROJECT_REMOVED,
  PROJECT_UPDATED,
} from '../actions/projects/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_PROJECTS :
      return [...payload]

    case FETCHED_ONE_PROJECT :
      const projectIds = state.map(g => g._id)
      if (projectIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((project) => {
        if (project._id === payload._id) {
          return { ...payload }
        }
        return project
      })

    case PROJECT_CREATED :
      const newProject = { ...payload }
      return [newProject].concat(state)

    case PROJECT_UPDATED :
      return state.map((project) => {
        if (project._id === payload._id) {
          return { ...payload }
        }
        return project
      })

    case PROJECT_REMOVED :
      return state.filter((project) => (project._id !== payload._id))

    default :
      return state
  }
}
