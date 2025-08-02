# :bar_chart: Evitando valores nulos com Coalesce no SQL

Quem trabalha diariamente com dados sabe que um valor vazio em uma tabela nem sempre é uma boa opção. Nesses momentos, o Coalesce surge como uma opção prática e rápida para decidir qual valor será retornado em caso de NULL. A função COALESCE() é usada para *retornar o primeiro valor em uma lista que não é NULL*.

### Sintaxe

A sintaxe do **COALESCE** é bem simples. Dentro da função são passados *ao menos 2 paramêtros*, mas **NÃO** se limitam à apenas 2. Funciona da seguinte maneira: a função verifica se o primeiro valor está preenchido. Caso esteja vazio (NULL), o segundo valor é verificado. E o processo se repete até que algum valor seja retornado ou acabem os parâmetros (nesse caso, retornaria NULL).

```SQL
COALESCE(valor1, valor2, …, n)
```

### Exemplo

Vejamos um exemplo prático. Nesse caso, os valores "nome" e "telefone" serão retornados. Porém, para o campo telefone, existem 3 opções possíveis, mas somente uma é necessária. Portanto, a função COALESCE verificará se o campo "celular" está preenchido. Caso esteja, será usado ele mesmo, mas caso não, o próximo a ser verificado é o campo "telefone_fixo". E depois disso, caso também seja NULL, o próximo campo é o telefone_comercial.

Nesse exemplo ainda temos uma opção de fallback, ou seja, um retorno de segurança caso todos os campos estejam vazios. Se isso em algum momento acontecer, será retornado o texto "sem telefone", garantindo que o campo não estará completamente vazio.

```SQL
SELECT nome,
       COALESCE(celular, telefone_fixo, telefone_comercial, 'sem telefone') AS telefone
FROM contatos;
```

Para quem trabalha com SAP, a função também existe e funciona perfeitamente, como é demonstrado no exemplo abaixo:

```SQL
SELECT FROM ekpo AS s
  FIELDS
    s~ebeln,
    s~infnr,
    s~matkl,
    COALESCE( s~infnr, s~matkl ) AS abcd
  INTO TABLE @DATA(lt_result).
```

### Referências:

- https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20db6dd7751910149105978452f92bbd.html
- https://www.ionos.com/pt-br/digitalguide/servidor/configuracao/sql-coalesce/
- https://www.devmedia.com.br/funcao-coalesce-sql/23670
- https://communities.sas.com/t5/Dicas-e-recursos/Dica-da-Semana-TRUQUES-DO-PROC-SQL-com-fun%C3%A7%C3%A3o-COALESCE/ba-p/864981
- https://learnsql.com.br/blog/como-usar-a-funcao-coalesce-em-sql/
- https://pedroabap.blogspot.com/2021/04/sap-abap-74-command-coalesce.html