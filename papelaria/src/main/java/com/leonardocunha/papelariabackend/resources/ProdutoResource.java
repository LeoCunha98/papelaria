package com.leonardocunha.papelariabackend.resources;

import com.leonardocunha.papelariabackend.model.Produto;
import com.leonardocunha.papelariabackend.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value= "papelaria/produtos")
public class ProdutoResource {

    private final ProdutoService produtoService;

    @Autowired
    public ProdutoResource(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @GetMapping
    public ResponseEntity<Page<Produto>> listarTodosProdutos(Pageable pageable){
        return new ResponseEntity<>(produtoService.buscarTodos(pageable), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Produto> buscarProduto(@PathVariable Integer id){
        return new ResponseEntity<>(produtoService.buscar(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Produto> adicionarProduto(@RequestBody Produto produto){
        return new ResponseEntity<>(produtoService.inserir(produto), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removerProduto(@PathVariable Integer id){
        produtoService.deletar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
