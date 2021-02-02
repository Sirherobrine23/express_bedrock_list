fetch("http://localhost:3256/mcpe").then(response => response.json()).then(server_data => {
    for (let index in server_data) {
        const option = document.createElement('option')
        option.value = server_data[index].url
        option.innerHTML = server_data[index].name
        document.getElementById("files").appendChild(option)
        console.log(option)
    }
});
function sele(thi){
    const value = document.getElementById("value")
    value.setAttribute("href", thi.options[thi.selectedIndex].value)
    value.setAttribute("download", '')
    value.innerHTML = `Download: ${thi.options[thi.selectedIndex].text}`
    
}