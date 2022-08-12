/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let responsible = document.getElementById("responsible");
let map;
let marker;
let points = [];
let resultTime = document.getElementById("randomHour");
let mapcenter = { lat: 6.22722, lng: -75.56456 };

initMap = () => {
  map = new google.maps.Map(document.querySelector("#map"), {
    center: mapcenter,
    mapTypeControl: true,
    zoom: 12,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  });
};

let places = [
  {
    lat: 6.234264010890535,
    lng: -75.55758893408884,
    Adress: "",
    assigned: "Luis Amaral",
    ronda: 1,
  },
  {
    lat: 6.235543855848885,
    lng: -75.55831313051894,
    assigned: "Luis Amaral",
    ronda: 1,
  },
  {
    lat: 6.23356009483222,
    lng: -75.56022822774524,
    assigned: "Luis Amaral",
    ronda: 1,
  },
  {
    lat: 6.231357684700452,
    lng: -75.5574333659668,
    assigned: "Luis Amaral",
    ronda: 1,
  },
  {
    lat: 6.23331212417762,
    lng: -75.55237740200101,
    assigned: "Luis Amaral",
    ronda: 1,
  },
  {
    lat: 6.238986090079254,
    lng: -75.56560873900746,
    assigned: "Luis Amaral",
    ronda: 1,
  },
  {
    lat: 6.24040990459879,
    lng: -75.5668278030007,
    assigned: "Luis Amaral",
    ronda: 1,
  },
];

let places2 = [
  {
    lat: 6.224264010890535,
    lng: -75.45758893408884,
    assigned: "Andres Ocampo",
    ronda: 2,
  },
  {
    lat: 6.225543855848885,
    lng: -75.45831313051894,
    assigned: "Andres Ocampo",
    ronda: 2,
  },
  {
    lat: 6.23356009483222,
    lng: -75.45022822774524,
    assigned: "Andres Ocampo",
    ronda: 2,
  },
  {
    lat: 6.221357684700452,
    lng: -75.4574333659668,
    assigned: "Andres Ocampo",
    ronda: 2,
  },
  {
    lat: 6.22331212417762,
    lng: -75.45237740200101,
    assigned: "Andres Ocampo",
    ronda: 2,
  },
  {
    lat: 6.228986090079254,
    lng: -75.46560873900746,
    assigned: "Andres Ocampo",
    ronda: 2,
  },
  {
    lat: 6.22040990459879,
    lng: -75.4668278030007,
    assigned: "Andres Ocampo",
    ronda: 2,
  },
];

let places3 = [
  {
    lat: 6.214264010890535,
    lng: -75.44758893408884,
    assigned: "Julian Poveda",
    ronda: 3,
  },
  {
    lat: 6.215543855848885,
    lng: -75.44831313051894,
    assigned: "Julian Poveda",
    ronda: 3,
  },
  {
    lat: 6.22356009483222,
    lng: -75.44022822774524,
    assigned: "Julian Poveda",
    ronda: 3,
  },
  {
    lat: 6.211357684700452,
    lng: -75.4474333659668,
    assigned: "Julian Poveda",
    ronda: 3,
  },
  {
    lat: 6.21331212417762,
    lng: -75.44237740200101,
    assigned: "Julian Poveda",
    ronda: 3,
  },
  {
    lat: 6.218986090079254,
    lng: -75.45560873900746,
    assigned: "Julian Poveda",
    ronda: 3,
  },
  {
    lat: 6.21040990459879,
    lng: -75.4568278030007,
    assigned: "Julian Poveda",
    ronda: 3,
  },
];

let loadRoundFirst = () => {
  makePointsArray(places, points);
  pointMarker(points);
  loadResponsible(places);
  setRandomHour();
};

let loadRoundSecond = () => {
  makePointsArray(places2, points);
  pointMarker(points);
  loadResponsible(places2);
  setRandomHour();
};

let loadRoundThird = () => {
  makePointsArray(places3, points);
  pointMarker(points);
  loadResponsible(places3);
  setRandomHour();
};

let loadResponsible = (arrResponsible) => {
  responsible.innerHTML = "Bienvenido " + " " + arrResponsible[0].assigned;
};

let pointMarker = (points) => {
  for (let i = 0; i < points.length; i++) {
    marker = new google.maps.Marker({
      position: points[i].position,
      animation: google.maps.Animation.DROP,
      newCenter: points[0].center,
      label: `${i + 1}`,
      map: map,
    });
  }
  map.setCenter(new google.maps.LatLng(marker.newCenter));
  map.setZoom(16);
};

let resetMap = () => {
  points = [];
  map.setZoom(16);
};

makePointsArray = (arrPlaces, arrPoints) => {
  arrPlaces.forEach((e) => {
    arrPoints.push({
      position: new google.maps.LatLng(e.lat, e.lng),
      type: e.type,
      center: { lat: e.lat, lng: e.lng },
    });
  });
};

setRandomHour = () => {
  randomTime();
  resultTime.innerHTML = "Hora sugerida " + " " + this.randomTime();
};

randomTime = () => {
  hrs = Math.round(Math.random() * 12);
  mins = Math.round(Math.random() * 60);
  var hFormat = hrs < 10 ? "0" : "";
  var mFormat = mins < 10 ? "0" : "";
  var amPm = hrs < 12 ? "AM" : "PM";
  return String(hFormat + hrs + ":" + mFormat + mins + " " + amPm);
};

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
  });
});

window.initMap = initMap;