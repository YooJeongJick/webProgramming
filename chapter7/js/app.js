// Clipboard

var btnPaste = document.querySelector("#btnPaste");
btnPaste.addEventListener("click", () => {
    navigator.clipboard.readText().then(value => console.log(value));
})

var btnCopy = document.querySelector("#btnCopy");
btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText("뿡뿡").then(
        () => {
        }
      );
})


var btnPaste = document.querySelector("#btnFullScreen");
btnPaste.addEventListener("click", () => {
    toggleFullScreen();
})

//

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
}
  
//

var btnGeoLocation = document.querySelector("#btnGeoLocation");
btnGeoLocation.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
})


  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
// Web Storage API
function saveData() {
    localStorage.setItem("myCat", "Tom");
}

function loadData() {
    const cat = localStorage.getItem("myCat");
    console.log(cat);
}


