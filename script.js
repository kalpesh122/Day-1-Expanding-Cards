const p=document.querySelectorAll('.panel')
p.forEach((panel)=>{
      panel.addEventListener('click',()=>{
          removeActiveClasses()
          panel.classList.add('active')
      })
})
function removeActiveClasses(){
    p.forEach(panel=>{
        panel.classList.remove('active')
    })
}