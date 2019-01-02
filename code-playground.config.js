module.exports = {
	// server port
	port : 3000,

	// logo
	logo : null,

	// title
	title : 's-particle-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<s-particle class="my-cool-particle"></s-particle>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@include s-init();
				@include s-classes();
				body {
					padding: s-space(big);
					overflow: hidden;
				}
				.my-cool-particle {
					position:absolute; top:50%; left:50%; transform:translateX(-50%) translateY(-50%);
					width: 50px; height: 50px; border-radius:50%;
					border: 5px solid s-color(primary);
					animation: my-cool-particle .5s ease-in-out 0s forwards;
				}
				@keyframes my-cool-particle {
					0% { transform:translateX(-50%) translateY(-50%) scale(0,0); opacity:0;}
					80% { transform:translateX(-50%) translateY(-50%) scale(.8,.8); opacity:1;}
					100% { transform:translateX(-50%) translateY(-50%) scale(1,1); opacity:0;}
				}
			`
		},
		js : {
			language : 'js',
			data : `
				import './dist/index'
				setInterval(function() {
					var particle = document.createElement('s-particle');
					particle.classList.add('my-cool-particle');
					particle.style.marginLeft = -50 + Math.round(Math.random() * 100) + 'vw';
					particle.style.marginTop = -50 + Math.round(Math.random() * 100) + 'vh';
					document.body.appendChild(particle);
				}, 200);
			`
		}
	}
}
