import ribs from './ribs.jpg';
import pulled from './pulled-pork.jpg';
import bbq from './bbq-chicken.jpg';
import beef from './beef-brisket.jpg';
import meat from './two-meat-platter.jpg';
import pig from './pig-out-platter.jpg';

export default function menu() {
    // <div class="menu">
    //     <h2>BBQ RESTAURANT MENU</h2>
    //     <div class="dishes">
    //         <div class="dish">
    //             <img src="../src/ribs.webp" alt="Ribs Dish">
    //             <h3>Ribs, Ribs, Ribs</h3>
    //             <p>Our First Place St. Louis Ribs are hand rubbed, slow-smoked, and finished with our BBQ Sauce</p>
    //         </div>

    //         <div class="dish">
    //             <img src="../src/pulled-pork.webp" alt="Pulled Pork Dish">
    //             <h3>Pulled Pork</h3>
    //             <p>Our delicious and tender Slow-Smoked Pulled Pork is topped with our Carolina Sauce</p>
    //         </div>

    //         <div class="dish">
    //             <img src="../src/bbq-chicken.webp" alt="BBQ Chicken Dish">
    //             <h3>BBQ Chicken</h3>
    //             <p>Our juicy Smoked Chicken is flavored with our Uncle Dick's Dry Rub and finished with our BBQ Sauce </p>
    //         </div>

    //         <div class="dish">
    //             <img src="../src/beef-brisket.webp" alt="Beef Brisket Dish">
    //             <h3>Beef Brisket</h3>
    //             <p>Slow-rendered for up to 14 hours, our Texas Beef Brisket is served with our BBQ Sauce Choice of chopped (includes burnt ends) or sliced</p>
    //         </div>

    //         <div class="dish">
    //             <img src="../src/two-meat-platter.webp" alt="Two Meat Platter Dish">
    //             <h3>Two Meat Platter</h3>
    //             <p>Create your own platter from your choice of 2 meats: Pulled Pork, 1/2 BBQ Chicken, Pulled Chicken, Beef Brisket (chopped or sliced) or Ribs</p>
    //         </div>

    //         <div class="dish">
    //             <img src="../src/pig-out-platter.webp" alt="Pig Out Platter Dish">
    //             <h3>Pig Out Platter</h3>
    //             <p>Create your own platter from your choice of 3 meats: Pulled Pork, 1/2 BBQ Chicken, Pulled Chicken, Beef Brisket (chopped or sliced) or Ribs</p>
    //         </div>
    //     </div>

    const imgsAlts = ['ribs', 'pulled-pork', 'bbq-chicken', 'beef-brisket', 'two-meat-platter', 'pig-out-platter'];
    const imgs = [ribs, pulled, bbq, beef, meat, pig];
    const titles = ['Ribs, Ribs, Ribs', 'Pulled Pork', 'BBQ Chicken', 'Beef Brisket', 'Two Meat Platter', 'Pig Out Platter'];
    const descriptions = [
        'Our First Place St. Louis Ribs are hand rubbed, slow-smoked, and finished with our BBQ Sauce',
        'Our delicious and tender Slow-Smoked Pulled Pork is topped with our Carolina Sauce',
        'Our juicy Smoked Chicken is flavored with our Uncle Dick\'s Dry Rub and finished with our BBQ Sauce',
        'Slow-rendered for up to 14 hours, our Texas Beef Brisket is served with our BBQ Sauce Choice of chopped (includes burnt ends) or sliced',
        'Create your own platter from your choice of 2 meats: Pulled Pork, 1/2 BBQ Chicken, Pulled Chicken, Beef Brisket (chopped or sliced) or Ribs',
        'Create your own platter from your choice of 3 meats: Pulled Pork, 1/2 BBQ Chicken, Pulled Chicken, Beef Brisket (chopped or sliced) or Ribs'
    ];

    const divMenu = document.createElement('div');
    divMenu.classList.add('menu');

    const h2 = document.createElement('h2');
    h2.textContent = 'BBQ RESTAURANT MENU';

    divMenu.appendChild(h2);

    const divDishes = document.createElement('div');
    divDishes.classList.add('dishes');

    for (let i = 0; i < imgs.length; i++) {
        const divDish = document.createElement('div');
        divDish.classList.add('dish');

        const img = new Image();
        img.src = imgs[i];
        img.alt = imgsAlts[i];

        const h3 = document.createElement('h3');
        h3.textContent = titles[i];

        const description = document.createElement('p');
        description.textContent = descriptions[i];

        divDish.appendChild(img);
        divDish.appendChild(h3);
        divDish.appendChild(description);

        divDishes.appendChild(divDish);

    }

    divMenu.appendChild(divDishes)
    
    return divMenu;
}