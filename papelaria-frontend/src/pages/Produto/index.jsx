import React, { useCallback, useEffect, useState }  from 'react'
import FormTableContainer from '../../components/FormTableContainer'
import PagionationTable from '../../containers/PaginationTable'

export default function Produto() {
    return (
      <FormTableContainer
        title="Produtos"
        buttonText="Adicionar"
      >
        <PagionationTable />
      </FormTableContainer>
  )
}
