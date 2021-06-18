/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



function showPage(list, page) {

   
   for (let i = 0; i < data.length; i++) {
      // Declare all elements of student list 
      const studentList = document.querySelector('ul.student-list');
      const image = document.createElement('img');
      const li = document.createElement('li');
      const studentDiv = document.createElement('div');
      let h3 = document.createElement('h3');
      const spanEmail = document.createElement('span');
      const joinedDiv = document.createElement('div');
      const spanJoined = document.createElement('span');

      //Adding the content to each element
      let img = data[i].picture.large
      image.src = img;
      h3.textContent = `${data[i].name.first} ${data[i].name.last}`;
      spanEmail.textContent = data[i].email;
      spanJoined.textContent = `Joined ${data[i].registered.date}`;

     
      //Designating class name to each element
      studentDiv.className = "student-details"
      joinedDiv.className = "joined-details"
      li.className = "student-item cf"
      image.className = "avatar";
      spanEmail.className = "email";
      spanJoined.className = "date";

      //Appeneding each element to page
      studentDiv.appendChild(image);
      studentDiv.appendChild(h3);
      studentDiv.appendChild(spanEmail);
      joinedDiv.appendChild(spanJoined);
      li.appendChild(studentDiv);
      li.appendChild(joinedDiv);
      studentList.appendChild(li);
      
   }
}
showPage();
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
let pages = data.length / 9;
let pageNumber = (Math.ceil(pages));

function addPagination() {
   const divPagination = document.querySelector('div.pagination');
   for (let i = 1; i <= pageNumber; i++) {
      const linkList = document.querySelector('ul.link-list');
      const li = document.createElement('li');
      const button = document.createElement('button');

      button.textContent = i;

      button.type = 'button';

      li.appendChild(button);
      linkList.appendChild(li);
      
      button.addEventListener('click', () => {
         if (button.className === '') {
         button.className = 'active';
         } else {
            button.className = '';
         }
      })

   }
}

addPagination();

// Call functions
