import { 
    checkAuth, 
    logout, 
    getItems, 
    createItem,
    buyItem,
    deleteAllItems } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listForm = document.querySelector('form');
const deleteButton = document.querySelector('.delete');
const listElem = document.querySelector('.list');

logoutButton.addEventListener('click', () => {
    logout();
});

//window load
window.addEventListener('load', async() => {
    await displayShoppingListItems();
});
//form (e), update Supa
listForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(listForm);

    const item = data.get('item');
    const amount = data.get('amount');

    await createItem(item, amount);

    listForm.reset();

    await displayShoppingListItems();
});
//deleteButton
deleteButton.addEventListener('click', async() => {
    await deleteAllItems();

    await displayShoppingListItems();
});
//displayShoppingListItems(), fetchAll, clear list, loop(DOM--('p')/classLIst/tCont, render--if/else--event, append)
async function displayShoppingListItems() {
    const list = await getItems();

    listElem.textContent = '';

    for (let item of list) {
        const itemElem = document.createElement('p');
        
        itemElem.classList.add('list-item');
        itemElem.textContent = `${item.amount} ${item.item}`;

        if (item.bought) {
            itemElem.classList.add('bought');
        } else {
            itemElem.classList.add('not-bought');
            // event listener
            itemElem.addEventListener('click', async() => {
                await buyItem(item.id);

                displayShoppingListItems();
            });
        }

        listElem.append(itemElem);
    }
}
//loop===renderJS ??