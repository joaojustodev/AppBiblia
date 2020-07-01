function searchBibleBook() {
    let bookName = document.getElementById('bookName').value
    let chapter = document.getElementById('capNumber').value

    reqApi(bookName, chapter)
}


function reqApi(bookName, chapter) {
    fetch("https://bibleapi.co/api/verses/nvi/" + bookName + "/" + chapter)
        .then(r => r.json())

        .then(data => {
            let content = document.getElementById('content')
            content.innerHTML = ''

            let book = document.createElement('h1')
            book.innerHTML = data.book.name
            let chapter = document.createElement('small')
            chapter.innerHTML = data.chapter.number
            let hr = document.createElement('hr')

            let ol = document.createElement('ol')
            let verses = data.verses

            for (let i = 0; i < verses.length; i++) {
                let versesText = verses[i]
                console.log(versesText.text)
                let li = document.createElement('li')
                li.className = 'verses'

                content.appendChild(book)
                content.appendChild(chapter)
                content.appendChild(hr)
                content.appendChild(ol)
                li.innerHTML = versesText.text
                ol.appendChild(li)
            }

        })


}
























/*
1 -  FAZER OS TRATAMENTOS DE ERRO CASO A API NAO SEJA REQUISITADA, SE DIGITAR UM CAPITULO NAO EXISTENTE NO LIVRO.
2 -  TRANSFORMAR O INPUT DE CAPÍTULOS EM SELECT, MOSTRAR AS OTPTION DE ACORDO COM NUMERO DE CAPTULOS EXISTENTES NO LIVRO!
3 -  ADICIONAR O SELECT DE VERSÍCULOS CASO O USUÁRIO DESEJE BUSCAR SOMENTE POR UM VERSÍCULOS
4 -  ADICIONAR UM SELECT PARA BUSCAR EM OUTRAS VERSÕES DA BIBLIA(VERSÕES DISPONÍVEIS NA DOCUMENTAÇÃO DA API)
5 -  ADICIONAR UM BOTAR DE PRÓXIMO E ANTERIOR PARA OS CAPÍTULOS
6 -  ADICONAR UM BOTÃO COPY CASO O USUÁRIO DESEJA COPIAR UM VERSÍCULO OU TODO UM CAPÍTULO FORMATADO
7 -  TRABALHAR NA RESPONSIVIDADE E NO LAYOUT
*/