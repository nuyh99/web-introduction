function getAlert() {
    let count=0
    for(let i=1; i<=5; i++){
        if(document.getElementById(i).checked)
            count++
    }

    let name=document.getElementById("name").value

    alert(`${name}님, 저와 ${count}개의 취향이 같으시네요!`)
}
