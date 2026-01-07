let resourceLinks = document.querySelectorAll(
  ".re-link"
) as NodeListOf<HTMLLinkElement>;

let resourceTabs = document.querySelectorAll(
  ".tab"
) as NodeListOf<HTMLDivElement>;

let resourceToggle = (event: any, view: string) => {
  if (resourceLinks) {
    resourceLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }

  event.target.classList.add("active");

  if (resourceTabs) {
    resourceTabs.forEach((tab) => {
      tab.classList.remove("active");
      if (tab.classList.contains(view)) {
        tab.classList.add("active");
      }
    });
  }
};
