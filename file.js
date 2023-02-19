// Retrieve the user's information from the backend
fetch('/api/user')
  .then(response => response.json())
  .then(user => {
    // Update the About Me section with the user's name and description
    document.getElementById('description').innerText = user.name + ' - ' + user.description;
    
    // Update the Skills section with the user's skills
    const skillList = document.getElementById('skill-list');
    user.skills.forEach(skill => {
      const li = document.createElement('li');
      li.innerText = skill;
      skillList.appendChild(li);
    });
  });

// Submit the contact form to the backend
document.getElementById('contact-form').addEventListener('submit', (event) =>
