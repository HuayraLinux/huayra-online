const arduino = document.querySelector('#arduino');
const gobstones = document.querySelector('#gobstones');
const geometria=document.querySelector('#geometria');
const geogebra=document.querySelector('#geogebra');
const geocalc=document.querySelector('#geocalc');
const simulaciones=document.querySelector('#simulaciones');
const grooming=document.querySelector('#grooming');
const panel=document.querySelector('#panel_iconos');
const home=document.querySelector('#home');
const groomingText=document.querySelector('#grooming_page');
const ppasosText=document.querySelector('#primeros_pasos');
const IconosPanelText=document.querySelector('#panel_iconos_page');
const homeText=document.querySelector('#home_page');

function showTime(){
	const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	
    var date = new Date();
	var dia = dias[date.getDay()];
	var fecha = date.getDate();
	var mes = meses[date.getMonth()];
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = dia + " " + fecha + " de " + mes + ", " + h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

arduino.addEventListener('click', () => {
	const arduinoBox = new WinBox(
	 {
		title:"Arduino Blockly",
		url: 'https://ci.huayra.educar.gob.ar/apps/arduino',
		root: document.getElementById('pantalla'),
		width:'400px',
		height:'400px',
		index:0,
		top:0,
		right:0,
		bottom:0,
		left:0,
		onfocus: function(){
			this.setBackground('#dedede')
			},
		onblur: function(){
			this.setBackground('#c6c6c6')
			}
		})
	})

gobstones.addEventListener('click', () => {
	const gobstonesBox = new WinBox(
	 {
		title:"Gobstones",
		background: '#444',
		url: 'https://ci.huayra.educar.gob.ar/apps/gobstones',
		root: document.getElementById('pantalla'),
		width:'400px',
		height:'400px',
		top:0,
		right:0,
		bottom:0,
		left:0,
		onfocus: function(){
			this.setBackground('#dedede')
			},
		onblur: function(){
			this.setBackground('#c6c6c6')
		}
		})
	})

geogebra.addEventListener('click', () => {
	const geogebraBox = new WinBox(
	 {
		title:"Geogebra Clasico",
		background: '#444',
		url: 'https://ci.huayra.educar.gob.ar/apps/geogebra/Clasico.html',
		root: document.getElementById('pantalla'),
		width:'100%',
		height:'100%',
		top:0,
		right:0,
		bottom:0,
		left:0,
		onfocus: function(){
			this.setBackground('#dedede')
			},
		onblur: function(){
			this.setBackground('#c6c6c6')
			}
		})
	})
geocalc.addEventListener('click', () => {
	const geocalcBox = new WinBox(
	 {
		title:"Geogebra Calculadora",
		background: '#444',
		url: 'https://ci.huayra.educar.gob.ar/apps/geogebra/Calculadora%203d.html',
		root: document.getElementById('pantalla'),
		width:'100%',
		height:'100%',
		top:0,
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
		root: document.getElementById('pantalla'),
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
		root: document.getElementById('pantalla'),
		width:'400px',
		height:'400px',
		top:35,
		right:0,
		bottom:0,
		left:0})
	})


grooming.addEventListener('click', () => {
	const groomingBox = new WinBox(
	{
		title:"Hablemos de Grooming",
		background: '#bbb',
		width:'558px',
		height:'345px',
		url: 'https://www.argentina.gob.ar/grooming',
		top:35//,
		//mount:groomingText,
	})
})

home.addEventListener('click', () => {
	const homeBox = new WinBox(
	{
		title:"Carpeta Personal",
		background: '#bbb',
		width:'800px',
		height:'600px',
		//url: 'primeros_pasos/ppasos.html',
		top:35,
		bottom:-370,//,
		mount:homeText,
	})
})

primeros_pasos.addEventListener('click', () => {
	const homeBox = new WinBox(
	{
		title:"Primeros Pasos",
		background: '#bbb',
		width:'800px',
		height:'600px',
		url: 'primeros_pasos/ppasos.html',
		top:35,
		bottom:-370//,
		//mount:groomingText,
	})
})

panel.addEventListener('click', () => {
	const panelBox = new WinBox(
	{
		title:"Panel de Iconos",
		background: '#bbb',
		width:'800px',
		height:'600px',
		top:35,
		bottom:-370,//,
		mount:IconosPanelText,
	})
})
