const localhost = "http://localhost:8080";

const endpoints = {
  BASE_URL: `${localhost}/api/papelaria/`,
  LISTAR_PRODUTOS: (page, size) => `/produtos?page=${page}&size=${size}`,
  BUSCAR_PRODUTO: (id) => `/produtos/${id}`,
  INSERIR_PRODUTO: `/produtos`,
  REMOVER_PRODUTOS: (id) => `/produtos/${id}`,
}

export default endpoints;