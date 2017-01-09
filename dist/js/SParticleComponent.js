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
   */
		value: function componentMount() {
			var _this2 = this;

			_get(SParticleComponent.prototype.__proto__ || Object.getPrototypeOf(SParticleComponent.prototype), 'componentMount', this).call(this);

			// set position
			__style(this, {
				position: 'absolute'
			});

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
		key: 'css',


		/**
   * Css
   */
		value: function css(componentName, componentNameDash) {
			return '\n\t\t\t' + componentNameDash + ' {\n\t\t\t\tposition: absolute;\n\t\t\t}\n\t\t';
		}
	}, {
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {
				/**
     * Specify the particle lifetime. It not specified, will be auto-detected from his animation.
     */
				lifetime: null
			};
		}
	}]);

	return SParticleComponent;
}(_SWebComponent3.default);

exports.default = SParticleComponent;