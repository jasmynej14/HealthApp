function valForm() {
    var name, result;
    name = document.getElementById("nameInput").value;
    if (name.equals(" ")) {
        result = "Please input name";
    }
    document.getElementById("result").innerHTML = result;
}