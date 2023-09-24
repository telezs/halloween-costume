let emailList = JSON.parse(localStorage.getItem("user_email_list")) || [] 
    
for (email of emailList) {
        let info = JSON.parse(localStorage.getItem(email))
        let type = ""
        console.log(info)
        if (info) {
            for (let key in info.types) {
                if (info.types[key]) {
                    type = key
                }
            }
        }
        console.log(info.urlImg)
        
        if (type =="solo") {
            let soloEle = document.querySelector(".solo-cards")
            soloEle.innerHTML += `
                  <div class="card">
                      <img src="${info.urlImg}" class="card-img-top img-fluid" alt="...">
                      <h5 class="fw-bold card-title">${info.caption}</h5>
                      <p class="card-text">${info.themes}</p>
                  </div>
            `
        }
        
        else if (type =="duo") {
            let duoEle = document.querySelector(".duo-cards")
            duoEle.innerHTML += `
                  <div class="card">
                      <img src="${info.urlImg}" class="card-img-top img-fluid" alt="...">
                      <h5 class="fw-bold card-title">${info.caption}</h5>
                      <p class="card-text">${info.themes}</p>
                  </div>
            `
        }
        
        else if (type =="trio") {
            let trioEle = document.querySelector(".trio-cards")
            trioEle.innerHTML += `        
                  <div class="card">
                      <img src="${info.urlImg}" class="card-img-top img-fluid" alt="...">
                      <h5 class="fw-bold card-title">${info.caption}</h5>
                      <p class="card-text">${info.themes}</p>
                  </div>
            `
        }
        else {
            let groupEle = document.querySelector(".group-cards")
            groupEle.innerHTML += `
                  <div class="card">
                      <img src="${info.urlImg}" class="card-img-top img-fluid" alt="...">
                      <h5 class="fw-bold card-title">${info.caption}</h5>
                      <p class="card-text">${info.themes}</p>
                  </div>
            `
        }
    
}


// let data = JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem("owner")))) 
// console.log(data.urlImg)
// function render () {
//     let proEle = document.getElementById("submissions")
//     console.log(proEle)
 
//      if(proEle){
//          proEle.innerHTML += `
//     <div class="col-sm-3">
//          <div class="card">
//              <img src="${data.urlImg}" class="card-img-top img-fluid" alt="...">
//              <h5 class="fw-bold card-title">${data.caption}</h5>
//              <p class="card-text">${data.themes}</p>
//          </div>
//      </div>
//      `
//      }
     
    
//  }
 
//  render()
 