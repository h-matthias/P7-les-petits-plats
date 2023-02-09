const searchEngine = () => {
	const getRecipesMatchingSearchTerm = (recipes, searchTerms) => {
		const searchWord = new RegExp(searchTerms, 'i')

		const recipeSortByTerms = []
		const lengthArray = recipes.length
		if (!searchTerms) return recipes

		for (let i = 0; i<lengthArray; i++) {
			const name = recipes[i].name
			const lengthIngredients = recipes[i].ingredients.length
			const ingredients = recipes[i].ingredients
			const description = recipes[i].description

			const hasName= searchWord.test(name)
			const hasDescription= searchWord.test(description)
			let hasIngredient=false

			for (let j = 0; j<lengthIngredients;j++){
				if (searchWord.test(ingredients[j].ingredient)) {
					hasIngredient = true
				}
			}
			if (hasName|| hasIngredient || hasDescription) recipeSortByTerms.push(recipes[i])
		}
		return recipeSortByTerms

	}

	const getRecipesMatchingIngredients = (recipes, ingredientSelected) => {
		return recipes.filter((recipe) => {
			return ingredientSelected.every((selected) => {
				return recipe.ingredients.some((ingredient) => {
					const searchWord = new RegExp(selected, 'i')
					return searchWord.test(ingredient.ingredient)
				})
			})
		})
	}
	const getRecipesMatchingAppliances = (recipes, applianceSelected) => {
		return recipes.filter((recipe) => {
			return applianceSelected.every((selected) => {
				const searchWord = new RegExp(selected, 'i')
				return searchWord.test(recipe.appliance)
			})
		})
	}
	const getRecipesMatchingUstensils = (recipes, ustensilSelected) => {
		return recipes.filter((recipe) => {
			return ustensilSelected.every((selected) => {
				return recipe.ustensils.some((ustensil) => {
					const searchWord = new RegExp(selected, 'i')
					return searchWord.test(ustensil)
				})
			})
		})
	}

	return {
		getRecipesMatchingSearchTerm,
		getRecipesMatchingIngredients,
		getRecipesMatchingAppliances,
		getRecipesMatchingUstensils,
	}
}

const ingredientHasBeenSelected = (ingredient) => {
	if (!ingredientsSelected.includes(ingredient)) {
		ingredientsSelected.push(ingredient)
		refreshRecipes()
		inputIngredient.value = ''
	}
}
const ingredientHasBeenRemoved = (ingredient) => {
	ingredientsSelected = ingredientsSelected.filter(
		(ing) => ing !== ingredient
	)
	refreshRecipes()
}

const appliancesHasBeenSelected = (appliance) => {
	if (!appliancesSelected.includes(appliance)) {
		appliancesSelected.push(appliance)
		refreshRecipes()
		inputAppliance.value = ''
	}
}
const appliancesHasBeenRemoved = (appliance) => {
	appliancesSelected = appliancesSelected.filter((app) => app !== appliance)
	refreshRecipes()
}

const ustensilsHasBeenSelected = (ustensil) => {
	if (!ustensilsSelected.includes(ustensil)) {
		ustensilsSelected.push(ustensil)
		refreshRecipes()
		inputUstensil.value = ''
	}
}
const ustensilsHasBeenRemoved = (ustensil) => {
	ustensilsSelected = ustensilsSelected.filter((ust) => ust !== ustensil)
	refreshRecipes()
}
