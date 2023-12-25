document.addEventListener("DOMContentLoaded", function () {
    const theme_button = document.getElementById("theme-button");
    const dark_link = document.getElementById("dark-theme");
    const light_link = document.getElementById("light-theme");

    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        dark_link.disabled = true;
        light_link.disabled = false;
    }
    else {
        dark_link.disabled = false;
        light_link.disabled = true;
    }

    function ToggleTheme(dark_link, light_link) {

        if (dark_link.disabled) {
            dark_link.disabled = false;
            light_link.disabled = true;

            localStorage.setItem("theme", "dark");
        }
        else {
            dark_link.disabled = true;
            light_link.disabled = false;
            
            localStorage.setItem("theme", "light");
        }
    }

    theme_button.addEventListener("click", function() {
        ToggleTheme(dark_link, light_link);
    });
});