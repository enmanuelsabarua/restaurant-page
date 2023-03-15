import './style.css';

const title = document.querySelector('h1');
title.classList.add('title');

const nav = document.querySelector('nav');
nav.classList.add('nav');

const links = document.querySelectorAll('.nav a');
links[0].classList.add('active');