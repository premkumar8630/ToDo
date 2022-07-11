let editbtn=document.getElementById("editbtn");
editbtn.addEventListener('click',edit);

let removebtn=document.getElementById("removebtn");
removebtn.addEventListener('click',removeChapter);


let addBtn = document.getElementById('btnid')
        addBtn.addEventListener('click', addChapter)

        function addChapter(e) {
            console.log("starting at function add done")
            let currentBtn = e.currentTarget;
            let currentInput = document.getElementById('inputid');
            console.log(currentInput.value)


            let newline = document.createElement('li');
            // newline.classList.add('list-group-item');
            newline.className = "list-group-item d-flex justify-content-between"
            let currentChapter = currentInput.value;
            newline.innerHTML = `<h3 class="flex-grow-1 ">${currentChapter}</h3> 
                        <button class="btn btn-warning mx-3" onclick="edit(this)">Edit</button>
                        <button class="btn btn-danger" onclick="removeChapter(this)">remove</button>` //newline=newLi
            let parentList = document.getElementById('parentListid')
            parentList.appendChild(newline);
            console.log("at last of function")
        }

        function removeChapter(currentElement) {
            console.log("inner remove")
            currentElement.parentElement.remove();
        }

        function edit(currentElement) {
            if (currentElement.textContent == "Done") {
                currentElement.textContent = "Edit"
                let currentChapterName = currentElement.previousElementSibling.value
                let curHeading = document.createElement('h3');
                curHeading.className = "flex-grow"
                curHeading.textContent = currentChapterName
                currentElement.parentElement.replaceChild(curHeading, currentElement.previousElementSibling)



            } else {

                let currentChapterName = currentElement.previousElementSibling.textContent
                let currentInput = document.createElement('input')
                currentInput.type = "text"
                currentInput.class = "form-control "
                currentInput.placeholder = "enter"
                currentInput.value = currentChapterName
                currentElement.parentElement.replaceChild(currentInput, currentElement.previousElementSibling)
                currentElement.textContent = "Done"
            }


        }
    
