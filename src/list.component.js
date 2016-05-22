import styles from './list.style.css'
import template from './list.template.html'

class controller {
	constructor() {
		this.styles = styles;
	}
}


let listComponent = {
	bindings: {
		items: '<',
	},
	template,
	controller,
	controllerAs: 'vm',
}

export default listComponent
