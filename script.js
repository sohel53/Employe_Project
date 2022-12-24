let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
]


// this function must have changed the age type from string to number
arr.map(function (item) {
    item.age = Number(item.age);
})

// to change the age of john to 19
arr.forEach((item) => {
    if (item.name === "john") {
        item.age = 19;
    }
})

let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");


// function to filter by profession 
function filter() {
    // setting the result div to empty
    result.innerHTML = "";

    // getting the value of the dropdown
    let dropdownValue = dropdown.value;
    console.log(dropdownValue);

    // if the value is profession, then alert the user to select a profession
    if (dropdownValue == "profession") {
        alert("Please select a profession");
        return;
    }

    // looping through the array and checking if the profession matches the dropdown value
    // arr.forEach((item) => {
        

    //     // if the profession matches, then create a div and append it to the result div
    //     if (item.profession === dropdownValue) {
    //         let div = document.createElement("div");
    //         div.innerText = item.id + ".  Name:" + item.name + "    Profession:" + item.profession + "    Age:" + item.age;
    //         result.append(div);
    //     }
    // })

}


// adding event listener to the button
btn.addEventListener("click", filter);
