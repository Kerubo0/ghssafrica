var resourceLinks = document.querySelectorAll(".re-link");
var resourceTabs = document.querySelectorAll(".tab");
var resourceToggle = function (event, view) {
    if (resourceLinks) {
        resourceLinks.forEach(function (link) {
            link.classList.remove("active");
        });
    }
    event.target.classList.add("active");
    if (resourceTabs) {
        resourceTabs.forEach(function (tab) {
            tab.classList.remove("active");
            if (tab.classList.contains(view)) {
                tab.classList.add("active");
            }
        });
    }
};
