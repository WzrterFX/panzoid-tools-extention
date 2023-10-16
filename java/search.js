function searchButtons()
{
    var searchField = document.querySelector(".search-field");
    var buttons = document.querySelectorAll(".active-button");

    var searchTerm = searchField.value.toLowerCase();

    buttons.forEach(function(button)
    {
        var buttonText = button.textContent.toLowerCase();
        var buttonParent = button.parentNode;

        if (buttonText.includes(searchTerm))
        {
            button.style.display = "block";
            buttonParent.style.display = "block";
        }
        else
        {
            button.style.display = "none";
        }
    });
}

var searchField = document.querySelector(".search-field");
searchField.addEventListener("input", searchButtons);