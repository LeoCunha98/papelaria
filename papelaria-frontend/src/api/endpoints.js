const localhost = "http://127.0.0.1:8080";

const ENDPOINTS = {
  BASE_URL: `${localhost}/papelaria/`,
  LISTAR_PRODUTOS: (page, size) => `/produtos?page=${page}&size=${size}`
}