function recipesFactory(recipe) {
	const {
		id,
		name,
		servings,
		ingredients,
		time,
		description,
		appliance,
		ustensils,
	} = recipe

	function getRecipeCardDom() {
		//create element Dom
		const cardDom = document.createElement('li')
		cardDom.classList.add('item')

		const imgRecipe = document.createElement('div')
		imgRecipe.classList.add('img')

		const infoRecipe = document.createElement('div')
		infoRecipe.classList.add('info-recipe')

		const title = document.createElement('h2')
		title.classList.add('title')

		const timeContainer = document.createElement('div')
		timeContainer.classList.add('time-container')

		const i = document.createElement('i')
		i.classList.add('fa-regular', 'fa-clock')
		const ptime = document.createElement('p')
		ptime.classList.add('time')

		const recipeIngredient = document.createElement('ul')
		recipeIngredient.classList.add('recipe-ingredients')

		const descriptionRecipe = document.createElement('p')
		descriptionRecipe.classList.add('description-recipe')

		//assign element
		title.textContent = name
		ptime.textContent = time
		descriptionRecipe.textContent =
			description.length > 180
				? description.slice(0, 175) + '...'
				: description

		ingredients.forEach((ingredient) => {
			const li = document.createElement('li')
			const p = document.createElement('p')
			const span = document.createElement('span')

			const quantity = ingredient.quantity ? ingredient.quantity : ''
			const unit = getUnit(ingredient.unit)

			span.textContent = `${ingredient?.quantity}${ingredient?.unit}`
			p.innerHTML = `${ingredient.ingredient} ${
				quantity ? `: <span>${quantity}${unit}</span>` : ''
			}`

			li.appendChild(p)
			recipeIngredient.appendChild(li)
		})

		timeContainer.appendChild(i)
		timeContainer.appendChild(ptime)

		infoRecipe.appendChild(title)
		infoRecipe.appendChild(timeContainer)
		infoRecipe.appendChild(recipeIngredient)
		infoRecipe.appendChild(descriptionRecipe)

		cardDom.appendChild(imgRecipe)
		cardDom.appendChild(infoRecipe)

		return cardDom
	}
	function getUnit(unit) {
		if (!unit) {
			return ''
		} else if (unit && unit == 'grammes') {
			return 'g'
		} else if (unit && unit.includes('cuillère')) {
			return ' cuillères'
		} else {
			return ` ${unit}`
		}
	}

	return {
		getRecipeCardDom,
	}
}

/*
Representation HTML getRecipeCardDom

    <li class="item">
        <div class="img"></div>
    
        <div class="info-recipe">
            <h2 class="title"></h2>
            <div class="time-container">
                <i class="fa-regular fa-clock"></i>
                <p class="time"></p>
            </div>
            <ul class="recipe-ingredients">
                <li></li>
            </ul>
            <p class="description-recipe"></p>
        </div>
    </li>
*/
