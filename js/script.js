/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

function showPage(list, page) {
  for (let i = list; i < page; i++) {
    // Declare all elements of student list
    const studentList = document.querySelector("ul.student-list");
    const image = document.createElement("img");
    const li = document.createElement("li");
    const studentDiv = document.createElement("div");
    let h3 = document.createElement("h3");
    const spanEmail = document.createElement("span");
    const joinedDiv = document.createElement("div");
    const spanJoined = document.createElement("span");

    //Adding the content to each element
    let img = data[i].picture.large;
    image.src = img;
    h3.textContent = `${data[i].name.first} ${data[i].name.last}`;
    spanEmail.textContent = data[i].email;
    spanJoined.textContent = `Joined ${data[i].registered.date}`;

    //Designating class name to each element
    studentDiv.className = "student-details";
    joinedDiv.className = "joined-details";
    li.className = "student-item cf";
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

let pages = data.length / 9;
let pageNumber = Math.ceil(pages);

function addPagination() {
  const linkList = document.querySelector("ul.link-list");

  for (let i = 1; i <= pageNumber; i++) {
    const divPagination = document.querySelector("div.pagination");
    const linkList = document.querySelector("ul.link-list");
    const li = document.createElement("li");
    const button = document.createElement("button");
    const removeList = document.querySelector("ul.student-list");
    

    button.textContent = i;
    button.value = i;

    button.type = "button";
    button.className = '';
    
    

    li.appendChild(button);
    linkList.appendChild(li);

    const buttonActive = document.querySelector('button');
    buttonActive.className = 'active';

    let start = button.value * 9 - 9;
    let stop = start + 9;

    button.addEventListener("click", (e) => {

       // Makes sure stop value isnt larger than the end of the list
      if (stop > data.length) {
        stop = data.length;
      }

      //button clicked is targeted
      e.target = document.querySelector('button')

      // finds button that has a class of active
      const clearButton = document.querySelector('button.active');

      //deletes class 
      clearButton.className = '';

      //if button clicked is empty class sets to active class
      if (e.target.className === '') {
        
        button.className = 'active';
      }
      
      //clears current list to empty string
      removeList.innerHTML = "";
      //shows a new 9 people 
      showPage(start, stop);
    });
  }
  
}

addPagination();
showPage(0, 9); // starts page on the first 9 people 

