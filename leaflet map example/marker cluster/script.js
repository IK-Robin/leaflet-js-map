/* eslint-disable no-undef */
/**
 * Marker grouping width markercluster plugin
 */

// config map
let config = {
  minZoom: 6,
  maxZoom: 18,
};
// magnification with which the map will start
const zoom = 6;
// coordinates
const lat = 23.74990;
const lng = 90.39320;

// coordinate array with popup text
let points = [
  [23.75001, 90.39268, "point 1"],
  [23.75012,90.39232, "point 2"],
  [23.75024,90.39158, "point 3"],
  [23.75054,90.38993, "point 4"],
  [23.7510,90.3877, "point 5"],
  [23.7521,90.3854, "point 6"],
  [23.7502,90.3946, "point 7"],
  [23.7506,90.3958, "point 8"],
  [23.7515,90.3977, "point 9"],
  [23.75057,90.39575, "point 10"],
  [23.75343,90.40066, "point 11"],
  [23.75418,90.40184, "point 12"],
];

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// L.MarkerClusterGroup extends L.FeatureGroup
// by clustering the markers contained within
let markers = L.markerClusterGroup();

// Add markers to the layer
for (let i = 0; i < points.length; i++) {
  const [lat, lng, title] = points[i];

  let marker = L.marker(new L.LatLng(lat, lng)).bindPopup(title);
  markers.addLayer(marker);
}

// Add all markers to map
map.addLayer(markers);
