import React from 'react'

const FoodCard = ({food}) => {
    return (
        <div>
            <li key={food.id}> <strong>{food.meal_type}</strong> - {food.name} <span><button > Edit </button><button > Delete </button></span></li>
                    
        </div>
    )
}

export default FoodCard
