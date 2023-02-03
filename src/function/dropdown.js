const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach((dropdown) => {
	const button = dropdown.querySelector('.dropdown-button')
	const content = dropdown.querySelector('.dropdown-content')
	const input = dropdown.querySelector('input')
	button.addEventListener('click', () => {
		toggleContent(dropdown)
		toggleButton(button)
	})
	document.addEventListener('click', (event) => {
		if (!dropdown.contains(event.target)) {
			closeContent(dropdown, button)
			dropdown.children[1].classList.add('is-hidden')
		}
	})
	input.addEventListener('input', (e) => {
		const origin = content
		if (e.target.value.length > 0) {
			content.classList.remove('is-hidden')
			dropdown.classList.remove('is-hidden')
			button.classList.add('rotate')
		} else if (e.target.value.length < 1) {
			content.classList.add('is-hidden')
			dropdown.classList.add('is-hidden')
			button.classList.remove('rotate')
		}
	})
})

const toggleContent = (element) => {
	element.classList.toggle('is-hidden')
	element.children[1].classList.toggle('is-hidden')
}
const toggleButton = (element) => {
	element.classList.toggle('rotate')
}

const closeContent = (element, button) => {
	element.classList.add('is-hidden')
	button.classList.remove('rotate')
}