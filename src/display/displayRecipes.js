let allIngredients = new Set()
let allAppliances = new Set()
let allUstensils = new Set()

const displayRecipes = (recipes) => {
	const recipesListSection = document.querySelector('.list-recipes')
	const recipesLengthEqualZero = 0
	recipesListSection.innerHTML = ''

	if (recipes.length !== recipesLengthEqualZero) {
		allIngredients = new Set()
		allAppliances = new Set()
		allUstensils = new Set()

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

//Affichage list des ingredients, ustensils et appareils pour la fonction displayRecipes()
const displayTagInDropdown = (tags, groupTag) => {
	const tagListIngredients = document.querySelector('.list-ingredients')
	const tagListAppliances = document.querySelector('.list-appareils')
	const tagListUstensils = document.querySelector('.list-ustensils')

	const tagSort = Array.from([...tags].sort((a, b) => a.localeCompare(b)))

	switch (groupTag) {
		case 'ing':
			tagListIngredients.innerHTML = ''
			if (tagSort.length == 0) {
				tagListIngredients.innerHTML += `<p>Aucun ingredient ne correspond à votre critére... Vous pouvez chercher "pomme", "poisson", etc.</p>`
			}
			tagSort.forEach((tag) => {
				tagListIngredients.innerHTML += `<li class='ing'>${tag}</li>`
			})
			break
		case 'app':
			tagListAppliances.innerHTML = ''
			if (tagSort.length == 0) {
				tagListAppliances.innerHTML += `<p>Aucun appareil ne correspond à votre critére... Vous pouvez chercher "blender", "mixer", etc.</p>`
			}
			tagSort.forEach((tag) => {
				tagListAppliances.innerHTML += `<li class='app'>${tag}</li>`
			})
			break
		case 'ust':
			tagListUstensils.innerHTML = ''
			if (tagSort.length == 0) {
				tagListUstensils.innerHTML += `<p>Aucun ustensile ne correspond à votre critére... Vous pouvez chercher "saladier", "fouet", etc.</p>`
			}
			tagSort.forEach((tag) => {
				tagListUstensils.innerHTML += `<li class='ust'>${tag}</li>`
			})
			break

		default:
			break
	}
}
