
let videos = [
      {
            name:'Aula equilíbrio emocional através da Roda Medicinal Xamânica',
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/cv9OauNc1Qk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      },
      {
            name:'Como se tornar um Curandeiro | Medicina da Floresta',
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Jq-I9BDriQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      },
      {
            name:'Como Desenvolver a Mediunidade | Medicina da Floresta',
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/5LtX7x2DDzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      },
      {
            name:'Terapia Xamânica | Medicina da Floresta',
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/sehj1mbRV48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      },
      {
            name:'Como proteger o nosso destino | Medicina da Floresta',
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZhmxSce8VHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      },
      {
            name:'Proteção Espiritual | Medicina da Floresta',
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/HkqWv0UDKP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      },
      {
            name:'Cura Espiritual | Medicina da Floresta',
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/aiUQwVeXfpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      },
      {
            name: 'Descubra qual a sua família espiritual',
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9QsR994Tuj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      },
      {
            name:'Vida após a vida na Visão do Xamanismo | Medicina da Floresta',
            content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IqJOf-drj7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      },
]
let images = [
      {
            src: '../assets/payContent.jpg',
            alt: 'pay me now'
      }
]
let handleModal= {
      open(){
            document.querySelector('aside').classList.remove('disable')
      },
      close(){
            document.querySelector('aside').classList.add('disable')
      }
}


let Dom = {
      count: 0,
      imageIndex:0,
      sectionContent(content= ''){
            
            Dom.count ++
          
            if(Dom.count === 2 ){
                  
                  let html =
                  
                 
                        `
                        <section class="video">
                              <div class="iframeBox">
                                    ${content}
                                    <a href="https://serenus.futuro-agora.com/"></a>

                                    <img src="${images[Dom.imageIndex].src}" alt="${images[Dom.imageIndex].alt}" onclick="handleModal.open()">
                              </div>     
                        </section>
                        
                        `
                
                  Dom.count = 0
                 
                  
                  
                  
                  return html
            }
            else{
                  let html =
                  `
                        <section class="video">
                              <div class="iframeBox">
                                    ${content}
                                    
                              </div>     
                        </section>
                  
                  `
              return html
            }       
      },
      createSection(video = {name:'', content:''}){
            let section = document.createElement('section')
            section.innerHTML += Dom.sectionContent(video.content)
            return section
      },
      insertInBody(){
            let allVideos = document.getElementById('allVideos')
            videos.forEach(video=>{
                  let section = Dom.createSection(video)
                  allVideos.appendChild(section)
            })  
      }
}
let app = {
      init(){
            try {
                  Dom.insertInBody()
            } catch (error) {
                  console.log(error.message)
            }
      }
}
app.init()


