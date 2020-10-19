# AppBiblia 3.0

App de busca de livros da bíblia através de uma API.

![AppBíblia](https://github.com/joaobr200/AppBiblia/blob/master/.github/search_bible.png)

## O que mudou ?

todo código foi refatorado!

Foi adicionado algumas dependencias como Webpack e Babel(Yarn foi o gerenciador de pacotes utilizado), nas versões antigas a funcionalidade da aplicação era por meio de funcões,
nesta nova versão as funções se transforam em Classes adquirindo o paradigma de programação POO (Programação Orientada a objetos),
todas essas classes foram atribuidos a scripts diferente e importados em um script principal para ser compilado para outro script e se adequar
aos navegadores Web!

## API

A API utilizado neste projeto é a [bibleAPI](https://bibleapi.co/) | RESTful API da Bíblia, feita por [Márcio Vinícius Sena](https://github.com/marciovsena).

## Layout

Algumas coisas no layout foi modificado como na página principal que há algumas considerações e créditos ao criador da API a qual utilizo
para fazer a busca dos livros.

![AppBíblia](https://github.com/joaobr200/AppBiblia/blob/master/.github/app%20biblia.png)

## Tratamentos de erros

com a mudança do script atribuindo novos paradigmas facilitou bastante o tratamento na aplicação.

Caso o usuário tiver alguma problema com a requisição uma page de erro sera renderizado com algumas soluções e motivos que possa ter ocorrido esse erro!

![Página de erro](https://github.com/joaobr200/AppBiblia/blob/master/.github/erro_page.png)

## Instalação

```sh
  $ cd AppBiblia

  $ yarn

  $ yarn dev
```
