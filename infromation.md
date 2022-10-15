### Deploy React App in GitHub

- 1 -
  in package.json add this line
  => "homepage": "https://saeedberzawi.github.io/production",
  <!-- explain -->
  <!-- 1 --> github userName
  => https://saeedberzawi.github.io
  <!-- 2 -->
  repository name => production

---

note:
we use the same name in the line and in the repo.

---

- 2 -
  install package => gh-pages
  => npm i gh-pages

---

- 3 -
  in package.json add tow line
  => "predeploy":"npm run build",
  => "deploy":"gh-pages -d build",

---

- 4 -
  in terminal
  => npm run build

---

then git init
=> git init
=> git add .
=> git commit -m "init"
=> git remote add origin https://github.com/saeedberzawi/production.git
=> git push -u origin main

---

- 5 -
  in github in main branches we type
  => gh-pages

---

- 6 -
  in terminal
  => npm run deploy

in terminal we see '

> traning-home@0.1.0 deploy
> gh-pages -d build

Published '

---
