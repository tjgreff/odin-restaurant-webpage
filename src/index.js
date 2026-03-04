import "./styles.css";
import { buildHomeTab } from "./homeTab";
import { buildMenu } from "./menuTab";
import { buildContactTab } from "./contactTab";
import { clearContent } from "./clearContent";


const tabs = document.querySelectorAll(".btn");

buildHomeTab();


tabs.forEach(button => {
    button.addEventListener("click", (event) => {
        // event.target is the clicked tab

        tabs.forEach(btn => btn.classList.remove("active"));
        
        // add .active to clicked tab
        event.target.classList.add("active");

        // logic to load proper js functions based on selected tab
        if (event.target.dataset.tab === "menu") {
            clearContent();
            buildMenu();
        }
        else if (event.target.dataset.tab === "contact") {
            clearContent();
            buildContactTab();
        }
        else if (event.target.dataset.tab === "home") {
            clearContent();
            buildHomeTab();
        }
    });
});



// buildHomeTab();
// clearContent();

// if tab = "menu" {
    // clearContent();
    // buildMenu();
// }

// else if (tab = contact) {
    // clearContent();
    // loadContactSheet();
// }