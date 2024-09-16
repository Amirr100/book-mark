var bookNameInput = document.getElementById("bookName")
var websiteUrlInput = document.getElementById("websiteUrl")

var bookmarkList = [];

if (localStorage.getItem("websiteContainer") !== null) {
    bookmarkList = JSON.parse(localStorage.getItem("websiteContainer"));
  }
  
  displayData();
  


function addItem() {
    var website = {
        name: bookNameInput.value,
        url: websiteUrlInput.value,
    }

    bookmarkList.push(website);
    localStorage.setItem("websiteContainer", JSON.stringify(bookmarkList));
    console.log(bookmarkList)
    clearItem();
    displayData();
}



function clearItem() {

    bookName.value = "";
    websiteUrl.value = "";
}


function displayData(){
var cartona = "";
for( var i =0   ; i < bookmarkList.length     ;  i++    ){

cartona +=`  <tr>
                    <td class="pt-3">${i+1}</td>
                    <td class="pt-3">${bookmarkList[i].name}</td>
                    <td><button class="btn-1  m-auto p-2 bg-success  border-success rounded text-white"><i class="fa-solid fa-eye pe-1"></i><a href="${bookmarkList[i].url}">Visit</a></button></td>
                    <td> <button  onclick="deleteUrl(${i})"  class="  m-auto p-2 bg-danger  border-danger rounded text-white" ><i class="fa-solid fa-trash pe-1"></i>Delete</button></td>
                   
                </tr>`

}

document.getElementById("tableContent").innerHTML = cartona;

}


function deleteUrl(index){
    bookmarkList.splice(index , 1);
    displayData();
}