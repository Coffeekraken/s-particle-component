import 'babel-polyfill'
import 'webcomponents.js/webcomponents-lite'
// import '@webcomponents/webcomponentsjs/bundles/webcomponents-ce'
// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
import 'coffeekraken-sugar/js/features/all'
import SParticleComponent from '../../../dist/index'
setInterval(function() {
	var particle = document.createElement('s-particle');
	particle.classList.add('my-cool-particle');
	particle.style.marginLeft = -50 + Math.round(Math.random() * 100) + 'vw';
	particle.style.marginTop = -50 + Math.round(Math.random() * 100) + 'vh';
	document.body.appendChild(particle);
}, 200);

