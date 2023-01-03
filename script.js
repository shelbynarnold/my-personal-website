const para = document.createElement("div");
para.innerHTML = "Whatever man"
document.body.appendChild(para);

const elem = document.getElementById("fenris")
console.log(elem)
 elem.addEventListener('click', (event) => {
    elem.style ="color:red"
 })
