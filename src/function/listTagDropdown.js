const addItemTagDropdown = () => {
	const ingredientTag = () => {
		const tagListItemIngredients = document.querySelectorAll(
			'.list-ingredients li'
		)
		tagListItemIngredients.forEach((itemIngredient) => {
			itemIngredient.addEventListener('click', (event) => {
				ingredientHasBeenSelected(event.target.innerText)
			})
		})

	}
	const applianceTag = () => {
		const tagListItemAppliances =
			document.querySelectorAll('.list-appareils li')
		tagListItemAppliances.forEach((itemAppliances) => {
			itemAppliances.addEventListener('click', (event) => {
				appliancesHasBeenSelected(event.target.innerText)
			})
		})
	}
	const ustensilTag = () => {
		const tagListItemUstensils =
			document.querySelectorAll('.list-ustensils li')
		tagListItemUstensils.forEach((itemUstensils) => {
			itemUstensils.addEventListener('click', (event) => {
				ustensilsHasBeenSelected(event.target.innerText)
			})
		})
	}
	return {
		ingredientTag,
		applianceTag,
		ustensilTag,
	}
}

// local function
const writeTagDom = (item, typeItem, element) => {
	const typeItemRename =
		typeItem === 'ing'
			? 'ingredient'
			: typeItem === 'app'
			? 'appareil'
			: 'ustensil'
	element.innerHTML += `
		<li class="item item-${typeItemRename} ">
			<p>${item}</p>
			<i data-item='${item}' data-type='${typeItem}' class="fa-solid fa-xmark remove-tag"></i>
		</li>`
}

const refreshDomTag = (
	ingredientsSelected,
	appliancesSelected,
	ustensilsSelected
) => {
	const listTagSearchActiveDom = document.querySelector('.list-tag')
	listTagSearchActiveDom.innerHTML = ''

	ingredientsSelected.forEach((ingredient) =>
		writeTagDom(ingredient, 'ing', listTagSearchActiveDom)
	)
	appliancesSelected.forEach((appliance) =>
		writeTagDom(appliance, 'app', listTagSearchActiveDom)
	)
	ustensilsSelected.forEach((ustensil) =>
		writeTagDom(ustensil, 'ust', listTagSearchActiveDom)
	)

	 const ingredientsTagSelect = document.querySelectorAll('.item-ingredient .remove-tag')
	 ingredientsTagSelect.forEach(ingredientTag => {
		ingredientTag.addEventListener('click', () => {
			ingredientHasBeenRemoved(ingredientTag.dataset.item)
			
		})
	 })
	 const appliancesTagSelect = document.querySelectorAll('.item-appareil .remove-tag')
	 appliancesTagSelect.forEach(applianceTag => {
		applianceTag.addEventListener('click', () => {
			appliancesHasBeenRemoved(applianceTag.dataset.item)
			
		})
	 })
	 const ustensilsTagSelect = document.querySelectorAll('.item-ustensil .remove-tag')
	 ustensilsTagSelect.forEach(ustensilTag => {
		ustensilTag.addEventListener('click', () => {
			ustensilsHasBeenRemoved(ustensilTag.dataset.item)
			
		})
	 })
}
