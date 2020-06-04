// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  listenForLikes();
})



function listenForLikes() {
  const likes = document.querySelectorAll('.like-glyph');
  likes.forEach((like) => {
    like.addEventListener('click', (e) => {
      mimicServerCall()
        .then(() => {
          displayLike(e.target);
        })
        .catch(err => {
          console.log(err);
          displayError(err)
        });
    })
  })
}

function displayLike(like) {
  if (like.innerHTML == EMPTY_HEART) {
    like.innerHTML = FULL_HEART;
    like.classList.toggle("activated-heart", true);
  } else {
    like.innerHTML = EMPTY_HEART;
    like.classList.toggle("activated-heart", false);
  }
}

function displayError(msg) {
  const errorModal = document.getElementById("modal");
  const message = document.getElementById('modal-message');
  message.innerHTML = msg
  errorModal.classList.toggle("hidden", false);

  setTimeout(function(){ 
    errorModal.classList.toggle("hidden", true);
    message.innerHTML = "";
   }, 5000);

}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
