// Functions enabling CRUD
function isNumeric(str) {
  
  if (typeof str != "string") {
    return false;
  }
  return !isNaN(str) && !isNaN(parseInt(str));

}

function removeElement(id) {
  var elem = document.getElementById(id);
  return elem.parentNode.removeChild(elem);
}

let refTable = ""
function viewAll(resp) {
    
  if (refTable) {
    removeElement("table1")
  }
  refTable = document.createElement("table")
  refTable.id = "table1"

  for (let i = 0; i < resp.length; i++) {
        showRecord(resp[i].id, resp[i].stadium, resp[i].conditions, resp[i].teamSize)
    }
}

function viewById(resp) {

  if (refTable) {
    removeElement("table1")
  }
  refTable = document.createElement("table")
  refTable.id = "table1"

  showRecord(resp.id, resp.stadium, resp.conditions, resp.teamSize)

}  
   
function showRecord(id1, stadium1, conditions1, teamSize1) {
  
  let refRow = document.createElement("tr")
  let refTd1 = document.createElement("td")
  let refTd2 = document.createElement("td")
  let refTd3 = document.createElement("td")
  let refTd4 = document.createElement("td")

  refTd1.innerHTML = id1 
  refTd2.innerHTML = stadium1  
  refTd3.innerHTML = conditions1
  refTd4.innerHTML = teamSize1

  refRow.appendChild(refTd1)
  refRow.appendChild(refTd2)
  refRow.appendChild(refTd3)
  refRow.appendChild(refTd4)

  refTable.appendChild(refRow)
  
  document.body.appendChild(refTable)

}    

// CRUD functionality
function create() {
  
  let c1 = document.getElementById("c1").value.trim();
  let c2 = document.getElementById("c2").value.trim();
  let c3 = document.getElementById("c3").value.trim();
  
  if (c1 !== "" && c2 !== "" && isNumeric(c3)) {
        fetch("http://localhost:8080/create", { //1
        method: 'post', //2
        headers: {
          "Content-type": "application/json" //3
        },
        body: JSON.stringify( //4
          {
            "stadium": c1,//5
            "conditions": c2,
            "teamSize": c3
          }
        )
      })
      .then(res => res.json())
      .then((data) => console.log(`Request succeeded with JSON response ${data}`))
      .catch((error) => console.log(`Request failed ${error}`))
    }
    else (alert("Make sure all the fields are not empty and that ID and Team Size are whole numbers"))
    
};

function view() {
  
  const v1 = document.getElementById("v1").value.trim()
  
  if (isNumeric(v1)) {
    fetch(`http://localhost:8080/getById/${v1}`).then((response) => {
      if (response.status !== 200) {
        console.error(`status: ${response.status}`);
        return;
      }
      response.json().then((data) => {
        console.info(data);
        // show data
        viewById(data)
      })  

    }).catch((err) => console.error(`${err}`)); 
  }
  else {
    fetch("http://localhost:8080/getAll").then((response) => {
      if (response.status !== 200) {
        console.error(`status: ${response.status}`);
        return;
      }
      response.json().then(data => {
        console.info(data);
        // show data
        viewAll(data)
      })

    }).catch((err) => console.error(`${err}`)); 
  }

}

  function edit() {
    
    let e1 = document.getElementById("e1").value;
    let e2 = document.getElementById("e2").value;
    let e3 = document.getElementById("e3").value;
    let e4 = document.getElementById("e4").value;
    
    if (isNumeric(e1) && e2 !== "" && e3 !== "" && isNumeric(e4)) {
      fetch(`http://localhost:8080/replace/${e1}`, { //1
      method: 'put', //2
      headers: {
        "Content-type": "application/json" //3
      },
      body: JSON.stringify( //4
        {
          "id": e1.trim(),
          "stadium": e2.trim(),//5
          "conditions": e3.trim(),
          "teamSize": e4.trim()
        }
      )
    })
    .then(res => {
      res.json();
      // change element in list
    })
    .then((data) => console.log(`Request succeeded with JSON response ${data}`))
    .catch((error) => console.log(`Request failed ${error}`))
  }
  else {
    alert("Make sure all the fields are not empty and that ID and Team Size are whole numbers");
  }

}

function deleteById() {

  let d1 = document.getElementById("d1").value;

  if (isNumeric(d1)) {

    fetch(`http://localhost:8080/remove/${d1}`, {
      method: 'delete'
    }).then((data) => {
      console.log(`Request succeeded with JSON response ${data}`);
      // remove item from list
    }).catch((err) => {
      console.log(`Request failed with JSON response ${err}`);
  
    })

  }

  else {

    alert("Please enter a whole number")

  }

}

  
