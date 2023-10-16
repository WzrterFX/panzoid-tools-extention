document.addEventListener("DOMContentLoaded", function ()
{
    const themeButton = document.getElementById("themeButton");
    const darkThemeLink = document.getElementById("darkTheme");
    const lightThemeLink = document.getElementById("lightTheme");

    const theme = localStorage.getItem("theme");

    if (theme === "light")
    {
        darkThemeLink.disabled = true;
        lightThemeLink.disabled = false;
    }
    else
    {
        darkThemeLink.disabled = false;
        lightThemeLink.disabled = true;
    }

    themeButton.addEventListener("click", function()
    {
        toggleTheme(darkThemeLink, lightThemeLink);
    });

    function toggleTheme(darkLink, lightLink)
    {
        if (darkLink.disabled)
        {
            darkLink.disabled = false;
            lightLink.disabled = true;
            localStorage.setItem("theme", "dark");
        }
        else
        {
            darkLink.disabled = true;
            lightLink.disabled = false;
            localStorage.setItem("theme", "light");
        }
    }
});