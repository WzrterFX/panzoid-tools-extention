var groupTitles = document.querySelectorAll(".group-name, .sub-group-name");

groupTitles.forEach(function(groupTitle) {

    groupTitle.addEventListener("click", function() {
        var groupContent = this.nextElementSibling;

        if (groupContent.style.display === "block") {
            groupContent.style.display = "none";
            localStorage.setItem(groupTitle.textContent, "closed");
        }
        else {
            groupContent.style.display = "block";
            localStorage.setItem(groupTitle.textContent, "open");
        }
    });

    var groupContent = groupTitle.nextElementSibling;
    var savedState = localStorage.getItem(groupTitle.textContent);

    if (savedState === "closed")
        groupContent.style.display = "none";

    else if (savedState === "open")
        groupContent.style.display = "block";
});