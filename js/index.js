const today = new Date();
const thisYear = today.getFullYear()
console.log(thisYear);
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `&#169; <span>Fara Ramaroson</span> ${thisYear}`
footer.appendChild(copyright)

let skills = ['Excel', 'OpenProj', 'HTML', 'CSS', 'JavaScript', 'MariaDB'];
let skillsSection = document.getElementById('skills');
console.log(skillsSection)

let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}