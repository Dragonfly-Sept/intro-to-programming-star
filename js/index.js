const today = new Date();
const thisYear = today.getFullYear()
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `&#169; <span>Fara Ramaroson</span> ${thisYear}`
footer.appendChild(copyright)

let skills = ['Excel', 'OpenProj', 'HTML', 'CSS', 'JavaScript', 'MariaDB'];
let skillsSection = document.getElementById('skills');

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
//lesson4-3
const messageForm = document.getElementsByName('leave_message')[0];
console.log(messageForm[0]) 
messageForm.addEventListener('submit',(event) => {
  event.preventDefault();
  
 const name= event.target.name.value
 const email= event.target.email.value
 const message= event.target.message.value
  
const messageSection= document.getElementById('messages');
const messageList = messageSection.getElementsByTagName('ul')[0]

const newMessage = createLi(name, email, message)
messageList.appendChild(newMessage)
messageForm.reset()
})

function createLi(name, email, message) {
  const newMessage = document.createElement('li')
  newMessage.innerHTML = `<span> ${message}</span> <div> ${today.toLocaleString()} from <a href="mailto:${email}"> ${name} </a></div>`
  return newMessage;
}
const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.setAttribute('type','button');

removeButton.addEventListener('click', (event) =>{
  const entry = event.target.parentNode;
  entry.remove();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
document.getElementById('message_form').reset();
