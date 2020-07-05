$(document).ready(function() {
    let biblia = axios.get("https://bibleapi.co/api/books/")
    .then(function(r){
        $('#bookName').change(() => {
            let bookName = $('#bookName').val()
            let bible = r.data
              for(i=0;i<bible.length;i++){
                  const { abbrev, chapters, ...book} = bible[i]
                   if(bookName == abbrev.pt) {
                       document.getElementById('capNumber').innerHTML = ''
                       for(let i=1; i <= chapters; i++){
                           let opCaps = document.createElement('option')
                           opCaps.innerHTML = i
                           opCaps.value = i
                           document.getElementById('capNumber').appendChild(opCaps)
                       }
                   }  
           }
        })
    })


    .catch(error => console.log(error))

})


$('#btnSearch').click(() => {
    let bookName = $('#bookName').val()
        let capNumber = $('#capNumber').val()
            let version = $('#version').val()
                let content = document.getElementById('content')
                    content.innerHTML = ''

    axios.get("https://bibleapi.co/api/verses/"+version+"/" + bookName + "/" + capNumber)
    .then(r => {
        let bible = r.data
                let {name, ...book} = bible.book
                    let {number, verses} = bible.chapter
                        let title = document.createElement('h1')    
                            title.innerHTML = name+" "+number
                                let hr = document.createElement('hr')

                            let verse = bible.verses
                        let ol = document.createElement('ol')                        
                    for(let i = 0; i < verse.length; i++) {
                let verses = verse[i].text
            let li = document.createElement('li')
        li.innerHTML = verses
    content.appendChild(title)
        content.appendChild(ol)
            ol.appendChild(li)
                    }
    })
})









/*
1 -  ADICIONAR O SELECT DE VERSÍCULOS CASO O USUÁRIO DESEJE BUSCAR SOMENTE POR UM VERSÍCULOS
2 -  ADICIONAR UM SELECT PARA BUSCAR NEM OUTRAS VERSÕES DA BIBLIA(VERSÕES DISPOÍVEIS NA DOCUMENTAÇÃO DA API)
3 -  ADICIONAR UM BOTAR DE PRÓXIMO E ANTERIOR PARA OS CAPÍTULOS
4 -  ADICONAR UM BOTÃO COPY CASO O USUÁRIO DESEJA COPIAR UM VERSÍCULO OU TODO UM CAPÍTULO FORMATADO
5 -  TRABALHAR NA RESPONSIVIDADE E NO LAYOUT
*/