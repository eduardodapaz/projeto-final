-- TABLE
CREATE TABLE cliente (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  cpf TEXT NOT NULL,
  endereco TEXT NOT NULL,
  data_nasc DATE NOT NULL,
  email TEXT NOT NULL,
  num_telef INTEGER NOT NULL,
  genero VARCHAR(2)
  );
CREATE TABLE fornecedor (
  cnpj TEXT PRIMARY KEY NOT NULL,
  nome_fant TEXT NOT NULL,
  raz_social TEXT NOT NULL,
  email TEXT NOT NULL,
  num_telef INTEGER NOT NULL,
  endereco TEXT NOT NULL
 );
CREATE TABLE produto (
  id_codbr TEXT PRIMARY KEY NOT NULL,
  nome TEXT NOT NULL,
  descricao TEXT NOT NULL,
  preco REAL NOT NULL,
  qtd_estoque INTEGER NOT NULL,
  categoria TEXT NOT NULL,
  fabricante TEXT NOT NULL
  );
CREATE TABLE venda (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  cod_rastreio INTEGER UNIQUE NOT NULL,
  cod_produto INTEGER UNIQUE NOT NULL,
  nome_produto TEXT NOT NULL,
  qtd_produtos INTEGER NOT NULL,
  end_cliente TEXT NOT NULL,
  data_envio DATE NOT NULL,
  status_entrega TEXT NOT NULL,
  transportadora TEXT NOT NULL,
  custo_entrega REAL NOT NULL,
  FOREIGN KEY (cod_produto) REFERENCES produto(id_codbr)
);
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
