export default function footer() {

    const footer = document.createElement('footer');

    const p = document.createElement('p');
    p.innerHTML = 'Copyright &copy; 2023 Enmanuel Sanchez Abarua';

    footer.appendChild(p);

    return footer;
}