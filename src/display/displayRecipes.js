

const displayRecipes = (recipes) => {
	const recipesListSection = document.querySelector('.list-recipes')
	const recipesLengthEqualZero = 0
	recipesListSection.innerHTML = ''

	if (recipes.length !== recipesLengthEqualZero) {
		const allIngredients = new Set()
		const allAppliances = new Set()
		const allUstensils = new Set()

		recipes.forEach((recipe) => {
			recipe.ingredients.forEach((ingredients) => {
				allIngredients.add(ingredients.ingredient.toLowerCase())
			})
			allAppliances.add(recipe.appliance)
			recipe.ustensils.forEach((ustensil) =>
				allUstensils.add(ustensil.toLowerCase())
			)
		})

		recipes.forEach((recipe) => {
			const recipeModel = recipesFactory(recipe)
			const recipeCardDom = recipeModel.getRecipeCardDom()
			recipesListSection.appendChild(recipeCardDom)
		})

		displayTagInDropdown(allIngredients, 'ing')
		displayTagInDropdown(allAppliances, 'app')
		displayTagInDropdown(allUstensils, 'ust')
		const addTagDom = addItemTagDropdown()
		addTagDom.ingredientTag()
		addTagDom.applianceTag()
		addTagDom.ustensilTag()
	} else {
		recipesListSection.innerHTML =
			'<li class=\'zero-recipes\' > Aucune recette ne correspond à votre critére... Vous pouvez chercher "tarte au pomme", "poisson", etc. </li>'
	}
}


//Affichage list des ingredient, ustensil et appareils pour la fonction displayRecipes()
const displayTagInDropdown = (tags, groupTag) => {
	const tagListIngredients = document.querySelector('.list-ingredients')
	const tagListAppliances = document.querySelector('.list-appareils')
	const tagListUstensils = document.querySelector('.list-ustensils')

	const tagSort = Array.from([...tags].sort((a, b) => a.localeCompare(b)))

	switch (groupTag) {
		case 'ing':
			tagListIngredients.innerHTML = ''
			tagSort.forEach((tag) => {
				tagListIngredients.innerHTML += `<li class='ing'>${tag}</li>`
			})
			break
		case 'app':
			tagListAppliances.innerHTML = ''
			tagSort.forEach((tag) => {
				tagListAppliances.innerHTML += `<li class='app'>${tag}</li>`
			})
			break
		case 'ust':
			tagListUstensils.innerHTML = ''
			tagSort.forEach((tag) => {
				tagListUstensils.innerHTML += `<li class='ust'>${tag}</li>`
			})
			break

		default:
			break
	}
}
