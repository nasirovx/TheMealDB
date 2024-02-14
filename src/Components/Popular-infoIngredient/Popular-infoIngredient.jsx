import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import s from './Popular-infoIngredient.module.css';
import { getPopularInfo } from '../../Redux-toolkit/MealSlice/MealSlice';
import List from '../List/List';

const PopularInfoIngredient = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title } = useParams();
  const {popularInfo} = useSelector((state) => state.products);

  useEffect(() =>{
    dispatch(getPopularInfo(title))
  }, [dispatch])

  const clickMeal = (id, title) => {
    navigate(`/meal/${id}/${title}`)
  }

  console.log(popularInfo);

  return (
    <div className='container'>
      <div className={s.content}>
        <div className={s.title}>
          <h2>{title}</h2>
          <div className={s.content_title}>
            <img src={`https://www.themealdb.com/images/ingredients/${title}.png`} alt={title} />
          </div>
        </div>
        <div className={s.images_title}>
          <h2>Meals</h2>
          <div className={s.images}>
            <List 
              items={popularInfo}
              renderItem={(elem, i) => (
                <div key={i} className={s.images_item}>
                  <div onClick={() => clickMeal(elem.idMeal, elem.strMeal)} className={s.item}>
                    <img  src={elem.strMealThumb} alt={elem.strMeal} />
                  </div>
                  <p>{elem.strMeal}</p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularInfoIngredient
