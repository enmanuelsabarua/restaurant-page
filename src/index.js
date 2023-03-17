import './style.css';
import load from './initialLoad';
import home from './home';
import menu from './menu';
import contact from './contact';

const content = document.querySelector('#content');

// Create initial load function
const links = load();
links.homeLink.classList.add('active');

// Add an event listener to the links
for (const key in links) {
    if (Object.hasOwnProperty.call(links, key)) {
        const link = links[key];
        link.addEventListener('click', handleTabs);
    }
}

// Finish function in order to be able to change tabs
function handleTabs(e) {
    let id = e.target.dataset.id;
    console.log(id);

    switch (id) {
        case '1':
            content.innerHTML = '';
            content.appendChild(home());

            links.homeLink.classList.add('active');
            links.menuLink.classList.remove('active');
            links.contactLink.classList.remove('active');
            break;
            case '2':
                content.innerHTML = '';
                content.appendChild(menu());
                
                links.homeLink.classList.remove('active');
                links.menuLink.classList.add('active');
                links.contactLink.classList.remove('active');
                break;
            case '3':
                content.innerHTML = '';
                content.appendChild(contact());
            
                links.homeLink.classList.remove('active');
                links.menuLink.classList.remove('active');
                links.contactLink.classList.add('active');
            break;
    
        default:
            break;
    }


}