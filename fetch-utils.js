const SUPABASE_URL = 'https://zmbnciradftxcirdjqoj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTUxNjU3MSwiZXhwIjoxOTU3MDkyNTcxfQ.qiKepMg5qsWXpjHRSIVGIwzGZ8MtIl6HKM8xHyjm7yo';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session();
}

export async function getItems() {
    const response = await client
        .from('shop_list')
        .select();

    return checkError(response);
}

export async function createItem(item, amount) {
    const response = await client
        .from('shop_list')
        .insert([{ item, amount }]);

    return checkError(response);
}

export async function buyItem(item) {
    const response = await client
        .from('shop_list')
        .update({ bought: true })
        .match({ id: item });

    return checkError(response);
}

export async function deleteAllItems() {
    const response = await client
        .from('shop_list')
        .delete();

    return checkError(response);
}


export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./shop-list');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
