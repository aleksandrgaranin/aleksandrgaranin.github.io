const contactBtn = document.querySelector('#contacts');
const productsBtn = document.querySelector('#products');
const contactsEl = document.querySelector('#footer');
const productListEl = document.querySelector('#product-list');

const moveTo =(coordEl)=> {
    coordEl.scrollIntoView({'behavior':'smooth'})
}

contactBtn.addEventListener('click', ()=>moveTo(contactsEl))
productsBtn.addEventListener('click', ()=>moveTo(productListEl))

// Contact form

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