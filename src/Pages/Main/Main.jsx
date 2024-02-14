import React, {useEffect} from 'react';
import Home from '../Home';
import { useDispatch } from 'react-redux';
import { getLatestMeal, getPopular, getCountryMeals, getRandomMeals } from '../../Redux-toolkit/MealSlice/MealSlice';
import {Route, Routes} from 'react-router-dom'
import InfoIngredient from '../../Components/info-ingredient';
import PopularInfoIngredient from '../../Components/Popular-infoIngredient/Popular-infoIngredient';
import CountryInfo from '../../Components/Country-info/Country-info';
import SearchInfo from '../../Components/Search-info/Search-info';
import AlfavitInfo from '../../Components/Alfavit-info';

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLatestMeal())
    dispatch(getPopular())
    dispatch(getRandomMeals())
    dispatch(getCountryMeals())
  }, [])

  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/meal/:idMeal/:title' element={<InfoIngredient/>} />
            <Route path='/ingredient/:title' element={<PopularInfoIngredient/>} />
            <Route path='/meals/:country' element={<CountryInfo/>} />
            <Route path='/alfavit/:meals' element={<AlfavitInfo/>} />
            <Route path='/search/:text' element={<SearchInfo/>} />
        </Routes>
    </div>
  )
}

export default Main
