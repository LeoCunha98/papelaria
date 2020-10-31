package com.leonardocunha.papelariabackend.repository;

import com.leonardocunha.papelariabackend.model.Produto;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends PagingAndSortingRepository<Produto, Integer> {}
