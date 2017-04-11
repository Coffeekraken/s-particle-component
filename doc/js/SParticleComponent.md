# SParticleComponent

Extends **SWebComponent**

Simple webcomponent that will monitor his animation and will self destroy itself at the end of it

### Example
```html
	0% { transform:translateX(-50%) translateY(-50%) scale(0,0); opacity:0; }
	    80% { transform:translateX(-50%) translateY(-50%) scale(.8,.8); opacity:1; }
	    100% { transform:translateX(-50%) translateY(-50%) scale(1,1); opacity:0; }
	}
</style>
<script>
	setInterval(function() {
	 	var particle = document.createElement('s-particle');
	 	particle.classList.add('my-cool-particle');
	 	document.body.appendChild(particle);
	}, 1000);
</script>
<s-particle class="my-cool-particle"></s-particle>
```
Author : Olivier Bossel <olivier.bossel@gmail.com>




## Attributes

Here's the list of available attribute to set on the element.

### lifetime

Specify the particle lifetime in ms. If not specified, will be auto-detected from his animation.

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**