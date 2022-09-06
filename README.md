<p align="center">
  <img src="[https://github.com/jc-u/P13_Urbain_Jean-Christophe_27072022/src/assets/argentBankLogo.png](https://github.com/jc-u/P13_Urbain_Jean-Christophe_27072022/blob/master/src/assets/img/argentBankLogo.png)" width="500px"alt="logo"/>
</p>

---
[![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](/)
[![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://fr.reactjs.org/)
[![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com)
[![](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
---

# ArgentBank
A banking app with auth<br/>
Created with React App and Redux - Redux Toolkit

### Dependencies

- [React](https://fr.reactjs.org/) v18.2.0
- [React-dom](https://www.npmjs.com/package/react-dom) v18.2.0
- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start) v6.3.0
- [FontAwesome](https://fontawesome.com/) v5.15.4
- [Redux-JS-Toolkit](https://redux-toolkit.js.org/) v1.8.3
- [React-Redux](https://redux.js.org/) v8.0.2

### 1 | Back-end

1. Download or clone the back-end's repository :

```sh
git clone (https://github.com/MarineHgns/Project-10-Bank-API.git)
```
2. Run the following commands:

```bash
# Install dependencies
npm install
# Start local dev server
npm run dev:server
# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.

### 2 | Front-end

1. Install dependencies:

```sh
# NPM
npm install
```

3. Launch dev server on port 3000 :

```sh
# NPM
npm run start
```

4. Front-end is now rendered at URL `http://localhost:3000` and you can navigate on the site.
