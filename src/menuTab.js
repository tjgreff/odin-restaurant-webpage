function createMenuSection(title) {
    const header = document.createElement("h2");
    header.innerText = title;
    header.classList.add("menuHeader");
    return header;
}

export function buildMenu() {
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    content.appendChild(menu);

    const title = document.createElement("h1");
    title.innerText = "MENU";
    title.classList.add("title");
    menu.appendChild(title);

    menu.appendChild(createMenuSection("Antipasta"));
    menu.appendChild(createMenuSection("Primi Piatto"));
    menu.appendChild(createMenuSection("Secondo Piatto"));
    menu.appendChild(createMenuSection("Dolce"));
    menu.appendChild(createMenuSection("Cocktails / Wine"));
}
