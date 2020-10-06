const getRepos = repoName => {
  return fetch("https://api.github.com/users/" + repoName + "/repos").then(res => onReposReady(res));
};
const onReposReady = data => {
  data.json().then(repos => {
    repos.map(repo => {
      let p = document.createElement("p");
      p.innerText = repo.name;
      myElement.appendChild(p);
    });
  });
};
getRepos("migracode-barcelona");
const myElement = document.querySelector("#main");
//Task1. Fix the code
//Task2. Create a <p> for each repository

//Task1. Fix the code
//Task2. Create a <p> for each repository
