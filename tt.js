itemList=[]
itemList.map(x => "<li>"+x+"</li>")
itemList.map(x => "<li>"+x+"</li>").join("\n")
showlist2output = () =>{
    output.innerHTML = itemList.map(x => "<li>"+x+"</li>").join("\n")
}
addList = (x) =>{
    if(x === "" || itemList.find(e => e===x))return
    else itemList.push(x)
}
addbtn = document.querySelector("#add");


showList = () => {
    const ul =document.querySelector("#listItem")
    ul.innerHTML=itemList.map(item => "<li><button data-item='"+item+"'>x</button>"+item+"</li>")
    .join("\n")
    ul.querySelectorAll("button").forEach(b=>b.onclick=(e) => {
        removeList(e)
        showList()
    })
    return showList
}

addbtn.onclick = () => {
    const item = document.querySelector("#item").value
    addList(item);
    showList();
}
removeList = (e) => {
    const xbtn = e.target
    const item = xbtn.dataset.item
    const index = itemList.indexOf(xbtn.dataset.item)
    if(index < 0)return
    itemList.splice(index,1) 
}
