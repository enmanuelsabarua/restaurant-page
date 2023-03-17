import map from './map.jpg';

export default function contact() {
    const divContact = document.createElement('div');
    divContact.classList.add('contact');

    const number = document.createElement('h2');
    number.textContent = '(809) 248-8745';

    const address = document.createElement('h2');
    address.textContent = '1579 Meadow Drive, Clarksville, Tennessee, USA';

    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map');

    const mapImag = new Image();
    mapImag.src = map;
    mapImag.alt = 'Location';

    mapDiv.appendChild(mapImag);

    divContact.appendChild(number);
    divContact.appendChild(address);
    divContact.appendChild(mapDiv);

    return divContact;
}