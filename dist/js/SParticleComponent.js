Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SWebComponent2 = require('coffeekraken-sugar/js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _getAnimationProperties = require('coffeekraken-sugar/js/dom/getAnimationProperties');

var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var SParticleComponent = function (_SWebComponent) {
	_inherits(SParticleComponent, _SWebComponent);

	function SParticleComponent() {
		_classCallCheck(this, SParticleComponent);

		return _possibleConstructorReturn(this, (SParticleComponent.__proto__ || Object.getPrototypeOf(SParticleComponent)).apply(this, arguments));
	}

	_createClass(SParticleComponent, [{
		key: 'componentMount',


		/**
   * Mount component
   * @definition 		SWebComponent.componentMount
   * @protected
   */
		value: function componentMount() {
			var _this2 = this;

			_get(SParticleComponent.prototype.__proto__ || Object.getPrototypeOf(SParticleComponent.prototype), 'componentMount', this).call(this);

			var lifetime = this.props.lifetime;
			if (!lifetime) {
				// get the animation properties
				var animation = (0, _getAnimationProperties2.default)(this);
				lifetime = animation.totalDuration;
			}

			// wait till the animation is finished to remove the particle from DOM
			setTimeout(function () {
				if (_this2.parentNode) {
					_this2.parentNode.removeChild(_this2);
				}
			}, lifetime);
		}
	}], [{
		key: 'defaultCss',


		/**
   * Css
   * @protected
   */
		value: function defaultCss(componentName, componentNameDash) {
			return '\n\t\t\t' + componentNameDash + ' {\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t}\n\t\t';
		}
	}, {
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   * @protected
   */
		get: function get() {
			return {
				/**
     * Specify the particle lifetime in ms. If not specified, will be auto-detected from his animation.
     * @prop
     * @type 		{Number}
     */
				lifetime: null
			};
		}
	}]);

	return SParticleComponent;
}(_SWebComponent3.default);

exports.default = SParticleComponent;