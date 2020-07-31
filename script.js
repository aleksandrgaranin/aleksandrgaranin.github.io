console.log('its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    };

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    };

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    };

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}

$(document).ready(function(){
    $('.submit').click(function(event){
        
        console.log('clicked button submit')

        var name = $('.name').val()
        var email = $('.email').val()
        var subject =$('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(name.length >= 2){
            statusElm.append('<div><p>Name is valid</p></div>')
        } else {
            event.preventDefault()
            statusElm.append('<div><p style="color:red;">Name is not valid<p></div>')
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div><p>Email is valid</p></div>')
        } else {
            event.preventDefault()
            statusElm.append('<div><p style="color:red;">Email is not valid</p></div>')
        }

        if(subject.length >= 2){
            statusElm.append('<div><p>Subject is valid</p></div>')
        } else {
            event.preventDefault()
            statusElm.append('<div><p style="color:red;">Subject is not valid</p></div>')
        }

        if(message.length > 10){
            statusElm.append('<div><p>Message is long enough</p></div>')
        } else {
            event.preventDefault()
            statusElm.append('<div><p style="color:red;">Message is to short</p></div>')
        }
    })
})