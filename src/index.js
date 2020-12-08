import { model } from "./model";
import { templates } from "./templates";
import "./styles/main.css";

const $site = document.querySelector('#site');


//перебираем model.js//
model.forEach(block => {

	//перебираем ключи и добавляем в templates(ключи берем из model + функции из templates)//
	const toHTML = templates[block.type]
	if(toHTML) {
		$site.insertAdjacentHTML('beforeend', toHTML(block)) //проверяем что в HTML что то есть//
	}

})
