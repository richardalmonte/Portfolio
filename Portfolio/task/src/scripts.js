
    let modal = document.getElementById("project_flashCard");
    let openCloseButton = document.getElementById("openCloseButton");

    openCloseButton.onclick= function (){
        modal.style.display= "block";
    }
    window.onclick = function (event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    }


