import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import __getAnimationProperties from 'coffeekraken-sugar/js/dom/getAnimationProperties'

export default class SParticleComponent extends SWebComponent {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
			/**
			 * Specify the particle lifetime. It not specified, will be auto-detected from his animation.
			 */
			lifetime : null
		};
	}

	/**
	 * Css
	 */
	static css(componentName, componentNameDash) {
		return `
			${componentNameDash} {
				display: block;
				position: absolute;
			}
		`;
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// set position
		__style(this, {
			position : 'absolute'
		});

		let lifetime = this.props.lifetime;
		if ( ! lifetime) {
			// get the animation properties
			const animation = __getAnimationProperties(this);
			lifetime = animation.totalDuration;
		}

		// wait till the animation is finished to remove the particle from DOM
		setTimeout(() => {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		}, lifetime);
	}
}
