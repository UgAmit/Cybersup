function saveNote() {
    let note = document.getElementById("noteArea").value;
    localStorage.setItem("userNote", note);
    alert("Note Saved!");
}
window.onload = function() {
    document.getElementById("noteArea").value = localStorage.getItem("userNote") || "";
};