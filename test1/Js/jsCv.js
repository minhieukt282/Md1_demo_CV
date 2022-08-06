function abc(){
    const note = document.createElement("li");
    const textnote = document.createTextNode(" THONGTIN");
    note.appendChild(textnote);
    document.getElementById("myList").appendChild(note);
}

