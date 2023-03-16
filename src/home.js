export default function home() {
    // <div class="home">
    //         <h2>About</h2>
    //         <p>Welcome to The Smokehouse, where we specialize in delivering the ultimate BBQ experience to your plate. Our restaurant is dedicated to serving up the best smoked meats and traditional Southern-style dishes that will leave your taste buds wanting more. From brisket and ribs to pulled pork and chicken, our menu is carefully crafted to satisfy all your cravings for authentic BBQ flavor. We take pride in using only the freshest and highest quality ingredients to create our signature dishes. With a warm and inviting atmosphere, The Smokehouse is the perfect place to enjoy a meal with family and friends. Come and join us for a truly memorable dining experience that will have you coming back for more!</p>
    // </div>

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const h2 = document.createElement('h2');
    h2.textContent = 'About';

    const p = document.createElement('p');
    p.textContent = 'Welcome to The Smokehouse, where we specialize in delivering the ultimate BBQ experience to your plate. Our restaurant is dedicated to serving up the best smoked meats and traditional Southern-style dishes that will leave your taste buds wanting more. From brisket and ribs to pulled pork and chicken, our menu is carefully crafted to satisfy all your cravings for authentic BBQ flavor. We take pride in using only the freshest and highest quality ingredients to create our signature dishes. With a warm and inviting atmosphere, The Smokehouse is the perfect place to enjoy a meal with family and friends. Come and join us for a truly memorable dining experience that will have you coming back for more!';

    homeDiv.appendChild(h2);
    homeDiv.appendChild(p);

    return homeDiv;
} 