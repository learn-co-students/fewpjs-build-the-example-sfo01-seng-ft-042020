// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// hide error model
let modal = document.getElementById("modal");
modal.setAttribute("class", "hidden");

document.addEventListener("DOMContentLoaded", function() {
  heartClickListener();
})

function heartClickListener() {
    // get all hearts
    const heartButtons = document.querySelectorAll(".like");
    // iterate over all hearts - extract single heart
    heartButtons.forEach((heart) => {
      // add click listener to a single heart
      heart.addEventListener("click", function(event) {
        // make sure only button is clickable
        if (event.target.className === "like-glyph") {
          // invoke mimicServerCall to simulate making a server request
          mimicServerCall()
            // if successful
            .then((resolve) => {
              console.log(resolve)
              // make full heart
              let fullHeart = event.target;
              fullHeart.setAttribute("class", "activated-heart");
              fullHeart.innerHTML = FULL_HEART;
              // unlike - turn full heart into empty heart when clikced
              fullHeart.addEventListener("click", function(event) {
                event.target.removeAttribute("class");
                event.target.innerHTML = EMPTY_HEART;
              })
            })
            // if not successful
            .catch((reject) => {
              console.log(reject)
              // show modal
              modal.classList.remove("hidden");
              // display reject message in modal
              const h2 = document.getElementById("error-message");
              h2.innerText = reject;
              // hide the modal after 5 seconds
              setTimeout(function() {
                modal.setAttribute("class", "hidden")
              }, 5000)
            });
        }
      });

    })
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
