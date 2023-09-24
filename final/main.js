console.log(JSON.parse(localStorage.getItem('owner')))
let userName = document.getElementById('userName')
let resLog = document.getElementById('res-log')
let signOut = document.getElementById('signOut')

if (JSON.parse(localStorage.getItem('owner'))!=null)
{
    console.log(JSON.parse(localStorage.getItem('owner')))
    
    resLog.classList.add('hide')
    userName.classList.remove('hide')
    signOut.classList.remove('hide')
}

signOut.addEventListener('click', function(){
    localStorage.removeItem('owner')

    resLog.classList.remove('hide')
    userName.classList.add('hide')
    signOut.classList.add('hide')
})

