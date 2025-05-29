import React from 'react'
import './CardDetailedView.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CardDetailedView() {
  const {id}=useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then(response => {
        setPageData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id])

  if (loading) return <p className='fetching' id='dataLoading'>loading....</p>
  if (error) return <p className='fetching' id='error'>{error.message}</p>


  return (
    <div className='D-mainPage'>

      {/* recipe deatils */}
      <div className='D-recipeDetails'>
        <div className='D-recipeNameRating'>
          <div className='D-recipeName'>{pageData.name}</div>
          <div className='D-recipeReview'>
            <div className='D-rating'>{pageData.rating} ★</div>
            <div className="D-review">({pageData.reviewCount} reviews)</div>
          </div>
        </div>
        <div className="D-recipeTypeDetails">
          <div className="D-cuisine">{pageData.cuisine}</div>
          <div className="D-mealType">{pageData.mealType}</div>
        </div>
        <div className='D-tagContainer'>
          <div className="D-tag">{pageData.caloriesPerServing} calories/serving</div>
          <div className="D-tag">{pageData.servings} servings</div>
        </div>
      </div>

      {/* recipe image */}
      <div className='D-imageContainer'>
        <img className="D-recipeImage" src={pageData.image} alt={pageData.name} />
      </div>

      {/* cooking details */}
      <div className='D-cookingDetails'>
        <div className="D-cookingTimeDifficulty">
          <div className='D-tag' id="D-time">⏱ {pageData.cookTimeMinutes + pageData.prepTimeMinutes} mins.</div>
          <div className='D-tag' id="D-difficulty">⌛ {pageData.difficulty} to make</div>
        </div>
        <div className='D-stepsDetails'>
          <div className='D-lists'>
            <div className="D-listHeading">Ingredients</div>
            <div className="D-ingredientList">
              <ol>
                {pageData.ingredients.map(item =>
                  <li>{item}</li>
                )}
              </ol>
            </div>
          </div>
          <div className='D-lists'>
            <div className="D-listHeading">Instructions</div>
            <div className='D-instructionsList'>
              <ol>
                {pageData.instructions.map(item =>
                  <li>{item}</li>
                )}
              </ol>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardDetailedView