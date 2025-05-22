import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Card from './Components/Card'
import Navbar from './Components/Navbar';
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeCardID, setActiveCardID] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes?limit=100&skip=0')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [])

  if (loading) return <p className='fetching' id='dataLoading'>loading....</p>
  if (error) return <p className='fetching' id='error'>{error.message}</p>
  return (
    <>
      <Navbar/>
      <div id="recipes">
        {data.recipes.slice(0, 48).map(recipe =>
          <Card key={recipe.id} recipe={recipe} activeCardID={activeCardID} setActiveCardID={setActiveCardID} />
        )}
      </div>
    </>
  )
}

export default App
