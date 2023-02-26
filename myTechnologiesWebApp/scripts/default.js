let timer;

function addItem() {
    const text = document.getElementById("inputText").value;
    if (text && text.lenght != 0) {
        const container = document.getElementById("techGrid");
        const div = document.createElement("div");
        div.classList.add("techElement");
        div.textContent = text;
        container.appendChild(div);
        document.getElementById("inputText").value = "";

        setTimeout(() => {
            div.classList.add("create", "noSelect");
            if (document.body.classList.contains("dark")) {
                div.classList.add("darkElem");
              }
          }, 10);
    } else {
        const text = document.getElementById("inputText");
        text.placeholder = "Please enter a value...";
        text.style.color = '#FF0000';
        text.style.fontWeight = "bold"
        clearTimeout(timer);
        timer = setTimeout(() => {
            text.placeholder = "Enter new technology...";
            text.style.color = '#000000';
            text.style.fontWeight = "normal"
        }, 2500);
    }
}

function removeAll() {
    const container = document.getElementById("techGrid");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}