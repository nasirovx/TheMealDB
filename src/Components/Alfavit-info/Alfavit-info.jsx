import React, { useEffect } from 'react';
import s from './Alfavit.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Alfavit from '../Alfavit/Alfavit';
import List from '../List'
import { getAlfavitMeals } from '../../Redux-toolkit/MealSlice/MealSlice';

const AlfavitInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {alfavitMeal} = useSelector((state) => state.products);
    const { meals } = useParams();

    useEffect(() => {
        dispatch(getAlfavitMeals(meals));
    }, [])

    const infoClick = (id, title) => {
        navigate(`/meal/${id}/${title}`)
    };

  return (
    <div className="container">
        <div className={s.content}>
            {alfavitMeal ? (
                <List 
                    items={alfavitMeal}
                    renderItem={(elem, i) => (
                        <div key={i} onClick={() => infoClick(elem.idMeal, elem.strMeal)} className={s.meal_content}>
                            <div className={s.images}>
                                <img src={elem.strMealThumb} alt="" />
                            </div>
                            <p>{elem.strMeal}</p>
                        </div>
                    )}
                />
            ) : (
                <h2 className={s.text}>No meals ound</h2>
            )}
        </div>
        <div className={s.alfavit}>
            <h2>Browes Meals</h2>
            <br/>
            <Alfavit/>
        </div>
    </div>
  )
}

export default AlfavitInfo
