import React, {useEffect, useState} from 'react';
import s from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import List from '../../Components/List/List';
import MealItem from '../../Components/Meal-item';
import { useNavigate } from 'react-router-dom';
import PopularIngredients from '../../Components/Popular-ingredients';
import Alfavit from '../../Components/Alfavit/Alfavit';


const Home = () => {
  const navigate = useNavigate()
  const { latest, popular, randomMeal, randomIngredients, country} = useSelector((state) => state.products)
  console.log("Ingredients>>>", randomIngredients);
  console.log("Meals>>>", randomMeal);
  console.log("country>>>", country);

  const handleMealInfo = (id, title) => {
    navigate(`/meal/${id}/${title}`)
  }


  const handlePopularMeal = (title) => {
    navigate(`/ingredient/${title}`)
  }

  const randomItemClick = (title) => {
    navigate(`/ingredient/${title}`)
  }

  const randomItems = []
  for(let i = 0; i < 4; i++){
    let randomIndex = Math.floor(Math.random() * randomIngredients.length)
    randomItems.push(randomIngredients[randomIndex])
  }

  const randomMealsId = (id, title) => {
    navigate(`/meal/${id}/${title}`)
  }

  const countryMeals = (title) => {
    navigate(`/meals/${title}`)
  }

  const [input, setInput] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`)
  }

  return (
    <section>
      <div className="container">
        <div className={s.header}>
          <div className={s.img_right}>
            <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
          </div>
          <div className={s.header_content}>
            <h1>Welcome to TheMealDB</h1>
            <span>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</span>
            <span>We also offer a <span className={s.span}>free recipe API</span> for anyone wanting to use it, with additional features for subscribers.</span>
              <button>Pay<span>Pal</span></button>
              <span>Click button above to upgrade free API to premium for $3</span>
              <span>Currently (54 supporters)</span>
          </div>
          <div className={s.img_right }>
            <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
          </div>
        </div>
        <div className={s.home_search}>
        <form onSubmit={handleSubmit}>
          <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='  Search for a Meal...'/>
          </div>
          <div>
            <button type='submit'>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        
        <div className={s.quantity}><img src="https://www.themealdb.com/images/icons/meal-icon6.png" alt="" /> Total Meals: 302  <img src="https://www.themealdb.com/images/icons/meal-icon4.png" alt="" />   Total Ingredients: 575  <img src="	https://www.themealdb.com/images/icons/image2.png" alt="" />Images: 302</div>
        </div>
        <div className={s.meal_item}>
          <h3>Latest Meals</h3>
          <div className={s.meal_item_content}>
            <List
              items={latest && latest}
              renderItem={(elem, i) => {
              return  <MealItem key={i} {...elem} onClick={() => handleMealInfo(elem.idMeal, elem.strMeal)} />
              }}
            />
          </div>
        </div>
          <div className={s.popular}>
            <h3>Popular Ingredients</h3>
            <div className={s.popular_ingredients}>
              <List
                  items={popular}
                  renderItem={(elem, i) => {
                    if(i < 4){
                      return <PopularIngredients key={i} {...elem} onClick={() => handlePopularMeal(elem.strIngredient)} />
                    }
                  }}
              />
            </div>
          </div>
          <div className={s.random_meals}>
            <div className={s.random_content}>
              <h3>Random Meals</h3>
              <div className={s.random_images}>
                <List 
                  items={randomMeal}
                  renderItem={(elem, i) => (
                    <MealItem onClick={() => randomMealsId(elem.idMeal, elem.strCategory)} key={i} {...elem} />)}
                />
              </div>
            </div>
            <div className={s.popular}>
            <h3>Random Ingredients</h3>
            <div className={s.popular_ingredients}>
              <List
                  items={randomItems && randomItems}
                  renderItem={(elem, i) => {
                      return <PopularIngredients key={i} {...elem} onClick={() => randomItemClick(elem.strIngredient)} />
                  }}
              />
            </div>
          </div>
          <div className={s.country}>
            <h3>Browse Country</h3>
            <div className={s.country_meals}>
            <List
                items={country}
                renderItem={(elem, i) => (
                    <div key={i} onClick={() => countryMeals(elem.strArea)} className={s.flags}>
                        <img src={`https://www.themealdb.com/images/icons/flags/big/64/${elem.strArea.substr(0, 2)}.png`} alt="" />
                    </div>
                )}
            />
            </div>
          </div>
          <div className={s.alfavit}>
            <h3>Browse By Name</h3>
            <div className={s.alfavit_content}>
              <Alfavit/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home