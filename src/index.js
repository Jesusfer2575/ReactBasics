// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//Tipically using just JS
// const element = document.createElement('h1');
// element.innerText = 'Hola React...';

// const container = document.getElementById('root');
// container.appendChild(element);

//Using React
// import React from 'react'
// import ReactDOM from 'react-dom'

// const user = {
//     firstName: 'Adrian',
//     lastName: 'Fernandez',
//     avatar: 'https://avatars.githubusercontent.com/u/59663313'
// };

// function getGreeting(user){
//     if(user){
//         return <h1>Hello {getName(user)}</h1>;
//     }
//     return <h1>Hello strange!</h1>
// }

// function getAvatar(user){
//     let generic = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y';
//     if(user){
//         return user.avatar;
//     }
//     return generic;
// }

// function getName(user){
//     return `${user.firstName} ${user.lastName}`;
// }

// const element = <div>{ getGreeting(user) }</div>;
// const avatar = <img src={ getAvatar(user) } />;
// const div = (
//     <div>
//         <div>{ element }</div>
//         <div>{ avatar }</div>
//     </div>
// );
// const container = document.getElementById('root');

// ReactDOM.render(div, container);

//imgUrl: https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png
// https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png
//https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06
// Colores de prueba gradientes: #E033FF - #FF3377
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/app'

const container = document.getElementById('root');

ReactDOM.render(<App />, container);
