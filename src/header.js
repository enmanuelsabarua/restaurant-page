export default function header() {
    const content = document.querySelector('#content');
    const body = document.querySelector('body');

    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.textContent = 'The Smokehouse';
    h1.classList.add('title');

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');

    homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    contactLink.textContent = 'Contact';

    homeLink.dataset.id = 1;
    menuLink.dataset.id = 2;
    contactLink.dataset.id = 3;

    nav.appendChild(homeLink);
    nav.appendChild(menuLink);
    nav.appendChild(contactLink);

    header.appendChild(h1);
    header.appendChild(nav);

    body.insertBefore(header, content);

    return { homeLink, menuLink, contactLink}
}