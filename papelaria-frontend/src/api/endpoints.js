const localhost = "http://localhost:8080";

const endpoints = {
  BASE_URL: `${localhost}/papelaria/`,
  LISTAR_PRODUTOS: (page, size) => `/produtos?page=${page}&size=${size}`
}

export default endpoints;