function create() {
    if (document.getElementById("c1").value != "" && document.getElementById("c2").value != "" 
    && document.getElementById("c3").value != "") {
        fetch("http://localhost:8080/create", { //1
        method: 'post', //2
        headers: {
          "Content-type": "application/json" //3
        },
        body: JSON.stringify( //4
          {
            "stadium": document.getElementById("c1").value.trim(),//5
            "conditions": document.getElementById("c2").value.trim(),
            "teamSize": document.getElementById("c3").value.trim()
          }
        )
      })
      .then(res => res.json())
      .then((data) => console.log(`Request succeeded with JSON response ${data}`))
      .catch((error) => console.log(`Request failed ${error}`))
    }
    else (alert("Make sure all the fields are not empty"))
    

};
