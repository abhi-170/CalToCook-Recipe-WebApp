import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css'
function Card({ recipe, activeCardID, setActiveCardID }) {
    const cardData = recipe;
    // console.log(cardData)
    const [showIngredientList, setShowIngredientList] = useState(false);
    const [showInstructionsList, setShowInstructionsList] = useState(false);

    useEffect(() => {
        console.log(cardData.id, activeCardID);
        if (activeCardID !== cardData.id) {
            setShowIngredientList(false);
            setShowInstructionsList(false);
        }
    }, [activeCardID])

    return (
        <>
            <div className="recipeContainer">
                <div className="card">
                    <div className="imageContainer">
                        <img className="recipeImage" src={cardData.image} alt={cardData.name} />
                        <div className='tagContainer'>
                            <div className="tag">{cardData.caloriesPerServing} calories/serving</div>
                            <div className="tag">{cardData.servings} servings</div>
                        </div>
                    </div>

                    <div className="recipeDetails">
                        <div className="recipeName">{cardData.name}</div>
                        <div className="recipeReview">
                            <div className="rating">{cardData.rating} ★</div>
                            <div className="review">({cardData.reviewCount} reviews)</div>
                        </div>
                        <div className="cookingDetails">
                            <div className="cookingTime">⏱ {cardData.cookTimeMinutes + cardData.prepTimeMinutes} mins.</div>
                            <div className="difficulty">({cardData.difficulty} to make)</div>
                        </div>
                        <div className="recipeTypeDetails">
                            <div className="cuisine">{cardData.cuisine}</div>
                            <div className="mealType">{cardData.mealType}</div>
                        </div>

                        <div className="makeRecipe">
                            <button className='btn' id='ingrBtn' onClick={() => {
                                setShowIngredientList(!showIngredientList);
                                setActiveCardID(cardData.id);

                            }}>Ingredients</button>
                            <button className='btn' id='instBtn' onClick={() => {
                                setShowInstructionsList(!showInstructionsList);
                                setActiveCardID(cardData.id);
                            }}>Let's Cook it</button>
                        </div>
                    </div>
                </div>
                <div className='lists' id="ingredientList">
                    {showIngredientList &&
                        <ol>
                            {cardData.ingredients.map(item =>
                                <li>{item}</li>
                            )}
                        </ol>
                    }
                </div>
                <div className='lists' id="instructionsList">
                    {showInstructionsList &&
                        <ol>
                            {cardData.instructions.map(item =>
                                <li>{item}</li>
                            )}
                        </ol>
                    }
                </div>
            </div>
        </>
    )
}

export default Card