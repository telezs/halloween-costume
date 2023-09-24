let imgInput = document.getElementById('formFile')
let theme = document.getElementById('themeList')
let caption = document.getElementById('captionText')
let solo = document.getElementById('solo')
let duo = document.getElementById('duo')
let trio = document.getElementById('trio')
let group = document.getElementById('group')
let submit = document.getElementById('submit')
let formEle = document.getElementById("form")
console.log(document.getElementById('formFile').files)

imgInput.addEventListener('change', function( event){

    const image = event.target.files[0]
    const reader = new FileReader();

    reader.addEventListener('load', ()=> {
        localStorage.setItem('image', reader.result)
        let reviewImg = document.getElementById('imgCheck')
        reviewImg.src = localStorage.getItem('image')
    }) ;

    if (image) {
        reader.readAsDataURL(image);
    }
    // let reviewImg = document.getElementById('imgCheck')
    // reviewImg.src = URL.createObjectURL(document.getElementById('formFile').files[0])
})

submit.addEventListener('click', function(){
    if (JSON.parse(localStorage.getItem('owner'))!==null) {
        let form= {
            urlImg: localStorage.getItem('image'),
            themes: theme.value,
            caption: caption.value,
            types: {
            solo: solo.checked,
            duo: duo.checked,
            trio: trio.checked,
            group: group.checked,
        }
        }
        localStorage.setItem(JSON.parse(localStorage.getItem("owner")),JSON.stringify(form))
    }
    else {
        alert("You have not signed up. ")
    }
    
})


 