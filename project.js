// class Item {
//     constructor(name) {
//         this.name = name;
//         this.price = [];
   
//     }
//     addItem(name, price) {
//         this.name.push(new Item(name, price));
//     }
// }

 
// class Price {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class ItemService {                                                                                                                                                                                                
//     static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';


//     static getAllItem() {
//         return $.get(this.url);

//     }
//     static getItem(id) {
//         return $.get(this.url + `/${id}`);
//     }

//     static createItem(item) {
//         return $.post(this.url, item);
//     }
//     static updateItem(item) {
//         return $.ajax({
//            url: this.url + `/${item._id}`,
//            dataType: 'json',
//            date: JSON.stringify(item),
//            contentType: 'application/json',
//            type: 'CREATE'
//         });

//     }

//     static deleteItem(id) {
//         return $.ajax({
//             url: this.url + `/${id}` ,
//             type: 'DELETE'
//         });
//     }

// }



// class DOMManager {
//     static items;




//     static getAllItem() {
//         ItemService.getAllItem().then(items => this.render(items));
//     }


//      static createItem(name) {
//         console.log('This is the create item function')
//         ItemService.createItem(new Item(name))
//         .then(() => {
//             return ItemService.getAllItem();
//         })
//         .then((items) => this.render(items));
//      }
//     static deleteItem(id) {
//         ItemService.deleteItem(id)
//         .then(() => {
//             return ItemService.getAllItem();
//         })
//         .then((items) => this.render(items));
//     }
    
//     function deleteUser(id) {
//         $.ajax(`${STUDENT_ROSTER_URL}/${id}`, {
//           type: 'DELETE',
//         })
//       }

//     static render(items) {
//         this.items = items;
//         $('#app').empty();
//         for (let item of items) {
//             $('#app').prepend(
//                `<div id="${item._id}" class ="card">
//                  <div class='card-header'>
//                     <h2>${item.name}</h2>
//                     <buttom class="btn btn-danger" onclick="DOMManager.deleteItem('${item._id}')">Delete</buttom>
//                  </div>
//                 <div class='card-body'>
//                   <div class = "card">
//                       <div class ="row">
//                              <div class ="col-sm">
//                               <input type="text" id="${item._id}-item-name" class = "form-control" placeholder= "Item Name">
                            
//                             </div>
//                             <div class = "col-sm">
//                               <input type="text" id="${item._id}-item-price" class = "form-control" placeholder= "Item Name">
//                              </div>
//                          </div>
//                         <button id="${item._id}-new-item" onclick="DOMManager.addItem('${item._id}')" class = "btn btn-primary form-control">Add</button>
//                      </div>
//                   </div>
//              </div><br>`
//             );
//             for (let price of item.price) {
//                $(`#${item._id}`).find('.card-body').append (     


                
//                 )
                    
                

//             }
//         }
//     }
            
// }       

// $('#list-new-item-for-sale').click(() => { 
//     console.log("Am I working")
//     DOMManager.createItem()
// });

// DOMManager.getAllItem();


// // const textbox = $('textbox')

// // function sendMessage() {
// //     const newMessage = {
       
// //         text: textbox.val(),
// //     }
// // }
// $.get(STUDENT_ROSTER_URL).then((data) =>
//   data.map((student) => {
//     $('tbody').append(
//       $(`
//     <tr>
//       <td>${items.id}</td>
//       <td>${Price.id}</td>
//       <td>${student.researchAssignment}</td>
//       <td>
//         <button onclick="deleteUser(${items.id})"}>🗑</button>
//       </td>
//     </tr>`)
//     )
//   })
// )

// $.get(STUDENT_ROSTER_URL).then((data) =>
//   data.map((student) => {
//     $('tbody').append(
//       $(`
//     <tr>
//       <td>${student.id}</td>
//       <td>${student.fullName}</td>
//       <td>${student.researchAssignment}</td>
//       <td>
//         <button onclick="deleteUser(${student.id})"}>🗑</button>
//       </td>
//     </tr>`)
//     )
//   })
// )
// $('#submitStudent').click(function () {
//     $.post(STUDENT_ROSTER_URL, {
//       fullName: $('#newName').val(),
//       researchAssignment: $('#newAssignment').val(),
//     })
//   })
//    function deleteUser(id) {
// $.ajax(`${STUDENT_ROSTER_URL}/${id}`, {
//     type: 'DELETE',
//  })
// }
// function updateUser() {
//     id = $('#updateId').val()
  
//     $.ajax(`${STUDENT_ROSTER_URL}/${id}`, {
//       method: 'PUT',
//       data: {
//         fullName: $('#updateName').val(),
//         researchAssignment: $('#updateAssignment').val(),
//       },
//     })
//   }

//   document.getElementById('add').addEventListener('click', () => {
//     let createdDate = new Date();
//     let table = document.getElementById('list');
//     let row = table.insertRow(1);
//     row.setAttribute('id', `item-${id}`);
//     row.insertCell(0).innerHTML = document.getElementById('Favorite-Planet').value;
//     row.insertCell(1).innerHTML = document.getElementById('Distance-From-Earth').value;
//     row.insertCell(2).innerHTML = document.getElementById('Size-of-Planet').value;
    
//     let actions = row.insertCell(3);
//     actions.appendChild(createDeleteButton(id++));
//     document.getElementById('Favorite-Planet').value = '';

let id = 0;


document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('Favorite-Planet').value;
    row.insertCell(1).innerHTML = document.getElementById('Distance-From-Earth').value;
    row.insertCell(2).innerHTML = document.getElementById('Size-of-Planet').value;
    
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('Favorite-Planet').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
}


