const searchEngine = () => {
	const getRecipesMatchingSearchTerm = (recipes, searchTerms) => {
		const searchWord = new RegExp(searchTerms, 'i')
		return recipes.filter((recipe) => {
			const name = recipe.name
			const ingredients = recipe.ingredients.map((ing) => ing.ingredient)
			const description = recipe.description
			return (
				searchWord.test(name) ||
				searchWord.test(description) ||
				ingredients.some((ingredient) => searchWord.test(ingredient))
			)
		})
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
