package com.leonardocunha.papelariabackend.services;

import com.leonardocunha.papelariabackend.model.Produto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProdutoService {
    Page<Produto> buscarTodos(Pageable pageable);

    List<Produto> buscarTodos();

    Produto buscar(Integer id);

    Produto inserir(Produto produto);

    void deletar(Integer id);

}
