import api from './../../api/api';
import endpoints from './../../api/endpoints';



export const ACTION_TYPES = {
  POST: "POST",
  GET: "GET",
  DELETE: "DELETE",
  PUT: "PUT",
}

export const getAll = () => dispatch => {
  api.get(`${endpoints.LISTAR_PRODUTOS()}`)
  .then(response => {
    dispatch({
      type: ACTION_TYPES.GET,
      payload: response.data.content
    })
  }).catch(err => console.log(err))
}