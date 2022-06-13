const axios = require('axios').default; // for npm run lint:fix

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const deleteBtn = document.getElementById('delete-btn');

let userId = null;

const requestURL = 'http://127.0.0.1:5000/user';

const user = {
    username: 'U1',
    first_name: 'user1',
    last_name: 'user1',
    email: 'user1@gmail.com',
    password: '111222',
    phone: '1111111',
    user_status: true,
};

const userChanged = {
    username: 'U1',
    first_name: 'user1-changed',
    last_name: 'user1-changed',
    email: 'user1@gmail.com',
    password: '111222',
    phone: '1111111',
    user_status: true,
};

const getData = () => {
    axios.get(`${requestURL}/U1`).then((data) => {
        userId = data.data.id;
        console.log(data);
    })
        .catch((err) => console.log(err));
};

const sendData = () => {
    axios.post(requestURL, user).then((data) => {
        console.log(data);
    })
        .catch((err) => console.log(err));
};

const putData = () => {
    axios.put(`${requestURL}/${userId}`, userChanged).then((data) => {
        console.log(data);
    })
        .catch((err) => console.log(err));
};

const deleteData = () => {
    axios.delete(`${requestURL}/U1`).then((data) => {
        userId = data.is;
        console.log(data);
    })
        .catch((err) => console.log(err));
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
putBtn.addEventListener('click', putData);
deleteBtn.addEventListener('click', deleteData);
