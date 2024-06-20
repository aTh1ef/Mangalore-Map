maptilersdk.config.apiKey = 'l13UevgLGa3yyGo2eOaf';

const bbox = [74.8141, 12.8876, 74.8855, 12.9248]; // Bounding box for Mangalore

const map = new maptilersdk.Map({
  container: 'map', // container id
  style: maptilersdk.MapStyle.STREETS,
  bounds: bbox
});

// Define diabetes centers
const diabetesCenters = [
  {
    name: "DMC (Diabetes Mangalore Clinic) Dr Shreekanth Hegde",
    address: "1st floor, 'Shre Gowri, Bejai - Kapikad Rd, near Petrol pump, Main Road, Mangaluru, Karnataka 575004",
    phone: "086605 56109",
    website: "https://dmcdiabetes.in/",
    ratings: 4.9,
    geocode: [74.8412121, 12.8912802]
  },
  {
    name: "Dr Venugopala D Maithri Speciality Clinic",
    address: "Bendoorwell, Kankanady, Mangaluru, Karnataka 575002",
    phone: "0824 243 2929",
    website: "https://book-appointment.healthplix.com/dr-dr-venugopala-d-internal-medicine-bendoorwell-mangalore",
    ratings: 4.3,
    geocode: [74.8549698, 12.8712970]
  },
  {
    name: "Dr. Akhila Bhandarkar Panduranga | Endocrinology",
    address: "Westgate Terminus, Falnir Rd, opposite unity hospital, Kankanady, Mangaluru, Karnataka 575001",
    phone: "8050173222",
    social: "https://www.facebook.com/akhila.bhandarkar?mibextid=ZbWKwL",
    ratings: 5,
    geocode: [74.85055737, 12.8679654]
  },
  {
    name: "Dr. Shrinath Pratap Shetty",
    address: "Room no.0011, 1st floor,KMC Hospital Dr, B R, Ambedkar Circle, Mangaluru, Karnataka 575002",
    phone: "1800 102 4647",
    website: "https://www.manipalhospitals.com/mangalore/doctors/dr-shrinath-p-shetty-consultant-diabetology-endocrinoogy/",
    ratings: 5,
    geocode: [74.848610, 12.87231]
  },
  {
    name: "AROGYA Multi-Speciality Clinic",
    address: "Cauvery Building, Falnir Rd, Bendoor, Mangaluru, Karnataka 575002",
    phone: "0824 426 7077",
    website: "https://book-appointment.healthplix.com/dr-supriya-hegde-aroor-psychiatry--falnir-rd-mangalore",
    ratings: 4.2,
    geocode: [74.8524432, 12.8680942]
  }
];

// Define dietitians
const dietitians = [
  {
    name: "Freedom Nutrition centre",
    address: "Mother Theresa Rd, Hampankatta, Mangaluru, Karnataka 575001",
    phone: "8722292386",
    website: "https://hellomangaluru.online/ad/freedom-nutrition-centre/",
    ratings: 5,
    geocode: [74.8447888, 12.8680023]
  },
  {
    name: "Good Diet Good Life",
    address: "Online services available, Silver Streak, near KAMC, Ashok Nagar, Mangaluru, Karnataka 575006",
    phone: "094651 92659",
    website: "https://www.facebook.com/dtanjaligoswami/",
    ratings: 5,
    geocode: [74.8324865, 12.8974493]
  },
  {
    name: "Health and Wellness Center",
    address: "1 floor, Aditya Hotel, VISHWARAJ Towers, Kuloor - Kavoor Rd, opposite Bharat petrol bunk, Padukodi, Mangaluru, Karnataka 575013",
    website: "https://surveyheart.com/form/622ca7fb85f9306fadd4c334",
    ratings: 5,
    geocode: [74.8322884, 12.9239178]
  },
  {
    name: "The nutrition hut",
    address: "XRWG+8X, 3rd Block, Bollage Road, Katipalla, Kaikamba, Mangaluru, Karnataka 575030",
    phone: "09482149816",
    website: "https://www.facebook.com/TNH24/",
    ratings: 4.9,
    geocode: [74.8274507, 12.9958402]
  },
  {
    name: "Prerana Wellness Center",
    address: "VRJJ+2JC, Mannagudda Rd, Kudroli, Gandhinagar, Mangaluru, Karnataka 575003",
    phone: "097460 30206",
    website: "https://www.facebook.com/p/Prerana-wellness-center-100063802939038/",
    ratings: 5,
    geocode: [74.8318690, 12.8798865]
  }
];

// Function to add markers
function addMarkers(locations, color) {
  locations.forEach(location => {
    const marker = new maptilersdk.Marker({ color: color }) // Marker color
      .setLngLat([location.geocode[0], location.geocode[1]])
      .setPopup(new maptilersdk.Popup().setHTML(`
        <b>${location.name}</b><br>
        <p><b>Address:</b> ${location.address}</p>
        <p><b>Phone:</b> ${location.phone || 'N/A'}</p>
        <p style="overflow-wrap: break-word;"><b>Website:</b> <a href="${location.website}" target="_blank">${location.website}</a></p>
        <p><b>Ratings:</b> ${location.ratings || 'N/A'}</p>
      `))
      .addTo(map);
  });
}

// Add markers for diabetes centers and dietitians
addMarkers(diabetesCenters, '#00FF00'); // Green markers for diabetes centers
addMarkers(dietitians, '#0000FF'); // Blue markers for dietitians

// Handle search result
geocoder.on('result', function(e) {
  map.flyTo({ center: e.result.center, zoom: 15 });
});
