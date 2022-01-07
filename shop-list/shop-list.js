import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listForm = document.querySelector('form');
const deleteButton = document.querySelector('.delete');
const listElem = document.querySelector('.list');

logoutButton.addEventListener('click', () => {
    logout();
});

//window load
//form (e), update Supa
//deleteButton
//displayShoppingListItems(), fetchAll, clear list, loop(DOM--('p')/classLIst/tCont, render--if/else--event, append)

//loop===renderJS ??