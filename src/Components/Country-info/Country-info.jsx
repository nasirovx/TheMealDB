import React, { useEffect } from 'react';
import s from './Country-info.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import List from '../List/List';
import { getCountryInfoMeals } from '../../Redux-toolkit/MealSlice/MealSlice';

const CountryInfo = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {country} = useParams();
    const { countryInfo } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getCountryInfoMeals(country))
    }, [])

    const handleInfo = (id, title) => {
        navigate(`/meal/${id}/${title}`)
    }

  return (
    <div className='container'>
      <div className={s.content}>
        <List 
            items={countryInfo && countryInfo}
            renderItem={(elem, i) => (
                <div onClick={() => handleInfo(elem.idMeal, elem.strMeal)} key={i} className={s.item}>
                    <div className={s.img}>
                        <img src={elem.strMealThumb} alt="" />
                    </div>
                    <p>{elem.strMeal}</p>
                </div>
            )}
        />
      </div>
    </div>
  )
}

export default CountryInfo
