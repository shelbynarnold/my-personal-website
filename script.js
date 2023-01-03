const elem = document.getElementById("fenris")
 elem.addEventListener('click', (event) => {
    if (elem.style.color === "red") {
      elem.style ="color:black"
       }
       else {
         elem.style = "color:red"
       }
 })
