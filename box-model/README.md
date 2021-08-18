# Box Model

- Fundamental para fazer layout para a web
- Maior facilidade para aplicar o CSS

## O que é?

Uma caixa retangular.
Essa caixa possui propriedades de uma caixa (2D)

- Tamanho                   (largura x altura) width | height
- Conteúdo                  (content)
- Bordas                    (border)
- Preenchimento interno     (padding)
- Espaços fora da caixa     (margin)

* Cada elemento na sua página, será considerado uma caixa.

## Box-sizing

Como será calculado o tamanho total da caixa?

- content-box | border-box

```css
div {
    box-sizing: border-box;
}
```
## display: block vs display:inline

- Como as caixas se comportam eme relação às outras caixas
- Comportamento externo das caixas

**block** 
- Ocupa toda a linha, colocando o próximo elemento abaixo desse

- exemplo: `<div>`

**inline** 
- Elemento ao lado do outro
- width e height não funcionam
- Somente valores horizontais de margin, padding e border

- exemplo: `<span>`

## Margin

- Espaço entre os elementos

- margin-top | margin-right | margin-bottom | margin-left

- cuidado com margin collapsing (top se junta ao bottom) (só ocorre com elementos abaixo um do outro)

## Padding

- Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left 

- Padding poderá causar diferença na largura de um elemento. Para resolver use:

```css
box-sizing: border-box;
```

## Border (e outline)

- As bordas das caixa
- border-style | border-width | border-color

### Outline

- difere em 4 sentidos:
    * Não modifica o tamanho da caixa, pois não é parte do Box Model
    * Poderá ser diferente de retangular
    * Não permite ajustes individuais
    * Mais usado pelo user agent para acessibilidade
