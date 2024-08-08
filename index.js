let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];

let skillsContainerEl = document.getElementById("skillsContainer");
let headingEl = document.createElement("h1");
headingEl.textContent = "Mark your Skills";
skillsContainerEl.appendChild(headingEl);

function onClickChange(checkboxId, labelId) {
let check = document.getElementById(checkboxId);
let label = document.getElementById(labelId);
console.log(check.checked);
if (check.checked === true) {
    label.classList.add("checked");
} else {
    label.classList.remove("checked");
}
}

function onChangeStatus(item) {
let checkboxId = "checkbox" + item.uniqueNo;
let labelId = "label" + item.uniqueNo;
let listItems = document.createElement("li");
listItems.classList.add("list-items")
skillsContainerEl.appendChild(listItems);

let checkbxInputEl = document.createElement("input");
checkbxInputEl.type = "checkbox";
checkbxInputEl.id = checkboxId;
checkbxInputEl.classList.add("checkbox-input");
checkbxInputEl.onclick = function() {
    onClickChange(checkboxId, labelId);
}
listItems.appendChild(checkbxInputEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", checkboxId);
labelEl.id = labelId;
labelEl.textContent = item.skillName;
listItems.appendChild(labelEl);

}

for (let eachItem of skillList) {
onChangeStatus(eachItem);
}