
let recipes
let ingredientsSelected = []
let appliancesSelected = []
let ustensilsSelected = []
let searchTerms = ''

const search = searchEngine()

const refreshRecipes = () => {
	const recipesMatchesIngredients = search.getRecipesMatchingIngredients(
		recipes,
		ingredientsSelected
	)
	const recipesMatchesUtensils = search.getRecipesMatchingUstensils(
		recipesMatchesIngredients,
		ustensilsSelected
	)
	const recipesMatchesAppliances = search.getRecipesMatchingAppliances(
		recipesMatchesUtensils,
		appliancesSelected
	)
	const recipesMatchesSearchTerm = search.getRecipesMatchingSearchTerm(
		recipesMatchesAppliances,
		searchTerms
	)

	displayRecipes(recipesMatchesSearchTerm)
    refreshDomTag(ingredientsSelected, appliancesSelected, ustensilsSelected)
}

async function init() {
	recipes = await getData()

	const START_SEARCH_UP_TWO_CHARACTERE = 2

	const inputSearch = document.querySelector('.input-search')
	inputSearch.addEventListener('input', (e) => {
		searchTerms = e.target.value
		if (searchTerms.length > START_SEARCH_UP_TWO_CHARACTERE) {
			refreshRecipes()
		}else{
            searchTerms =''
            refreshRecipes()
        }
	})

	refreshRecipes()
}
init()
