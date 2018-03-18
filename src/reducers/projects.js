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

    case PROJECT_CREATED :
      const newProject = { ...payload }
      return [newProject].concat(state)

    case PROJECT_UPDATED :
      return state.projects.map((project) => {
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
