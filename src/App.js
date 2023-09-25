import './App.modules.css'; /*CSS style import*/
import { useState } from 'react'; /* useState function import*/
import { getGuestList } from './API';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guests, setGuests] = useState([]);
  const [detailsShown, setDetailsShown] = useState(false);
  /* the collection of variables */

  const removeGuest = (indexToRemove) => {
    const updatedGuests = guests.filter(
      (guest, index) => index !== indexToRemove,
    );
    setGuests(updatedGuests);
  }; /*'removeGuest' function, when I click the Remove button then this function is called*/

  const createGuest = (event) => {
    if (event.key === 'Enter') {
      const newGuest = {
        firstName: firstName,
        lastName: lastName,
        attending: false,
      }; /*creates a new guest object when I push enter and the text appers from the input field and its not attending by default, because I need to confirm that with a vheckbox */

      /*const updatedGuests = [...newGuest];
      updatedGuests.push(newGuest);
      setGuests(updatedGuests);
      setFirstName('');
      setLastName('');*/

      const updatedGuests = [...guests, newGuest];
      setGuests(updatedGuests);

      setFirstName('');
      setLastName('');
    }
  }; /**/

  console.log({});
  return (
    <main className="heroSection">
      <div>
        <h1>Guest list</h1>
        <label htmlFor="firstName">First name:</label>
        <input
          id="firstName"
          value={firstName}
          onChange={(Event) => setFirstName(Event.currentTarget.value)}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last name:</label>
        <input
          id="lastName"
          /* When I write in this input field and I press enter, it triggers 'createGuest' to add a new guest */
          value={lastName}
          onChange={(Event) => setLastName(Event.currentTarget.value)}
          onKeyUp={createGuest}
        />
      </div>

      <div>
        <input type="checkbox" id="attempt" />
        <label htmlFor="attempt">Attending</label>
      </div>
      <div>
        {guests.map((guest, index) => {
          return (
            <div key={index}>
              <span>{`${guest.firstName} ${guest.lastName}`}</span>
              <button onClick={() => removeGuest(index)}>Remove</button>
            </div> /*This calls the 'removeGuest' arrow function, so the guest is gonna be removed'*/
          );
        })}
      </div>
      <label>
        <input
          type="checkbox"
          value={detailsShown ? 'Hide' : 'Show'}
          onClick={() => setDetailsShown(!detailsShown)}
        />
        {detailsShown ? 'Hide' : 'Show'} Attending
        {detailsShown && (
          <p>{`${createGuest.firstName} ${createGuest.lastName}`}</p>
        )}
      </label>
    </main>
  );
}
