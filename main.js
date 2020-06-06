// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


function toggleHeart() {
  const postContainer = document.querySelector('.article-container')
  const errorModal = document.getElementById('modal')
  postContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      if (e.target.innerText === EMPTY_HEART) {
        e.target.innerText = FULL_HEART
        e.target.setAttribute("class", "activated-heart")
      }
      else {
        e.target.innerText = EMPTY_HEART
        e.target.setAttribute("class", "like-glyph")
      }
    }
    mimicServerCall("test")
    .catch((err) => {
      console.log(err, "There was an error!")
      errorModal.removeAttribute('class')
    });
  });
}

toggleHeart();



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
