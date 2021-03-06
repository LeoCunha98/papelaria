package com.leonardocunha.papelariabackend.resources;

import com.leonardocunha.papelariabackend.dto.ProdutoDTO;
import com.leonardocunha.papelariabackend.model.Produto;
import com.leonardocunha.papelariabackend.services.ProdutoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value= "api/papelaria/produtos")
public class ProdutoResource {

    private final ProdutoService produtoService;
    private final ModelMapper modelMapper;

    @Autowired
    public ProdutoResource(ProdutoService produtoService, ModelMapper modelMapper) {
        this.produtoService = produtoService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public ResponseEntity<Page<ProdutoDTO>> listarTodosProdutos(Pageable pageable){
        Page<ProdutoDTO> produtoPage = produtoService.buscarTodos(pageable)
                .map(produto -> modelMapper.map(produto, ProdutoDTO.class));
        return ResponseEntity.ok().body(produtoPage);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<ProdutoDTO> buscarProduto(@PathVariable Integer id){
        Produto produto = produtoService.buscar(id);
        ProdutoDTO produtoDTO = modelMapper.map(produto, ProdutoDTO.class);
        return ResponseEntity.ok().body(produtoDTO);
    }

    @PostMapping
    public ResponseEntity<ProdutoDTO> adicionarProduto(@RequestBody @Valid ProdutoDTO produtoDTO){
        Produto produto = modelMapper.map(produtoDTO, Produto.class);
        produtoService.inserir(produto);
        produtoDTO.setId(produto.getId());
        return ResponseEntity.ok().body(produtoDTO);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<ProdutoDTO> buscarProduto(@RequestBody @Valid ProdutoDTO produtoDTO, @PathVariable Integer id){
        Produto novoProduto = produtoService.editar(produtoDTO, id);
        ProdutoDTO novoProdutoDTO = modelMapper.map(novoProduto, ProdutoDTO.class);
        return ResponseEntity.ok().body(novoProdutoDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> removerProduto(@PathVariable Integer id){
        produtoService.deletar(id);
        return ResponseEntity.ok().body("Produto removido com sucesso!");
    }

}
