
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem("lastname", "Smith");
    $(".container").append(localStorage.lastname);
} else {
    $(".container").append("Sorry! No Web Storage support..");
}

