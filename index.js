
let recipes
let ingredientsSelected = []
let appliancesSelected = []
let ustensilsSelected = []
let searchTerms = ''

const inputIngredient = document.querySelector('#ingredients')
const inputAppliance = document.querySelector('#appareils')
const inputUstensil = document.querySelector('#ustensils')

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
		} else {
			searchTerms = ''
			refreshRecipes()
		}
	})

	inputIngredient.addEventListener('input', (event) => {
		const addTagDom = addItemTagDropdown()
		const searchWord = new RegExp(event.target.value, 'i')
		const ingredientSearch = Array.from(allIngredients).filter(
			(ingredient) => {
				return searchWord.test(ingredient)
			}
		)
		displayTagInDropdown(ingredientSearch, 'ing')
		addTagDom.ingredientTag()
	})

	inputAppliance.addEventListener('input', (event) => {
		const addTagDom = addItemTagDropdown()

		const searchWord = new RegExp(event.target.value, 'i')
		const applianceSearch = Array.from(allAppliances).filter(
			(appliance) => {
				return searchWord.test(appliance)
			}
		)
		displayTagInDropdown(applianceSearch, 'app')
		addTagDom.applianceTag()
	})

	inputUstensil.addEventListener('input', (event) => {
		const addTagDom = addItemTagDropdown()

		const searchWord = new RegExp(event.target.value, 'i')
		const ustensilSearch = Array.from(allUstensils).filter((ustensil) => {
			return searchWord.test(ustensil)
		})
		displayTagInDropdown(ustensilSearch, 'ust')
		addTagDom.ustensilTag()
	})

	refreshRecipes()
}
init()
