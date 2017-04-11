import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import __getAnimationProperties from 'coffeekraken-sugar/js/dom/getAnimationProperties'

/**
 * @name 		SParticleComponent
 * @extends 	SWebComponent
 * Simple webcomponent that will monitor his animation and will self destroy itself at the end of it
 * @example 	html
 * <style>
 * 	.my-cool-particle {
 * 		position:absolute; top:50%; left:50%; transform:translateX(-50%) translateY(-50%);
 * 		width: 50px; height: 50px; border-radius:50%;
 * 		background: red;
 * 		animation: my-cool-particle .5s ease-in-out 0s;
 * 	}
 * 	@keyframes my-cool-particle {
 * 	    0% { transform:translateX(-50%) translateY(-50%) scale(0,0); opacity:0; }
 * 	    80% { transform:translateX(-50%) translateY(-50%) scale(.8,.8); opacity:1; }
 * 	    100% { transform:translateX(-50%) translateY(-50%) scale(1,1); opacity:0; }
 * 	}
 * </style>
 * <script>
 * 	setInterval(function() {
 * 	 	var particle = document.createElement('s-particle');
 * 	 	particle.classList.add('my-cool-particle');
 * 	 	document.body.appendChild(particle);
 * 	}, 1000);
 * </script>
 * <s-particle class="my-cool-particle"></s-particle>
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

export default class SParticleComponent extends SWebComponent {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 * @protected
	 */
	static get defaultProps() {
		return {
			/**
			 * Specify the particle lifetime in ms. If not specified, will be auto-detected from his animation.
			 * @prop
			 * @type 		{Number}
			 */
			lifetime : null
		};
	}

	/**
	 * Css
	 * @protected
	 */
	static defaultCss(componentName, componentNameDash) {
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
	 * @protected
	 */
	componentMount() {
		super.componentMount();

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
