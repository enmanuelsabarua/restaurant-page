import header from './header';
import home from './home';
import footer from './footer';

export default function load() {
    const links = header();

    const content = document.querySelector('#content');
    content.appendChild(home());

    const body = document.querySelector('body');
    body.appendChild(footer());

    return links;
}