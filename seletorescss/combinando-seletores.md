# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendent

    * Combinação feita com espaço entre os seletores
    * Busca um elemento dentro de outro

## Child

    * Identificado pelo sinal ` > ` entre dois seletores
    * Seleciona somente elemento que é filho direto do pai
    * Elementos depois do filho direto serão desconsiderados

    ```css
    body > ul > li
    ```
## Adjacent sibling

    * Identificado pelo sinal ` + ` entre dois seletores
    * seleciona somente o elemento do lado direto que é irmão direto na hierarquia

    ```css
    h1 + p
    ```

## General sibling

    * Identificado pelo sinal ` ~ ` entre dois seletores
    * Seleciona todos os elementos irmãos

    ```css
    h1 ~ p
    ```

## Utilizando combinadores

``` css
ul > li[class="red"]
```

## Dica

* seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.