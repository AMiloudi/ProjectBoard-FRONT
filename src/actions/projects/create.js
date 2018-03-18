import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

import {PROJECT_CREATED} from './subscribe'

const api = new API()

export default (newProject) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

  api.post('/projects', newProject)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({type: PROJECT_CREATED, payload: result.body})
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
