import data from "./MOCK_DATA.json" assert { type: "json" };
// console.log(data);

let table = document.getElementById("table-section");
let tbody = document.getElementById("table-body");
tbody.setAttribute("id", "table-body");
table.appendChild(tbody);

data.forEach((item) => {
  let rows = document.createElement("tr");
  rows.classList.add("rows");

  // add id
  let id = document.createElement("td");
  // add class
  id.classList.add("cell-content");
  // add id
  id.setAttribute("id", "id-cell");
  // add text
  id.innerText = item.id;
  rows.appendChild(id);

  // add name
  let name = document.createElement("td");
  // add class
  name.classList.add("cell-content");
  // add id
  name.setAttribute("id", "name-cell");

  let img_icon = document.createElement("img");
  img_icon.setAttribute("id", "image-icon");
  img_icon.src = item.img_src;
  name.appendChild(img_icon);
  // add text
  let name_text = document.createElement("p");

  name_text.innerHTML = `${item.first_name} ${item.last_name}`;
  name.appendChild(name_text);
  rows.appendChild(name);

  // add gender

  let gender = document.createElement("td");
  // add class
  gender.classList.add("cell-content");
  // add id
  gender.setAttribute("id", "gender-cell");
  // add text
  gender.innerText = item.gender;
  rows.appendChild(gender);

  // add class

  let class_tag = document.createElement("td");
  // add class
  class_tag.classList.add("cell-content");
  // add id
  class_tag.setAttribute("id", "class-cell");
  // add text
  class_tag.innerText = item.class;
  rows.appendChild(class_tag);

  // add marks

  let marks = document.createElement("td");
  // add class
  marks.classList.add("cell-content");
  // add id
  marks.setAttribute("id", "marks-cell");
  // add text
  marks.innerText = item.marks;
  rows.appendChild(marks);

  // add passing

  let passing = document.createElement("td");
  // add class
  passing.classList.add("cell-content");
  // add id
  passing.setAttribute("id", "passing-cell");
  // add text
  passing.innerText = item.passing == true ? "Passing" : "failed";
  rows.appendChild(passing);

  // add email

  let email = document.createElement("td");
  // add class
  email.classList.add("cell-content");
  // add id
  email.setAttribute("id", "email-cell");
  // add text
  email.innerText = item.email;
  rows.appendChild(email);

  tbody.appendChild(rows);
});

// add function to search input

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
 
searchBtn.addEventListener('click',searchTable)

searchInput.addEventListener("input",searchTable )

function searchTable() {
  const searchQuery = searchInput.value.toLowerCase();
  const rows = table.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const firstName = row.getElementsByTagName("td")[0].innerText.toLowerCase();
    const lastName = row.getElementsByTagName("td")[1].innerText.toLowerCase();
    const email = row.getElementsByTagName("td")[6].innerText.toLowerCase();

    if (
      firstName.indexOf(searchQuery) > -1 ||
      lastName.indexOf(searchQuery) > -1 ||
      email.indexOf(searchQuery) > -1
    ) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}






// sorting by name(A to Z)


const sortNameButton = document.getElementById("AtoZ");
sortNameButton.addEventListener("click", function () {
  sortTableByName();
});

function sortTableByName() {
  const rows = Array.from(table.getElementsByTagName("tr"));

 
  rows.shift();

  rows.sort(function (row1, row2) {
    const name1 = row1.getElementsByTagName("p")[0].innerText;
    const name2 = row2.getElementsByTagName("p")[0].innerText;

    return name1.localeCompare(name2);
  });

  for (let i = 0; i < rows.length; i++) {
    table.tBodies[0].appendChild(rows[i]);
  }
}

// sorting by name(Z to A)

let sortOrder = 1;

const sortButton = document.getElementById("ZtoA");
sortButton.addEventListener("click", function () {
  sortTableByNameZtoA();
});

function sortTableByNameZtoA() {
  const rows = Array.from(table.getElementsByTagName("tr"));

  rows.shift();

  rows.sort(function (row1, row2) {
    const name1 = row1.getElementsByTagName("p")[0].innerText;
    const name2 = row2.getElementsByTagName("p")[0].innerText;

    const comparison = name1.localeCompare(name2);
    return sortOrder * comparison;
  });

  sortOrder *= -1;

  for (let i = 0; i < rows.length; i++) {
    table.tBodies[0].appendChild(rows[i]);
  }
}

//add a sorting function according to marks

const sortMarksButton = document.getElementById("marks");
sortMarksButton.addEventListener("click", function () {
  sortTable();
});

function sortTable() {
  const rows = Array.from(table.getElementsByTagName("tr"));

  rows.shift();

  rows.sort(function (row1, row2) {
    const marks1 = parseInt(row1.getElementsByTagName("td")[4].innerText);
    const marks2 = parseInt(row2.getElementsByTagName("td")[4].innerText);

    if (marks1 < marks2) {
      return 1;
    } else if (marks1 > marks2) {
      return -1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < rows.length; i++) {
    table.tBodies[0].appendChild(rows[i]);
  }
}

// sorting according to passing

const sortPassingButton = document.getElementById("passing");
sortPassingButton.addEventListener("click", function () {
  sortTableByPassing();
});

function sortTableByPassing() {
  const rows = Array.from(table.getElementsByTagName("tr"));

  rows.shift();

  rows.sort(function (row1, row2) {
    const passing1 = row1.getElementsByTagName("td")[5].innerText.toLowerCase();
    const passing2 = row2.getElementsByTagName("td")[5].innerText.toLowerCase();

    if (passing1 < passing2) {
      return 1;
    } else if (passing1 > passing2) {
      return -1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < rows.length; i++) {
    table.tBodies[0].appendChild(rows[i]);
  }
}

// sorting according to gender

const sortGenderButton = document.getElementById("gender");
sortGenderButton.addEventListener("click", function () {
  sortTableByGender();
});

function sortTableByGender() {
  const rows = Array.from(table.getElementsByTagName("tr"));

  rows.shift();

  rows.sort(function (row1, row2) {
    const gender1 = row1.getElementsByTagName("td")[2].innerText.toLowerCase();
    const gender2 = row2.getElementsByTagName("td")[2].innerText.toLowerCase();

    if (gender1 < gender2) {
      return -1;
    } else if (gender1 > gender2) {
      return 1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < rows.length; i++) {
    table.tBodies[0].appendChild(rows[i]);
  }
}

// sorting according to class

const sortClassButton = document.getElementById("classSort");
sortClassButton.addEventListener("click", function () {
  sortTableByClass();
});

function sortTableByClass() {
  const rows = Array.from(table.getElementsByTagName("tr"));

  rows.shift();

  rows.sort(function (row1, row2) {
    const class1 = row1.getElementsByTagName("td")[3].innerText;
    const class2 = row2.getElementsByTagName("td")[3].innerText;

    return class1.localeCompare(class2, undefined, { numeric: true });
  });

  for (let i = 0; i < rows.length; i++) {
    table.tBodies[0].appendChild(rows[i]);
  }
}
