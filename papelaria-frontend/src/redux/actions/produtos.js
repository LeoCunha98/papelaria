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

export const postItem = (data, onSuccess) => dispatch => {
  api.post(`${endpoints.INSERIR_PRODUTO}`, data)
  .then(response => {
    dispatch({
      type: ACTION_TYPES.POST,
      payload: response.data
    })
  }).catch(err => console.log(err))
}

export const putItem = (data, onSuccess) => dispatch => {
  api.put(`${endpoints.EDITAR_PRODUTO(data.id)}`, data)
  .then(response => {
    dispatch({
      type: ACTION_TYPES.PUT,
      payload: response.data
    })
  }).catch(err => console.log(err))
}
