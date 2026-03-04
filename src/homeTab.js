export function buildHomeTab() {
    const content = document.getElementById("content");

    const img = document.createElement("img");
    img.classList.add("headerImg");
    img.src = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800";
    img.alt = "Restaurant interior";
    content.appendChild(img);

    const title = document.createElement("h1");
    title.innerText = "Osteria Luigi";
    title.classList.add("title");
    content.appendChild(title);

    const desc = document.createElement("p");
    desc.innerText = "A cozy Italian restaurant directly in the heart of Old Town Lafayette. We serve seasonal dishes crafted from locally sourced ingredients, paired with an intimate atmosphere perfect for any occasion.";
    desc.classList.add("desc");
    content.appendChild(desc);
}