# HTTP

-   HyperText Transfer Protocol

    -   Protocolo de Transferência de HyperTexto
    -   Conjunto de regras

-   Visão Geral
    -   Permite troca de informações e dados na internet
    -   Uma troca de mensagens
    -   HTML, CSS, Scripts, Imagens, Vídeo
    -   Uma chamada para cada um desses recursos

## Conceitos

-   Simples
-   Cliente/Servidor
-   Stateless
    -   Não guarda informações
    -   Não existe relação entre conexões
    -   Sessões (cookies, storages)
-   Extensível
    -   Diversas trocas entre cliente-servidor
    -   Headers
    -   Body

### Cliente

-   User Agent
    -   Browser
    -   Dá início à comunicação
-   Pedidos
    -   Ações do cliente
    -   Métodos HTTP

### Servidor

-   Se apresenta como uma máquina
-   Preparada para ouvir e processar
-   Vários servidores em um computador
-   Resposta
    -   Headers
    -   Status Code
    -   Body

### Proxies

-   Representantes
-   Fica entre o cliente e o servidor
-   Ajudam a fazer o transporte dos dados
-   Diversas funções
    -   Cache
    -   Filtro (antivírus, controle parental)
    -   Load balancing
    -   Autenticação
    -   Autorização

## URI

-   Uniform Resource Identifier
-   Identificação de um recurso
-   Nome (URN)
-   Localização (URL)

### Resource

-   O alvo do pedido
-   Qualquer coisa identificável/Entidade
    -   Digital (email)
    -   Abstrata (sessão, autenticação)
    -   Física (produtos, usuários)

### URL

-   Uniform Resource Locator (Endereço)
-   Componentes
    -   Obrigatórios (protocolo, domínio)
    -   Opcionais [subdomínio(www), path (/algumaCoisa), parâmetros(?q=valor), porta (80, 443), âncora (#)]

### URN

-   Uniform Resource Name
-   Recurso encontrado pelo nome, mesmo não sabendo o local dele
-   urn:isbn:1234567890

## Messages

### Mensagens

-   HTTP/1.1
    -   Legível
    -   Texto
-   HTTP/2
    -   Estrutura binária
    -   Otimizações
    -   Mesma maneira que a versão 1.1

### Request

-   Request Line

    -   Method
    -   Protocol version
    -   URI

-   Body
-   Headers

### Response

-   Protocol version
-   Status code
-   Headers
-   Status message (corpo)

## Methods

### Introdução

-   Abordaremos os mais usuais na programação.

### HTTP Methods

-   Conjunto de métodos HTTP
-   Ação que o cliente deseja operar
-   Podem ser chamados de Verbos HTTP
-   Cada um possui a sua semântica
-   Características
    -   Seguro
        -   Não altera o estado do servidor
        -   Somente leitura
        -   GET, HEAD, OPTIONS
        -   Servidor é responsável pela segurança
    -   Idempotente
        -   Ao executar o método a resposta será sempre a mesma
        -   Todos os seguros + PUT e DELETE
        -   Status code poderá ser diferente
        -   Servidor tem a responsabilidade de retornar os dados da mesma maneira

### JSON Server

https://github.com/typicode/json-server

### OPTIONS

-   Informações sobre disponibilidade da requisição

-   curl -X OPTIONS http:/localhost:3000/posts -i
-   Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE

-   Características
    -   Seguro: SIM
    -   Idempotente: SIM
    -   BODY
        -   REQUEST: NÃO
        -   RESPONSE: NÃO
    -   Uso em formulários HTML: NÃO
    -   Cacheable: NÃO

### GET

-   Pegar um recurso
-   Somente recebe dados
-   curl http://localhost:3000/posts
-   curl http://localhost:3000/posts\?q\=json

-   Características
    -   Seguro: SIM
    -   Idempotente: SIM
    -   BODY
        -   REQUEST: NÃO
        -   RESPONSE: SIM
    -   Uso em formulários HTML: SIM
    -   Cacheable: SIM

### HEAD

-   Semelhante ao GET, porém...
-   ... recebemos somente o cabeçalho
-   curl -I http://localhost:3000/posts

-   Características
    -   Seguro: SIM
    -   Idempotente: SIM
    -   BODY
        -   REQUEST: NÃO
        -   RESPONSE: NÃO
    -   Uso em formulários HTML: NÃO
    -   Cacheable: SIM

### POST

-   Publicar/Cadastrar um Recurso

-   Características

    -   Seguro: NÃO
    -   Idempotente: NÃO
    -   BODY
        -   REQUEST: SIM
        -   RESPONSE: Depende
    -   Uso em formulários HTML: SIM
    -   Cacheable: depende do header

-   curl -d '{"id": 2, "title": "json-server-2", "author": "douglas borges"}' -H "Content-type: application/json" -X POST http://localhost:3000/posts

### PUT

-   Criar um novo ou atualiza um recurso

-   Diferença entre POST?

    -   PUT é idempotente (resposta sempre é a mesma)

-   Criação
    -   Status code 201
-   Atualização

    -   Status code 204 ou 200

-   Características

    -   Seguro: NÃO
    -   Idempotente: SIM
    -   BODY
        -   REQUEST: SIM
        -   RESPONSE: NÃO
    -   Uso em formulários HTML: NÃO
    -   Cacheable: NÃO

-   curl -d '{"name": "douglas"}' -H "Content-type: application/json" -X PUT http://localhost:3000/profile

### PATCH

-   Modificação parcial de um recurso
-   Diferença entre o PUT?

    -   PUT faz alteração de todas as propriedades do recurso

-   Características

    -   Seguro: NÃO
    -   Idempotente: NÃO
    -   BODY
        -   REQUEST: SIM
        -   RESPONSE: SIM
    -   Uso em formulários HTML: NÃO
    -   Cacheable: NÃO

-   curl -d '{"title": "my-title"}' -H "Content-type: application/json" -X PATCH http://localhost:3000/posts/1

### DELETE

-   Remover um recurso

-   Status code

    -   202: Accepted
    -   204: No content
    -   200: OK

-   Características

    -   Seguro: NÃO
    -   Idempotente: SIM
    -   BODY
        -   REQUEST: POSSIBILIDADE
        -   RESPONSE: POSSIBILIDADE
    -   Uso em formulários HTML: NÃO
    -   Cacheable: NÃO

-   curl -X DELETE http://localhost:3000/posts/2

## Headers

### O que são?

-   Cabeçalhos
-   Informações adicionais para o pedido ou resposta
-   Nome: valors
    -   content-type: application/json

### Entendendo pelo contexto

-   General
-   Request headers
-   Response headers

### General

-   Request URL
-   Request Method
-   Status Code
-   Remote Address
-   Referrer Policy

### Request

-   authority
-   method
-   path
-   scheme
-   accept
-   cookies
-   user-agent
-   ...

### Response

-   cache-control
-   content-length
-   content-encoding
-   date
-   expires
-   set-cookie
-   ...

## Status

-   100

    -   100: Continue

-   200

    -   200: OK (GET,POST)
    -   201: Created (PUT)
    -   204: No content (DELETE,PUT)

-   300

    -   301: Moved permanently (GET)
    -   308: Permanent redirect (POST)
    -   302: Found (GET)
    -   307: Temporary redirect

-   400

    -   400: Bad request
    -   401: Unauthorized
    -   403: Forbidden
    -   404: Not found
    -   405: Method not allowed
    -   429: Too many requests

-   500
    -   500: Internal server error
    -   503: Service unavailable
