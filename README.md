# Blog And Portfolio ✨

This repo is my Portfolio which is built using React, Django, and GraphQL.A Portfolio will provide a platform to showcase our blogs and the latest work that we had done

If you want to understand this repo better and use it follow the steps mentioned below

This repo has divided into two branches for making deployment in Heroku from Github
1. [Frontend](#Frontend)
2. [Backend](#Backend)

The First step is to fork the repo and get it in your Github repositories and then clone the repo to your local environment.

And then create Heroku apps for deploying so that you can add your URLs to the code by following the steps mentioned 

## Frontend ⚛️

<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="alt text" width="175px" height="175px">

### Setup

1. First clone the Frontend branch from the repo
    > `git clone -b frontend --single-branch <remote-repo-url>`

2. Install all the npm packages
    > `npm install`

3. Run the code
    > `npm start`

### Changes 📝

Changes that need to be made for getting your data on the website are:

1. Change the home.png and about.jpeg in the public/assets folder with the images you want to show in the landing page of the portfolio and change the names in the src of image tags in the Home.js and About.js if the naming is different

2. Change the title of the page in the index.html in the public folder with your name

    **From Components:**

3. Change the about data in the About.js

4. Change the Social Media links in the Home.js and Footer.js

5. For the stats of Github change the username in the URLs in Stats.js

6. Change all the URLs with your respective ones in
    - BlogPage.js [Cover image]
    - Blogs.js [fetch URLs]
    - Projects.js [fetch URLs]
    - useFetch.js [fetch URLs]

7. Then push it to the Github frontend branch of the forked repo

## Backend

### Setup

1. As done in the frontend part first clone the backend branch of the repo
    > `git -b backend --single-branch <remote-repo-url>`

2. Create a virtual environment and Install the pip packages in the requiremets.txt
    > `pip install -r requirements.txt`

    In case you are using version 3 use pip3

### Changes 📝

1. Add your frontend URL to CORS_ALLOWED_ORIGINS on the settings page

2. And add your backend URL in the ALLOWED_HOSTS on the settings page

3. Then push to the backend branch of the repo

## Deploying to the Heroku 🚀

<img src="https://img.icons8.com/color/480/000000/heroku.png" width="175px" height="175px">

1. Now finally add build-packs to the apps in Heroku and deploy the respective branches separately by connecting to the Github

    > We can deploy it together as well but I have chosen to deploy separately.

## Author ✍️

1. <img src="https://avatars.githubusercontent.com/u/73348574?v=4" alt='img' width='40px' height='40px' /> [Pranavdhar](https://www.Github.com/iampranavdhar)

## Note

If you found this useful, then please consider giving it a 🌟 on Github and sharing it with your friends.<br>
Happy Coding 💻
