import API from '../../api/client'
import { LOAD_ERROR, APP_LOADING } from '../loading'

export const PROJECT_REMOVED = 'PROJECT_REMOVED'

const api = new API()

export default  (projectId) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })


    api.delete(`/projects/${projectId}`)
    .then((result) => {
      dispatch({
        type: PROJECT_REMOVED,
        payload: result.body
      })
    })
    .catch((error) => {
      dispatch({
        type: LOAD_ERROR,
        payload: error.message
      })
    })
  }
}
