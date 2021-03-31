# Recipes-Nutritions
A recipe search app built with react that shows the recipe's ingredients and the total amount of calories that it contains.  

## Demo  
Here's a live demo: https://recipenutritions.surge.sh/  

## Built With  
* [React](https://reactjs.org/)  
* [Create-React-App](https://create-react-app.dev/)  
* [Edamam API](https://developer.edamam.com/edamam-recipe-api)  

## Requirements
You need an api key from [edamam](https://developer.edamam.com/edamam-recipe-api "edamam")

## Installation
1. Clone the repository
2. `$ cd receipes-nutritions`
3. `$ npm install` 
4. Open App.js
5. Change the following:

```const APP_ID = process.env.REACT_APP_ID;```  
Replace `process.env.REACT_APP_ID` with the api id obtained from edamam

```const APP_KEY = process.env.REACT_APP_API_KEY;```  
Replace `process.env.REACT_APP_API_KEY` with the api key obtained from edamam

## Usage
Start the app with `npm start` <br>  

## Screenshot :camera:  
![Home](https://github.com/Hichem-Chabou/Recipes-Nutritions/blob/master/src/Recipe-full.png)  

## To-Do :memo:  
* Improve UI  

## License :scroll:  
[MIT](https://github.com/Hichem-Chabou/Recipes-Nutritions/blob/master/LICENSE)
