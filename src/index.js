//import { templates } from "./templates";
import { model } from "./model";
import "./styles/main.css";
import { App } from './classes/app'

new App(model).init()

//const $site = document.querySelector('#site');


//перебираем model.js//
//model.forEach(block => {

	//перебираем ключи и добавляем в templates(ключи берем из model + функции из templates)//
	//const toHTML = templates[block.type]
	//if(false) {
		//$site.insertAdjacentHTML('beforeend', block.toHTML()) //проверяем что в HTML что то есть , toHTML(block) === block.toHTML()
	//}

//})
