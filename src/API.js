const baseUrl = 'http://localhost:4000';

async function getGuestList() {
  const responseAllGuests = await fetch(`${baseUrl}/guests`);
  const allGuests = await responseAllGuests.json();
  console.log(allGuests);
}

async function getGuestById(id) {
  const responseOneGuest = await fetch(`${baseUrl}/guests/:id`);
  const guest = await responseOneGuest.json();
}

async function addGuest() {
  const responseAddGuest = await fetch(`${baseUrl}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
  });
  const createdGuest = await responseAddGuest.json();
  console.log(createdGuest);
}

async function updateGuest(id) {
  const responseUpdateGuest = await fetch(`${baseUrl}/guests/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: true }),
  });
  const updatedGuest = await responseUpdateGuest.json();
  console.log(updateGuest);
}

async function deleteGuest(id) {
  const responseDeleteGuest = await fetch(`${baseUrl}/guests/1`, {
    method: 'DELETE',
  });
  const deletedGuest = await responseDeleteGuest.json();
  console.log(deleteGuest);
}
