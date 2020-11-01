package com.leonardocunha.papelariabackend.dto;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class ProdutoDTO {
    private Integer id;

    @NotNull(message = "O código de barras do produto não pode estar vazio")
    private String codigoBarra;

    @NotBlank(message = "O nome do produto não pode estar vazio")
    private String nome;

    @NotBlank(message = "A descrição do produto não pode estar vazia")
    private String descricao;

    @NotNull(message = "A quantidade de itens do produto não pode estar vazia")
    private Integer quantidade;

    @NotBlank(message = "A categoria do produto não pode estar vazia")
    private String categoria;

    public String getCodigoBarra() {
        return codigoBarra;
    }

    public void setCodigoBarra(String codigoBarra) {
        this.codigoBarra = codigoBarra;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}