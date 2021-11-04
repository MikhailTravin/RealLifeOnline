'use strict'

let tooltip = document.querySelector('.noUi-tooltip')
let page = document.querySelector('.page')

document.body.addEventListener('click', (e) => {
	if(e.target === tooltip){
		click_tooltip()
	}
	else {
		click_page()
	}
})

function click_page() {
	tooltip.textContent = priceSlider.noUiSlider.get()
}

function click_tooltip(){
	tooltip.textContent = '' // Очищаем div с текущим значением слайдера
	let template = `<input type="number" class="noui__value-input" value="">` // Создаем новый элемент на странице
	tooltip.insertAdjacentHTML('beforeend', template) // Вставляем input в div с текущим значением слайдера
	let new_input = document.querySelector('.noui__value-input') // Получаем queryselector только что созданого элемента
	new_input.focus() // Фокусируемся на элемените
	
	new_input.addEventListener('change', (e) => {
		priceSlider.noUiSlider.set(new_input.value); 
	})
}
priceSlider.noUiSlider.on('change', update_input_value)

