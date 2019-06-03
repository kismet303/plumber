class Github {
  async getUser(user) {
    const profileResponse = await 
 //*   fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
 //   fetch(`http://localhost:9739/echo?msg=hello%20world`, {
 //       mode: 'no-cors' 
 //   });

    fetch(`http://localhost:9739/echo?msg=hello%20world2`);
    
    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}

// Init Github
const github = new Github;
// Init UI
//const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert

      } else {
        // Show profile
        console.log(data.profile)
        //ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear profile
    
  }
}); 