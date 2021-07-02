// console.log("this is index")
//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}


function Display(){

}

Display.prototype.add=function(book){
    console.log("adding to UI ")
    tablebody=document.getElementById('tablebody')//get hold of table 
    //string litera to push in table $for getting value
    let uistring=`
                        <tr>
                        <td>${book.name}</td> 
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                      </tr>`
    tablebody.innerHTML+=uistring//add to table + for multiple row
}

Display.prototype.clear=function(){
    let libraryform = document.getElementById('libraryform');
    libraryform.reset()
}

Display.prototype.validate=function(book){
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show=function(type,showmessage){
let message=document.getElementById('message')
message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>Message!</strong> ${showmessage}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

setTimeout(function(){
    message.innerHTML=''//clear alert after 2sec as we dont want to keep it for long
},2000);// 2000ms

}



//add submit event listener to libraryform
//whenever click on submit execute this
let libraryfor = document.getElementById('libraryform');
libraryfor.addEventListener('submit', libraryformsubmit);


function libraryformsubmit(e) {
    console.log("you have submitted")
    let name = document.getElementById('bookname').value
    let author = document.getElementById('author').value
    let type

    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')

    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }
    let book = new Book(name, author, type)
    console.log(book)
   // e.preventDefault();
    let display=new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Your book has been successfully added')
    }
    else{
        display.show('danger','Sorry you cannot add this book' )
    }
  
    e.preventDefault();

}