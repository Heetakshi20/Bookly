document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector(".search-icon");
    const navbarIcons = document.querySelector(".navbar-icons");
    
    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.placeholder = "Search for books...";
    searchBar.classList.add("search-bar");
    
    searchBar.style.display = "none";
    navbarIcons.appendChild(searchBar);

    searchIcon.addEventListener("click", () => {
        if (searchBar.style.display === "none") {
            searchBar.style.display = "block";
            searchBar.focus();
        } else {
            searchBar.style.display = "none";
        }
    });
    
    document.addEventListener("click", (e) => {
        if (!navbarIcons.contains(e.target) && searchBar.style.display === "block") {
            searchBar.style.display = "none";
        }
    });
});
