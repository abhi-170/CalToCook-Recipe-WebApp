import React from 'react'
import Card from './Card'
import axios from 'axios';
import { useEffect, useState } from 'react'
import './CardWrapper.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function CardWrapper() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [upto, setUpto] = useState(1);
    let [pageNo, setPageNo] = useState(1);
    const [isPrevDisabled, setIPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);


    useEffect(() => {

        axios.get(`https://dummyjson.com/recipes?limit=100&skip=0`)
            .then(response => {
                let size = Math.ceil((response.data.total) / 12);
                setUpto(size);
            })
            .catch(error => {
                setError(error);
            });
    }, [])

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });


        let skip = (pageNo * 12) - 12;

        axios.get(`https://dummyjson.com/recipes?limit=12&skip=${skip}`)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [pageNo])

    if (loading) return <p className='fetching' id='dataLoading'>loading....</p>
    if (error) return <p className='fetching' id='error'>{error.message}</p>
    return (
        <>
            <div id="recipes">
                {data.recipes.map(recipe =>
                    <Card key={recipe.id} recipe={recipe} />
                )}
            </div>
            <div className="paginator">
                <div className='inner-box'>
                    <button className='btns' id='previous-btn' disabled={isPrevDisabled} onClick={() => {
                        if (pageNo > 1) {
                            setPageNo(pageNo -= 1);
                            setIsNextDisabled(false);
                        }
                        if (pageNo == 1) {
                            setIPrevDisabled(true);
                        }
                    }}><IoIosArrowBack /> Previous</button>
                    <div className='limits' id='from'>{1} ...</div>
                    <div className='display'>{pageNo}</div>
                    <div className='limits' id='upto'>... {upto}</div>
                    <button className='btns' id='next-btn' disabled={isNextDisabled} onClick={() => {
                        if (pageNo < upto) {
                            setPageNo(pageNo += 1);
                            setIPrevDisabled(false);
                        }
                        if (pageNo == upto) {
                            setIsNextDisabled(true);
                        }
                    }}>Next <IoIosArrowForward /></button>
                </div>

            </div>
        </>

    )
}

export default CardWrapper