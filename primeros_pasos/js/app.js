var path = require('path');
var fs = require('fs');
var replaceStream = require('replacestream');
var exec = require('child_process').exec;
var nw = require('nw.gui');

var isDev = process.env.IS_DEV;

/* Hack para setear WM_CLASS */
process.mainModule.exports.init(require('nwjs-hack').set_wmclass.bind(null, "huayra-bullets", true));

const config = generateConfig();

if (isDev) {
  nw.Window.get().showDevTools();
}

Reveal.initialize(config);

var botonAcercaDe = document.getElementById('botonAcercaDe');
var botonIzquierda = document.getElementById('botonIzquierda');
var botonDerecha = document.getElementById('botonDerecha');
var checkboxIniciar = document.getElementById('check');
var groomingLink = document.getElementById('grooming-anchor');

function actualizar_estados(e) {
  if (Reveal.isFirstSlide()) botonIzquierda.setAttribute('disabled', 'disabled');
  else botonIzquierda.removeAttribute('disabled');

  if (Reveal.isLastSlide()) botonDerecha.setAttribute('disabled', 'disabled');
  else botonDerecha.removeAttribute('disabled');
}

Reveal.addEventListener('ready', actualizar_estados);
Reveal.addEventListener('slidechanged', actualizar_estados);

botonIzquierda.onclick = function() {
  // NOTA: usar Reveal.navigateLeft() si no queremos que ingrese en
  // los slides inferiores.
  Reveal.prev();
};

botonDerecha.onclick = function() {
  // NOTA: usar Reveal.navigateRight() si no queremos que ingrese en
  // los slides inferiores.
  Reveal.next();
};

botonAcercaDe.onclick = function(e) {
  e.preventDefault();
  Reveal.slide(-1, -1);
};

groomingLink.onclick = function() {
  nw.Shell.openExternal('https://argentina.gob.ar/grooming');
};

function copiar_archivo(desde, hasta, autostart) {
  var autostart_folder = path.join(process.env['HOME'], '.config/autostart');
  if (!fs.existsSync(autostart_folder)) {
    fs.mkdir(autostart_folder);
  }

  fs.createReadStream(desde).
    pipe(replaceStream('Terminal=false', "Terminal=false\nX-MATE-Autostart-enabled=" + autostart)).
    pipe(fs.createWriteStream(hasta));
}


function actualizar_acceso_inicio_automatico(reiniciar) {
  var ruta_desktop_original = "/usr/share/applications/huayra-bullets.desktop";
  var ruta_desktop_home = path.join(process.env['HOME'], '.config/autostart/huayra-bullets.desktop');

  if (fs.existsSync(ruta_desktop_original)) {
    copiar_archivo(ruta_desktop_original, ruta_desktop_home, reiniciar);
  } else {
    console.error("El archivo " + ruta_desktop_original + " no existe, no se puede cambiar preferencias de inicio...");
  }

}

function mostrar_estado_iniciar_checkbox() {
  var ruta_desktop_home = path.join(process.env['HOME'], '.config/autostart/huayra-bullets.desktop');

  if (fs.existsSync(ruta_desktop_home)) {
    var activado = /X-MATE-Autostart-enabled=true/.test(fs.readFileSync(ruta_desktop_home).toString());

    if (activado) {
      checkboxIniciar.checked = true;
    }
  } else {
    checkboxIniciar.checked = true;
  }
}

checkboxIniciar.onchange = function() {
  actualizar_acceso_inicio_automatico(checkboxIniciar.checked);
};

mostrar_estado_iniciar_checkbox();
fs.writeFileSync("/tmp/huayra-bullets.pid", process.pid);
