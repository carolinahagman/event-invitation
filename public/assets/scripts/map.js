let script = document.createElement("script");
script.src = process.env.API_KEY;
script.defer = true;

window.initMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.317337064, lng: 18.08416633 },
    zoom: 15,
  });
};

document.head.appendChild(script);
