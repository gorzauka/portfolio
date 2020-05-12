"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const reposList = document.querySelector(".projects-content__list--js");

fetch("https://api.github.com/users/gorzauka/repos?sort=updated")
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const { description, html_url, name } = repo;
      reposList.innerHTML += `
      <li class="projects-content__item">
      <a class="projects-content__link" href='${repo.html_url}'>${repo.name}
    </li>`
    }
  })



