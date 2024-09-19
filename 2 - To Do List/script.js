// Memberikan variabel dengan menggunakan id
const inputBox = document.getElementById("input-box");
const listContain = document.getElementById("list-contain");

// function yang digunakan ketika tombol add diklik
function addTask() {
  // jika kondisi input box kosong
  if (inputBox.value === "") {
    alert("You must write something!!");
    // Ketika input box ada isinya
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContain.appendChild(li);
    // Membuat icon x
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //   ketika add sudah diklik maka inputBox akan kosong
  inputBox.value = "";
  saveData();
}

// merubah list pada kolom
listContain.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Ketika di refresh tampilan tidak hilang
function saveData() {
  localStorage.setItem("data", listContain.innerHTML);
}
function showData() {
  listContain.innerHTML = localStorage.getItem("data");
}
showData();
