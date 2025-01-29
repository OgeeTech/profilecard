// Function to update UTC Time
function updateTime() {
    const now = new Date();
    document.getElementById("utc-time").textContent = now.toUTCString();
}
setInterval(updateTime, 1000);
updateTime();

// Function to Get User's Location Dynamically
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const latitude = position.coords.latitude;
//                 const longitude = position.coords.longitude;
//                 fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
//                     .then(response => response.json())
//                     .then(data => {
//                         document.getElementById("location").textContent = data.display_name || "Location not found";
//                     })
//                     .catch(() => {
//                         document.getElementById("location").textContent = "Unable to fetch location";
//                     });
//             },
//             () => {
//                 document.getElementById("location").textContent = "Location access denied";
//             }
//         );
//     } else {
//         document.getElementById("location").textContent = "Geolocation not supported";
//     }
// }
// getLocation();
