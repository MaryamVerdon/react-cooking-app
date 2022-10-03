import React from 'react';

const Card = ({receipt}) => {
    return (
        <div className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src={receipt.strMealThumb} alt={receipt.strMeal} className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <p className="mt-1 text-lg font-medium text-gray-900">{receipt.strMeal}</p>
            <h3 className="mt-4 text-sm text-gray-700">{receipt.strArea}</h3>
            <p class="mt-1 text-sm text-gray-500">Mes ingrédients....</p>

        </div>
        
    );
};

export default Card;