//info from submit turns into an object using book function
//object goes into array
//for each calls the cardCreator function to make cards with the array objects
//for each then sends the cards to the bookshelf

let bookHolderArray=[]
i=0
const bookshelf= document.querySelector(".bookshelf")





//takes info from a form
function Book(title, author, numPages, read){
    this.title =title
    this.author= author
    this.numPages= numPages
    this.read = read
    this.dataAttribute = bookHolderArray.length
}


function addToBookShelf(){
    tempBook = new Book(userTitle.value,userAuthor.value,userNumPages.value,userRead.value)
    bookHolderArray.push(tempBook)
    };


function cardCreator(book){
    const card = document.createElement("div")
    card.classList.add("card")

    const cardTitle = document.createElement("h2")
    cardTitle.classList.add("cardTitle")
    cardTitle.textContent = bookHolderArray[i].title

    const cardAuthor = document.createElement("div")
    cardAuthor.classList.add("cardAuthor")
    cardAuthor.textContent = "By: " + bookHolderArray[i].author

    const cardNumPages = document.createElement("div")
    cardNumPages.classList.add("cardNumPages")
    cardNumPages.textContent = "Pages: " + bookHolderArray[i].numPages
    
    const cardRead = document.createElement("button")
    cardRead.classList.add("cardRead")

    
    if(bookHolderArray[i].read=="Yes"){
        cardRead.classList.add("Read")
        cardRead.textContent="Read"
    }
    else{
        cardRead.classList.add("notRead")
        cardRead.textContent="Not Read"
    }
    cardRead.addEventListener("click",(e)=>{
        dataValue= e.target.closest(".card").getAttribute("data-key")  
            for(dataValue in bookHolderArray){
                    if(dataValue==bookHolderArray[(dataValue)].dataAttribute){
                        if(cardRead.textContent=="Not Read"){
                            cardRead.classList.remove("notRead")
                            cardRead.classList.add("Read")
                            cardRead.textContent="Read"
                        }
                        else if(cardRead.textContent=="Read"){
                        cardRead.classList.remove("Read") 
                        cardRead.classList.add("notRead")
                        cardRead.textContent="Not Read"
                    }
            }}
        })
    
   
    const cardDelete = document.createElement("button")
    cardDelete.classList.add("cardDelete")
    cardDelete.addEventListener("click", ()=>{
        bookshelf.removeChild(card)
    })
    cardDelete.textContent="x"

    const hinge = document.createElement("div")
    hinge.classList.add("bookHinge")

    card.appendChild(hinge)
    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    card.appendChild(cardNumPages)
    card.appendChild(cardRead)
    card.appendChild(cardDelete)
    bookshelf.appendChild(card)
}


const bookInput = document.querySelector(".addBook")
const form = document.querySelector("form")

//form elements
const inputSubmit = document.querySelector(".inputSubmit")
const userTitle = document.querySelector(".userTitle")
const userAuthor = document.querySelector(".userAuthor")
const userNumPages = document.querySelector(".userNumPages")
const userRead = document.querySelector(".userRead")

function formReadChange(){
    if(userRead.textContent=="Yes"){
        userRead.textContent= "No"
        userRead.value="No"
        userRead.classList.add("notRead")
        userRead.classList.remove("Read")
    }
    else{
        userRead.textContent="Yes"
        userRead.value="Yes"
        userRead.classList.add("Read")
        userRead.classList.remove("notRead")
    }
}

function clearForm(){
    userTitle.value = ""
    userAuthor.value = ""
    userNumPages.value = ""
    userRead.textContent = "No"
    userRead.value=""
    userRead.classList.add("notRead")
    userRead.classList.remove("Read")
}

//converts form data into object
inputSubmit.addEventListener("click",(e)=>{
        e.preventDefault()
        addToBookShelf()
        cardCreator(bookHolderArray[2])
        clearForm()
        i+=1
    })


//The form creation functionality
let formDataActive=false
document.addEventListener("click",(e)=>{
    if(e.target.closest(".formStyle")){
        return
    }
    else if(e.target.closest(".addBook")){
        return
    }
    form.classList.remove("formStyle")
    form.classList.add("formInvisible")
    formDataActive=false
})
 bookInput.addEventListener("click", ()=>{
    if(formDataActive==false){
        form.classList.remove("formInvisible")
        form.classList.add("formStyle")
        formDataActive = true
        }
    else if (formDataActive==true){
        form.classList.remove("formStyle")
        form.classList.add("formInvisible")
        formDataActive = false
    }
        
})

   