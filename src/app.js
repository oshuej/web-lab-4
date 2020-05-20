import './styles/app.scss';

import { pikachu } from './js/pikachu';
import { ditto } from './js/ditto'
import { mainPage } from "./js/main-page";

let btnMainPage = document.querySelector('#home'),
    btnPikachu = document.querySelector('#pikachu'),
    btnDitto = document.querySelector('#ditto'),
    root = document.querySelector('#root')

mainPage.loadData(root);
btnMainPage.onclick = mainPage.loadData.bind(null,root);
btnPikachu.onclick = pikachu.getData.bind(null,root);
btnDitto.onclick = ditto.getData.bind(null,root);

