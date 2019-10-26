import React from 'react';


const Food = ({title, calories, image, ingredients}) => {
    return(
        <div className="foods">
            <h1 className="title">{title}</h1>
            <img className="pictures" src={image} alt="img"/>
            <h3 className="title">Ingredients</h3>
            <ul>
                {ingredients.map(ingredients => (
                    <li className="ingredients">{ingredients.text}</li>
                ))}
            </ul>
            <h3 className="title">Calories</h3>
            <p className="calories">{calories} Kcal</p>
        </div>
    );
}


export default Food;