const arduino = document.querySelector('#arduino')
const gobstones = document.querySelector('#gobstones')
const geometria=document.querySelector('#geometria')
const geogebra=document.querySelector('#geogebra')
const geocalc=document.querySelector('#geocalc')
const simulaciones=document.querySelector('#simulaciones')

arduino.addEventListener('click', () => {
	const arduinoBox = new WinBox(
	 {
		title:"Arduino Blockly",
		url: 'https://ci.huayra.educar.gob.ar/apps/arduino',
		root: document.pantalla,
		width:'400px',
		height:'400px',
		top:35,
		right:0,
		bottom:0,
		left:0,
		onfocus: function(){
			this.setBackground('#e1e1e1')
			},
		onblur: function(){
			this.setBackground('#dedede')
			}
		})
	})

gobstones.addEventListener('click', () => {
	const gobstonesBox = new WinBox(
	 {
		title:"Gobstones",
		background: '#444',
		url: 'https://ci.huayra.educar.gob.ar/apps/gobstones',
		root: document.pantalla,
		width:'400px',
		height:'400px',
		top:35,
		right:0,
		bottom:0,
		left:0})
	})

geogebra.addEventListener('click', () => {
	const geogebraBox = new WinBox(
	 {
		title:"Geogebra Clasico",
		background: '#444',
		url: 'https://ci.huayra.educar.gob.ar/apps/geogebra/Clasico.html',
		root: document.pantalla,
		width:'100%',
		height:'100%',
		top:35,
		right:0,
		bottom:0,
		left:0})
	})
geocalc.addEventListener('click', () => {
	const geocalcBox = new WinBox(
	 {
		title:"Geogebra Calculadora",
		background: '#444',
		url: 'https://ci.huayra.educar.gob.ar/apps/geogebra/Calculadora%203d.html',
		root: document.pantalla,
		width:'100%',
		height:'100%',
		top:35,
		right:0,
		bottom:0,
		left:0})
	})
geometria.addEventListener('click', () => {
	const geometriaBox = new WinBox(
	 {
		title:"Geogebra Geometría",
		background: '#444',
		url: 'https://ci.huayra.educar.gob.ar/apps/geogebra/Geometria.html',
		root: document.pantalla,
		width:'100%',
		height:'100%',
		top:35,
		right:0,
		bottom:0,
		left:0})
	})
	
simulaciones.addEventListener('click', () => {
	const simulacionesBox = new WinBox(
	 {
		title:"Simulaciones Interactivas",
		background: '#444',
		url: 'https://ci.huayra.educar.gob.ar/apps/simulaciones',
		root: document.pantalla,
		width:'400px',
		height:'400px',
		top:35,
		right:0,
		bottom:0,
		left:0})
	})
