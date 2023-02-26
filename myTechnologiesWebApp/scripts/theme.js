function changeTheme() {
    document.body.classList.toggle("dark");
    const elements = document.querySelectorAll(".techElement");
    elements.forEach(element => {
        element.classList.toggle("darkElem")
    });
    if (document.body.classList.contains("dark")) {
        const elem = document.getElementById("btnThemePic");
        elem.classList.remove("fa-solid", "fa-moon");
        elem.classList.add("fa-solid", "fa-lightbulb")
    }
    else {
        const elem = document.getElementById("btnThemePic");
        elem.classList.remove("fa-solid", "fa-lightbulb");
        elem.classList.add("fa-solid", "fa-moon")
    }
    const btnRemove = document.getElementById("btnRemoveAll");
    btnRemove.classList.toggle("darkText")
}