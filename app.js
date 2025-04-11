(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function filterSection(current, tagsToShow){
    [...document.getElementsByClassName("portfolio-header")].forEach(element => element.classList="portfolio-header portfolio-title")
    current.classList = "portfolio-header portfolio-title portfolio-header-active"
    classes = ['section-ml', 'section-dl', 'section-sde']
    for (const cl of classes) {
        [...document.getElementsByClassName(cl)].forEach(element => element.style.display = 'none')
    }
    for (const cl of tagsToShow) {
        [...document.getElementsByClassName(cl)].forEach(element => element.style.display = 'block')
    }
}

function openSkill(evt, skillName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  