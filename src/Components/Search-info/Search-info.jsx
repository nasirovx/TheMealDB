import React, { useEffect } from 'react';
import s from './Search-info..module.css';
import { getSearchMeals } from '../../Redux-toolkit/MealSlice/MealSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import List from '../List/List';

const SearchInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {text} = useParams();
    const {search} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getSearchMeals(text))
    }, [text])

    const handleInfo = (id, title) => {
        navigate(`/meal/${id}/${title}`)
    }

  return (
    <div className='container'>
      <div className={s.content}>
        {search ? (
            <List 
                items={search}
                renderItem={(elem) => (
                    <div  onClick={() => handleInfo(elem.idMeal, elem.strMeal)} className={s.meal_content}>
                        <div className={s.images}>
                            <img src={elem.strMealThumb} alt="" />
                        </div>
                        <p>{elem.strMeal}</p>
                    </div>
                )}
            />
        ) : (
            <h2 className={s.text}>No product</h2>
        )}
      </div>
    </div>
  )
}

export default SearchInfo
