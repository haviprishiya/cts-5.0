console.log("Welcome to the Community Portal");

window.onload = function () {
  alert("Page fully loaded");
};

class Event {
  constructor(name, date, category, location, seats) {
    this.name = name;
    this.date = date;
    this.category = category;
    this.location = location;
    this.seats = seats;
  }

  checkAvailability() {
    return this.seats > 0;
  }
}

const eventName = "Music Night";
const eventDate = "2026-06-10";
let seats = 5;

console.log(`Event: ${eventName}, Date: ${eventDate}, Available Seats: ${seats}`);

let events = [
  new Event("Music Night", "2026-06-10", "Music", "Salem", 5),
  new Event("Baking Workshop", "2026-06-15", "Workshop", "Erode", 3),
  new Event("Football Match", "2026-06-20", "Sports", "Namakkal", 4),
  new Event("Food Festival", "2026-06-25", "Food", "Coimbatore", 6),
  new Event("Old Event", "2024-01-01", "Music", "Chennai", 0)
];

function addEvent(name, date, category, location, seats) {
  events.push(new Event(name, date, category, location, seats));
}

addEvent("JavaScript Bootcamp", "2026-07-01", "Workshop", "Salem", 10);

function createRegistrationTracker() {
  let totalRegistrations = 0;

  return function () {
    totalRegistrations++;
    return totalRegistrations;
  };
}

const trackRegistration = createRegistrationTracker();

function filterEventsByCategory(category, callback) {
  const filteredEvents = events.filter(event => {
    return category === "All" || event.category === category;
  });

  callback(filteredEvents);
}

function renderEvents(eventList) {
  const eventContainer = document.querySelector("#eventContainer");
  const eventSelect = document.querySelector("#eventSelect");

  eventContainer.innerHTML = "";
  eventSelect.innerHTML = `<option value="">Select Event</option>`;

  const today = new Date();

  const clonedEvents = [...eventList];

  clonedEvents.forEach(event => {
    const eventDate = new Date(event.date);

    if (eventDate >= today && event.checkAvailability()) {
      const card = document.createElement("div");
      card.className = "event-card";

      const { name, date, category, location, seats } = event;

      card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Available Seats:</strong> <span>${seats}</span></p>
        <button onclick="registerUser('${name}')">Register</button>
        <button onclick="cancelRegistration('${name}')">Cancel</button>
      `;

      eventContainer.appendChild(card);

      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      eventSelect.appendChild(option);
    }
  });
}

function registerUser(name) {
  try {
    const selectedEvent = events.find(event => event.name === name);

    if (!selectedEvent) {
      throw new Error("Event not found");
    }

    if (selectedEvent.seats <= 0) {
      throw new Error("No seats available");
    }

    selectedEvent.seats--;
    seats--;

    const count = trackRegistration();

    alert(`Registered successfully for ${name}. Total registrations: ${count}`);

    renderEvents(events);
  } catch (error) {
    alert(error.message);
  }
}

function cancelRegistration(name) {
  const selectedEvent = events.find(event => event.name === name);

  if (selectedEvent) {
    selectedEvent.seats++;
    alert(`Registration cancelled for ${name}`);
    renderEvents(events);
  }
}

const musicEvents = events.filter(event => event.category === "Music");
console.log("Music Events:", musicEvents);

const formattedCards = events.map(event => `${event.category} on ${event.name}`);
console.log("Formatted Cards:", formattedCards);

events.forEach(event => {
  console.log(Object.entries(event));
});

document.querySelector("#categoryFilter").onchange = function () {
  const selectedCategory = this.value;

  filterEventsByCategory(selectedCategory, function (filteredEvents) {
    renderEvents(filteredEvents);
  });
};

document.querySelector("#searchBox").addEventListener("keydown", function () {
  setTimeout(() => {
    const searchValue = this.value.toLowerCase();

    const searchedEvents = events.filter(event =>
      event.name.toLowerCase().includes(searchValue)
    );

    renderEvents(searchedEvents);
  }, 100);
});

function fetchEventsUsingThen() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      console.log("Fetched using then:", data.slice(0, 3));
    })
    .catch(error => {
      console.log("Fetch error:", error);
    });
}

async function fetchEventsUsingAsyncAwait() {
  const loading = document.querySelector("#loading");

  try {
    loading.style.display = "block";

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log("Fetched using async await:", data.slice(0, 3));
  } catch (error) {
    console.log("Async fetch error:", error);
  } finally {
    loading.style.display = "none";
  }
}

fetchEventsUsingThen();
fetchEventsUsingAsyncAwait();

function displayEventDetails(event = events[0]) {
  const { name, date, category, location, seats } = event;

  console.log(`
    Name: ${name}
    Date: ${date}
    Category: ${category}
    Location: ${location}
    Seats: ${seats}
  `);
}

displayEventDetails();

document.querySelector("#registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;

  const username = form.elements["username"].value.trim();
  const email = form.elements["email"].value.trim();
  const selectedEvent = form.elements["eventName"].value;

  document.querySelector("#nameError").textContent = "";
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#eventError").textContent = "";
  document.querySelector("#formMessage").textContent = "";

  let isValid = true;

  if (username === "") {
    document.querySelector("#nameError").textContent = "Name is required";
    isValid = false;
  }

  if (email === "") {
    document.querySelector("#emailError").textContent = "Email is required";
    isValid = false;
  }

  if (selectedEvent === "") {
    document.querySelector("#eventError").textContent = "Please select an event";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const userData = {
    username,
    email,
    selectedEvent
  };

  console.log("Form submission started");
  console.log("Payload:", userData);

  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Server Response:", data);
        document.querySelector("#formMessage").textContent = "Registration submitted successfully!";
        document.querySelector("#formMessage").style.color = "green";
        form.reset();
      })
      .catch(error => {
        console.log("Submission failed:", error);
        document.querySelector("#formMessage").textContent = "Registration failed!";
        document.querySelector("#formMessage").style.color = "red";
      });
  }, 1500);
});

$("#registerBtn").click(function () {
  console.log("jQuery click event triggered");
});

$(".event-card").fadeIn();

function hideCards() {
  $(".event-card").fadeOut();
}

function showCards() {
  $(".event-card").fadeIn();
}

console.log("Benefit of React or Vue: They make large applications easier to manage using components.");

renderEvents(events);