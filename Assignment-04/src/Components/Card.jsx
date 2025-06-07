import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css'
import { Link } from 'react-router-dom';
function Card(recipe) {
    const cardData = recipe.recipe;
    return (
        <>
            <Link className="recipeContainer" to={`/recipeDetails/${cardData.id}`}>
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
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card