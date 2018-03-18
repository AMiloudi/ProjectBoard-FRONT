import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import { PROJECT_UPDATED } from './subscribe'

const api = new API()

export default (id, name) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.patch(`/projects/${id}/changestatus`, {name:name})
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: PROJECT_UPDATED,
          payload: result.body
        })
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
