document.addEventListener('DOMContentLoaded', function() {

// Declaring the variables
const userInput = document.getElementById('userinput');
const button = document.getElementById('add');
const userlist = document.getElementById('list');

// Adding the functionality to the add button.
button.addEventListener('click', function(){
    const txtContent = userInput.value.trim();
  
    if (txtContent == '') {
       alert("Plese enter something in the text field")
    }
    else{
      createTheList();
      userInput.value = '';
    }

});

// Determining the create list function to add functinality to the list.
function createTheList(list){
    const li = document.createElement('li');
    li.classList.add("list-contain");

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.classList.add("check-contain");

    const txtlabel = document.createElement('label');
    txtlabel.textContent = userInput.value;

    const delBtn =  document.createElement('button');
    delBtn.textContent = 'Delete Item';
    delBtn.classList.add("delBtn-contain");

    li.appendChild(check);
    li.appendChild(txtlabel);
    li.appendChild(delBtn);
    userlist.appendChild(li);

    // Creating the function for the delete button.
    delBtn.addEventListener('click', function(){
        li.remove();
    });

    // Creating the functionality for checkbox
    check.addEventListener('change', function(){
        if(check.checked){
            playSound();
            userlist.appendChild(li);
            li.style.textDecoration = "line-through";
            li.style.backgroundColor = "Green";
        }else{
            userlist.prepend(li);
            li.style.backgroundColor = "none";
            li.style.textDecoration = "none";
        }
    });

    //Creating the sound function
    function playSound(){
        const audio = new Audio ('audio/sound.mp3');
        audio.play()
    }
}
});
