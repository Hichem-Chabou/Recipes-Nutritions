# Recipes-Nutritions
A recipe search app built with react that shows the recipe's ingredients and the total amount of calories that it contains.  
Demo: https://recipenutritions.surge.sh/

## Requirements
You need an api key from [edamam](https://developer.edamam.com/edamam-recipe-api "edamam")

## Installation
1. Clone the repository
2. Go to the directory
3. Open the terminal and type: <br>
`
$ npm install
`
4. Then `$ cd src` or go to the "src" folder
5. Open App.js in a text editor
6. Change the following:

		const APP_ID = process.env.REACT_APP_ID;
	Replace `process.env.REACT_APP_ID` with the api id obtained from edamam

		const APP_KEY = process.env.REACT_APP_API_KEY; 
	Replace `process.env.REACT_APP_API_KEY` with the api key obtained from edamam

## Usage
Start the app with <br>
`
$ npm start
`
