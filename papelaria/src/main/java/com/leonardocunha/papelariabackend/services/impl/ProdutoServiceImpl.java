package com.leonardocunha.papelariabackend.services.impl;

import com.leonardocunha.papelariabackend.model.Produto;
import com.leonardocunha.papelariabackend.services.ProdutoService;
import com.leonardocunha.papelariabackend.utils.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.leonardocunha.papelariabackend.repository.ProdutoRepository;

import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ProdutoServiceImpl implements ProdutoService {

    private final ProdutoRepository produtoRepository;

    @Autowired
    ProdutoServiceImpl(ProdutoRepository produtoRepository){
        this.produtoRepository = produtoRepository;
    }

    @Override
    public Page<Produto> buscarTodos(Pageable pageable) {
        return produtoRepository.findAll(pageable);
    }

    @Override
    public List<Produto> buscarTodos() {
        return CollectionUtils.getListFromIterable(produtoRepository.findAll());
    }

    @Override
    public Produto buscar(Integer id) {
        return produtoRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Produto não encontrado"));
    }

    @Override
    public Produto inserir(Produto produto) {
        produtoRepository.save(produto);
        return produto;
    }

    @Override
    public void deletar(Integer id) {
        produtoRepository.deleteById(id);
    }
}
