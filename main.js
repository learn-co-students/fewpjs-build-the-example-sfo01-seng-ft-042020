// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.body.addEventListener('click', (e)=>handleMyHeart(e));








//handleMyHeart(e: Event)  applies to <body> but we check for like-glyph class
function handleMyHeart(e) {
  
  if (e.target.classList.contains('like-glyph')) {
    const thisHeart = e.target
    const priorValue = (thisHeart.innerText === EMPTY_HEART ? false : true)
    result = mimicServerCall().then(()=>{
      //toggle heart glyph
      thisHeart.innerText = (priorValue ? EMPTY_HEART : FULL_HEART)
      thisHeart.classList.toggle('activated-heart')
    }).catch(()=>{
      const errorMsg = document.getElementById('modal')
      errorMsg.classList.remove('hidden')
      window.setTimeout(removeModal, 1000)
    });
  }
}

function removeModal() {
  const errorMsg = document.getElementById('modal')
  errorMsg.classList.add('hidden')
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
  })
}
