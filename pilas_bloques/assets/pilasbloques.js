'use strict';



;define("pilasbloques/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("pilasbloques/app", ["exports", "pilasbloques/resolver", "ember-load-initializers", "pilasbloques/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("pilasbloques/breakpoints", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    portrait: '(orientation: portrait)',
    mobile: '(max-width: 849px)'
  };
  _exports.default = _default;
});
;define("pilasbloques/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("pilasbloques/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("pilasbloques/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (_exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
;define("pilasbloques/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownContent.default;
    }
  });
});
;define("pilasbloques/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
});
;define("pilasbloques/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
;define("pilasbloques/components/breadcrumb-item", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classes: Ember.computed('initial', 'selected', function () {
      var _classes = "";

      if (this.initial) {
        _classes += "breadcrumb-initial-item";
      }

      if (this.selected) {
        _classes += "breadcrumb-selected-item";
      }

      return _classes;
    })
  });

  _exports.default = _default;
});
;define("pilasbloques/components/bug-report-modal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    actions: {
      // Only used with alternative version with github integration.
      createIssue() {
        fetch('https://api.github.com/repos/Program-AR/pilas-bloques/issues', {
          method: 'POST',
          headers: {
            'Authorization': 'token githubFakeToken'
          },
          body: JSON.stringify({
            title: this.get("title"),
            body: this.get("problem") + "\nEnviado por " + "<b>" + this.get("name") + "</b> (" + this.get("email") + ")" + " desde Pilas Bloques."
          })
        }).catch(function (err) {
          console.error(err);
        });
        this.send("cerrarReporteProblemas");
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/challenge-link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['desafio'],
    nombre: null,
    deshabilitada: false,
    actions: {
      abrir() {
        if (this.onSelect) this.onSelect(this.nombre);
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/challenge-navigation-arrows", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/challenge-workspace-buttons", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const VERSION_DEL_FORMATO_DE_ARCHIVO = 2;

  var _default = Ember.Component.extend({
    tagName: 'workspace-buttons',
    cuandoSelecciona: null,
    actividad: null,
    workspace: null,
    xml: null,
    store: Ember.inject.service(),
    deleteDialogIsOpen: false,
    platform: Ember.inject.service(),
    intl: Ember.inject.service(),

    version() {
      return VERSION_DEL_FORMATO_DE_ARCHIVO;
    },

    leerSolucionWeb(archivo) {
      var reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onerror = err => reject(err);

        reader.onload = event => resolve(event.target.result);

        reader.readAsText(archivo);
      }).then(contenido => this.cargarSolucion(contenido));
    },

    cargarSolucion(contenido) {
      // let regex_file = /\.spbq$/
      // let regex_version = /^\d+$/
      let data = null;
      let solucion = null;

      try {
        data = JSON.parse(contenido);
        solucion = atob(data.solucion);
      } catch (e) {
        console.error(e);
        throw this.intl.t('components.challengeWorkspaceButtons.notASolution');
      }

      this.set('workspace', solucion);
      let errors = [];

      if (this.get("actividad.nombre") !== data.actividad) {
        errors.push(this.intl.t('components.challengeWorkspaceButtons.wrongActivity', {
          activity: data.actividad
        }));
      }

      if (VERSION_DEL_FORMATO_DE_ARCHIVO > data.version) {
        errors.push(this.intl.t('components.challengeWorkspaceButtons.oldVersion'));
      }

      if (errors.length !== 0) {
        throw errors.join('\n');
      }
    },

    descargar(text, name, type) {
      var a = document.getElementById("placeholder");
      var file = new Blob([text], {
        type: type
      });
      a.href = URL.createObjectURL(file);
      a.download = name;
      a.type = type;
      a.click();
    },

    didInsertElement() {
      this.fileInput().addEventListener("change", event => {
        let archivo = event.target.files[0];

        if (archivo) {
          this.leerSolucionWeb(archivo).catch(alert);
        }

        this.limpiarInput(this.fileInput()); // Fuerza a que se pueda cargar dos o más veces el mismo archivo

        return false;
      });
    },

    fileInput() {
      return this.element.querySelector("#cargarActividadInput");
    },

    limpiarInput(input) {
      input.value = null;
    },

    actions: {
      abrirSolucion() {
        this.fileInput().click();
      },

      guardarSolucion() {
        let activityName = this.get("actividad.nombre");
        let fileName = `${activityName}.spbq`;
        let contenido = {
          version: VERSION_DEL_FORMATO_DE_ARCHIVO,
          actividad: activityName,
          solucion: btoa(this.xml)
        };
        this.descargar(JSON.stringify(contenido), fileName, 'application/octet-stream');
      },

      borrarSolucion() {
        this.set('workspace', this.actividad.initialWorkspace);
        this.set('deleteDialogIsOpen', false);
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/challenge-workspace", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['exercise-workspace'],
    persistirSolucionEnURL: false,
    showCode: false,
    blocksGallery: Ember.inject.service(),
    pilasBloquesApi: Ember.inject.service(),
    cargando: true,
    canvasWidth: 0,
    canvasHeight: 0,
    simpleRead: Ember.inject.service(),
    debeMostrarPasoHabilitado: Ember.computed('debeMostrarPasoHabilitado', function () {
      return this.get('model.debugging');
    }),
    estaPausadoEnUnBreackpoint: Ember.computed('pausadoEnBreakpoint', function () {
      return this.get('pausadoEnBreakpoint');
    }),
    debeMostarReiniciar: Ember.computed('ejecutando', 'terminoDeEjecutar', function () {
      return this.get('ejecutando') || this.get('terminoDeEjecutar');
    }),

    didInsertElement() {
      this.blocksGallery.start();
    },

    setPilasBlockly(pilasBlockly) {
      this.set('pilasBlockly', pilasBlockly);
    },

    shouldShowSimpleRead() {
      return this.simpleRead.shouldShowSimpleRead(this.get('model.grupo.capitulo.libro.modoLecturaSimple'));
    },

    actions: {
      onSceneReady(pilas) {
        if (this.onReady) {
          this.onReady(pilas);
        }

        this.set('cargando', false);

        if (this.shouldShowSimpleRead()) {
          pilas.cambiarAModoDeLecturaSimple();
        }

        this.pilasBloquesApi.openChallenge(this.model.id);
      },

      hideScene() {
        let canvas = document.getElementsByClassName("pilas-canvas")[0];
        let elmnt = document.getElementById("draggable");
        elmnt.style.visibility = 'hidden';
        canvas.style.visibility = 'hidden';
      },

      showScene() {
        let canvas = document.getElementsByClassName("pilas-canvas")[0];
        let elmnt = document.getElementById("draggable");
        elmnt.style.visibility = 'visible';
        canvas.style.visibility = 'visible';
      },

      changeScreenMode() {
        this.set("shouldUseFloatingMode", !this.get("shouldUseFloatingMode"));
        this.send("updateBlockyWorkspaceBounds");
        this.send("showScene");
        if (this.get("shouldUseFloatingMode")) this.send("makeDraggable");else this.send("makeNotDraggable");
      },

      makeDraggable() {
        let elmnt = document.getElementById("draggable");
        let canvas = document.getElementsByClassName("pilas-canvas")[0];
        let exerciseCard = document.getElementsByClassName("exercise-card")[0];
        let pilasBlockly = document.getElementsByClassName("pilas-blockly")[0].getBoundingClientRect();
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        const miniature = {
          height: 240,
          width: 210
        };
        canvas.style.height = miniature.height + "px";
        canvas.style.width = miniature.width + "px";
        exerciseCard.style.height = miniature.height + "px";
        exerciseCard.style.width = miniature.width + "px";
        elmnt.style.top = pilasBlockly.bottom - miniature.height + "px";
        elmnt.style.left = pilasBlockly.left + 15 + "px";
        elmnt.style.position = "fixed";
        elmnt.onmousedown = onMouseDown;
        elmnt.ontouchstart = onTouchStart;

        function onMouseDown(e) {
          e = e || window.event;
          e.preventDefault(); // get the mouse cursor position at startup:

          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = onMouseUp; // call a function whenever the cursor moves:

          document.onmousemove = onMouseMove;
        }

        function onTouchStart(e) {
          e = e || window.event;
          pos3 = e.touches[0].pageX;
          pos4 = e.touches[0].pageY;
          elmnt.ontouchend = onTouchEnd; // call a function whenever the cursor moves:

          elmnt.ontouchmove = onTouchMove;
        }

        function onMouseMove(e) {
          e = e || window.event;
          e.preventDefault(); // calculate the new cursor position:

          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY; // set the element's new position:

          elmnt.style.top = elmnt.offsetTop - pos2 + "px";
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function onTouchMove(e) {
          e = e || window.event;
          e.preventDefault(); // calculate the new cursor position:

          pos1 = pos3 - e.touches[0].pageX;
          pos2 = pos4 - e.touches[0].pageY;
          pos3 = e.touches[0].pageX;
          pos4 = e.touches[0].pageY; // set the element's new position:

          elmnt.style.top = elmnt.offsetTop - pos2 + "px";
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function onMouseUp() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }

        function onTouchEnd() {
          // stop moving when mouse button is released:
          elmnt.ontouchend = null;
          elmnt.ontouchmove = null;
        }
      },

      makeNotDraggable() {
        let elmnt = document.getElementById("draggable");
        let canvas = document.getElementsByClassName("pilas-canvas")[0];
        let exerciseCard = document.getElementsByClassName("exercise-card")[0];
        elmnt.style.position = "inherit";
        canvas.style.width = "";
        canvas.style.height = "";
        exerciseCard.style.width = "";
        exerciseCard.style.height = "";
      },

      updateBlockyWorkspaceBounds() {
        // This make blocky workspaces render correctly after container resize.
        // This is a WORKAROUND, i cant get it work without this.
        Blockly.mainWorkspace.getAllBlocks()[0].select();
        Blockly.mainWorkspace.getAllBlocks()[0].unselect();
      },

      async ejecutar() {
        let pasoAPaso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        await this.pilasBlockly.send('ejecutar', pasoAPaso);
        this.send("showScene");
      },

      step() {
        this.pilasBlockly.send('step');
        this.send("showScene");
      },

      async reiniciar() {
        await this.pilasBlockly.send('reiniciar');
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/challenges-book", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['challenges-book-container zoom']
  });

  _exports.default = _default;
});
;define("pilasbloques/components/clear-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    storage: Ember.inject.service(),
    router: Ember.inject.service(),

    didInsertElement() {
      this.storage.clear();
      Ember.run.later(() => this.router.transitionTo("/"), 1000);
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/components/collapsable", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    isExpanded: false,
    actions: {
      toggle: function () {
        this.set('isExpanded', !this.get('isExpanded'));
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/congratulations-modal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/create-custom-challenge", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['challenges-book-container zoom']
  });

  _exports.default = _default;
});
;define("pilasbloques/components/descripcion-acerca-de", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/ember-blockly-catalog", ["exports", "ember-blockly/components/ember-blockly-catalog"], function (_exports, _emberBlocklyCatalog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberBlocklyCatalog.default;
    }
  });
});
;define("pilasbloques/components/ember-blockly-list-item", ["exports", "ember-blockly/components/ember-blockly-list-item"], function (_exports, _emberBlocklyListItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberBlocklyListItem.default;
    }
  });
});
;define("pilasbloques/components/ember-blockly-list-with-selection", ["exports", "ember-blockly/components/ember-blockly-list-with-selection"], function (_exports, _emberBlocklyListWithSelection) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberBlocklyListWithSelection.default;
    }
  });
});
;define("pilasbloques/components/ember-blockly-preview", ["exports", "ember-blockly/components/ember-blockly-preview"], function (_exports, _emberBlocklyPreview) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberBlocklyPreview.default;
    }
  });
});
;define("pilasbloques/components/ember-blockly", ["exports", "ember-blockly/components/ember-blockly"], function (_exports, _emberBlockly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberBlockly.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog-positioned-container", ["exports", "ember-modal-dialog/components/positioned-container"], function (_exports, _positionedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog/-basic-dialog", ["exports", "ember-modal-dialog/components/basic-dialog"], function (_exports, _basicDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog/-in-place-dialog", ["exports", "ember-modal-dialog/components/in-place-dialog"], function (_exports, _inPlaceDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog/-liquid-dialog", ["exports", "ember-modal-dialog/components/liquid-dialog"], function (_exports, _liquidDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog/-liquid-tether-dialog", ["exports", "ember-modal-dialog/components/liquid-tether-dialog"], function (_exports, _liquidTetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog/-tether-dialog", ["exports", "ember-modal-dialog/components/tether-dialog"], function (_exports, _tetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
;define("pilasbloques/components/ember-wormhole", ["exports", "ember-wormhole/components/ember-wormhole"], function (_exports, _emberWormhole) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
;define("pilasbloques/components/fireworks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/footer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'div',
    classNames: []
  });

  _exports.default = _default;
});
;define("pilasbloques/components/header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'div',
    classNames: [],
    storage: Ember.inject.service(),

    didRender() {
      document.documentElement.setAttribute('theme', this.storage.getUseNightTheme() ? 'dark' : 'light');
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (_exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
;define("pilasbloques/components/import-custom-challenge", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const assetsPath = 'challenge/assets';

  var _default = Ember.Component.extend({
    classNames: ["challenges-book-container zoom"],
    store: Ember.inject.service(),
    router: Ember.inject.service(),
    blocksGallery: Ember.inject.service(),

    didInsertElement() {
      this.fileInputProyecto().addEventListener("change", event => {
        const archivo = event.target.files[0];

        if (archivo) {
          this.leerSolucionWeb(archivo);
        }

        this.limpiarInput(this.fileInputProyecto()); // Fuerza a que se pueda cargar dos o más veces el mismo archivo

        return false;
      });
    },

    leerSolucionWeb(archivo) {
      var reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onerror = err => reject(err);

        reader.onload = event => this._loadChallenge(event.target.result, resolve);

        reader.readAsArrayBuffer(archivo);
      }).then(contenido => this.loadProyect(contenido)).catch(alert);
    },

    _filenameToIdentifier(filename) {
      //Converts "desafio/assets/obstaculos/grass.png" to "obstaculos/grass"
      return filename.replace(`${assetsPath}/`, '').split('.')[0];
    },

    _isChallengeImage(filepath) {
      return filepath.startsWith(assetsPath) && filepath.toLowerCase().endsWith('.png');
    },

    async _imageContentToURL(content) {
      const blob = await content.blob('image/png');
      return URL.createObjectURL(blob);
    },

    async _getSceneImages(entries) {
      const imageEntries = Object.entries(entries).filter(entry => this._isChallengeImage(entry[0]));
      return await Promise.all(imageEntries.map(async _ref => {
        let [filename, content] = _ref;
        return {
          id: this._filenameToIdentifier(filename),
          url: await this._imageContentToURL(content)
        };
      }));
    },

    async _getChallengeJson(entries) {
      const arrayBuffer = await entries["challenge/challenge.json"].arrayBuffer();
      const jsonDesafioAsString = new TextDecoder().decode(arrayBuffer);
      return JSON.parse(jsonDesafioAsString);
    },

    //Zip and challenge.json definition: https://github.com/Program-AR/pilas-bloques/wiki/Expected-custom-challenge-zip-structure
    async _loadChallenge(theZipContent, resolve) {
      const {
        entries
      } = await unzipit.unzip(new Uint8Array(theZipContent)); //TODO: The custom challenge creator should verify that the custom challenge name does not conflict with any pre-existing challenge name. 

      const challengeJson = await this._getChallengeJson(entries);
      const sceneImages = await this._getSceneImages(entries);
      const challengeCover = await this._imageContentToURL(entries[`${assetsPath}/splashChallenge.png`]);
      challengeJson.challengeCover = challengeCover;
      challengeJson.imagesToPreload = sceneImages.map(image => image.url); //Currently it is not possible to define scenes in the json itself, like in the desafios.js file, but it can be made possible by replacing this line with "challengeJson.escena = challengeJson.sceneConstructor || `new CustomScene(...)"

      challengeJson.escena = `new CustomScene({grid:{spec:${JSON.stringify(challengeJson.grid)}}, images:${JSON.stringify(sceneImages)}})`;
      this.blocksGallery.start();
      challengeJson.blocks.forEach(block => this._createBlock(block)); //Create all the custom blocks

      challengeJson.bloques = challengeJson.blocks.map(b => b.name); //The "bloques" attribute is the list with all the names of the blocks that the challenge uses   

      resolve(challengeJson);
    },

    _createBlock(aBlock) {
      const name = aBlock.name;
      const interactsWith = aBlock.interactsWith;
      const description = aBlock.description;
      const blockType = aBlock.type;

      if (blockType === "action") {
        const properties = {
          descripcion: description,
          icono: interactsWith + '.png',
          comportamiento: 'Recolectar',
          argumentos: `{etiqueta: '${interactsWith}'}`
        };
        this.blocksGallery.crearBloqueAccion(name, undefined, properties);
      }

      if (blockType === "sensor") {
        const object = aBlock.object;
        const properties = {
          descripcion: description,
          icono: object + '.png',
          funcionSensor: `tocando("${object}")`
        };
        this.blocksGallery.crearBloqueSensor(name, undefined, properties);
      }
    },

    loadProyect(challenge) {
      this.store.createRecord("desafio", challenge);
      this.router.transitionTo("desafio", challenge.id);
    },

    fileInputProyecto() {
      return document.getElementById("cargarProyectoInput");
    },

    limpiarInput(input) {
      input.value = null;
    },

    actions: {
      importarProyecto() {
        this.fileInputProyecto().click();
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/language-menu", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    intl: Ember.inject.service(),
    disabledLanguages: ['pt'],
    //disables portuguese
    localeCodes: Ember.computed("intl", function () {
      return this.get('intl').get('locales').filter(localeCode => !this.disabledLanguages.includes(localeCode));
    }),

    languageName(localeCode) {
      return this.get('intl').t('localeName', {
        locale: localeCode
      });
    },

    actions: {
      setLocale: function (selectedLocaleCode) {
        this.intl.setSelectedLocale(selectedLocaleCode);
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    href: null,
    platform: Ember.inject.service(),
    actions: {
      abrirDesdeElectron(url) {
        if (this.openOnNewTab) {
          open(url); //TODO: Abrir en navegador externo, actualmenente se abre otra ventana de electron. (Cuando funcione el require('electron'))
        } else {
          location.href = url;
        }
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (_exports, _liquidBind) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
;define("pilasbloques/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (_exports, _liquidChild) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
;define("pilasbloques/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (_exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
;define("pilasbloques/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (_exports, _liquidIf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
;define("pilasbloques/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (_exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(_exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
;define("pilasbloques/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (_exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
;define("pilasbloques/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (_exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
;define("pilasbloques/components/liquid-sync", ["exports", "liquid-fire/components/liquid-sync"], function (_exports, _liquidSync) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
;define("pilasbloques/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (_exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
;define("pilasbloques/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (_exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
;define("pilasbloques/components/listaImagenes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // Autogenerado por scripts/generarListaImagenes.py
  // Todo cambio se sobreescribira.
  var _default = ["PlacaContarGris.png", "PlacaContarNegra.png", "actor.BoyScout.png", "actor.Fogata.png", "actor.charco.png", "actor.churrasco.png", "actor.coty.png", "actor.duba.png", "actor.ensaladera.png", "actor.lechuga.png", "actor.letra.leida.png", "actor.letra.manuscrita.png", "actor.letra.tablero.png", "actor.lita.png", "actor.tomate.png", "actor.toto.png", "alienAnimado.png", "alimento_pez.png", "balloon-tip-left.png", "balloon-tip-right.png", "balloon-tip-think-left.png", "balloon-tip-think-right.png", "balloon.png", "banana-1.png", "banana.nano.png", "boton.pboton_press.png", "botonAnimado.png", "bruja.png", "buzo.png", "caballero_oscuro.png", "camino-alien-boton.png", "cangrejo.png", "carbon_animado.png", "casilla.alienLevantaTuercas.png", "casilla.cangrejo_aguafiestas.png", "casilla.futbolRobots1.png", "casilla.futbolRobots2.png", "casilla.grisoscuro.png", "casilla.mariaSandia.png", "casilla.mono.contar.png", "casilla.prendiendoLasCompus.png", "casilla.prendiendoLasCompus2.png", "casilla.prendiendoLasFogatas.png", "casilla.prendiendoLasFogatas2.png", "casilla.recolector.png", "casilla.reparandoNave.png", "casilla.titoFinalizacion.png", "casilla.tresNaranjas.png", "casillaAbajo.png", "casillaArriba.png", "casillaDerecha.png", "casillaIzquierda.png", "casilla_base.png", "casillafinalmono.png", "casillainiciomono.png", "casillamediomono.png", "casillas.alien_inicial.png", "casillas.duba.png", "casillas.elPlanetaDeNano.png", "casillas.lita.png", "casillas.toto.png", "casillas.violeta.png", "cofreAnimado.png", "comedor_naranjas.png", "compu_animada.png", "computadoraAnimada2.png", "cooperativista.sprites.png", "detective.png", "dibujante.png", "dracula.png", "estrellaAnimada.png", "finCamino.png", "flechaEscenarioAleatorio.png", "focos.color.png", "fondo.BosqueDeNoche.png", "fondo.alimentando_peces.png.png", "fondo.blanco.png", "fondo.cangrejo_aguafiestas.png", "fondo.coty.png", "fondo.detective.png", "fondo.dibujando.figuras.png", "fondo.duba.png", "fondo.elMarcianoEnElDesierto.png", "fondo.elPlanetaDeNano.png", "fondo.elSuperviaje.png", "fondo.fiestadracula.png", "fondo.gatoEnLaCalle.png", "fondo.laberinto.corto.png", "fondo.laberinto.largo.png", "fondo.laberinto.queso.png", "fondo.lita.png", "fondo.marEncantado.png", "fondo.mariaSandia.png", "fondo.mono.contar.png", "fondo.monoCuentadeNuevo.png", "fondo.noMeCansoDeSaltar.png", "fondo.prendiendoLasCompus.png", "fondo.recolector.png", "fondo.salvandonavidad.png", "fondo.superTito1.png", "fondo.superTito2.png", "fondo.tito-cuadrado.png", "fondo.toto.png", "fondo.tresNaranjas.png", "fondos.alien-inicial.png", "fondos.alienLevantaTuercas.png", "fondos.biblioteca.png", "fondos.elPlanetaDeNano.png", "fondos.estrellas.png", "fondos.futbolRobots.png", "fondos.laberinto1.png", "fondos.mar.png", "fondos.navidad.png", "fondos.nubes.png", "fondos.obrero.png", "fondos.reparandoLaNave.png", "fondos.selva.png", "frank.png", "gatoAnimado.png", "globoAnimado.png", "heroe.png", "heroina.png", "hierro_animado.png", "hueso.png", "icono.ComputadoraPrendida.png", "iconos.lamparita.png", "instalador.png", "invisible.png", "lamparin.png", "libretaToto.png", "llaveAnimada.png", "mago.png", "manoToto.png", "manzanaConSombra.png", "manzanaSinSombra.png", "marcianoAnimado.png", "maria.png", "monkey_normal.png", "monoAnimado.png", "murcielago.png", "nano.png", "naranja.png", "naveAnimada.png", "obstaculo.duba1.png", "obstaculo.duba2.png", "obstaculo.duba3.png", "obstaculo.duba4.png", "obstaculo.lita1.png", "obstaculo.lita2.png", "obstaculo.lita3.png", "obstaculo.lita4.png", "papaNoel.png", "pelota.png", "pelotaAnimada.png", "pensamientoToto.png", "perro_cohete.png", "pez1.png", "pez2.png", "pez3.png", "placacontar.png", "plano.png", "portada.lightbot.png", "portada.nano.png", "princesa.png", "principe.png", "queso.png", "quesoAnimado.png", "raton.png", "ratonAnimado.png", "recolectorAnimado.png", "regalo.png", "robotAnimado.png", "sandia.png", "sin_imagen.png", "sospechosos.png", "sprites.png", "superheroe.png", "tito.png", "tuerca.png", "unicornio.heroina.png", "unicornio.png", "imagenNoEncontrada.png"];
  _exports.default = _default;
});
;define("pilasbloques/components/login", ["exports", "pilasbloques/utils/request"], function (_exports, _request) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    router: Ember.inject.service(),
    pilasBloquesApi: Ember.inject.service(),
    credentials: {},
    wrongLogin: false,
    actions: {
      doLogin() {
        this.set("wrongLogin", false);
        this.pilasBloquesApi.login(this.credentials).then(() => {
          const router = this.get('router');

          if (router.currentRouteName === "register") {
            router.transitionTo('libros');
          } else {
            document.location.reload();
          }
        }).catch((0, _request.badRequest)(() => {
          this.set("wrongLogin", true);
          this.set("credentials.password", "");
        }));
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/markdown-to-html", ["exports", "ember-cli-showdown/components/markdown-to-html"], function (_exports, _markdownToHtml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _markdownToHtml.default;
    }
  });
});
;define("pilasbloques/components/modal-ayuda", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    actions: {
      close() {
        this.set("mostrar", false);
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/modal-dialog", ["exports", "ember-modal-dialog/components/modal-dialog"], function (_exports, _modalDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
;define("pilasbloques/components/modal-title", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    actions: {
      ocultar() {
        if (this.close) this.close();
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/modal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/navigation-menu", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/night-mode-toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'div',
    classNames: [],
    storage: Ember.inject.service(),
    isNightTheme: false,

    didRender() {
      this.set('isNightTheme', this.storage.getUseNightTheme());
    },

    actions: {
      toggleTheme() {
        this.storage.toggleNightTheme();
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/paper-autocomplete-highlight", ["exports", "ember-paper/components/paper-autocomplete/highlight/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-autocomplete", ["exports", "ember-paper/components/paper-autocomplete/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-autocomplete/ebd-content", ["exports", "ember-paper/components/paper-autocomplete/ebd-content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-autocomplete/ebd-trigger", ["exports", "ember-paper/components/paper-autocomplete/ebd-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-autocomplete/eps-trigger", ["exports", "ember-paper/components/paper-autocomplete/eps-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-autocomplete/highlight", ["exports", "ember-paper/components/paper-autocomplete/highlight/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-autocomplete/no-matches-message", ["exports", "ember-paper/components/paper-autocomplete/no-matches-message/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-autocomplete/options", ["exports", "ember-paper/components/paper-autocomplete/options/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-autocomplete/reset-button", ["exports", "ember-paper/components/paper-autocomplete/reset-button/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-backdrop", ["exports", "ember-paper/components/paper-backdrop"], function (_exports, _paperBackdrop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperBackdrop.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-button", ["exports", "ember-paper/components/paper-button"], function (_exports, _paperButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperButton.default;
    }
  });
});
;define("pilasbloques/components/paper-card-actions", ["exports", "ember-paper/components/paper-card-actions"], function (_exports, _paperCardActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardActions.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-avatar", ["exports", "ember-paper/components/paper-card-avatar"], function (_exports, _paperCardAvatar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardAvatar.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-content", ["exports", "ember-paper/components/paper-card-content"], function (_exports, _paperCardContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardContent.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-header-headline", ["exports", "ember-paper/components/paper-card-header-headline"], function (_exports, _paperCardHeaderHeadline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderHeadline.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-header-subhead", ["exports", "ember-paper/components/paper-card-header-subhead"], function (_exports, _paperCardHeaderSubhead) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderSubhead.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-header-text", ["exports", "ember-paper/components/paper-card-header-text"], function (_exports, _paperCardHeaderText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderText.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-header-title", ["exports", "ember-paper/components/paper-card-header-title"], function (_exports, _paperCardHeaderTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderTitle.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-header", ["exports", "ember-paper/components/paper-card-header"], function (_exports, _paperCardHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeader.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-icon-actions", ["exports", "ember-paper/components/paper-card-icon-actions"], function (_exports, _paperCardIconActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardIconActions.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-image", ["exports", "ember-paper/components/paper-card-image"], function (_exports, _paperCardImage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardImage.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-media", ["exports", "ember-paper/components/paper-card-media"], function (_exports, _paperCardMedia) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardMedia.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-title-media", ["exports", "ember-paper/components/paper-card-title-media"], function (_exports, _paperCardTitleMedia) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardTitleMedia.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-title-text", ["exports", "ember-paper/components/paper-card-title-text"], function (_exports, _paperCardTitleText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardTitleText.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card-title", ["exports", "ember-paper/components/paper-card-title"], function (_exports, _paperCardTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardTitle.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-card", ["exports", "ember-paper/components/paper-card"], function (_exports, _paperCard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCard.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-checkbox", ["exports", "ember-paper/components/paper-checkbox"], function (_exports, _paperCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCheckbox.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-chips", ["exports", "ember-paper/components/paper-chips/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-contact-chips", ["exports", "ember-paper/components/paper-contact-chips/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-content", ["exports", "ember-paper/components/paper-content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-dialog-actions", ["exports", "ember-paper/components/paper-dialog-actions"], function (_exports, _paperDialogActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogActions.default;
    }
  });
});
;define("pilasbloques/components/paper-dialog-container", ["exports", "ember-paper/components/paper-dialog-container"], function (_exports, _paperDialogContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogContainer.default;
    }
  });
});
;define("pilasbloques/components/paper-dialog-content", ["exports", "ember-paper/components/paper-dialog-content"], function (_exports, _paperDialogContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogContent.default;
    }
  });
});
;define("pilasbloques/components/paper-dialog-inner", ["exports", "ember-paper/components/paper-dialog-inner"], function (_exports, _paperDialogInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogInner.default;
    }
  });
});
;define("pilasbloques/components/paper-dialog", ["exports", "ember-paper/components/paper-dialog"], function (_exports, _paperDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialog.default;
    }
  });
});
;define("pilasbloques/components/paper-divider", ["exports", "ember-paper/components/paper-divider/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-form", ["exports", "ember-paper/components/paper-form"], function (_exports, _paperForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperForm.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-grid-list", ["exports", "ember-paper/components/paper-grid-list"], function (_exports, _paperGridList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperGridList.default;
    }
  });
});
;define("pilasbloques/components/paper-grid-tile-footer", ["exports", "ember-paper/components/paper-grid-tile-footer"], function (_exports, _paperGridTileFooter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperGridTileFooter.default;
    }
  });
});
;define("pilasbloques/components/paper-grid-tile", ["exports", "ember-paper/components/paper-grid-tile"], function (_exports, _paperGridTile) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperGridTile.default;
    }
  });
});
;define("pilasbloques/components/paper-icon", ["exports", "ember-paper/components/paper-icon"], function (_exports, _paperIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperIcon.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-ink-bar", ["exports", "ember-paper/components/paper-ink-bar"], function (_exports, _paperInkBar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperInkBar.default;
    }
  });
});
;define("pilasbloques/components/paper-input", ["exports", "ember-paper/components/paper-input"], function (_exports, _paperInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperInput.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-item", ["exports", "ember-paper/components/paper-item"], function (_exports, _paperItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperItem.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-list", ["exports", "ember-paper/components/paper-list"], function (_exports, _paperList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperList.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-menu", ["exports", "ember-paper/components/paper-menu/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-menu/content", ["exports", "ember-paper/components/paper-menu/content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-menu/item", ["exports", "ember-paper/components/paper-menu/item/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-menu/trigger", ["exports", "ember-paper/components/paper-menu/trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-progress-circular", ["exports", "ember-paper/components/paper-progress-circular"], function (_exports, _paperProgressCircular) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperProgressCircular.default;
    }
  });
});
;define("pilasbloques/components/paper-progress-linear", ["exports", "ember-paper/components/paper-progress-linear"], function (_exports, _paperProgressLinear) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperProgressLinear.default;
    }
  });
});
;define("pilasbloques/components/paper-radio-group-label", ["exports", "ember-paper/components/paper-radio-group-label"], function (_exports, _paperRadioGroupLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadioGroupLabel.default;
    }
  });
});
;define("pilasbloques/components/paper-radio-group", ["exports", "ember-paper/components/paper-radio-group"], function (_exports, _paperRadioGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadioGroup.default;
    }
  });
});
;define("pilasbloques/components/paper-radio-proxiable", ["exports", "ember-paper/components/paper-radio-proxiable"], function (_exports, _paperRadioProxiable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadioProxiable.default;
    }
  });
});
;define("pilasbloques/components/paper-radio", ["exports", "ember-paper/components/paper-radio"], function (_exports, _paperRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadio.default;
    }
  });
});
;define("pilasbloques/components/paper-reset-button", ["exports", "ember-paper/components/paper-reset-button"], function (_exports, _paperResetButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperResetButton.default;
    }
  });
});
;define("pilasbloques/components/paper-ripple", ["exports", "ember-paper/components/paper-ripple/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-select", ["exports", "ember-paper/components/paper-select/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-select/ebd-content", ["exports", "ember-paper/components/paper-select/ebd-content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-select/ebd-trigger", ["exports", "ember-paper/components/paper-select/ebd-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-select/eps-trigger", ["exports", "ember-paper/components/paper-select/eps-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-select/no-matches-message", ["exports", "ember-paper/components/paper-select/no-matches-message/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-select/option", ["exports", "ember-paper/components/paper-select/option/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-select/options", ["exports", "ember-paper/components/paper-select/options/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-select/search-message", ["exports", "ember-paper/components/paper-select/search-message/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-select/search", ["exports", "ember-paper/components/paper-select/search/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-sidenav-container", ["exports", "ember-paper/components/paper-sidenav-container"], function (_exports, _paperSidenavContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSidenavContainer.default;
    }
  });
});
;define("pilasbloques/components/paper-sidenav-inner", ["exports", "ember-paper/components/paper-sidenav-inner"], function (_exports, _paperSidenavInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSidenavInner.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-sidenav-toggle", ["exports", "ember-paper/components/paper-sidenav-toggle"], function (_exports, _paperSidenavToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSidenavToggle.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-sidenav", ["exports", "ember-paper/components/paper-sidenav"], function (_exports, _paperSidenav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSidenav.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-slider", ["exports", "ember-paper/components/paper-slider/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/components/paper-speed-dial-actions-action", ["exports", "ember-paper/components/paper-speed-dial-actions-action"], function (_exports, _paperSpeedDialActionsAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActionsAction.default;
    }
  });
});
;define("pilasbloques/components/paper-speed-dial-actions", ["exports", "ember-paper/components/paper-speed-dial-actions"], function (_exports, _paperSpeedDialActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActions.default;
    }
  });
});
;define("pilasbloques/components/paper-speed-dial-trigger", ["exports", "ember-paper/components/paper-speed-dial-trigger"], function (_exports, _paperSpeedDialTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDialTrigger.default;
    }
  });
});
;define("pilasbloques/components/paper-speed-dial", ["exports", "ember-paper/components/paper-speed-dial"], function (_exports, _paperSpeedDial) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDial.default;
    }
  });
});
;define("pilasbloques/components/paper-step-actions", ["exports", "ember-paper-stepper/components/paper-step-actions"], function (_exports, _paperStepActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperStepActions.default;
    }
  });
});
;define("pilasbloques/components/paper-step-body", ["exports", "ember-paper-stepper/components/paper-step-body"], function (_exports, _paperStepBody) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperStepBody.default;
    }
  });
});
;define("pilasbloques/components/paper-step", ["exports", "ember-paper-stepper/components/paper-step"], function (_exports, _paperStep) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperStep.default;
    }
  });
});
;define("pilasbloques/components/paper-stepper", ["exports", "ember-paper-stepper/components/paper-stepper"], function (_exports, _paperStepper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperStepper.default;
    }
  });
});
;define("pilasbloques/components/paper-subheader", ["exports", "ember-paper/components/paper-subheader"], function (_exports, _paperSubheader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSubheader.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-switch", ["exports", "ember-paper/components/paper-switch"], function (_exports, _paperSwitch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSwitch.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-tab", ["exports", "ember-paper/components/paper-tab"], function (_exports, _paperTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTab.default;
    }
  });
});
;define("pilasbloques/components/paper-tabs", ["exports", "ember-paper/components/paper-tabs"], function (_exports, _paperTabs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTabs.default;
    }
  });
});
;define("pilasbloques/components/paper-toast-inner", ["exports", "ember-paper/components/paper-toast-inner"], function (_exports, _paperToastInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToastInner.default;
    }
  });
});
;define("pilasbloques/components/paper-toast-text", ["exports", "ember-paper/components/paper-toast-text"], function (_exports, _paperToastText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToastText.default;
    }
  });
});
;define("pilasbloques/components/paper-toast", ["exports", "ember-paper/components/paper-toast"], function (_exports, _paperToast) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToast.default;
    }
  });
});
;define("pilasbloques/components/paper-toaster", ["exports", "ember-paper/components/paper-toaster"], function (_exports, _paperToaster) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
;define("pilasbloques/components/paper-toolbar-tools", ["exports", "ember-paper/components/paper-toolbar-tools"], function (_exports, _paperToolbarTools) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperToolbarTools.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-toolbar", ["exports", "ember-paper/components/paper-toolbar"], function (_exports, _paperToolbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperToolbar.default;
  _exports.default = _default;
});
;define("pilasbloques/components/paper-tooltip-inner", ["exports", "ember-paper/components/paper-tooltip-inner"], function (_exports, _paperTooltipInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTooltipInner.default;
    }
  });
});
;define("pilasbloques/components/paper-tooltip", ["exports", "ember-paper/components/paper-tooltip"], function (_exports, _paperTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTooltip.default;
    }
  });
});
;define("pilasbloques/components/password-confirmation", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    passwordConfirm: "",
    intl: Ember.inject.service(),

    passwordConfirmValidation(password) {
      return [{
        message: this.intl.t('components.passwordConfirmation.matchError'),
        validate: function (inputValue) {
          return password == inputValue;
        }
      }];
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/components/personal-survey", ["exports", "survey-knockout"], function (_exports, _surveyKnockout) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    pilasBloquesApi: Ember.inject.service(),
    pilasBloquesAnalytics: Ember.inject.service(),
    paperToaster: Ember.inject.service(),

    /** Dialog descriptions according to SurveyJS library.
     ** Additional field: askEachSession, which tells the app to ask the question each time*/
    questions: [{
      id: 1,
      title: "¿Nos ayudás?",
      logo: "imagenes/surveyLogoCoty.png",
      completeText: "¡Dale!",
      pages: [{
        name: "askingHelp",
        questions: [{
          type: "html",
          name: "askingHelp",
          html: "<p>¡Hola! ¿Nos ayudás a mejorar Pilas Bloques?</p><p>Te vamos a hacer preguntas cortitas.</p><p>¡Contestalas cuando quieras!</p>"
        }]
      }]
    }, {
      id: 2,
      title: "Edad y género",
      logo: "imagenes/surveyLogoLita.png",
      pages: [{
        name: "ageAndGender",
        questions: [{
          type: "dropdown",
          choices: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, "18 o más"],
          isRequired: true,
          name: "age",
          title: "¿Cuántos años tenés?"
        }, {
          type: "radiogroup",
          choices: ["Mujer", "Varón", "No binario", "Prefiero no responder"],
          isRequired: true,
          name: "gender",
          title: "¿Cuál es tu género?",
          visibleIf: "{age} != undefined"
        }]
      }]
    }, {
      id: 3,
      title: "Escuela y provincia",
      logo: "imagenes/surveyLogoAlien.png",
      pages: [{
        name: "schoolAndProvince",
        questions: [{
          type: "dropdown",
          choices: ['No estoy en Argentina', 'Ciudad Autónoma de Buenos Aires (CABA)', 'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego, Antártida e Islas del Atlántico Sur', 'Tucumán'],
          isRequired: true,
          name: "province",
          title: "¿En qué provincia vivís?"
        }, {
          type: "radiogroup",
          choices: ["Pública", "Parroquial", "Privada"],
          isRequired: true,
          name: "schoolType",
          title: "¿A qué tipo de escuela vas?",
          visibleIf: "{province} != undefined"
        }]
      }]
    }, {
      id: 4,
      title: "Clase o tarea",
      logo: "imagenes/surveyLogoHeroin.png",
      pages: [{
        name: "classOrHomework",
        questions: [{
          type: "radiogroup",
          choices: ["Sí", "No"],
          isRequired: true,
          name: "isOnSchoolTime",
          title: "¿Estás en horario escolar ahora?"
        }, {
          type: "radiogroup",
          choices: ["Sí, estoy haciendo la tarea ahora", "No"],
          isRequired: true,
          name: "isDoingHomework",
          title: "¿Estás haciendo la tarea ahora?",
          visibleIf: "{isOnSchoolTime} = 'No'"
        }]
      }],
      askEachSession: true
    }, {
      id: 5,
      title: "Escuela y compañía",
      logo: "imagenes/surveyLogoCoty.png",
      pages: [{
        name: "schoolAndCompany",
        questions: [{
          type: "radiogroup",
          choices: ["Sí", "No"],
          isRequired: true,
          name: "isAtSchool",
          title: "¿Estás físicamente en la escuela ahora mismo?"
        }, {
          type: "radiogroup",
          choices: ["Estoy con una adulta o adulto", "Estoy con una compañera o compañero", "No me está ayudando nadie"],
          isRequired: true,
          name: "help",
          title: "¿Te está ayudando alguien ahora?",
          visibleIf: "{isAtSchool} = 'No'"
        }]
      }],
      askEachSession: true
    }],

    didInsertElement() {
      if (this.pilasBloquesApi.connected) this.showNextQuestion();
    },

    showNextQuestion() {
      if (this.nextQuestion()) this.showSurveyDialog(this.nextQuestion());
    },

    //TODO: Param window for testing?
    showSurveyDialog(question) {
      if (window.surveyWindow && window.surveyWindow.isShowing) return; // don't create other surveyWindow if it exists.

      _surveyKnockout.default.StylesManager.applyTheme("winterstone");

      window.surveyWindow = new _surveyKnockout.default.SurveyWindow(question);
      window.surveyWindow.isExpanded = true;
      window.surveyWindow.survey.locale = 'es';
      window.surveyWindow.survey.showQuestionNumbers = 'off';
      window.surveyWindow.survey.logoHeight = 75;
      window.surveyWindow.survey.logoWidth = 75;
      window.surveyWindow.survey.logoPosition = 'top';
      window.surveyWindow.show();
      window.surveyWindow.survey.onComplete.add(async survey => {
        await this.completeAnswer(survey.data);
      });
    },

    async completeAnswer(response) {
      const question = this.nextQuestion();
      await this.saveAnswer(question, response);

      if (question == this.questions.lastObject) {
        this.showThankYou();
      }
    },

    async saveAnswer(question, response) {
      response.timestamp = new Date();
      this.close();
      return await this.storageFor(question).newAnswer({
        question,
        response
      });
    },

    close() {
      return window.surveyWindow && window.surveyWindow.hide();
    },

    storageFor(uqestion) {
      return uqestion.askEachSession ? this.pilasBloquesAnalytics : this.pilasBloquesApi;
    },

    nextQuestion() {
      return this.questions.find(question => !this.wasAnswered(question));
    },

    wasAnswered(question) {
      return this.answeredQuestionIds().includes(question.id);
    },

    answeredQuestionIds() {
      return [...this.userAnswers(), ...this.sessionAnswers()];
    },

    userAnswers() {
      return this.pilasBloquesApi.getUser().answeredQuestionIds || [];
    },

    sessionAnswers() {
      const {
        answers
      } = this.pilasBloquesAnalytics.getSession();
      return answers && answers.map(_ref => {
        let {
          question
        } = _ref;
        return question.id;
      }) || [];
    },

    showThankYou() {
      this.paperToaster.show("Muchas gracias por tus respuestas.", {
        duration: 4000,
        position: "bottom"
      });
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-blockly", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: 'pilas-blockly',
    ejecutando: false,
    terminoDeEjecutar: false,
    errorDeActividad: null,
    cola_deshacer: [],
    data_observar_blockly: false,
    actividad: null,
    interpreterFactory: Ember.inject.service(),
    solucion: null,
    pilasService: null,
    codigoJavascript: "",
    // Se carga como parametro
    persistirSolucionEnURL: false,
    // se le asigna una valor por parámetro.
    debeMostrarFinDeDesafio: false,
    codigo: null,
    modelActividad: null,
    highlighter: Ember.inject.service(),
    availableBlocksValidator: Ember.inject.service(),
    pilasBloquesApi: Ember.inject.service(),
    pilasMulang: Ember.inject.service(),
    bloques: [],
    codigoActualEnFormatoXML: '',
    // se actualiza automáticamente al modificar el workspace.
    anterior_ancho: -1,
    anterior_alto: -1,
    blockly_toolbox: [{
      categoryId: '...',
      blocks: []
    }],
    pasoAPasoHabilitado: false,
    pausadoEnBreakpoint: false,
    javascriptCode: null,
    intl: Ember.inject.service(),
    debeMostarReiniciar: Ember.computed('ejecutando', 'terminoDeEjecutar', function () {
      return this.ejecutando || this.terminoDeEjecutar;
    }),

    didUpdateAttrs() {
      this.didInsertElement();
    },

    async didInsertElement() {
      /*
        Esta no es la forma correcta de arreglar esto.
        Pero como pilas-blockly es hijo de challengeWorkspace,
        challengeWorkspace no puede enviarle actions a pilas-blocky.
        Esto es lo mas que puedo hacer para evitar un refactor
        gigante.
      */
      this.set('exerciseWorkspace', this.get('parentView').get('parentView'));
      this.exerciseWorkspace.setPilasBlockly(this);
      this.set('blockly_toolbox', this.toolboxForBlockTypes(this.bloques));
      this.set('blockly_comments', this.get('actividad.puedeComentar'));
      this.set('blockly_disable', this.get('actividad.puedeDesactivar'));
      this.set('blockly_duplicate', this.get('actividad.puedeDuplicar'));
      this.set('initial_workspace', await this.initialWorkspace()); // Este es un hook para luego agregar a la interfaz
      // el informe deseado al ocurrir un error.

      this.pilasService.on("errorDeActividad", motivoDelError => {
        this.set('errorDeActividad', motivoDelError);
      });
      $(window).trigger('resize');
    },

    async initialWorkspace() {
      const savedSolution = await this.pilasBloquesApi.lastSolution(this.modelActividad.id);
      const serializedURLCode = this.codigo && atob(this.codigo);
      return this.addRandomIdToWorkspace(serializedURLCode || savedSolution?.program || this.modelActividad.initialWorkspace);
    },

    /**
     * Adds an id to a block of the XML.
     * This is necessary because the ember-blockly component doesnt update the workspace when the
     * initial workspace is the same as the previous challenge. 
     */
    addRandomIdToWorkspace(workspaceXML) {
      return workspaceXML && (workspaceXML.includes('id=') ? workspaceXML.replace(/id="[^"]*"/, `id="${Blockly.utils.genUid()}"`) : workspaceXML.replace('<block', `<block id="${Blockly.utils.genUid()}"`));
    },

    /**
     * Creates a toolbox as a list of categories ids with block types
     * from a list of block types
     *
     * E.g.:
     *
     *  >> toolboxForBlockTypes(['MoverDerecha', 'TocaSensor', 'TocaEnemigo'])
     *
     * [
     *    {
     *      categoryId: 'primitives',
     *      blocks: ['MoverDerecha']
     *    },
     *    {
     *      categoryId: 'sensors',
     *      blocks: ['TocaSensor', 'TocaEnemigo']
     *    },
     * ]
     *
     */
    toolboxForBlockTypes(blockTypes) {
      if (blockTypes === undefined) {
        throw new Error("La actividad no tiene bloques definidos, revise el fixture de la actividad para migrarla a ember-blocky.");
      }

      const toolbox = this.groupedByCategories(blockTypes); // This is meant to separate commands from expressions
      // sortedToolbox will put it in the right position

      toolbox.push({
        categoryId: 'separator',
        isSeparator: true
      });
      return this._toEmberBlocklyToolbox(toolbox);
    },

    groupedByCategories(blockTypes) {
      return this.categoryIdsFor(blockTypes).map(categoryId => ({
        categoryId: categoryId,
        blocks: blockTypes.filter(bt => this._categoryIdFor(bt) === categoryId)
      }));
    },

    categoryIdsFor(blockTypes) {
      return [...new Set(blockTypes.map(bt => this._categoryIdFor(bt)))];
    },

    _categoryIdFor(blockType) {
      return this.blocklyBlock(blockType)?.categoryId || 'uncategorized';
    },

    /*
     * _toEmberBlocklyToolbox(toolbox: Toolbox) => EmberToolbox
     * type Toolbox = ToolboxItem[]
     * type ToolboxItem = BlockType | Separator | Category
     * type Separator = {
     *   categoryId: string,
     *   isSeparator: true
     * }
     * type Category = {
     *   categoryId: string,
     *   custom?: string, // for Blockly Dynamic Categories
     *   blocks?: BlockType[],
     * }
     * 
     * 
     * type EmberToolbox = EmberToolboxItem[]
     * type EmberToolboxItem = BlockType | EmberSeparator | EmberCategory
     * type BlockType = string
     * type EmberSeparator = {
     *    isSeparator: true // always
     * } 
     * type EmberCategory = {
     *   category?: string, // printable category name
     *   custom?: string, // for Blockly Dynamic Categories
     *   blocks?: BlockType[],
     *   isSeparator: false // always false for categories
     * }
     */
    _toEmberBlocklyToolbox(toolbox) {
      return this._styledToolbox(this.sortedToolbox(toolbox)).map(toolboxItem => this._toEmberBlocklyToolboxItem(toolboxItem));
    },

    _toEmberBlocklyToolboxItem(toolboxItem) {
      if (typeof toolboxItem === "string") return toolboxItem;

      if (toolboxItem.isSeparator) {
        const emberSeparator = { ...toolboxItem
        };
        delete emberSeparator.categoryId;
        return emberSeparator;
      }

      const emberBlocklyToolboxItem = {
        category: this.intl.t(`blocks.categories.${toolboxItem.categoryId}`).toString(),
        ...toolboxItem
      };
      delete emberBlocklyToolboxItem.categoryId;
      return emberBlocklyToolboxItem;
    },

    /**
     * Depending on the challenge, categories may not be required to be shown.
     * Block types should be shown instead.
     * 
     * TODO: Implement style "desplegado"
     */
    _styledToolbox(toolbox) {
      if (this._areCategoriesRequiredInToolbox()) return toolbox;
      return toolbox.flatMap(toolboxItem => {
        if (toolboxItem.isSeparator || !toolboxItem.categoryId) return [toolboxItem];
        return toolboxItem.blocks;
      });
    },

    _areCategoriesRequiredInToolbox() {
      return this.modelActividad.get('estiloToolbox') !== "sinCategorias";
    },

    /**
     * Orders the toolbox (usually categories) by Pilas Bloques stablished order.
     * @param {*} toolbox
     */
    sortedToolbox(toolbox) {
      const desiredOrder = [// Categories initial order.
      'primitives', 'myProcedures', 'repetitions', 'alternatives', 'variables', 'separator', 'values', 'sensors', 'operators', 'myFunctions', 'uncategorized'];
      return [...toolbox].sort((cat1, cat2) => desiredOrder.indexOf(cat1.categoryId) - desiredOrder.indexOf(cat2.categoryId));
    },

    /**
     * Obtains a Blockly block from a block type
     *
     * TODO: Move to ember-blockly. It belongs to blockly service.
     */
    blocklyBlock(blockType) {
      return Blockly.Blocks[blockType];
    },

    ejecutarInterpreteHastaTerminar(interprete, pasoAPaso) {
      // Se abre una promise que termina cuando:
      //     o bien se llega al último comando escrito en el workspace
      //     o bien el usuario frena la ejecución
      //     o bien existe un error en la escena de pilas web
      return new Promise((success, reject) => {
        let hayMasParaEjecutarDespues;

        let execInterpreterUntilEnd = interpreter => {
          // Si el usuario solicitó terminar el programa deja
          // de ejecutar el intérprete.
          if (!this.ejecutando) {
            success({
              stoppedByUser: true
            });
            return;
          } // Si se produce un error en la actividad se termina de ejecutar el intérprete.
          // Esto es un resultado válido, no hubo ningún problema con el intérprete.


          let error = this.errorDeActividad; // Se settea ante evento de Pilas

          if (error) {
            success({
              error
            });
            return;
          }

          try {
            if (pasoAPaso) {
              // Si está activado el modo depurador, intentará suspender
              // la llamada a interpreter.run() hasta que el usuario pulse
              // el botón step.
              if (interpreter.paused_ === false && !this.pausadoEnBreakpoint) {
                hayMasParaEjecutarDespues = interpreter.run();
                this.set('pausadoEnBreakpoint', true);
                this.exerciseWorkspace.set('pausadoEnBreakpoint', true);
              }
            } else {
              hayMasParaEjecutarDespues = interpreter.run();
            }
          } catch (e) {
            console.log(e);
            reject(e);
          }

          if (hayMasParaEjecutarDespues) {
            // Llama recursivamente, abriendo thread en cada llamada.
            setTimeout(execInterpreterUntilEnd, 10, interpreter);
          } else {
            success({
              finished: true
            });
          }
        };

        execInterpreterUntilEnd(interprete);
      });
    },

    cuandoTerminaEjecucion() {
      Ember.run(this, function () {
        if (this.errorDeActividad) {
          if (this.onErrorDeActividad) this.onErrorDeActividad(this.errorDeActividad);
          return;
        }

        if (this.onTerminoEjecucion) this.onTerminoEjecucion();

        if (this.debeMostrarFinDeDesafio) {
          if (this.pilasService.estaResueltoElProblema() && this.modelActividad.get('debeFelicitarse')) {
            this.send('abrirFinDesafio');
          }
        }

        if (this.ejecutando) {
          this.set('ejecutando', false);
          this.exerciseWorkspace.set('ejecutando', false);
          this.set('terminoDeEjecutar', true);
          this.exerciseWorkspace.set('terminoDeEjecutar', true);
          this.clearHighlight();
        }
      });
    },

    restaurar_codigo(codigo) {
      var xml = Blockly.Xml.textToDom(codigo);

      if (Blockly.mainWorkspace) {
        Blockly.mainWorkspace.clear();
        Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
      }
    },

    clearHighlight() {
      this.highlighter.clear();
    },

    shouldExecuteProgram() {
      return Blockly.mainWorkspace.getTopBlocks().filter(block => !block.disabled).every(block => Blockly.shouldExecute(block));
    },

    staticAnalysis() {
      return {
        couldExecute: this.shouldExecuteProgram()
      };
    },

    runProgramEvent() {
      return this.pilasBloquesApi.runProgram(this.modelActividad.id, {
        program: this.codigoActualEnFormatoXML,
        ast: this.pilasMulang.parseAll(Blockly.mainWorkspace),
        turboModeOn: this.pilasService.modoTurboEstaActivado(),
        staticAnalysis: this.staticAnalysis()
      });
    },

    executionFinishedEvent(solutionId, executionResult) {
      Ember.run(this, function () {
        this.pilasBloquesApi.executionFinished(solutionId, {
          isTheProblemSolved: this.pilasService.estaResueltoElProblema(),
          ...executionResult
        });
      });
    },

    javascriptCode() {
      // This should be EmberBlockly's responsibility. 
      // But that component's javascriptCode often won't get updated soon enough and tests will fail. See https://github.com/Program-AR/pilas-bloques/pull/878
      return Blockly.MyLanguage.workspaceToCode(Blockly.getMainWorkspace());
    },

    actions: {
      async ejecutar() {
        let pasoAPaso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        const analyticsSolutionId = this.runProgramEvent();
        await this.pilasService.restartScene();
        Blockly.Events.fireRunCode();
        if (!this.shouldExecuteProgram()) return; // Permite obtener el código xml al momento de ejecutar. Se utiliza
        // cuando se accede a la ruta curso/alumno para guardar la solución
        // del usuario en cada momento de ejecución.

        if (this.cuandoEjecuta) {
          let codigo_xml = this.codigoActualEnFormatoXML;
          this.cuandoEjecuta(codigo_xml);
        }

        let factory = this.interpreterFactory;
        let interprete = factory.crearInterprete(this.javascriptCode(), bloqueId => this.highlighter.step(bloqueId));
        this.set('pausadoEnBreakpoint', false);
        this.exerciseWorkspace.set('pausadoEnBreakpoint', false);
        this.set('ejecutando', true);
        this.exerciseWorkspace.set('ejecutando', true);
        this.ejecutarInterpreteHastaTerminar(interprete, pasoAPaso).then(executionResult => {
          this.executionFinishedEvent(analyticsSolutionId, executionResult);
          this.cuandoTerminaEjecucion();
        });
      },

      async reiniciar() {
        this.clearHighlight();
        this.set('ejecutando', false);
        this.exerciseWorkspace.set('ejecutando', false);
        this.set('terminoDeEjecutar', false);
        this.exerciseWorkspace.set('terminoDeEjecutar', false);
        this.set('errorDeActividad', null);
        await this.pilasService.restartScene();
      },

      guardar() {
        if (this.guardar) this.guardar();
      },

      ver_codigo() {
        let codigo_como_string = this.actividad.generarCodigoXMLComoString();
        alert(codigo_como_string);
      },

      ingresar_codigo() {
        var codigo = prompt("Ingrese el código");

        if (codigo) {
          this.actividad.cargarCodigoDesdeStringXML(codigo);
        }
      },

      abrirFinDesafio() {
        this.set('mostrarDialogoFinDesafio', true);
      },

      ocultarFinDesafio() {
        this.set('mostrarDialogoFinDesafio', false);
      },

      step() {
        this.set('pausadoEnBreakpoint', false);
        this.exerciseWorkspace.set('pausadoEnBreakpoint', false);
      },

      onChangeWorkspace(xml) {
        if (this.isDestroyed) {
          return;
        }

        this.set('codigoActualEnFormatoXML', xml);
        if (this.onChangeWorkspace) this.onChangeWorkspace(xml);
      },

      onNewWorkspace() {
        this.availableBlocksValidator.disableNotAvailableBlocksInWorkspace(this.bloques);
      }

    }
  });

  _exports.default = _default;

  class ErrorDeActividad extends Error {
    constructor(exception) {
      super(exception);
    }

  }
  /* jshint ignore:end */

});
;define("pilasbloques/components/pilas-botones-zoom", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'div',
    classNames: ['nw-zoom'],
    zoomValue: 100,
    zoom: Ember.inject.service(),
    canZoomIn: Ember.computed('zoomValue', function () {
      return this.zoomValue < 120;
    }),
    canZoomOut: Ember.computed('zoomValue', function () {
      return this.zoomValue > 80;
    }),
    cambiarZoom: Ember.observer('zoomValue', function () {
      this.zoom.setValue(this.zoomValue);
      this.aplicarZoom((this.zoomValue - 100) / 10);
    }),

    aplicarZoom(zoomLevel) {
      document.body.style.zoom = 100 + zoomLevel * 10 + "%";
    },

    onStart: Ember.on('init', function () {
      this.set('zoomValue', this.zoom.getValue());
      this.cambiarZoom();
    }),
    actions: {
      zoomIn() {
        this.set('zoomValue', this.zoomValue + 10);
      },

      zoomOut() {
        this.set('zoomValue', this.zoomValue - 10);
      },

      zoomRestore() {
        this.set('zoomValue', 100);
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-canvas", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['pilas-canvas'],
    classNameBindings: ['media.isMobile:media-mobile'],
    iframeElement: null,
    challenge: null,
    pilas: Ember.inject.service(),

    didInsertElement() {
      this.set("iframeElement", this.element.querySelector('#innerIframe'));

      this.iframeElement.onload = () => {
        this.loadScene();
      };
    },

    didUpdate() {
      this.pilas.setChallenge(this.challenge);
    },

    willDestroyElement() {
      this.pilas.liberarRecursos();
    },

    async loadScene() {
      await this.pilas.loadPilas(this.get('iframeElement'), {
        width: 420,
        height: 480
      }, this.challenge);
      await this.pilas.setChallenge(this.challenge);
      if (this.onReady) this.onReady(this.pilas.engine());
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-notificador", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    servicioNotificador: null,
    hayActualizacion: false,
    tagName: '',
    linkDescarga: _environment.default.linkDeDescarga,
    platform: Ember.inject.service(),

    didInsertElement() {
      if (this.servicioNotificador && this.platform.inElectron()) {
        /* Solo si está en la versión offline, sobre electron, espera 5 segundos
          * y consulta si existe una versión nueva para descargar. */
        Ember.run.later(this, function () {
          this.consultarSiExisteVersionNueva();
        }, 5000);
      }
    },

    consultarSiExisteVersionNueva() {
      this.servicioNotificador.consultar().then(data => {
        if (data.hayActualizacion) {
          this.set('hayActualizacion', true);
          this.set('versionMasReciente', data.version);
          console.log(`Hay una actualización disponible. La versión ${data.version}.`);
        } else {
          console.log(`Se consultó buscando una nueva versión, pero el servidor informó la versión ${data.version} así que no hace falta actualizar...`);
        }
      }, error => {
        console.warn("Se quiso consultar una nueva versión pero falló el request", error);
      });
    },

    actions: {
      cerrar() {
        this.set('hayActualizacion', false);
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
;define("pilasbloques/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("pilasbloques/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
;define("pilasbloques/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
;define("pilasbloques/components/power-select/no-matches-message", ["exports", "ember-power-select/components/power-select/no-matches-message"], function (_exports, _noMatchesMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noMatchesMessage.default;
    }
  });
});
;define("pilasbloques/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
;define("pilasbloques/components/power-select/placeholder", ["exports", "ember-power-select/components/power-select/placeholder"], function (_exports, _placeholder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
;define("pilasbloques/components/power-select/power-select-group", ["exports", "ember-power-select/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
;define("pilasbloques/components/power-select/search-message", ["exports", "ember-power-select/components/power-select/search-message"], function (_exports, _searchMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
;define("pilasbloques/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("pilasbloques/components/scene-buttons", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/scene-details", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    initialized: false,
    exerciseCover: Ember.computed('model', function () {
      return this.model.challengeCover || `imagenes/desafios/${this.model.nombreImagen}`;
    }),
    actions: {
      setTab(tabId) {
        Array.from(document.getElementsByClassName("tabcontent")).forEach(e => e.classList.remove("active"));
        document.getElementById(tabId).classList.add("active");
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/scene", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/session-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    pilasBloquesApi: Ember.inject.service(),
    avatardb: Ember.inject.service(),
    wrongLogin: false,
    session: null,
    randomAvatar: Ember.computed("avatardb", function () {
      return this.avatardb.randomAvatar();
    }),

    didInsertElement() {
      this.updateSession();
    },

    updateSession() {
      this.set("session", this.pilasBloquesApi.getUser());
    },

    actions: {
      changeUser() {
        this.pilasBloquesApi.logout();
        this.updateSession();
        this.set("openLogin", true);
      },

      logout() {
        this.pilasBloquesApi.logout();
        document.location.reload();
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/simple-read-toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'div',
    classNames: [],
    storage: Ember.inject.service(),
    simpleRead: Ember.inject.service(),

    shouldShowSimpleRead() {
      return this.simpleRead.shouldShowSimpleRead(this.bookSimpleReadMode());
    },

    bookSimpleReadMode() {
      return this.get('book.modoLecturaSimple');
    },

    actions: {
      toggleSimpleRead() {
        this.storage.toggleSimpleRead();
        window.location.reload();
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/spinner", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['content-spinner'],
    centered: false
  });

  _exports.default = _default;
});
;define("pilasbloques/components/splitter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['splitter'],

    didInsertElement() {
      var md; // remember mouse down info

      const first = document.getElementById("splitter-first-child");
      const second = document.getElementById("splitter-second-child");

      function dragElement(element, direction) {
        element.onmousedown = onMouseDown;

        function onMouseDown(e) {
          //console.log("mouse down: " + e.clientX);
          md = {
            e,
            offsetLeft: element.offsetLeft,
            offsetTop: element.offsetTop,
            firstWidth: first.offsetWidth,
            secondWidth: second.offsetWidth
          };
          document.onmousemove = onMouseMove;

          document.onmouseup = () => {
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
          };
        }

        function onMouseMove(e) {
          //console.log("mouse move: " + e.clientX);
          var delta = {
            x: e.clientX - md.e.x,
            y: e.clientY - md.e.y
          };

          if (direction === "H") // Horizontal
            {
              // prevent negative-sized elements
              delta.x = Math.min(Math.max(delta.x, -md.firstWidth), md.secondWidth);
              element.style.left = md.offsetLeft + delta.x + "px";
              first.style.width = md.firstWidth + delta.x + "px";
              second.style.width = md.secondWidth - delta.x + "px";
            }
        }
      }

      if (first != null && second != null) {
        dragElement(document.getElementById("separator"), "H");
      }
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/components/terms-and-conditions-link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['terms-and-conditions-link']
  });

  _exports.default = _default;
});
;define("pilasbloques/components/terms", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    pilasBloquesApi: Ember.inject.service(),
    storage: Ember.inject.service(),
    router: Ember.inject.service(),
    shouldClose: false,
    termsAreAccepted: Ember.computed('storage', 'pilasBloquesApi', function () {
      return this.get('pilasBloquesApi').getUser() || this.get('storage').termsAreAccepted();
    }),
    shouldOpen: Ember.computed('termsAreAccepted', 'shouldClose', function () {
      return !(this.termsAreAccepted || this.shouldClose);
    }),
    actions: {
      acceptTerms() {
        this.storage.saveTermsAcceptance();
        this.set('shouldClose', true);
      },

      rejectTerms() {
        this.router.transitionTo("/");
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/toast", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'span'
  });

  _exports.default = _default;
});
;define("pilasbloques/components/transition-group", ["exports", "ember-css-transitions/components/transition-group"], function (_exports, _transitionGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transitionGroup.default;
    }
  });
});
;define("pilasbloques/components/turbo-mode-toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'div',
    classNames: [],
    turboMode: false,
    storage: Ember.inject.service(),

    didRender() {
      this.set('turboMode', this.storage.getUseTurboMode());

      if (this.turboMode) {
        this.pilas.habilitarModoTurbo();
      }
    },

    actions: {
      updateTurboMode() {
        this.storage.toggleTurboMode();

        if (this.turboMode) {
          this.pilas.deshabilitarModoTurbo();
        } else {
          this.pilas.habilitarModoTurbo();
        }

        if (!Ember.testing) {
          this.set("needShowTurboModeIndicator", true);
        }
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/vertical-collection", ["exports", "@html-next/vertical-collection/components/vertical-collection/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("pilasbloques/controllers/acercade", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    notificador: Ember.inject.service(),
    hayActualizacion: Ember.computed.alias('notificador.hayActualizacion'),
    versionMasReciente: Ember.computed.alias('notificador.versionActual')
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    layout: true,
    queryParams: ['layout'],
    notificador: Ember.inject.service()
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/desafio", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    pilas: Ember.inject.service(),
    queryParams: ['codigo'],
    codigo: "",
    codigoJavascript: ''
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/galeria", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['current_block'],
    current_block: null
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/libros/index", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    simpleRead: Ember.inject.service(),
    enableChallengeCreator: _environment.default.enableChallengeCreator,

    shouldShowSimpleRead() {
      return this.simpleRead.shouldShowSimpleRead(false);
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/libros/ver-libro", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    simpleRead: Ember.inject.service(),

    shouldShowSimpleRead() {
      return this.get('simpleRead').shouldShowSimpleRead(this.get('model.modoLecturaSimple'));
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/password-recovery", ["exports", "pilasbloques/utils/request"], function (_exports, _request) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    pilasBloquesApi: Ember.inject.service(),
    queryParams: ['token'],
    token: null,
    credentials: {},
    usernameExists: true,
    // Default true for (no) error visualization
    wrongCredentials: false,
    actions: {
      checkUsername(cb) {
        this.pilasBloquesApi.passwordRecovery(this.credentials.username).then(_ref => {
          let {
            email
          } = _ref;
          this.set("usernameExists", true);
          this.set("credentials.email", email);
          cb();
        }).catch((0, _request.notFound)(() => {
          this.set("usernameExists", false);
        }));
      },

      changePassword(cb) {
        this.set("wrongCredentials", false);
        this.set("credentials.token", this.token);
        this.pilasBloquesApi.changePassword(this.credentials).then(cb).catch((0, _request.badRequest)(() => {
          this.set("wrongCredentials", true);
          this.set("credentials.password", "");
        }));
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/register", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    avatardb: Ember.inject.service(),
    pilasBloquesApi: Ember.inject.service(),
    registerData: {
      email: ''
    },
    validUsername: true,
    intl: Ember.inject.service(),
    avatars: Ember.computed('avatardb', function () {
      return this.avatardb.allAvatars();
    }),
    usernameFormatValidation: Ember.computed('intl', function () {
      return [{
        message: this.intl.t('templates.register.errors.userFormat'),
        validate: userName => {
          const re = /^[a-zA-Z\d]+[a-zA-Z\d\-_]*$/;
          return re.test(userName);
        }
      }];
    }),
    mailValidation: Ember.computed('intl', function () {
      return [{
        message: this.intl.t('templates.register.errors.invalidMail'),
        validate: mail => {
          // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(mail) || mail == '';
        }
      }];
    }),
    parentNameValidation: Ember.computed('intl', function () {
      return [{
        message: this.intl.t('templates.register.errors.missingParentName'),
        validate: parentName => {
          const re = /.+ .+/;
          return re.test(parentName);
        }
      }];
    }),
    DNIValidation: Ember.computed('intl', function () {
      return [{
        message: this.intl.t('templates.register.errors.invalidNumber'),
        validate: DNI => {
          // any string with at least 6 numbers
          const re = new RegExp('(\\D*\\d\\D*){6,}');
          return re.test(DNI);
        }
      }];
    }),
    actions: {
      doRegister() {
        this.pilasBloquesApi.register(this.registerData).then(() => this.transitionToRoute("/"));
      },

      checkUsername() {
        this.pilasBloquesApi.userExists(this.registerData.username).then(exist => this.set("validUsername", !exist));
      }

    }
  });

  _exports.default = _default;
});
;define("pilasbloques/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("pilasbloques/electron/reload", [], function () {
  "use strict";

  function setupLivereload() {
    const process = window ? window.processNode : null; // Exit immediately if we're not running in Electron

    if (!window.ELECTRON || process && process.env && process.env.DO_NOT_SETUP_LIVERELOAD) {
      return;
    } // Reload the page when anything in `dist` changes


    let fs;
    let path;
    let devtron;

    try {
      fs = window.requireNode('fs');
      path = window.requireNode('path');
    } catch (e) {
      console.warn('ember-electron tried to require fs and path to enable live-reload features, but failed.');
      console.warn('Automatic reloading is therefore disabled.');
      console.warn(e);
      return;
    }
    /**
     * @private
     * Watch a given directory for changes and reload
     * on change
     *
     * @param sub directory
     */


    function watch() {
      for (var _len = arguments.length, sub = new Array(_len), _key = 0; _key < _len; _key++) {
        sub[_key] = arguments[_key];
      }

      const dirname = path.join(__dirname, ...sub);
      fs.watch(dirname, {
        recursive: true
      }, () => window.location.reload());
    }
    /**
     * @private
     * Install Devtron in the current window.
     */


    function installDevtron() {
      try {
        devtron = window.requireNode('devtron');

        if (devtron) {
          devtron.install();
        }
      } catch (e) {// no-op
      }
    }
    /**
     * @private
     * Install Ember-Inspector in the current window.
     */


    function installEmberInspector() {
      let location;

      try {
        const eiLocation = window.requireNode.resolve('ember-inspector');
        location = path.join(eiLocation, 'dist', 'chrome');
      } catch (error) {
        location = path.join(__dirname, '..', 'node_modules', 'ember-inspector', 'dist', 'chrome');
      }

      fs.lstat(location, (err, results) => {
        if (err) {
          console.warn('Error loading Ember Inspector', err);
          return;
        }

        if (results && results.isDirectory && results.isDirectory()) {
          const {
            BrowserWindow
          } = window.requireNode('electron').remote;
          const added = BrowserWindow.getDevToolsExtensions && BrowserWindow.getDevToolsExtensions().hasOwnProperty('Ember Inspector');

          try {
            if (!added) {
              BrowserWindow.addDevToolsExtension(location);
            }
          } catch (err) {// no-op
          }
        }
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      const dirname = __dirname || (process && (process || {}).cwd ? process.cwd() : null);

      if (!dirname) {
        return;
      }

      fs.stat(dirname, (err
      /* , stat */
      ) => {
        if (!err) {
          watch(); // On linux, the recursive `watch` command is not fully supported:
          // https://nodejs.org/docs/latest/api/fs.html#fs_fs_watch_filename_options_listener
          //
          // However, the recursive option WILL watch direct children of the
          // given directory.  So, this hack just manually sets up watches on
          // the expected subdirs -- that is, `assets` and `tests`.

          if (process && process.platform === 'linux') {
            watch('assets');
            watch('tests');
          }
        }
      });
      installDevtron();
      installEmberInspector();
    });
  }

  setupLivereload();
});
;define("pilasbloques/formats", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      compact: {
        notation: 'compact'
      },
      EUR: {
        style: 'currency',
        currency: 'EUR'
      },
      USD: {
        style: 'currency',
        currency: 'USD'
      }
    }
  };
  _exports.default = _default;
});
;define("pilasbloques/helpers/-clear-element", ["exports", "ember-in-element-polyfill/helpers/-clear-element"], function (_exports, _clearElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "clearElement", {
    enumerable: true,
    get: function () {
      return _clearElement.clearElement;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clearElement.default;
    }
  });
});
;define("pilasbloques/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pilasbloques/helpers/-paper-underscore", ["exports", "ember-paper/helpers/underscore"], function (_exports, _underscore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(_exports, "underscore", {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
;define("pilasbloques/helpers/and", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.and = and;
  _exports.default = void 0;

  function and(_ref) {
    let [bool1, bool2] = _ref;
    return bool1 && bool2;
  }

  var _default = Ember.Helper.helper(and);

  _exports.default = _default;
});
;define("pilasbloques/helpers/app-version", ["exports", "pilasbloques/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("pilasbloques/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
});
;define("pilasbloques/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("pilasbloques/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
});
;define("pilasbloques/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
});
;define("pilasbloques/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
});
;define("pilasbloques/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
});
;define("pilasbloques/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
});
;define("pilasbloques/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
});
;define("pilasbloques/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsGroup", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define("pilasbloques/helpers/ember-power-select-is-selected", ["exports", "ember-power-select/helpers/ember-power-select-is-selected"], function (_exports, _emberPowerSelectIsSelected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsSelected", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define("pilasbloques/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
});
;define("pilasbloques/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("pilasbloques/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
});
;define("pilasbloques/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
});
;define("pilasbloques/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
});
;define("pilasbloques/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
;define("pilasbloques/helpers/format-date", ["exports", "pilas-bloques-ember-intl/helpers/format-date"], function (_exports, _formatDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
});
;define("pilasbloques/helpers/format-message", ["exports", "pilas-bloques-ember-intl/helpers/format-message"], function (_exports, _formatMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
});
;define("pilasbloques/helpers/format-number", ["exports", "pilas-bloques-ember-intl/helpers/format-number"], function (_exports, _formatNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
});
;define("pilasbloques/helpers/format-relative", ["exports", "pilas-bloques-ember-intl/helpers/format-relative"], function (_exports, _formatRelative) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
});
;define("pilasbloques/helpers/format-time", ["exports", "pilas-bloques-ember-intl/helpers/format-time"], function (_exports, _formatTime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
});
;define("pilasbloques/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
});
;define("pilasbloques/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
});
;define("pilasbloques/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("pilasbloques/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("pilasbloques/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
;define("pilasbloques/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
;define("pilasbloques/helpers/href-to", ["exports", "ember-href-to/helpers/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hrefTo.default;
    }
  });
  Object.defineProperty(_exports, "hrefTo", {
    enumerable: true,
    get: function () {
      return _hrefTo.hrefTo;
    }
  });
});
;define("pilasbloques/helpers/ignore-children", ["exports", "ember-ignore-children-helper/helpers/ignore-children"], function (_exports, _ignoreChildren) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(_exports, "ignoreChildren", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
;define("pilasbloques/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
;define("pilasbloques/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
});
;define("pilasbloques/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
;define("pilasbloques/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("pilasbloques/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("pilasbloques/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("pilasbloques/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
});
;define("pilasbloques/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
});
;define("pilasbloques/helpers/lf-lock-model", ["exports", "liquid-fire/helpers/lf-lock-model"], function (_exports, _lfLockModel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(_exports, "lfLockModel", {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
;define("pilasbloques/helpers/lf-or", ["exports", "liquid-fire/helpers/lf-or"], function (_exports, _lfOr) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(_exports, "lfOr", {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
;define("pilasbloques/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("pilasbloques/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("pilasbloques/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
});
;define("pilasbloques/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
});
;define("pilasbloques/helpers/media", ["exports", "ember-responsive/helpers/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _media.default;
    }
  });
  Object.defineProperty(_exports, "media", {
    enumerable: true,
    get: function () {
      return _media.media;
    }
  });
});
;define("pilasbloques/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
;define("pilasbloques/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
});
;define("pilasbloques/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("pilasbloques/helpers/not", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.not = not;

  function not(_ref) {
    let [value] = _ref;
    return !value;
  }

  var _default = Ember.Helper.helper(not);

  _exports.default = _default;
});
;define("pilasbloques/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
;define("pilasbloques/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
;define("pilasbloques/helpers/or", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.or = or;

  function or(_ref) {
    let [bool1, bool2] = _ref;
    return bool1 || bool2;
  }

  var _default = Ember.Helper.helper(or);

  _exports.default = _default;
});
;define("pilasbloques/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("pilasbloques/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function () {
      return _pick.pick;
    }
  });
});
;define("pilasbloques/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
;define("pilasbloques/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
;define("pilasbloques/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("pilasbloques/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
;define("pilasbloques/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
;define("pilasbloques/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
;define("pilasbloques/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
});
;define("pilasbloques/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
});
;define("pilasbloques/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
;define("pilasbloques/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
});
;define("pilasbloques/helpers/route-action", ["exports", "ember-route-action-helper/helpers/route-action"], function (_exports, _routeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeAction.default;
    }
  });
});
;define("pilasbloques/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
;define("pilasbloques/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("pilasbloques/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
});
;define("pilasbloques/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
});
;define("pilasbloques/helpers/t", ["exports", "pilas-bloques-ember-intl/helpers/t"], function (_exports, _t) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
});
;define("pilasbloques/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
});
;define("pilasbloques/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("pilasbloques/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
;define("pilasbloques/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
;define("pilasbloques/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
});
;define("pilasbloques/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
});
;define("pilasbloques/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
;define("pilasbloques/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("pilasbloques/initializers/add-modals-container", ["exports", "ember-modal-dialog/initializers/add-modals-container"], function (_exports, _addModalsContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "pilasbloques/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/debug", ["exports", "@html-next/vertical-collection/-debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'vertical-collection-debug',

    initialize() {}

  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/ember-cli-mirage", ["exports", "pilasbloques/config/environment", "pilasbloques/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.startMirage = startMirage;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',

    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }

  };
  _exports.default = _default;

  function startMirage() {
    let env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;
    return (0, _startMirage.default)(null, {
      env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("pilasbloques/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("pilasbloques/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("pilasbloques/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/ember-responsive-breakpoints", ["exports", "ember-responsive/initializers/responsive"], function (_exports, _responsive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _responsive.default;
  _exports.default = _default;
});
;define("pilasbloques/initializers/ember-responsive", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'responsive',

    initialize(application) {
      application.inject('controller', 'media', 'service:media');
      application.inject('component', 'media', 'service:media');
    }

  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/export-application-global", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/liquid-fire", ["exports", "liquid-fire/velocity-ext"], function (_exports, _velocityExt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'liquid-fire',
    initialize: function () {}
  };
  _exports.default = _default;
});
;define("pilasbloques/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("pilasbloques/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("pilasbloques/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;

      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }

      return el;
    }
  }

  var _default = {
    name: 'ember-href-to',

    initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        let hrefToClickHandler = function _hrefToClickHandler(e) {
          let link = e.target.tagName === 'A' ? e.target : closestLink(e.target);

          if (link) {
            let hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler); // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.

        applicationInstance.reopen({
          willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super(...arguments);
          }

        });
      }
    }

  };
  _exports.default = _default;
});
;define("pilasbloques/mirage/config", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  /*jshint esversion: 6 */
  function _default() {
    this.get('/desafios');
    this.get('/desafios/:id');
    this.get('/grupos');
    this.get('/grupos/:id');
    this.get('/capitulos');
    this.get('/capitulos/:id');
    this.get('/libros');
    this.get('/libros/:id'); // Deshabilita los console log que emite mirage.

    this.logging = false; // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced

    this.timing = 50; // delay for each request, automatically set to 0 during testing

    this.passthrough('http://www.google-analytics.com/**');
    this.passthrough('https://api.github.com/**');
    this.passthrough(`${_environment.default.pbApi.baseURL}/**`);
    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
    */
  }
});
;define("pilasbloques/mirage/fixtures/capitulos", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = [{
    id: 'Capítulo 3',
    grupoIds: ['manual1cPrimaria3.1.2', 'manual1cPrimaria3.1.3', 'manual1cPrimaria3.1.4', 'manual1cPrimaria3.2.2', 'manual1cPrimaria3.2.3', 'manual1cPrimaria3.I']
  }, {
    id: 'Capítulo 4',
    grupoIds: ['manual1cPrimaria4.1.3', 'manual1cPrimaria4.1.4', 'manual1cPrimaria4.2.3', 'manual1cPrimaria4.I']
  }, {
    id: 'Capítulo 5',
    grupoIds: ['manual1cPrimaria5.1.3', 'manual1cPrimaria5.1.4', 'manual1cPrimaria5.2.1', 'manual1cPrimaria5.I', 'manual1cPrimariaOtros']
  }, {
    id: 'Autómatas, comandos, procedimientos y repetición',
    grupoIds: ['AlienTocaBoton', 'ElGatoEnLaCalle', 'NoMeCansoDeSaltar', 'ElMarcianoEnElDesierto', 'TitoEnciendeLuces', 'ElAlienYLasTuercas', 'ElRecolectorDeEstrellas', 'MariaLaComeSandias', 'AlimentandoALosPeces', 'InstalandoJuegos', 'LaGranAventuraDelMarEncantado', 'ReparandoLaNave']
  }, {
    id: 'Alternativa condicional',
    grupoIds: ['ElMonoYLasBananas', 'LaEleccionDelMono', 'LaberintoCorto', 'TresNaranjas', 'TitoRecargado', 'LaberintoLargo']
  }, {
    id: 'Repetición condicional',
    grupoIds: ['SuperTito1', 'SuperTito2', 'LaberintoConQueso', 'ElDetectiveChaparro', 'FutbolRobots', 'PrendiendoLasCompus', 'ElMonoQueSabeContar']
  }, {
    id: 'Sensores Numéricos',
    grupoIds: ['ElSuperviaje', 'ElMonoCuentaDeNuevo']
  }, {
    id: 'Parametrización de soluciones',
    grupoIds: ['ElPlanetaDeNano', 'Dibujando Figuras', 'LaFiestaDeDracula', 'SalvandoLaNavidad', 'PrendiendoLasCompusParametrizado', 'TitoCuadrado', 'ElCangrejoAguafiestas', 'PrendiendoLasFogatas', 'DibujoLibre']
  }, {
    id: 'Tecnopolis 2021 Ejercicio Modelo',
    grupoIds: ['tecnopolis2021EjercicioModelo']
  }, {
    id: 'Tecnopolis 2021 Con Duba',
    grupoIds: ['tecnopolis2021ConDuba']
  }, {
    id: 'Tecnopolis 2021 Con Lita',
    grupoIds: ['tecnopolis2021ConLita']
  }, {
    id: 'Tecnopolis 2021 Con Coty',
    grupoIds: ['tecnopolis2021ConCoty']
  }, {
    id: 'Tecnopolis 2021 Con Toto',
    grupoIds: ['tecnopolis2021ConToto']
  }];
  _exports.default = _default;
});
;define("pilasbloques/mirage/fixtures/desafios", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * Una actividad se define con el siguiente diccionario:
   * id: <obligatorio> Es el número por el cual se accederá al desafío en la URL.
   * nombre: <obligatorio> Es un segundo identificador único. Se usa para cosas como para chequear que la solución cargada sea de este desafío y no otro.
   * título: <obligatorio> Es el título visible del desafío en la lista del libro y en la pantalla principal del desafío.
   * enunciado: <obligatorio> Es el enunciado del desafío. Es la descripción del objetivo del programa que debe realizar el alumno.
   * consignaInicial: Es una posible pista, el "Sabías qué". En general en Pilas Bloques suele aparecer cuando el desafío introduce un concepto nuevo.
   * escena: <obligatorio> Es un String que puede indicar o bien un nombre de clase, o bien EL STRING con un "new Escena..." que luego se PARSEARÁ como javascript para construir la escena de pilas-bloques-exercises asociada a este desafío.
   * debeFelicitarse: Es un booleano que indica si tiene sentido que el desafío chequee e informe al alumno la concreción exitosa de su programa. En una actividad de dibujo libre estaría en false.
   * bloques: <obligatorio> Es la lista de ids de bloque de Blockly que habrá en el toolbox de la actividad.
   * estiloToolbox: Tiene tres valores: 
   * * * "sinCategorias", lo que hace un toolbox aplanado, con los bloques directamente en el toolbox sin títulos ni clasificaciones. 
   * * * "desplegable", lo que hace un toolbox con categorías que al clickearlas muestra los bloques. Es el valor por defecto.
   * * * "aplanado", produce el mismo toolbox aplanado con los bloques visibles que "sinCategorias", pero con las categorías en labels. Al momento está sin implementar.
   */

  /*jshint esversion: 6 */
  var _default = [{
    id: 1,
    nombre: 'AlienTocaBoton',
    escena: 'AlienInicial',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'ApretarBoton']
  }, {
    id: 2,
    nombre: 'ElGatoEnLaCalle',
    // sale de 'id' en 'app/actividades/actividadElGatoEnLaCalle.js'
    escena: 'ElGatoEnLaCalle',
    debeFelicitarse: true,
    bloques: ['Saludar', 'Avanzar', 'Volver', 'AbrirOjos', 'CerrarOjos', 'Acostarse', 'Pararse', 'Soniar', 'Procedimiento']
  }, {
    id: 3,
    nombre: 'NoMeCansoDeSaltar',
    escena: 'NoMeCansoDeSaltar',
    debeFelicitarse: true,
    bloques: ['SaltarHablando', 'Procedimiento', 'Repetir']
  }, {
    id: 4,
    nombre: 'ElMarcianoEnElDesierto',
    escena: 'ElMarcianoEnElDesierto',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'ComerManzana', 'Procedimiento', 'Repetir']
  }, {
    id: 5,
    nombre: 'TitoEnciendeLuces',
    escena: 'TitoEnciendeLuces',
    debeFelicitarse: true,
    bloques: ['EncenderLuz', 'MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'Procedimiento', 'Repetir']
  }, {
    id: 6,
    nombre: 'ElAlienYLasTuercas',
    escena: 'AlienLevantaTuercas',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'LevantaTuerca', 'Procedimiento', 'Repetir']
  }, {
    id: 7,
    nombre: 'ElRecolectorDeEstrellas',
    escena: 'ElRecolectorDeEstrellas',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaArriba', 'VolverABordeIzquierdo', 'TomarEstrella', 'Procedimiento', 'Repetir']
  }, {
    id: 8,
    nombre: 'MariaLaComeSandias',
    escena: 'MariaLaComeSandias',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'MorderSandia', 'Procedimiento', 'Repetir']
  }, {
    id: 9,
    nombre: 'AlimentandoALosPeces',
    escena: 'AlimentandoALosPeces',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'AlimentarPez', 'AgarrarComida', 'Procedimiento', 'Repetir']
  }, {
    id: 10,
    nombre: 'InstalandoJuegos',
    escena: 'InstalandoJuegos',
    debeFelicitarse: true,
    bloques: ['PasarASiguienteComputadora', 'PrenderComputadora', 'ApagarComputadora', 'EscribirC', 'EscribirB', 'EscribirA', 'InstalarJuego', 'Repetir', 'Procedimiento']
  }, {
    id: 11,
    nombre: 'LaGranAventuraDelMarEncantado',
    escena: 'LaGranAventuraDelMarEncantado',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'AgarrarLlave', 'AbrirCofre', 'DarSombrero', 'AtacarConEspada', 'EscaparEnUnicornio', 'Repetir', 'Procedimiento']
  }, {
    id: 12,
    nombre: 'ReparandoLaNave',
    escena: 'ReparandoLaNave',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'TomarHierro', 'TomarCarbon', 'Depositar', 'Escapar', 'Repetir', 'Procedimiento']
  }, {
    id: 13,
    nombre: 'ElMonoYLasBananas',
    escena: 'ElMonoYLasBananas',
    debeFelicitarse: true,
    bloques: ['ComerBanana', 'AvanzarMono', 'TocandoBanana', 'Repetir', 'Procedimiento', 'Si']
  }, {
    id: 14,
    nombre: 'LaEleccionDelMono',
    escena: 'LaEleccionDelMono',
    debeFelicitarse: true,
    bloques: ['ComerBanana', 'ComerManzana', 'AvanzarMono', 'Procedimiento', 'Repetir', 'Si', 'SiNo', 'TocandoManzana', 'TocandoBanana']
  }, {
    id: 15,
    nombre: 'LaberintoCorto',
    escena: 'LaberintoCorto',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'Repetir', 'Si', 'SiNo', 'MoverACasillaDerecha', 'MoverACasillaAbajo', 'TocandoAbajo', 'TocandoDerecha']
  }, {
    id: 16,
    nombre: 'TresNaranjas',
    escena: 'TresNaranjas',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaDerecha', 'ComerNaranja', 'Repetir', 'Si', 'SiNo', 'TocandoNaranja']
  }, {
    id: 17,
    nombre: 'TitoRecargado',
    escena: 'TitoRecargado',
    debeFelicitarse: true,
    bloques: ['EncenderLuz', 'MoverACasillaAbajo', 'Procedimiento', 'Repetir', 'Si', 'SiNo', 'TocandoLuz']
  }, {
    id: 18,
    nombre: 'LaberintoLargo',
    escena: 'LaberintoLargo',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaDerecha', 'MoverACasillaAbajo', 'Repetir', 'Si', 'SiNo', 'TocandoAbajo', 'TocandoDerecha']
  }, {
    id: 19,
    nombre: 'SuperTito1',
    escena: 'SuperTito1',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'EncenderLuz', 'MoverACasillaAbajo', 'TocandoFinal', 'Repetir', 'Si', 'SiNo', 'Hasta']
  }, {
    id: 20,
    nombre: 'SuperTito2',
    escena: 'SuperTito2',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'TocandoFinal', 'TocandoLuz', 'EncenderLuz', 'MoverACasillaAbajo', 'Repetir', 'Si', 'SiNo', 'Hasta']
  }, {
    id: 21,
    nombre: 'LaberintoConQueso',
    escena: 'LaberintoConQueso',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaDerecha', 'MoverACasillaAbajo', 'ComerQueso', 'Repetir', 'Si', 'SiNo', 'Hasta', 'TocandoAbajo', 'TocandoDerecha', 'TocandoFinCamino', 'TocandoQueso']
  }, {
    id: 22,
    nombre: 'ElDetectiveChaparro',
    escena: 'ElDetectiveChaparro',
    debeFelicitarse: true,
    bloques: ['Repetir', 'Si', 'SiNo', 'Hasta', 'Procedimiento', 'IrAlPrimerSospechoso', 'IrAlSiguienteSospechoso', 'InterrogarSospechoso', 'EsCulpable']
  }, {
    id: 23,
    nombre: 'FutbolRobots',
    escena: 'FutbolRobots',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaDerecha', 'MoverACasillaIzquierda', 'SiguienteFila', 'PatearPelota', 'TocandoInicio', 'TocandoPelota', 'Repetir', 'Si', 'SiNo', 'Hasta']
  }, {
    id: 24,
    nombre: 'PrendiendoLasCompus',
    escena: 'PrendiendoLasCompus',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'Repetir', 'Si', 'SiNo', 'Hasta', 'MoverACasillaDerecha', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'MoverACasillaIzquierda', 'PrenderComputadora', 'EstoyEnEsquina']
  }, {
    id: 25,
    nombre: 'ElMonoQueSabeContar',
    escena: 'ElMonoQueSabeContar',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'SiguienteColumna', 'ContarBanana', 'ContarManzana', 'TocandoBanana', 'TocandoManzana', 'Repetir', 'Si', 'SiNo', 'Hasta', 'EstoySobreElInicio', 'EstoySobreElFinal']
  }, {
    id: 26,
    nombre: 'ElSuperviaje',
    escena: 'SuperViaje',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'KmsTotales', 'Avanzar1km', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta']
  }, {
    id: 27,
    nombre: 'ElMonoCuentaDeNuevo',
    escena: 'ElMonoCuentaDeNuevo',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'SiguienteColumna', 'ContarBanana', 'ContarManzana', 'TocandoBanana', 'TocandoManzana', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'EstoySobreElInicio', 'LargoColumnaActual']
  }, {
    id: 28,
    nombre: 'ElPlanetaDeNano',
    escena: 'ElPlanetaDeNano',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaDerecha', 'MoverACasillaArriba', 'VolverAlBordeIzquierdo', 'ComerBanana', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'Numero']
  }, {
    id: 29,
    nombre: 'DibujandoAlCuadrado',
    escena: 'DibujandoCuadrado',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero']
  }, {
    id: 30,
    nombre: 'DibujandoRayuelaRobotica',
    escena: 'Dibujando5CuadradosHorizontal',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'SaltarHaciaAdelante']
  }, {
    id: 31,
    nombre: 'DibujandoCortoPorLaDiagonal',
    escena: 'Dibujando5CuadradosDiagonal',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'SaltarHaciaAdelante']
  }, {
    id: 32,
    nombre: 'DibujandoMamushkaCuadrada',
    escena: 'Dibujando4CuadradosInteriores',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'SaltarHaciaAdelante']
  }, {
    id: 33,
    nombre: 'DibujandoEscaleraCuadrada',
    escena: 'DibujandoCabezaElefante',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'SaltarHaciaAdelante']
  }, {
    id: 34,
    nombre: 'DibujandoHexagono',
    escena: 'DibujandoHexagono',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica', 'SaltarHaciaAdelante']
  }, {
    id: 35,
    nombre: 'DibujandoPiramideInvertida',
    escena: 'DibujandoTrianguloEquilatero',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica', 'SaltarHaciaAdelante']
  }, {
    id: 36,
    nombre: 'DibujandoFigurasDentroDeFiguras',
    escena: 'DibujandoPoligonosInteriores',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica', 'SaltarHaciaAdelante']
  }, {
    id: 37,
    nombre: 'DibujandoLaCuevaDeEstalagtitas',
    escena: 'DibujandoCuevaEstalagtitas',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica', 'SaltarHaciaAdelante']
  }, {
    id: 130,
    nombre: 'LaFiestaDeDracula',
    escena: 'LaFiestaDeDracula',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'Numero', 'OpAritmetica', 'CambiarColor', 'SiguienteFoco', 'EmpezarFiesta']
  }, {
    id: 131,
    nombre: 'SalvandoLaNavidad',
    escena: 'SalvandoLaNavidad',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'MoverACasillaDerecha', 'DejarRegalo', 'SiguienteFilaTotal', 'Numero', 'OpAritmetica']
  }, {
    id: 132,
    nombre: 'PrendiendoLasCompusParametrizado',
    escena: 'PrendiendoLasCompus',
    deshabilitado: false,
    debeFelicitarse: true,
    bloques: ['ParaLaDerecha', 'ParaLaIzquierda', 'ParaArriba', 'ParaAbajo', 'MoverA', 'Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'PrenderComputadora', 'EstoyEnEsquina', 'Numero', 'OpAritmetica']
  }, {
    id: 133,
    nombre: 'TitoCuadrado',
    escena: 'TitoCuadrado',
    debeFelicitarse: true,
    bloques: ['ParaLaDerecha', 'ParaLaIzquierda', 'ParaArriba', 'ParaAbajo', 'MoverA', 'Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'TocandoLuz', 'EncenderLuz', 'Numero', 'OpAritmetica']
  }, {
    id: 134,
    nombre: 'ElCangrejoAguafiestas',
    escena: 'ElCangrejoAguafiestas',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'ParaLaDerecha', 'ParaLaIzquierda', 'ParaArriba', 'ParaAbajo', 'MoverA', 'ExplotarGlobo', 'Numero', 'OpAritmetica']
  }, {
    id: 135,
    nombre: 'PrendiendoLasFogatas',
    escena: 'PrendiendoLasFogatas',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'TocandoFogata', 'PrenderFogata', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'Numero', 'OpComparacion', 'OpAritmetica', 'ParaLaDerecha', 'ParaLaIzquierda', 'ParaArriba', 'ParaAbajo']
  }, {
    id: 136,
    nombre: 'DibujoLibre',
    imagen: 'DibujoLibre',
    escena: `new DibujandoLibremente()`,
    debeFelicitarse: false,
    bloques: ['Procedimiento', 'Repetir', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica', 'SaltarHaciaAdelante']
  }, {
    id: 201,
    nombre: '3.1.2a',
    escena: `new EscenaDuba("\
      [O,O,O,O,O,O],\
      [O,-,-,-,O,-],\
      [-,A,-,-,P,-],\
      [-,-,-,O,-,-],\
      [O,O,O,O,-,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 202,
    nombre: '3.1.2b',
    escena: `new EscenaDuba("\
        [O,O,O,O,O,O],\
        [O,O,O,O,O,O],\
        [O,-,O,-,P,O],\
        [O,-,A,-,O,O],\
        [O,O,-,O,O,O],\
        [O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 203,
    nombre: '3.1.2c',
    escena: `new EscenaDuba("\
      [O,O,O,O,O,O],\
      [O,O,O,O,O,O],\
      [O,A,O,-,-,O],\
      [O,-,-,-,P,O],\
      [O,-,O,-,-,O],\
      [O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 204,
    nombre: '3.1.2d',
    escena: `new EscenaDuba("\
      [O,O,O,O,O,O],\
      [O,-,A,O,O,O],\
      [O,O,-,O,O,O],\
      [O,O,-,-,-,O],\
      [O,O,O,P,-,O],\
      [O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 205,
    nombre: '3.1.2e',
    escena: `new EscenaDuba("\
      [O,O,O,O,O,O],\
      [O,O,-,O,-,O],\
      [O,-,A,-,-,O],\
      [O,-,-,O,-,O],\
      [O,O,-,-,P,O],\
      [O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 206,
    nombre: '3.1.2f',
    escena: `new EscenaDuba("\
      [O,O,O,O,O,O],\
      [O,-,-,-,-,O],\
      [O,-,O,P,-,O],\
      [O,A,O,-,O,O],\
      [O,O,O,O,O,O],\
      [O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 207,
    nombre: '3.1.3a',
    escena: `new EscenaCoty(
      [{x:125,y:75},{x:125,y:-175},{x:-25,y:-175},{x:-25,y:-75},{x:25,y:-75},{x:25,y:-175},{x:-125,y:-175},{x:-125,y:125},{x:-75,y:125},{x:-75,y:75},{x:-25,y:75},{x:-25,y:125},{x:25,y:125},{x:25,y:75}],
      [{x:25,y:75},{x:75,y:75},{x:75,y:125},{x:125,y:125},{x:125,y:75}],
      {xCoty: 25, yCoty: 75}
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando']
  }, {
    id: 208,
    nombre: '3.1.3b',
    escena: `new EscenaCoty(
      [{x:-50,y:25},{x:0,y:100},{x:50,y:25}],
      [{x:-50,y:25},{x:0,y:25},{x:50,y:25},{x:50,y:-25},{x:50,y:-75},{x:0,y:-75},{x:-50,y:-75},{x:-50,y:-25},{x:-50,y:25}],
      {xCoty: -50, yCoty: 25}
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando']
  }, {
    id: 209,
    nombre: '3.1.3c',
    escena: `new EscenaCoty(
      [],
      [[ {x:-125,y:0}, {x:-75,y:0}],[ {x:-25,y:0}, {x:25,y:0}],[ {x:75,y:0}, {x:125,y:0}]],
      {xCoty: 125, yCoty: 0}
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 210,
    nombre: '3.1.3d',
    escena: `new EscenaCotySonrisa()`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 211,
    nombre: '3.1.3e',
    escena: `new EscenaCoty(
      [[{x:-55,y:50},{x:-150,y:50},{x:-150,y:0},{x:-50,y:0}],[{x:-75,y:0},{x:-75,y:-100},{x:-125,y:-100},{x:-125,y:0}],[{x:-25,y:0},{x:25,y:0},{x:25,y:-100},{x:-25,y:-100},{x:-25,y:0}],[{x:125,y:0},{x:125,y:-100},{x:75,y:-100},{x:75,y:0}],[{x:50,y:0},{x:150,y:0},{x:150,y:50},{x:50,y:50}]],
      [{x:-50,y:0},{x:0,y:0},{x:50,y:0},{x:50,y:50},{x:0,y:50},{x:-50,y:50},{x:-50,y:0}],
      {xCoty: -50, yCoty: 100}      
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 212,
    nombre: '3.1.3f',
    escena: `new EscenaCotyCactus()`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 213,
    nombre: '3.1.3g',
    escena: `new EscenaCotyMate()`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 214,
    nombre: '3.1.4a',
    escena: `new EscenaLita("\
      [O,O,O,O,O,O],\
      [O,O,O,O,O,O],\
      [O,A,-,T,L,-],\
      [O,O,O,O,O,E],\
      [O,O,O,O,O,O],\
      [O,O,O,O,O,O]\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 215,
    nombre: '3.1.4b',
    escena: `new EscenaLita("\
      [O,O,O,O,O],\
      [O,O,O,O,O],\
      [-,-,T,-,-],\
      [-,-,L,-,-],\
      [A,O,O,O,E],\
      [O,O,O,O,O]\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 216,
    nombre: '3.2.2a',
    escena: `new EscenaLita("\
      [-,-,-],\
      [-,L,-],\
      [A,-,E],\
      [-,T,-]\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 217,
    nombre: '3.2.2b',
    escena: `new EscenaLita("\
      [-,-,-,-],\
      [-,L,T,-],\
      [A,-,-,E],\
      [-,-,-,-]\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 218,
    nombre: '3.2.2c',
    escena: `new EscenaLita("\
      [-,A,-],\
      [L,E,T],\
      [-,-,-],\
      [-,-,-]\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 219,
    nombre: '3.2.2d',
    escena: `new EscenaLita("\
      [-,-,A],\
      [-,L,T],\
      [-,-,E]\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 220,
    nombre: '3.2.3a',
    escena: `new EscenaDuba("\
      [O,O,O,O,O,O],\
      [O,P,O,-,-,O],\
      [O,-,O,-,-,-],\
      [O,-,-,-,O,A],\
      [O,O,O,O,O,O],\
      [O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
    <statement name="program">
      <block type="MoverACasillaArriba">
      <next>
      <block type="MoverACasillaIzquierda">
      <next>
      <block type="MoverACasillaIzquierda">
      <next>
      <block type="MoverACasillaAbajo">
      <next>
      <block type="MoverACasillaIzquierda">
      <next>
      <block type="MoverACasillaArriba">
      <next>
      <block type="MoverACasillaArriba">
      <next>
      <block type="ComerChurrasco">
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
    </statement>
    </block>
  </xml>`
  }, {
    id: 221,
    nombre: '3.2.3b',
    escena: `new EscenaDuba("\
        [O,O,O,O,O,O],\
        [O,-,-,O,O,O],\
        [O,-,P,O,O,O],\
        [O,-,-,O,O,O],\
        [O,-,-,-,A,O],\
        [O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
    <statement name="program">
      <block type="MoverACasillaIzquierda">
      <next>
      <block type="MoverACasillaArriba">
      <next>
      <block type="MoverACasillaArriba">
      <next>
      <block type="ComerChurrasco">
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
    </statement>
    </block>
  </xml>`
  }, {
    id: 222,
    nombre: '3.2.3c',
    escena: `new EscenaDuba("\
        [O,O,O,O,O,O],\
        [O,P,O,A,O,O],\
        [O,-,O,-,O,O],\
        [O,-,-,-,O,O],\
        [O,-,-,O,O,O],\
        [O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
    <statement name="program">
      <block type="MoverACasillaAbajo">
      <next>
      <block type="MoverACasillaAbajo">
      <next>
      <block type="MoverACasillaIzquierda">
      <next>
      <block type="MoverACasillaArriba">
      <next>
      <block type="ComerChurrasco">
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
    </statement>
    </block>
  </xml>`
  }, {
    id: 223,
    nombre: '3.2.3d',
    escena: `new EscenaDuba("\
        [O,O,O,O,O,O],\
        [O,O,-,-,-,O],\
        [O,-,P,-,-,O],\
        [O,-,O,O,O,O],\
        [O,-,-,A,-,O],\
        [O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
    <statement name="program">
      <block type="MoverACasillaIzquierda">
      <next>
      <block type="MoverACasillaIzquierda">
      <next>
      <block type="MoverACasillaIzquierda">
      <next>
      <block type="MoverACasillaArriba">
      <next>
      <block type="MoverACasillaArriba">
      <next>
      <block type="MoverACasillaDerecha">
      <next>
      <block type="ComerChurrasco">
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
    </statement>
    </block>
  </xml>`
  }, {
    id: 224,
    nombre: '3.2.3e',
    escena: `new EscenaLita("\
      [O,O,O,O,O,O,O],\
      [O,O,O,O,O,O,O],\
      [O,O,O,O,-,T,O],\
      [O,A,-,-,L,E,O],\
      [O,O,O,O,O,O,O],\
      [O,O,O,O,O,O,O]\
    ")`,
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
      <statement name="program">
        <block type="MoverACasillaDerecha">
        <next>
        <block type="MoverACasillaDerecha">
        <next>
        <block type="MoverACasillaDerecha">
        <next>
        <block type="AgarrarLechuga">
        <next>
        <block type="MoverACasillaArriba">
        <next>
        <block type="MoverACasillaDerecha">
        <next>
        <block type="MoverACasillaAbajo">
        <next>
        <block type="PrepararEnsalada">
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
      </statement>
      </block>
    </xml>`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 225,
    nombre: '3.I1a',
    escena: `new EscenaTotoLector([
        ['A', 'r', 'e'],
        ['t', 'o', 'j'],
        ['i', 't', 'o'],
    ], "toto")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha']
  }, {
    id: 226,
    nombre: '3.I1b',
    escena: `new EscenaTotoLector([
        ['r', 'h', 'j', 'a'],
        ['z', 'A', 'a', 'm'],
        ['y', 'l', 'l', 'q']
    ], "llama")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha']
  }, {
    id: 227,
    nombre: '3.I1c',
    escena: `new EscenaTotoLector([
        ['a', 'm', 'A'],
        ['f', 'u', 'p'],
        ['r', 'y', 'a'],
    ], "puma")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha']
  }, {
    id: 228,
    nombre: '3.I1d',
    escena: `new EscenaTotoLector([
        ['A', 'c', 'a', 'b'],
        ['o', 'l', 'l', 'e'],
    ], "caballo")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
      <statement name="program">
        <block type="MoverLeyendoDerecha">
        <next>
        <block type="MoverLeyendoDerecha">
        <next>
        <block type="MoverLeyendoDerecha">
        <next>
        <block type="MoverLeyendoAbajo">
        <next>
        <block type="MoverLeyendoIzquierda">
        <next>
        <block type="MoverLeyendoIzquierda">
        <next>
        <block type="MoverLeyendoIzquierda">
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
      </statement>
      </block>
    </xml>`
  }, {
    id: 229,
    nombre: '3.I1e',
    escena: `new EscenaTotoLector([
        ['w', 'a', 'r'],
        ['u', 'n', 'e'],
        ['l', 'A', 's'],
    ], "lunes", 7)`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
      <statement name="program">
        <block type="MoverLeyendoIzquierda">
        <next>
        <block type="MoverLeyendoArriba">
        <next>
        <block type="MoverLeyendoDerecha">
        <next>
        <block type="MoverLeyendoArriba">
        <next>
        <block type="MoverLeyendoDerecha">
        <next>
        <block type="MoverLeyendoAbajo">
        <next>
        <block type="MoverLeyendoAbajo">
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
      </statement>
      </block>
    </xml>`
  }, {
    id: 230,
    nombre: '4.1.3a',
    escena: `new EscenaDuba("\
        [-,O,O,O,-,-,-,-],\
        [-,O,O,O,O,-,-,-],\
        [O,O,-,O,O,-,-,-],\
        [O,O,-,-,-,-,-,-],\
        [A,-,-,-,-,-,-,P],\
        [-,-,O,-,O,-,-,-],\
        [-,-,O,O,O,O,O,O],\
        [-,-,-,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir']
  }, {
    id: 231,
    nombre: '4.1.3b',
    escena: `new EscenaDuba("\
        [O,O,-,O,O,-,-,-],\
        [O,P,-,O,O,-,-,-],\
        [O,-,-,O,-,-,-,-],\
        [O,-,O,O,-,-,-,-],\
        [O,-,O,O,O,-,-,-],\
        [-,-,O,O,O,O,-,-],\
        [-,-,O,O,O,O,O,O],\
        [-,-,A,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir']
  }, {
    id: 232,
    nombre: '4.1.3c',
    escena: `new EscenaDuba("\
      [-,-,-,O,O,-,-,O],\
      [O,O,-,O,-,-,-,O],\
      [A,O,O,O,-,-,O,O],\
      [-,O,O,O,O,O,O,O],\
      [-,O,O,O,-,O,O,O],\
      [-,-,-,-,-,-,P,O],\
      [O,O,-,O,O,O,O,O],\
      [O,O,-,-,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir']
  }, {
    id: 233,
    nombre: '4.1.4a',
    escena: `new EscenaCoty(
      [],
      [[{x:-130,y:20},{x:-90,y:20}], [{x:-50,y:20},{x:-10,y:20}], [{x:30,y:20},{x:70,y:20}], [{x:110,y:20},{x:150,y:20}]],
      {xCoty: -130, yCoty: 20, longitudSegmento: 40}     
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir']
  }, {
    id: 234,
    nombre: '4.1.4b',
    escena: `new EscenaCoty(
      [],
      [[{x:-130,y:20},{x:-90,y:20}], [{x:-50,y:20},{x:-10,y:20}], [{x:30,y:20},{x:70,y:20}], [{x:110,y:20},{x:150,y:20},{x:150,y:-20}]],
      {xCoty: -130, yCoty: 20, longitudSegmento: 40}      
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir']
  }, {
    id: 235,
    nombre: '4.1.4c',
    escena: `new EscenaCoty(
      [],
      [[{x:-120,y:-60},{x:-120,y:-20},{x:-80,y:-20},{x:-40,y:-20},{x:-40,y:20},{x:0,y:20},{x:40,y:20},{x:40,y:60},{x:80,y:60},{x:120,y:60}]],
      {xCoty: -120, yCoty: -60, longitudSegmento: 40}
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir']
  }, {
    id: 236,
    nombre: '4.2.3a',
    escena: `new EscenaDuba("\
      [-,-,-,-,O,O,O,O],\
      [-,-,-,-,-,-,-,O],\
      [-,-,-,-,-,-,-,-],\
      [-,P,-,-,-,-,-,-],\
      [-,-,-,-,-,O,A,-],\
      [-,-,-,-,O,O,O,O],\
      [O,O,O,O,O,O,O,O],\
      [O,O,O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
    <statement name="program">
      <block type="MoverACasillaArriba">
      <next>
      <block type="Repetir">
        <value name="count">
          <block type="math_number">
            <field name="NUM">4</field>
          </block>
        </value>
        <statement name="block">
          <block type="MoverACasillaIzquierda">
          </block>
        </statement>
      <next>
      <block type="ComerChurrasco">
      </block>
      </next>
      </block>
      </next>
      </block>
    </statement>
    </block>
  </xml>`
  }, {
    id: 237,
    nombre: '4.2.3b',
    escena: `new EscenaDuba("\
      [O,-,-,-,O,O,O,O],\
      [-,A,-,-,-,-,O,-],\
      [O,O,-,-,-,-,-,-],\
      [O,O,O,-,-,-,-,-],\
      [O,O,O,-,-,-,-,-],\
      [O,O,O,O,O,-,P,-],\
      [O,O,O,O,O,O,O,O],\
      [O,O,O,O,O,O,O,O],\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
    <statement name="program">
      <block type="Repetir">
        <value name="count">
          <block type="math_number">
            <field name="NUM">5</field>
          </block>
        </value>
        <statement name="block">
          <block type="MoverACasillaDerecha">
          <next>
          <block type="MoverACasillaAbajo">
          </block>
          </next>
          </block>
        </statement>
      <next>
      <block type="ComerChurrasco">
      </block>
      </next>
      </block>
    </statement>
    </block>
  </xml>`
  }, {
    id: 238,
    nombre: '4.2.3c',
    escena: `new EscenaCoty(
      [],
      [[{x:-100,y:-100},{x:-100,y:-50},{x:-50,y:-50},{x:-50,y:0},{x:0,y:0},{x:0,y:50},{x:50,y:50},{x:50,y:100},{x:100,y:100}]],
      {xCoty: -100, yCoty: -100}      
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="al_empezar_a_ejecutar" deletable="false" movable="false" editable="false" x="15" y="15">
        <statement name="program">
          <block type="Repetir">
            <value name="count">
              <block type="math_number">
                <field name="NUM">4</field>
              </block>
            </value>
            <statement name="block">
              <block type="MoverArribaDibujando"></block>
            </statement>
            <next>
              <block type="Repetir">
                <value name="count">
                  <block type="math_number">
                    <field name="NUM">4</field>
                  </block>
                </value>
                <statement name="block">
                  <block type="MoverDerechaDibujando"></block>
                </statement>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </xml>`
  }, {
    id: 239,
    nombre: '4.2.3d',
    escena: `new EscenaCoty(
      [],
      [[{x:-120,y:-60},{x:-120,y:-20},{x:-80,y:-20},{x:-80,y:20},{x:-40,y:20},{x:-40,y:60},{x:0,y:60},{x:40,y:60},{x:40,y:20},{x:80,y:20},{x:80,y:-20},{x:120,y:-20},{x:120,y:-60}]],
      {xCoty: -120, yCoty: -60, longitudSegmento: 40}      
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="al_empezar_a_ejecutar" deletable="false" movable="false" editable="false" x="15" y="15">
        <statement name="program">
          <block type="Repetir">
            <value name="count">
              <block type="math_number">
                <field name="NUM">2</field>
              </block>
            </value>
            <statement name="block">
              <block type="MoverArribaDibujando">
                <next>
                  <block type="MoverDerechaDibujando"></block>
                </next>
              </block>
            </statement>
            <next>
              <block type="Repetir">
                <value name="count">
                  <block type="math_number">
                    <field name="NUM">3</field>
                  </block>
                </value>
                <statement name="block">
                  <block type="MoverDerechaDibujando"></block>
                </statement>
                <next>
                  <block type="Repetir">
                    <value name="count">
                      <block type="math_number">
                        <field name="NUM">3</field>
                      </block>
                    </value>
                    <statement name="block">
                      <block type="MoverAbajoDibujando"></block>
                    </statement>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </xml>`
  }, {
    id: 240,
    nombre: '4.I1a',
    escena: `new EscenaLita("\
      [O,-,-,-,O,-,A],\
      [-,-,-,O,O,-,O],\
      [O,O,O,O,-,-,O],\
      [O,O,O,O,-,O,O],\
      [O,-,O,-,-,O,O],\
      [-,-,O,-,O,O,O],\
      [E,L,T,-,O,O,O]\
    ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir']
  }, {
    id: 241,
    nombre: '4.I1b',
    escena: `new EscenaLita("\
      [L,-,-,-,-,T,E],\
      [-,O,-,-,O,-,O],\
      [-,O,O,O,O,-,O],\
      [-,O,O,O,-,-,O],\
      [-,-,-,O,-,-,-],\
      [A,-,-,-,-,-,-],\
      [-,O,O,-,-,O,O]\
    ")`,
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
      <statement name="program">
        <block type="Repetir">
          <value name="count">
            <block type="math_number">
              <field name="NUM">4</field>
            </block>
          </value>
          <statement name="block">
            <block type="MoverACasillaArriba">
            </block>
          </statement>
        <next>
        <block type="AgarrarLechuga">
        <next>
        <block type="Repetir">
          <value name="count">
            <block type="math_number">
              <field name="NUM">5</field>
            </block>
          </value>
          <statement name="block">
            <block type="MoverACasillaDerecha">
            <next>
            <block type="AgarrarTomate">
            </block>
            </next>
            </block>
          </statement>
        <next>
        <block type="MoverACasillaDerecha">
        <next>
        <block type="PrepararEnsalada">
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
      </statement>
      </block>
    </xml>`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir']
  }, {
    id: 242,
    nombre: '5.1.3a',
    escena: `new EscenaDuba("[A,P?(0.6)]", {}, [0,1])`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Si', 'HayChurrasco']
  }, {
    id: 243,
    nombre: '5.1.3b',
    escena: `new EscenaDuba(["[A,-,-]","[A,P,-]","[A,-,P]","[A,P,P]"], {}, [0,2])`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Si', 'HayChurrasco']
  }, {
    id: 244,
    nombre: '5.1.3c',
    escena: `new EscenaCoty(
      [],
      [{x:-120,y:50},{x:20,y:50},{x:20,y:-90},{x:-120,y:-90},{x:-120,y:50}],
      {xCoty: -120, yCoty: 50, puedeHaberCharco: true, longitudSegmento: 140}
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Si', 'HayCharco']
  }, {
    id: 245,
    nombre: '5.1.4a',
    escena: `new EscenaLita("[A,-,L|T]")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Si', 'SiNo', 'HayTomate', 'HayLechuga']
  }, {
    id: 246,
    nombre: '5.1.4b',
    escena: `new EscenaDuba(["\
      [O,O,O,O,O],\
      [O,A,-,P,O],\
      [O,O,O,O,O],\
      [O,O,O,O,O],\
      [O,O,O,O,O],\
    ","\
      [O,O,O,O,O],\
      [O,A,O,O,O],\
      [O,-,O,O,O],\
      [O,P,O,O,O],\
      [O,O,O,O,O],\
    "])`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Si', 'SiNo', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 247,
    nombre: '5.1.4c',
    escena: `new EscenaDuba("\
      [O,O,O,O,O],\
      [-,-,*,-,-],\
      [A,-,*,-,P],\
      [O,O,O,O,O],\
    ", { coleccion: ["O"] })`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Si', 'SiNo', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 248,
    nombre: '5.2.1a',
    escena: `new EscenaDuba("[A,-,-,-,-,-,-,P?]", {}, [0,7])`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir', 'Si', 'SiNo', 'HayChurrasco']
  }, {
    id: 249,
    nombre: '5.2.1b',
    escena: `new EscenaDuba("[A,#P,#P,#P,#P,#P,#P,#P]", { macros: { "P": "*>P?" }, coleccion: ["P"] }, [0,7])`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir', 'Si', 'SiNo', 'HayChurrasco']
  }, {
    id: 250,
    nombre: '5.2.1c',
    escena: `new EscenaLita("[A],[*>L|T],[*>L|T],[*>L|T],[*>L|T],[*>L|T],[*>L|T],[E]", { coleccion: ["T", "L"] })`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir', 'Si', 'SiNo', 'HayTomate', 'HayLechuga']
  }, {
    id: 251,
    nombre: '5.I1a',
    escena: `new EscenaTotoEscritor(new ObjetivoCopiar())`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'EscribirLetraActualEnOtraCuadricula', 'Repetir', 'Si', 'SiNo']
  }, {
    id: 252,
    nombre: '5.I1b',
    escena: `new EscenaTotoEscritor(new ObjetivoX())`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'EscribirLetraActualEnOtraCuadricula', 'EscribirTextoDadoEnOtraCuadricula', 'Repetir', 'Si', 'SiNo']
  }, {
    id: 253,
    nombre: '5.I1c',
    escena: `new EscenaTotoEscritor(new ObjetivoMicha())`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'EscribirLetraActualEnOtraCuadricula', 'EscribirTextoDadoEnOtraCuadricula', 'Repetir', 'Si', 'SiNo', 'hayVocalRMT']
  }, {
    id: 254,
    nombre: '5.I1d',
    escena: `new EscenaTotoEscritor(new ObjetivoJeringozo())`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'EscribirLetraActualEnOtraCuadricula', 'EscribirTextoDadoEnOtraCuadricula', 'Repetir', 'Si', 'SiNo', 'hayVocalRMT']
  }, {
    id: 255,
    nombre: 'CotyDibujoLibre',
    imagen: 'Coty',
    escena: `new EscenaCoty([],[],{xCoty: -50, yCoty: 50})`,
    debeFelicitarse: false,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica']
  }, //Tecnopolis
  {
    id: 202101,
    nombre: 'tecnopolis2021Modelo',
    imagen: 'Duba',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco'],
    escena: `new EscenaDuba("\
    [A,-,-,-,-,-],\
    [O,-,-,-,-,-],\
    [-,O,P,-,-,-],\
    [-,-,O,-,-,-],\
    [-,-,-,-,-,-],\
    [-,-,-,-,-,-],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    solucionInicial: `<xml xmlns=\"http://www.w3.org/1999/xhtml\">
    <variables></variables>
    <block type=\"al_empezar_a_ejecutar\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"269\" y=\"15\">
      <statement name=\"program\">
        <shadow type=\"required_statement\"></shadow>
        <block type=\"MoverACasillaDerecha\">
          <next>
            <block type=\"MoverACasillaDerecha\">
              <next>
                <block type=\"MoverACasillaDerecha\">
                  <next>
                    <block type=\"MoverACasillaAbajo\">
                      <next>
                        <block type=\"ComerChurrasco\"></block>
                      </next>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </next>
        </block>
      </statement>
    </block>
  </xml>`
  }, {
    id: 202102,
    nombre: 'tecnopolis2021ModeloRepeticion',
    imagen: 'Duba',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    escena: `new EscenaDuba("\
    [A,-,-,-,-,-],\
    [O,-,-,-,-,-],\
    [-,O,P,-,-,-],\
    [-,-,O,-,-,-],\
    [-,-,-,-,-,-],\
    [-,-,-,-,-,-],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    solucionInicial: `<xml xmlns=\"http://www.w3.org/1999/xhtml\">
    <variables></variables>
    <block type=\"al_empezar_a_ejecutar\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">
      <statement name=\"program\">
        <shadow type=\"required_statement\"></shadow>
        <block type=\"repetir\">
          <value name=\"count\">
            <shadow type=\"required_value\"></shadow>
            <block type=\"math_number\">
              <field name=\"NUM\">3</field>
            </block>
          </value>
          <statement name=\"block\">
            <shadow type=\"required_statement\"></shadow>
            <block type=\"MoverACasillaDerecha\"></block>
          </statement>
          <next>
            <block type=\"MoverACasillaAbajo\">
              <next>
                <block type=\"ComerChurrasco\"></block>
              </next>
            </block>
          </next>
        </block>
      </statement>
    </block>
  </xml>`
  }, //Duba
  {
    id: 2021001,
    nombre: 'tecnopolis2021DubaNivel1',
    imagen: 'Duba',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    escena: `new EscenaDuba("\
    [A,-,-,-,-,-],\
    [-,-,-,-,-,-],\
    [-,-,O,O,-,-],\
    [-,-,O,O,-,P],\
    [-,-,-,-,-,P],\
    [-,-,-,-,-,-],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021002,
    nombre: 'tecnopolis2021DubaNivel2',
    imagen: 'Duba',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    escena: `new EscenaDuba("\
    [A,-,-,-,-,-],\
    [O,-,-,-,-,-],\
    [-,O,-,-,-,-],\
    [-,-,O,-,-,-],\
    [-,-,-,O,-,-],\
    [-,-,-,-,O,P],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021003,
    nombre: 'tecnopolis2021DubaNivel3',
    imagen: 'Duba',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    escena: `new EscenaDuba("\
    [A,-,-,-,-,-],\
    [O,O,O,O,O,-],\
    [-,-,-,-,-,-],\
    [-,-,-,-,-,-],\
    [-,-,-,-,O,O],\
    [-,-,-,-,-,P],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021004,
    nombre: 'tecnopolis2021DubaNivel4',
    imagen: 'Duba',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    escena: `new EscenaDuba("\
    [A,-,-,-,-,-],\
    [-,P,-,-,-,-],\
    [-,-,P,-,-,-],\
    [-,-,-,P,-,-],\
    [-,-,-,-,P,-],\
    [-,-,-,-,-,-],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021005,
    nombre: 'tecnopolis2021DubaNivel5',
    imagen: 'Duba',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    escena: `new EscenaDuba("\
    [A,-,-,-,-,P],\
    [-,O,O,O,O,-],\
    [-,-,-,-,O,-],\
    [O,O,-,-,O,-],\
    [-,O,O,-,-,-],\
    [-,-,O,-,-,P],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021006,
    nombre: 'tecnopolis2021DubaNivel6',
    imagen: 'Duba',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    escena: `new EscenaDuba("\
    [A,-,-,-,-,-],\
    [-,O,P,O,P,O],\
    [-,O,P,O,P,O],\
    [-,O,P,O,P,O],\
    [-,O,P,O,P,O],\
    [-,O,P,-,P,O],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021007,
    nombre: 'tecnopolis2021DubaNivel7',
    imagen: 'Duba',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    escena: `new EscenaDuba("\
    [A,-,-,-,-,O],\
    [-,O,O,O,-,O],\
    [-,O,P,O,-,O],\
    [-,O,-,-,-,O],\
    [-,O,O,O,O,O],\
    [-,-,-,-,-,-],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021008,
    nombre: 'tecnopolis2021DubaNivel8',
    imagen: 'Duba',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    escena: `new EscenaDuba("\
    [A,-,-,-,-,-],\
    [O,O,-,-,O,O],\
    [-,O,-,-,O,-],\
    [-,-,-,-,-,-],\
    [O,O,-,-,O,O],\
    [P,-,-,-,-,P],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, //Lita
  {
    id: 2021101,
    nombre: 'tecnopolis2021LitaNivel1',
    imagen: 'Lita',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir'],
    escena: `new EscenaLita("\
    [A,-,-,-,-,-],\
    [-,-,-,-,-,-],\
    [-,-,O,O,-,-],\
    [-,-,O,O,-,-],\
    [-,-,-,-,-,E],\
    [L,-,-,-,-,T],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021102,
    nombre: 'tecnopolis2021LitaNivel2',
    imagen: 'Lita',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir'],
    escena: `new EscenaLita("\
    [A,-,-,-,-,-],\
    [O,-,-,-,-,-],\
    [-,O,-,L,-,-],\
    [-,-,O,T,L,-],\
    [-,-,-,O,T,-],\
    [-,-,-,-,O,E],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021103,
    nombre: 'tecnopolis2021LitaNivel3',
    imagen: 'Lita',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir'],
    escena: `new EscenaLita("\
    [A,-,-,-,-,T],\
    [O,O,O,O,O,-],\
    [-,-,-,-,-,-],\
    [-,-,-,-,-,L],\
    [-,-,-,-,O,O],\
    [-,-,-,-,-,E],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021104,
    nombre: 'tecnopolis2021LitaNivel4',
    imagen: 'Lita',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir'],
    escena: `new EscenaLita("\
    [A,L,-,-,-,-],\
    [-,T,L,-,-,-],\
    [-,-,T,L,-,-],\
    [-,-,-,T,L,-],\
    [-,-,-,-,T,-],\
    [-,-,-,-,-,E],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021105,
    nombre: 'tecnopolis2021LitaNivel5',
    imagen: 'Lita',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir'],
    escena: `new EscenaLita("\
    [A,T,T,T,T,T],\
    [-,O,O,O,O,L],\
    [-,-,-,-,O,L],\
    [O,O,-,-,O,L],\
    [-,O,O,-,O,L],\
    [-,-,O,E,-,L],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021106,
    nombre: 'tecnopolis2021LitaNivel6',
    imagen: 'Lita',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir'],
    escena: `new EscenaLita("\
    [A,-,L,-,-,E],\
    [-,O,L,O,T,O],\
    [-,O,L,O,T,O],\
    [-,O,L,O,T,O],\
    [-,O,L,O,T,O],\
    [-,O,-,-,T,O],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021107,
    nombre: 'tecnopolis2021LitaNivel7',
    imagen: 'Lita',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir'],
    escena: `new EscenaLita("\
    [A,L,L,L,L,O],\
    [-,O,O,O,-,O],\
    [-,O,E,O,-,O],\
    [-,O,-,T,T,O],\
    [-,O,O,O,O,O],\
    [-,-,-,-,-,-],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, {
    id: 2021108,
    nombre: 'tecnopolis2021LitaNivel8',
    imagen: 'Lita',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir'],
    escena: `new EscenaLita("\
    [A,-,L,-,-,-],\
    [O,O,-,-,O,O],\
    [-,O,-,-,O,-],\
    [-,-,-,-,-,-],\
    [O,O,-,-,O,O],\
    [T,-,-,-,-,E],\
  ")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias'
  }, //Coty
  {
    id: 2021201,
    //Copy of 207
    nombre: 'tecnopolis2021CotyNivel1',
    imagen: 'Coty',
    escena: `new EscenaCoty(
      [{x:125,y:75},{x:125,y:-175},{x:-25,y:-175},{x:-25,y:-75},{x:25,y:-75},{x:25,y:-175},{x:-125,y:-175},{x:-125,y:125},{x:-75,y:125},{x:-75,y:75},{x:-25,y:75},{x:-25,y:125},{x:25,y:125},{x:25,y:75}],
      [{x:25,y:75},{x:75,y:75},{x:75,y:125},{x:125,y:125},{x:125,y:75}],
      {xCoty: 25, yCoty: 75}
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando']
  }, {
    id: 2021202,
    //Copy of 209
    nombre: 'tecnopolis2021CotyNivel2',
    imagen: 'Coty',
    escena: `new EscenaCoty(
      [],
      [[ {x:-125,y:0}, {x:-75,y:0}],[ {x:-25,y:0}, {x:25,y:0}],[ {x:75,y:0}, {x:125,y:0}]],
      {xCoty: 125, yCoty: 0}
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 2021203,
    //Copy of 213
    nombre: 'tecnopolis2021CotyNivel3',
    imagen: 'Coty',
    escena: `new EscenaCotyMate()`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 2021204,
    //Copy of 233
    nombre: 'tecnopolis2021CotyNivel4',
    imagen: 'Coty',
    escena: `new EscenaCoty(
      [],
      [[{x:-130,y:20},{x:-90,y:20}], [{x:-50,y:20},{x:-10,y:20}], [{x:30,y:20},{x:70,y:20}], [{x:110,y:20},{x:150,y:20}]],
      {xCoty: -130, yCoty: 20, longitudSegmento: 40}     
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir']
  }, {
    id: 2021205,
    //Copy of 235
    nombre: 'tecnopolis2021CotyNivel5',
    imagen: 'Coty',
    escena: `new EscenaCoty(
      [],
      [[{x:-120,y:-60},{x:-120,y:-20},{x:-80,y:-20},{x:-40,y:-20},{x:-40,y:20},{x:0,y:20},{x:40,y:20},{x:40,y:60},{x:80,y:60},{x:120,y:60}]],
      {xCoty: -120, yCoty: -60, longitudSegmento: 40}
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir']
  }, {
    id: 2021206,
    nombre: 'tecnopolis2021CotyNivel6',
    imagen: 'Coty',
    escena: `new EscenaCoty(
      [[{x:-104,y:12},{x:-78,y:12}],[{x:-104,y:12},{x:-104,y:-30}],[{x:-104,y:-9},{x:-78,y:-9}],[{x:-104,y:-30},{x:-78,y:-30}],[{x:-70,y:12},{x:-44,y:12}],[{x:-70,y:12},{x:-70,y:-30},{x:-44,y:-30}],[{x:-36,y:12},{x:-36,y:-30}],[{x:-36,y:12},{x:-30,y:4},{x:-28,y:0},{x:-19,y:-12},{x:-17,y:-16},{x:-14,y:-19},{x:-8,y:-27}],[{x:-10,y:12},{x:-10,y:-30}],[{x:-2,y:12},{x:24,y:12}],[{x:-2,y:12},{x:-2,y:-30}],[{x:24,y:12},{x:24,y:-30}],[{x:-2,y:-30},{x:24,y:-30}],[{x:32,y:12},{x:58,y:12}],[{x:32,y:12},{x:32,y:-30}],[{x:32,y:-9},{x:58,y:-9}],[{x:58,y:12},{x:58,y:-12}],[{x:66,y:12},{x:92,y:12}],[{x:66,y:12},{x:66,y:-30}],[{x:92,y:12},{x:92,y:-30}],[{x:66,y:-30},{x:92,y:-30}],[{x:100,y:12},{x:100,y:-30},{x:126,y:-30}],[{x:142,y:12},{x:142,y:-30}],[{x:150,y:12},{x:176,y:12}],[{x:150,y:12},{x:150,y:-12}],[{x:150,y:-9},{x:176,y:-9},{x:176,y:-33}],[{x:150,y:-30},{x:176,y:-30}]],
      [[{x:-180,y:70},{x:-80,y:70}],[{x:-130,y:70},{x:-130,y:-30}]],
      {xCoty: -130, yCoty: 70}
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir']
  }, {
    id: 2021207,
    nombre: 'tecnopolis2021CotyNivel7',
    imagen: 'Coty',
    escena: `new EscenaCoty(
      [],
      [[{x:-150,y:0},{x:-150,y:50},{x:-100,y:50},{x:-100,y:0}],[{x:-100,y:-50},{x:-50,y:-50}],[{x:-50,y:0},{x:-50,y:50},{x:0,y:50},{x:0,y:0}],[{x:0,y:-50},{x:50,y:-50}],[{x:50,y:0},{x:50,y:50},{x:100,y:50},{x:100,y:0}],[{x:100,y:-50},{x:150,y:-50}]],
      {xCoty: -150, yCoty: 0}
    )`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir']
  }, //Toto
  {
    id: 2021301,
    //Copy of 225
    nombre: 'tecnopolis2021TotoNivel1',
    imagen: 'Toto',
    escena: `new EscenaTotoLector([
        ['A', 'r', 'e'],
        ['t', 'o', 'j'],
        ['i', 't', 'o'],
    ], "toto")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha']
  }, {
    id: 2021302,
    //Copy of 226
    nombre: 'tecnopolis2021TotoNivel2',
    imagen: 'Toto',
    escena: `new EscenaTotoLector([
        ['r', 'h', 'j', 'a'],
        ['z', 'A', 'a', 'm'],
        ['y', 'l', 'l', 'q']
    ], "llama")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha']
  }, {
    id: 2021303,
    //Copy of 227
    nombre: 'tecnopolis2021TotoNivel3',
    imagen: 'Toto',
    escena: `new EscenaTotoLector([
        ['a', 'm', 'A'],
        ['f', 'u', 'p'],
        ['r', 'y', 'a'],
    ], "puma")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha']
  }, {
    id: 2021304,
    //Copy of 229
    nombre: 'tecnopolis2021TotoNivel4',
    imagen: 'Toto',
    escena: `new EscenaTotoLector([
        ['w', 'a', 'r'],
        ['u', 'n', 'e'],
        ['l', 'A', 's'],
    ], "lunes", 7)`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha'],
    debugging: true,
    solucionInicial: `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
      <statement name="program">
        <block type="MoverLeyendoIzquierda">
        <next>
        <block type="MoverLeyendoArriba">
        <next>
        <block type="MoverLeyendoDerecha">
        <next>
        <block type="MoverLeyendoArriba">
        <next>
        <block type="MoverLeyendoDerecha">
        <next>
        <block type="MoverLeyendoAbajo">
        <next>
        <block type="MoverLeyendoAbajo">
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
        </next>
        </block>
      </statement>
      </block>
    </xml>`
  }, {
    id: 2021305,
    nombre: 'tecnopolis2021TotoNivel5',
    imagen: 'Toto',
    escena: `new EscenaTotoLector([
        ['A','t', 'e', 'l', 'j'],
        ['i','s', 'c', 'n', 'o'],
        ['l','o', 'p', 'o', 'v'],
    ], "tecnopolis")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha']
  }, {
    id: 2021306,
    nombre: 'tecnopolis2021TotoNivel6',
    imagen: 'Toto',
    escena: `new EscenaTotoLector([
        ['d','A','o'],
        ['z','n','a'],
        ['g','e','c'],
        ['r','u','d'],
        ['w','q','t'],
        ['x','u','a'],
        ['j','e','r'],
        ['y','n','v']
    ], "neuquen")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha', 'Repetir']
  }, {
    id: 2021307,
    nombre: 'tecnopolis2021TotoNivel7',
    imagen: 'Toto',
    escena: `new EscenaTotoLector([
        ['d','A','o'],
        ['z','n','a'],
        ['g','e','c'],
        ['r','u','d'],
        ['w','q','t'],
    ], "neuquen")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha', 'Repetir']
  }, {
    id: 2021308,
    nombre: 'tecnopolis2021TotoNivel8',
    imagen: 'Toto',
    escena: `new EscenaTotoLector([
      ['t','a','q','m','e','v','o','g','r','a','u'],
      ['n','A','s','a','n','t','a','c','r','u','a'],
      ['f','d','i','u','v','r','e','o','h','z','d'],
    ], "santacruz")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha', 'Repetir']
  }, {
    id: 2021309,
    nombre: 'tecnopolis2021TotoNivel9',
    imagen: 'Toto',
    escena: `new EscenaTotoLector([
      ['f','d','h','w','t'],
      ['e','a','z','b','u'],
      ['r','x','h','u','y'],
      ['t','A','c','i','k'],
    ], "chubut")`,
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha', 'Repetir'],
    debugging: true,
    solucionInicial: `<xml xmlns=\"http://www.w3.org/1999/xhtml\">
    <variables></variables>
    <block type=\"al_empezar_a_ejecutar\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"269\" y=\"15\">
      <statement name=\"program\">
        <shadow type=\"required_statement\"></shadow>
        <block type=\"repetir\">
          <value name=\"count\">
            <shadow type=\"required_value\"></shadow>
            <block type=\"math_number\">
              <field name=\"NUM\">3</field>
            </block>
          </value>
          <statement name=\"block\">
            <shadow type=\"required_statement\"></shadow>
            <block type=\"MoverLeyendoArriba\">
              <next>
                <block type=\"MoverLeyendoDerecha\"></block>
              </next>
            </block>
          </statement>
        </block>
      </statement>
    </block>
  </xml>`
  }];
  _exports.default = _default;
});
;define("pilasbloques/mirage/fixtures/grupos", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = [{
    id: 'AlienTocaBoton',
    desafioIds: [1]
  }, {
    id: 'ElGatoEnLaCalle',
    desafioIds: [2]
  }, {
    id: 'NoMeCansoDeSaltar',
    desafioIds: [3]
  }, {
    id: 'ElMarcianoEnElDesierto',
    desafioIds: [4]
  }, {
    id: 'TitoEnciendeLuces',
    desafioIds: [5]
  }, {
    id: 'ElAlienYLasTuercas',
    desafioIds: [6]
  }, {
    id: 'ElRecolectorDeEstrellas',
    desafioIds: [7]
  }, {
    id: 'MariaLaComeSandias',
    desafioIds: [8]
  }, {
    id: 'AlimentandoALosPeces',
    desafioIds: [9]
  }, {
    id: 'InstalandoJuegos',
    desafioIds: [10]
  }, {
    id: 'LaGranAventuraDelMarEncantado',
    desafioIds: [11]
  }, {
    id: 'ReparandoLaNave',
    desafioIds: [12]
  }, {
    id: 'ElMonoYLasBananas',
    desafioIds: [13]
  }, {
    id: 'LaEleccionDelMono',
    desafioIds: [14]
  }, {
    id: 'LaberintoCorto',
    desafioIds: [15]
  }, {
    id: 'TresNaranjas',
    desafioIds: [16]
  }, {
    id: 'TitoRecargado',
    desafioIds: [17]
  }, {
    id: 'LaberintoLargo',
    desafioIds: [18]
  }, {
    id: 'SuperTito1',
    desafioIds: [19]
  }, {
    id: 'SuperTito2',
    desafioIds: [20]
  }, {
    id: 'LaberintoConQueso',
    desafioIds: [21]
  }, {
    id: 'ElDetectiveChaparro',
    desafioIds: [22]
  }, {
    id: 'FutbolRobots',
    desafioIds: [23]
  }, {
    id: 'PrendiendoLasCompus',
    desafioIds: [24]
  }, {
    id: 'ElMonoQueSabeContar',
    desafioIds: [25]
  }, {
    id: 'ElSuperviaje',
    desafioIds: [26]
  }, {
    id: 'ElMonoCuentaDeNuevo',
    desafioIds: [27]
  }, {
    id: 'ElPlanetaDeNano',
    desafioIds: [28]
  }, {
    id: 'Dibujando Figuras',
    desafioIds: [29, 30, 31, 32, 33, 34, 35, 36, 37]
  }, {
    id: 'LaFiestaDeDracula',
    desafioIds: [130]
  }, {
    id: 'SalvandoLaNavidad',
    desafioIds: [131]
  }, {
    id: 'PrendiendoLasCompusParametrizado',
    desafioIds: [132]
  }, {
    id: 'TitoCuadrado',
    desafioIds: [133]
  }, {
    id: 'ElCangrejoAguafiestas',
    desafioIds: [134]
  }, {
    id: 'PrendiendoLasFogatas',
    desafioIds: [135]
  }, {
    id: 'DibujoLibre',
    desafioIds: [136]
  }, {
    id: 'manual1cPrimaria3.1.2',
    desafioIds: [201, 202, 203, 204, 205, 206]
  }, {
    id: 'manual1cPrimaria3.1.3',
    desafioIds: [207, 208, 209, 210, 211, 212, 213]
  }, {
    id: 'manual1cPrimaria3.1.4',
    desafioIds: [214, 215]
  }, {
    id: 'manual1cPrimaria3.2.2',
    desafioIds: [216, 217, 218, 219]
  }, {
    id: 'manual1cPrimaria3.2.3',
    desafioIds: [220, 221, 222, 223, 224]
  }, {
    id: 'manual1cPrimaria3.I',
    desafioIds: [225, 226, 227, 228, 229]
  }, {
    id: 'manual1cPrimaria4.1.3',
    desafioIds: [230, 231, 232]
  }, {
    id: 'manual1cPrimaria4.1.4',
    desafioIds: [233, 234, 235]
  }, {
    id: 'manual1cPrimaria4.2.3',
    desafioIds: [236, 237, 238, 239]
  }, {
    id: 'manual1cPrimaria4.I',
    desafioIds: [240, 241]
  }, {
    id: 'manual1cPrimaria5.1.3',
    desafioIds: [242, 243, 244]
  }, {
    id: 'manual1cPrimaria5.1.4',
    desafioIds: [245, 246, 247]
  }, {
    id: 'manual1cPrimaria5.2.1',
    desafioIds: [248, 249, 250]
  }, {
    id: 'manual1cPrimaria5.I',
    desafioIds: [251, 252, 253, 254]
  }, {
    id: 'manual1cPrimariaOtros',
    desafioIds: [255]
  }, {
    id: 'tecnopolis2021EjercicioModelo',
    desafioIds: [202101, 202102]
  }, {
    id: 'tecnopolis2021ConDuba',
    desafioIds: [2021001, 2021002, 2021003, 2021004, 2021005, 2021006, 2021007, 2021008]
  }, {
    id: 'tecnopolis2021ConLita',
    desafioIds: [2021101, 2021102, 2021103, 2021104, 2021105, 2021106, 2021107, 2021108]
  }, {
    id: 'tecnopolis2021ConCoty',
    desafioIds: [2021201, 2021202, 2021203, 2021204, 2021205, 2021206, 2021207, 255]
  }, {
    id: 'tecnopolis2021ConToto',
    desafioIds: [2021301, 2021302, 2021303, 2021304, 2021305, 2021306, 2021307, 2021308, 2021309]
  }];
  _exports.default = _default;
});
;define("pilasbloques/mirage/fixtures/libros", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = [{
    id: 1,
    capituloIds: ['Capítulo 3', 'Capítulo 4', 'Capítulo 5'],
    imagen: 'primer-ciclo.png',
    modoLecturaSimple: true // modo de lectura para niños pequeños.

  }, {
    id: 2,
    capituloIds: ['Autómatas, comandos, procedimientos y repetición', 'Alternativa condicional', 'Repetición condicional', 'Sensores Numéricos', 'Parametrización de soluciones'],
    imagen: 'programar.png',
    modoLecturaSimple: false
  }, {
    id: 100,
    capituloIds: ['Tecnopolis 2021 Ejercicio Modelo', 'Tecnopolis 2021 Con Duba', 'Tecnopolis 2021 Con Lita', 'Tecnopolis 2021 Con Coty', 'Tecnopolis 2021 Con Toto'],
    imagen: 'tecnopolis.png',
    modoLecturaSimple: true
  }];
  _exports.default = _default;
});
;define("pilasbloques/mirage/models/capitulo", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = _emberCliMirage.Model.extend({
    grupos: (0, _emberCliMirage.hasMany)('grupo'),
    libro: (0, _emberCliMirage.belongsTo)('libro')
  });

  _exports.default = _default;
});
;define("pilasbloques/mirage/models/desafio", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = _emberCliMirage.Model.extend({
    grupo: (0, _emberCliMirage.belongsTo)('grupo')
  });

  _exports.default = _default;
});
;define("pilasbloques/mirage/models/grupo", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = _emberCliMirage.Model.extend({
    desafios: (0, _emberCliMirage.hasMany)('desafio'),
    capitulo: (0, _emberCliMirage.belongsTo)('capitulo')
  });

  _exports.default = _default;
});
;define("pilasbloques/mirage/models/libro", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = _emberCliMirage.Model.extend({
    capitulos: (0, _emberCliMirage.hasMany)('capitulo')
  });

  _exports.default = _default;
});
;define("pilasbloques/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  /*jshint esversion: 6 */
  function _default(server) {
    server.loadFixtures();
  }
});
;define("pilasbloques/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = _emberCliMirage.JSONAPISerializer.extend({
    include: ['libros', 'capitulos', 'grupos', 'desafios']
  });

  _exports.default = _default;
});
;define("pilasbloques/mixins/transition-mixin", ["exports", "ember-css-transitions/mixins/transition-mixin"], function (_exports, _transitionMixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transitionMixin.default;
    }
  });
});
;define("pilasbloques/models/capitulo", ["exports", "ember-data/model", "ember-data/relationships"], function (_exports, _model, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _model.default.extend({
    intl: Ember.inject.service(),
    titulo: Ember.computed('id', function () {
      return this.intl.t(`model.chapters.${this.id}.title`).toString();
    }),
    grupos: (0, _relationships.hasMany)('grupo'),
    libro: (0, _relationships.belongsTo)('libro')
  });

  _exports.default = _default;
});
;define("pilasbloques/models/desafio", ["exports", "ember-data/model", "ember-data/attr", "ember-data/relationships"], function (_exports, _model, _attr, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.xmlBloqueEmpezarAEjecutar = _exports.default = void 0;
  const xmlBloqueEmpezarAEjecutar = `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="al_empezar_a_ejecutar" x="15" y="15"></block>
  </xml>`;
  _exports.xmlBloqueEmpezarAEjecutar = xmlBloqueEmpezarAEjecutar;

  var _default = _model.default.extend({
    intl: Ember.inject.service(),
    titulo: Ember.computed('id', function () {
      return `${this.intl.t(`model.challenges.${this.id}.title`)}`;
    }),
    enunciado: Ember.computed('id', function () {
      return `${this.intl.t(`model.challenges.${this.id}.description`)}`;
    }),
    consignaInicial: Ember.computed('id', function () {
      return `${this.intl.t(`model.challenges.${this.id}.clue`)}`;
    }),
    nombre: (0, _attr.default)('string'),
    imagen: (0, _attr.default)('string'),
    deshabilitado: (0, _attr.default)('boolean'),
    escena: (0, _attr.default)('string'),
    debeFelicitarse: (0, _attr.default)(),
    estiloToolbox: (0, _attr.default)('string', {
      defaultValue: "desplegable"
    }),
    grupo: (0, _relationships.belongsTo)('grupo'),
    bloques: (0, _attr.default)(),
    solucionInicial: (0, _attr.default)('string'),
    debugging: (0, _attr.default)('boolean'),
    nombreImagen: Ember.computed('imagen', 'nombre', function () {
      return `${this.imagen || this.nombre || 'proximamente'}.png`;
    }),
    initialWorkspace: Ember.computed("solucionInicial", function () {
      return this.solucionInicial || xmlBloqueEmpezarAEjecutar;
    }),
    indexInGroup: Ember.computed('grupo', function () {
      const groupChallenges = this.grupo.get('desafios').toArray();
      return groupChallenges.findIndex(challenge => challenge.id === this.id);
    }),
    nextChallenge: Ember.computed('grupo', function () {
      const groupChallenges = this.grupo.get('desafios').toArray();
      return groupChallenges[this.indexInGroup + 1];
    }),
    previousChallenge: Ember.computed('grupo', function () {
      const groupChallenges = this.grupo.get('desafios').toArray();
      return groupChallenges[this.indexInGroup - 1];
    })
  });

  _exports.default = _default;
});
;define("pilasbloques/models/grupo", ["exports", "ember-data/model", "ember-data/relationships"], function (_exports, _model, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _model.default.extend({
    intl: Ember.inject.service(),
    titulo: Ember.computed('id', function () {
      return this.intl.t(`model.groups.${this.id}.title`).toString();
    }),
    desafios: (0, _relationships.hasMany)('desafio'),
    capitulo: (0, _relationships.belongsTo)('capitulo')
  });

  _exports.default = _default;
});
;define("pilasbloques/models/libro", ["exports", "ember-data/model", "ember-data/attr", "ember-data/relationships"], function (_exports, _model, _attr, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _model.default.extend({
    intl: Ember.inject.service(),
    titulo: Ember.computed('id', function () {
      return this.intl.t(`model.books.${this.id}.title`);
    }),
    descripcion: Ember.computed('id', function () {
      return this.intl.t(`model.books.${this.id}.description`);
    }),
    imagen: (0, _attr.default)('string'),
    modoLecturaSimple: (0, _attr.default)('boolean'),
    oculto: (0, _attr.default)('boolean'),
    capitulos: (0, _relationships.hasMany)('capitulo')
  });

  _exports.default = _default;
});
;define("pilasbloques/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("pilasbloques/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("pilasbloques/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("pilasbloques/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("pilasbloques/router", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType
  });
  Router.map(function () {
    this.route('acercade');
    this.route('challengue-creator');
    this.route('desafio', {
      path: '/desafio/:desafio_id'
    });
    /* Estas rutas están en los primeros cuadernillos impresos, deben seguir existiendo. */

    this.route('desafios', function () {
      this.route('desafioPorNombre', {
        path: '/:nombreDelDesafio'
      });
    });
    this.route('libros', function () {
      this.route('verLibro', {
        path: ":libro_id"
      });
    });
    this.route('galeria');
    this.route('register');
    this.route('password-recovery');
    this.route('clear');
  });
  Router.reopen({
    notifyGoogleAnalytics: Ember.on("didTransition", function () {
      if (ga && _environment.default.googleAnalyticsEnabled) {
        let url = this.url;
        ga('send', 'pageview', {
          page: url,
          title: url
        });
      }
    })
  });
  var _default = Router;
  _exports.default = _default;
});
;define("pilasbloques/routes/acercade", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("pilasbloques/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    storage: Ember.inject.service(),
    intl: Ember.inject.service(),

    beforeModel() {
      const selectedLocale = this.storage.getSelectedLocale();
      this.get('intl').setLocale(selectedLocale || 'es-ar');
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/routes/creator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("pilasbloques/routes/desafio", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    queryParams: {
      codigo: {
        replace: true
      }
    },
    pilas: Ember.inject.service(),

    model(param) {
      this.store.findAll("libro");
      return this.store.findRecord('desafio', param.desafio_id);
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/routes/desafios/desafio-por-nombre", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      return this.store.findAll("desafio").then(data => {
        // TODO: reemplazar la linea anterior (findAll) y la siguiente
        //       por una consulta a ember-data más específica, como la que
        //       realiza findRecord, que solo debería traer un solo registro.
        //
        //       (esto está así ahora porque se debe corregir mirage antes).
        let model = data.findBy('nombre', params.nombreDelDesafio);

        if (!model) {
          throw new Error(`No existe una actividad con el nombre ${params.nombreDelDesafio}`);
        }

        return this.transitionTo("desafio", model);
      });
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/routes/desafios/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('grupo');
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/routes/galeria", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    blockly: Ember.inject.service(),
    blocksGallery: Ember.inject.service(),

    activate() {
      this.blocksGallery.start();
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    beforeModel() {
      this.transitionTo('libros');
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/routes/libros/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    async model() {
      const books = await this.store.findAll('libro');
      const orderedBooks = books.toArray().sort((book1, book2) => parseInt(book1.get('id')) > parseInt(book2.get('id')));
      return orderedBooks;
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("pilasbloques/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("pilasbloques/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("pilasbloques/serializers/application", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("pilasbloques/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("pilasbloques/services/available-blocks-validator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /// Este service deshabilita los bloques que no estén disponibles para una actividad
  var _default = Ember.Service.extend({
    intl: Ember.inject.service(),
    globalAvailableBlockTypes: ["al_empezar_a_ejecutar", "numero", "required_value", "required_statement"],
    procedureRelatedBlockTypes: ["procedures_defnoreturn", "procedures_callnoreturn", "variables_get", "param_get"],

    disableNotAvailableBlocksInWorkspace(activityBlocks) {
      Blockly.getMainWorkspace().getAllBlocks().filter(block => !this._isAvailable(block, activityBlocks)).forEach(block => this._disable(block));
    },

    _isAvailable(block, activityBlocks) {
      return this._match(this.globalAvailableBlockTypes, block) || this._match(activityBlocks, block) || this._match(this.procedureRelatedBlockTypes, block) && this._includes(activityBlocks, "procedimiento");
    },

    _match(availableBlockTypes, currentBlock) {
      let aliases = currentBlock.aliases || [];
      return this._includes(availableBlockTypes, currentBlock.type) || aliases.some(alias => this._includes(availableBlockTypes, alias));
    },

    _includes(availableBlockTypes, type) {
      return availableBlockTypes.map(name => name.toLowerCase()).includes(type.toLowerCase());
    },

    _disable(block) {
      block.setDisabled(true);
      block.setWarningText(this.intl.t('blocks.errors.nonAvailableBlock').string);
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/avatardb", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const AVATAR_COUNT = 16;
  const AVATAR_PATH = "imagenes/avatars/";

  var _default = Ember.Service.extend({
    avatars: Array.from(Array(AVATAR_COUNT).keys()).map(n => `avatar-${n + 1}.png`),

    allAvatars() {
      return this.avatars.map(this.urlFor);
    },

    urlFor(avatar) {
      return AVATAR_PATH + avatar;
    },

    randomAvatar() {
      const avatars = this.allAvatars();
      return avatars[Math.floor(Math.random() * avatars.length)];
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/block-utils", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getBlockSiblings = getBlockSiblings;
  _exports.getChild = getChild;
  _exports.getName = getName;
  _exports.getParams = getParams;
  _exports.hasParam = hasParam;
  _exports.isFlying = isFlying;
  _exports.isInsideProcedureDef = isInsideProcedureDef;
  _exports.isOperator = isOperator;
  _exports.isProcedureCall = isProcedureCall;
  _exports.isValue = isValue;
  _exports.requiredAllInputs = requiredAllInputs;

  function isFlying(block) {
    return block.getRootBlock() === block;
  } // TODO: No acoplarse a la categoria


  function isOperator(block) {
    return block.categoryId == "operators";
  }

  function isValue(block) {
    return block.categoryId == "values";
  }

  function isProcedureCall(block) {
    return !!block.defType_;
  }

  function isInsideProcedureDef(paramBlock) {
    return paramBlock.getRootBlock().id === paramBlock.$parent;
  }

  function hasParam(procedureBlock, paramBlock) {
    return getParams(procedureBlock).includes(paramBlock.getFieldValue('VAR'));
  }

  function getName(procedureBlock) {
    return procedureBlock.getProcedureDef()[0];
  }

  function getParams(procedureBlock) {
    return procedureBlock.getProcedureDef()[1];
  }

  function getBlockSiblings(block) {
    const siblings = [];

    while (block.getNextBlock()) {
      block = block.getNextBlock();
      siblings.push(block);
    }

    return siblings;
  }

  function getChild(block) {
    return block.getChildren()[0];
  } // Agrega un required shadow a todos los input que sean para encastrar otros bloques


  function requiredAllInputs(block) {
    block.inputList.filter(input => input.connection && shouldAddRequiredShadow(input.connection)).forEach(input => requiredInput(block, input.name));
  }

  function shouldAddRequiredShadow(connection) {
    return connection.getShadowDom() == null // Should have not a shadow block
    && [Blockly.INPUT_VALUE, Blockly.NEXT_STATEMENT].includes(connection.type); // Should be a "block hole"
  }

  function requiredInput(block, inputName) {
    let connection = block.getInput(inputName).connection;
    let shadowType = connection.type == Blockly.INPUT_VALUE ? "required_value" : "required_statement";
    var shadowValue = Blockly.Xml.textToDom(`<shadow type="${shadowType}"></shadow>`);
    connection.setShadowDom(shadowValue);
    if (!connection.targetConnection) connection.respawnShadow_();
  }
});
;define("pilasbloques/services/blockly", ["exports", "ember-blockly/services/blockly"], function (_exports, _blockly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _blockly.default;
    }
  });
});
;define("pilasbloques/services/blocks-gallery", ["exports", "pilasbloques/services/block-utils"], function (_exports, _blockUtils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    blockly: Ember.inject.service(),
    intl: Ember.inject.service(),

    start() {
      //START TODO: Move these definitions to another file
      Blockly.textToBlock = this._textToBlock;
      Blockly.isProcedure = this._isProcedure;
      Blockly.shouldExecute = this._shouldExecute.bind(this);
      Blockly.aliases = this._aliases;
      Blockly.Events.fireRunCode = this._fireRunCodeEvent; //END TODO

      this._generarLenguaje();

      this._definirColores();

      this._definirBloquesIniciales();

      this._definirBloquesAccion();

      this._definirBloquesSensores();

      this._definirBloquesQueRepresentanValores();

      this._definirBloquesEstructurasDeControl();

      this._definirBloquesAlias();

      this._definirOperaciones(); // Should be after alias


      this._makeAllInputsRequired();
    },

    _textToBlock(text) {
      return Blockly.Xml.domToBlock(Blockly.Xml.textToDom(text), Blockly.mainWorkspace);
    },

    _fireRunCodeEvent() {
      let event = Blockly.Events.fromJson({
        type: "ui",
        run: true
      }, Blockly.mainWorkspace);
      event.runCode = true;
      Blockly.Events.fire(event);
    },

    _shouldExecute(block) {
      return block.allInputsFilled(false) || this._isEmptyProcedure(block);
    },

    _aliases(type) {
      return Blockly.Blocks[type].aliases || [];
    },

    _isProcedure(type) {
      return type == "procedures_defnoreturn";
    },

    _isEmptyProcedure(block) {
      return Blockly.isProcedure(block.type) && this._hasEmptyStatement(block);
    },

    _hasEmptyStatement(procedureBlock) {
      let statement = procedureBlock.getInputTargetBlock("STACK");
      return !statement || statement.isShadow();
    },

    _makeAllInputsRequired() {
      Object.entries(Blockly.Blocks).filter(_ref => {
        let [type, _] = _ref;
        return !Blockly.isProcedure(type);
      }) // jshint ignore:line
      .map(_ref2 => {
        let [_, block] = _ref2;
        return block;
      }) // jshint ignore:line
      .forEach(blockDef => {
        let oldInit = blockDef.init;

        blockDef.init = function () {
          if (oldInit) oldInit.bind(this)();
          (0, _blockUtils.requiredAllInputs)(this);
        };
      });
    },

    /*
     * Método auxiliar para crear un bloque acción.
     *
     * El argumento 'opciones' tiene que definir estas propiedades:
     *
     *   - descripcion
     *   - icono
     *   - comportamiento
     *   - argumentos
     *
     */
    crearBloqueAccion(nombre, intlID, opciones) {
      this._validar_opciones_obligatorias(nombre, opciones, ['comportamiento', 'argumentos']);

      opciones.colour = opciones.colour || Blockly.Blocks.primitivas.COLOUR;
      opciones.descripcion = opciones.descripcion || this.t(intlID);
      let bloque = this.blockly.createCustomBlockWithHelper(nombre, opciones);
      bloque.categoryId = "primitives";
      return bloque;
    },

    /*
     * Método auxiliar para crear un bloque nuevo a partir de otro original.
     *
     * Este método sirve para crear bloques como 'Si', 'Repetir' etc... ya que
     * esos bloques en realidad se generan a partir de los bloques estándar
     * como 'controls_if'.
     */
    crearBloqueAlias(nombre, nombreDelBloqueOriginal, categoria, categoriaCustom) {
      if (!Blockly.Blocks[nombreDelBloqueOriginal]) {
        throw new Error(`No existe el bloque ${nombreDelBloqueOriginal} al querer crear un alias, ¿Tal vez los argumentos están invertidos?`);
      }

      let bloque = this.blockly.createAlias(nombre, nombreDelBloqueOriginal);
      bloque.categoryId = categoria || Blockly.Blocks[nombreDelBloqueOriginal].categoryId;

      if (categoriaCustom) {
        bloque.categoria_custom = categoriaCustom;
      }

      return bloque;
    },

    areAliases(alias, type) {
      return Blockly.aliases(type).includes(alias);
    },

    /*
     * Método auxiliar para crear un bloque que sirva como sensor.
     *
     * El argumento 'opciones' tiene que definir estas propiedades:
     *
     *   - descripcion
     *   - icono
     *   - funcionSensor
     *
     */
    crearBloqueSensor(nombre, intlID, opciones) {
      this._validar_opciones_obligatorias(nombre, opciones, ['funcionSensor']);

      opciones.descripcion = opciones.descripcion || this.t(intlID);
      var formaDelBloque = opciones.icono ? "%1 " : "";
      formaDelBloque += opciones.descripcion;
      let blockly = this.blockly;
      let bloque = blockly.createCustomBlock(nombre, {
        message0: formaDelBloque,
        colour: opciones.colour || Blockly.Blocks.sensores.COLOUR,
        inputsInline: true,
        output: null,
        args0: [{
          type: "field_image",
          src: `iconos/${opciones.icono}`,
          width: 16,
          height: 16,
          alt: "*"
        }],
        code: ``
      }); // TODO: Arreglar generacion de codigo

      bloque.categoryId = "sensors";

      Blockly.MyLanguage[nombre] = function () {
        let codigo = `evaluar(${JSON.stringify(opciones.funcionSensor)})`;
        return [codigo, Blockly.MyLanguage.ORDER_ATOMIC];
      };

      return bloque;
    },

    /*
     * Returns an object with a 'string' attribute. E.g. { string: "When the program runs" }
     */
    t(id) {
      return this.intl.t(`blocks.${id}`);
    },

    tString(id) {
      return this.t(id).toString();
    },

    crearBloqueValor(nombre, intlID, opciones) {
      this._validar_opciones_obligatorias(nombre, opciones, ['icono', 'valor']);

      opciones.colour = opciones.colour || Blockly.Blocks.primitivas.COLOUR;
      opciones.descripcion = opciones.descripcion || this.t(intlID);
      let bloque = this.blockly.createBlockValue(nombre, opciones);
      bloque.categoryId = "values";
      return bloque;
    },

    /*
     * Lanza una exception si un diccionario no presenta alguna clave obligatoria.
     */
    _validar_opciones_obligatorias(nombre, opciones, listaDeOpcionesObligatorias) {
      listaDeOpcionesObligatorias.forEach(opcion => {
        if (!(opcion in opciones)) {
          throw new Error(`No se puede crear el bloque ${nombre} porque no se indicó un valor para la opción ${opcion}.`);
        }
      });
    },

    defineBlocklyTranslations() {
      Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = this.tString("procedures.name");
      Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = this.tString("procedures.definition");
      Blockly.Msg.PROCEDURES_BEFORE_PARAMS = this.tString("procedures.paramWith");
      Blockly.Msg.PROCEDURES_PARAMETER = this.tString("procedures.paramName");
      Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = this.tString("procedures.paramWith");
      Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = this.tString("procedures.create");
      Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = this.tString("procedures.comment");
      Blockly.Msg.PROCEDURES_DEFNORETURN_NOPARAMS = this.tString("procedures.noParams");
      Blockly.Msg.PROCEDURES_ADD_PARAMETER = this.tString("procedures.addParam");
      Blockly.Msg.PROCEDURES_ADD_PARAMETER_PROMPT = this.tString("procedures.addParamPrompt");
      Blockly.Msg.PROCEDURES_REMOVE_PARAMETER = this.tString("procedures.removeParam");
      Blockly.Msg.PROCEDURES_CREATE_DO = this.tString("contextMenu.createProcedure");
      Blockly.Msg.ADD_COMMENT = this.tString("contextMenu.addComment");
      Blockly.Msg.REMOVE_COMMENT = this.tString("contextMenu.removeComment");
      Blockly.Msg.DUPLICATE_BLOCK = this.tString("contextMenu.duplicate");
      Blockly.Msg.HELP = this.tString("contextMenu.help");
      Blockly.Msg.DELETE_BLOCK = this.tString("contextMenu.deleteOne");
      Blockly.Msg.DELETE_X_BLOCKS = this.tString("contextMenu.deleteMany");
      Blockly.Msg.DISABLE_BLOCK = this.tString("contextMenu.disable");
      Blockly.Msg.ENABLE_BLOCK = this.tString("contextMenu.enable");
      Blockly.Msg.UNDO = this.tString("contextMenu.undo");
      Blockly.Msg.REDO = this.tString("contextMenu.redo");
      Blockly.Msg.CLEAN_UP = this.tString("contextMenu.cleanUp");
      Blockly.Msg.EXTERNAL_INPUTS = this.tString("contextMenu.externalInputs"); // ProcedsBlockly.init() needs all procedure blocks to work, so we need to put them back
      // After calling init(), we disable unwanted toolbox blocks again

      this._enableUnwantedProcedureBlocks();

      ProcedsBlockly.init();

      this._disableUnwantedProcedureBlocks();
    },

    _disableUnwantedProcedureBlocks() {
      ['procedures_defreturn', 'procedures_ifreturn'].forEach(blockType => {
        if (Blockly.Blocks[blockType]) {
          Blockly['bkp_' + blockType] = Blockly.Blocks[blockType];
          delete Blockly.Blocks[blockType];
        }
      });
    },

    _enableUnwantedProcedureBlocks() {
      ['procedures_defreturn', 'procedures_ifreturn'].forEach(blockType => {
        if (Blockly['bkp_' + blockType]) Blockly.Blocks[blockType] = Blockly['bkp_' + blockType];
      });
    },

    _definirColores() {
      // Pisar las globales de Blockly es necesario pues usamos algunos bloques de Blockly como aliases.
      Blockly.Blocks.math.HUE = 94; // En PB 1.1.2 era '#48930e'

      Blockly.Blocks.logic.HUE = 210; // En PB 1.1.2 era '#5cb712'

      Blockly.Blocks.procedures.HUE = 290; // En PB 1.1.2 era '#6C52EB'

      Blockly.Blocks.variables.HUE = 330; // En PB 1.1.2 era '#cc5b22'

      Blockly.Blocks.texts.HUE = 160; // En PB 1.1.2 era '#4a6cd4'

      Blockly.Blocks.lists.HUE = 206; // En PB 1.1.2 era '#cc5b22'
      // Para los bloques propios

      Blockly.Blocks.primitivas = {
        COLOUR: '#4a6cd4'
      };
      Blockly.Blocks.control = {
        COLOUR: '#ee7d16'
      };
      Blockly.Blocks.sensores = {
        COLOUR: '#2ca5e2'
      };
      Blockly.Blocks.direcciones = {
        COLOUR: '#2ba4e2'
      };
      Blockly.Blocks.eventos = {
        COLOUR: '#00a65a'
      }; // == boton ejecutar
      // IN SCRATCH THE COLOURS ARE
      // 4a6cd4 MOTION
      // 8a55d7 LOOKS
      // bb42c3 SOUND
      // 0e9a6c PEN
      // ee7d16 DATA Variables
      // cc5b22 DATA Lists
      // c88330 EVENTS
      // e1a91a CONTROL
      // 2ca5e2 SENSING
      // 5cb712 OPERATORS
      // 49930e OPERATORS dark
      // 632d99 MORE BLOCKS
      // 5e4db3 PARAMS
    },

    _definirBloquesAccion() {
      this.crearBloqueAccion('ApretarBoton', 'pushButton', {
        icono: 'iconos.botonRojo.png',
        comportamiento: 'Interactuar',
        argumentos: `{
        etiqueta: 'BotonAnimado',
        nombreAnimacion: 'apretar',
        animacionInteractuadoAlFinal: 'prendida',
        mensajeError: 'No hay un botón aquí',
        idTransicion: 'apretarBoton'
      }`
      });
      this.crearBloqueAccion('EncenderLuz', 'turnOnTheLight', {
        icono: 'icono.Lamparita.png',
        comportamiento: 'Encender',
        argumentos: "{'etiqueta':'Luz'}"
      });
      this.crearBloqueAccion('ComerBanana', 'eatBanana', {
        icono: 'icono.banana.png',
        comportamiento: 'Recolectar',
        argumentos: `{etiqueta: 'BananaAnimada', nombreAnimacion: "comerBanana"}`
      });
      this.crearBloqueAccion('ComerManzana', 'eatApple', {
        icono: 'icono.manzana.png',
        comportamiento: 'Recolectar',
        argumentos: `{etiqueta: 'ManzanaAnimada', nombreAnimacion: "comerManzana"}`
      });
      this.crearBloqueAccion('ComerQueso', 'eatCheese', {
        icono: 'queso.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta: "QuesoAnimado"}'
      });
      this.crearBloqueAccion('ComerNaranja', 'eatOrange', {
        icono: 'naranja.png',
        comportamiento: 'Recolectar',
        argumentos: '{\'etiqueta\' : \'NaranjaAnimada\',  nombreAnimacion: "comerNaranja"}'
      });
      this.crearBloqueAccion('MoverACasillaDerecha', 'moveRight', {
        icono: 'icono.derecha.png',
        comportamiento: 'MoverACasillaDerecha',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverACasillaIzquierda', 'moveLeft', {
        icono: 'icono.izquierda.png',
        comportamiento: 'MoverACasillaIzquierda',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverACasillaArriba', 'moveUp', {
        icono: 'icono.arriba.png',
        comportamiento: 'MoverACasillaArriba',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverACasillaAbajo', 'moveDown', {
        icono: 'icono.abajo.png',
        comportamiento: 'MoverACasillaAbajo',
        argumentos: '{}'
      });
      this.crearBloqueAccion('LevantaTuerca', 'pickNut', {
        icono: 'tuerca.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta: "TuercaAnimada", mensajeError: "No hay tuerca aquí", pasos: 50}'
      });
      this.crearBloqueAccion('Saludar', 'greet', {
        icono: 'icono.saludar.png',
        comportamiento: 'ComportamientoAnimado',
        argumentos: '{nombreAnimacion: "saludando", idTransicion: "saludar"}'
      });
      this.crearBloqueAccion('AbrirOjos', 'openEyes', {
        icono: 'icono.abrirOjos.png',
        comportamiento: 'AnimarSiNoEstoyYa',
        argumentos: '{nombreAnimacion: "abrirOjos", valorEstar: "con los ojos abiertos", descripcionEstar: "estadoOjos", nombreAnimacionSiguiente: "parado", arrancoAsi:true, idTransicion: "abrirOjos"}'
      });
      this.crearBloqueAccion('CerrarOjos', 'closeEyes', {
        icono: 'icono.cerrarOjos.png',
        comportamiento: 'AnimarSiNoEstoyYa',
        argumentos: '{nombreAnimacion: "cerrarOjos", valorEstar: "con los ojos cerrados", descripcionEstar: "estadoOjos", nombreAnimacionSiguiente: "ojosCerrados", idTransicion: "cerrarOjos"}'
      });
      this.crearBloqueAccion('Acostarse', 'lie', {
        icono: 'icono.acostarse.png',
        comportamiento: 'ModificarRotacionYAltura',
        argumentos: '{alturaIr: -180 ,rotacionIr: 90, nombreAnimacion:"acostado", valorEstar: "acostado", descripcionEstar: "posicionCuerpo", idTransicion: "acostarse"}'
      });
      this.crearBloqueAccion('Pararse', 'standUp', {
        icono: 'icono.pararse.png',
        comportamiento: 'ModificarRotacionYAltura',
        argumentos: '{alturaIr: -150 ,rotacionIr: 0, nombreAnimacion:"acostado", valorEstar: "parado", descripcionEstar: "posicionCuerpo", arrancoAsi:true, idTransicion: "levantarse"}'
      });
      this.crearBloqueAccion('Volver', 'return', {
        icono: 'icono.izquierda.png',
        comportamiento: 'MovimientoAnimado',
        argumentos: '{direccion: [-1,0], distancia: 50, idTransicion: "volver"}'
      });
      this.crearBloqueAccion('Avanzar', 'advance', {
        icono: 'icono.derecha.png',
        comportamiento: 'MovimientoAnimado',
        argumentos: '{direccion: [1,0], distancia: 50, idTransicion: "avanzar"}'
      });
      this.crearBloqueAccion('Soniar', 'dream', {
        icono: 'icono.soniar.png',
        comportamiento: 'Pensar',
        argumentos: '{mensaje: "ZZzzZzZ...", hayQueAnimar: false, idTransicion: "soniar"}'
      });
      this.crearBloqueAccion('SaltarHablando', 'jump', {
        icono: 'icono.arriba.png',
        comportamiento: 'SaltarHablando',
        argumentos: `{
        velocidad_inicial: 30,
        alturaDeseada: 150,
        cantPasos: 20,
        velocidad: 50
      }`
      });
      this.crearBloqueAccion('VolverABordeIzquierdo', 'goToLeftBorder', {
        icono: 'icono.izquierdaTope.png',
        comportamiento: 'MoverTodoAIzquierda',
        argumentos: '{}'
      });
      this.crearBloqueAccion('TomarEstrella', 'takeStar', {
        icono: 'icono.estrella.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta: "EstrellaAnimada", "mensajeError": "Acá no hay una estrella"}'
      });
      this.crearBloqueAccion('MorderSandia', 'eatWatermelon', {
        icono: 'icono.sandia.png',
        comportamiento: 'Recolectar',
        argumentos: '{\'etiqueta\':\'SandiaAnimada\', \'mensajeError\': \'Acá no hay una sandia\'}'
      });
      this.crearBloqueAccion('AlimentarPez', 'feedFish', {
        icono: 'icono.pez.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta: "PezAnimado", idTransicion: "alimentarPez"}'
      });
      this.crearBloqueAccion('AgarrarComida', 'pickFood', {
        icono: 'icono.alimento_pez.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta: "AlimentoAnimado", idTransicion: "recogerComida"}'
      });
      this.crearBloqueAccion('PasarASiguienteComputadora', 'nextComputer', {
        icono: 'icono.derecha.png',
        comportamiento: 'MoverACasillaDerecha',
        argumentos: '{}'
      });
      this.crearBloqueAccion('PrenderComputadora', 'turnComputerOn', {
        icono: 'icono.turn_on.svg',
        comportamiento: 'PrenderComputadora',
        argumentos: '{}'
      });
      this.crearBloqueAccion('ApagarComputadora', 'turnComputerOff', {
        icono: 'icono.turn_off.svg',
        comportamiento: 'ApagarComputadora',
        argumentos: '{}'
      });
      this.crearBloqueAccion('InstalarJuego', 'installGame', {
        icono: 'icono.installation.svg',
        comportamiento: 'InstalarJuegoEnComputadora',
        argumentos: '{}'
      });
      this.crearBloqueAccion('EscribirA', 'writeA', {
        icono: 'icono.letter-a.svg',
        comportamiento: 'EscribirEnComputadora',
        argumentos: '{idTransicion: "escribirA"}'
      });
      this.crearBloqueAccion('EscribirB', 'writeB', {
        icono: 'icono.letter-b.svg',
        comportamiento: 'EscribirEnComputadora',
        argumentos: '{idTransicion: "escribirB"}'
      });
      this.crearBloqueAccion('EscribirC', 'writeC', {
        icono: 'icono.letter-c.svg',
        comportamiento: 'EscribirEnComputadora',
        argumentos: '{idTransicion : "escribirC"}'
      });
      this.crearBloqueAccion('AgarrarLlave', 'takeKey', {
        icono: 'icono.llave.png',
        comportamiento: 'Sostener',
        argumentos: `{
        etiqueta: "LlaveAnimado",
        idTransicion: "agarrarLlave"
      }`
      });
      this.crearBloqueAccion('AbrirCofre', 'openSafeBoxTakeHat', {
        icono: 'icono.cofreConSombrero.png',
        comportamiento: 'Soltar',
        argumentos: `{
        etiqueta: "CofreAnimado",
        queSoltar: "LlaveAnimado",
        animacionInteractuadoAlFinal: "abrir",
        idTransicion: "abrirCofre"
      }`
      });
      this.crearBloqueAccion('DarSombrero', 'leaveHat', {
        icono: 'icono.sombrero.png',
        comportamiento: 'Interactuar',
        argumentos: `{
        etiqueta: "MagoAnimado",
        nombreAnimacion: "cambiarSombreroPorEspada",
        animacionInteractuadoMientras: "darEspada",
        idTransicion: "darSombrero"
      }`
      });
      this.crearBloqueAccion('AtacarConEspada', 'attackWithSword', {
        id: 'Atacarconespada',
        icono: 'icono.espada.png',
        comportamiento: 'SecuenciaAnimada',
        argumentos: `{
        idTransicion: "atacarConEspada",
        secuencia: [
          {
            comportamiento: "Interactuar",
            argumentos: {
              etiqueta: "CaballeroAnimado",
              animacionInteractuadoMientras: "defender",
              nombreAnimacion:"atacar"
            }
          },
          {
            comportamiento: "Sostener",
            argumentos: {
              etiqueta:"Principe"
            }
          }
        ]
      }`
      });
      this.crearBloqueAccion('EscaparEnUnicornio', 'unicornEscape', {
        icono: 'icono.unicornio.png',
        comportamiento: 'Escapar',
        argumentos: `{
        escaparCon: "unicornio"
      }`
      });
      this.crearBloqueAccion('Escapar', 'escape', {
        icono: 'icono.escapar.png',
        comportamiento: 'Escapar',
        argumentos: `{
        receptor: "nave",
        escaparCon: "automata"
      }`
      });
      this.crearBloqueAccion('TomarHierro', 'pickIron', {
        icono: 'icono.hierro.png',
        comportamiento: 'Sostener',
        argumentos: `{
        etiqueta: "HierroAnimado",
        nombreAnimacion: "recogerHierro"
      }`
      });
      this.crearBloqueAccion('TomarCarbon', 'pickCarbon', {
        id: 'TomarCarbon',
        icono: 'icono.carbon.png',
        comportamiento: 'Sostener',
        argumentos: `{
        etiqueta: "CarbonAnimado",
        nombreAnimacion: "recogerCarbon"
      }`
      });
      this.crearBloqueAccion('PrenderFogata', 'lightCampfire', {
        icono: 'icono.FogataPrendida.png',
        comportamiento: 'Interactuar',
        argumentos: `{
        etiqueta: "FogataAnimada",
        nombreAnimacion: "prender",
        animacionInteractuadoAlFinal: "prendida"
      }`
      });
      this.crearBloqueAccion('Depositar', 'putIntoTheShip', {
        icono: 'icono.PonerEnNave.png',
        comportamiento: 'Soltar',
        argumentos: `{
        idTransicion: "depositar",
        etiqueta: "NaveAnimada"
      }`
      });
      this.crearBloqueAccion('AvanzarMono', 'moveRight', {
        icono: 'icono.derecha.png',
        comportamiento: 'MoverACasillaDerecha',
        argumentos: '{velocidad: 25}'
      });
      this.crearBloqueAccion('DejarRegalo', 'leavePresent', {
        icono: 'icono.regalo.png',
        comportamiento: 'Depositar',
        argumentos: '{claseADepositar: "RegaloAnimado"}'
      });
      this.crearBloqueAccion('SiguienteFila', 'nextLine', {
        icono: 'icono.abajo.png',
        comportamiento: 'SiguienteFila',
        argumentos: '{}'
      });
      this.crearBloqueAccion('SiguienteFilaTotal', 'nextLine', {
        icono: 'icono.izquierdaAbajo.png',
        comportamiento: 'SecuenciaAnimada',
        argumentos: `{secuencia: [
        {
          comportamiento: "MoverTodoAIzquierda",
          argumentos: {}
        },
        {
          comportamiento: "MoverACasillaAbajo",
          argumentos: {}
        }
      ]}`
      });
      this.crearBloqueAccion('SiguienteColumna', 'nextColumn', {
        icono: 'icono.derecha.png',
        comportamiento: 'SiguienteColumna',
        argumentos: '{}'
      });
      this.crearBloqueAccion('ContarBanana', 'countBanana', {
        icono: 'icono.banana.png',
        comportamiento: 'Contar',
        argumentos: '{etiqueta: "BananaAnimada", nombreAnimacion: "comerBanana"}'
      });
      this.crearBloqueAccion('ContarManzana', 'countApple', {
        icono: 'icono.manzana.png',
        comportamiento: 'Contar',
        argumentos: '{etiqueta: "ManzanaAnimada", nombreAnimacion: "comerManzana"}'
      });
      this.crearBloqueAccion('ExplotarGlobo', 'blowUpBallon', {
        icono: 'icono.globo.png',
        comportamiento: 'Interactuar',
        argumentos: `{
        etiqueta: "GloboAnimado",
        nombreAnimacion: "recoger",
        idTransicion: "explotar",
        comportamientoAdicional: 'Eliminar',
        argumentosComportamiento: {
          nombreAnimacion: "explotar"
        }}`
      });
      let blockly = this.blockly;
      let bloque = blockly.createCustomBlock('MoverA', {
        message0: `${this.intl.t(`blocks.moveTo`)}`,
        colour: Blockly.Blocks.primitivas.COLOUR,
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        args0: [{
          "type": "input_value",
          "name": "direccion"
        }],
        code: 'hacer(actor_id, "MovimientoEnCuadricula", {direccionCasilla: $direccion});'
      });
      bloque.categoryId = "primitives";
      this.crearBloqueAccion('PatearPelota', 'kickBall', {
        icono: 'icono.pelota.png',
        comportamiento: 'PatearPelota',
        argumentos: `{
        idTransicion: "patear",
      }`
      });
      this.crearBloqueAccion('Avanzar1km', 'move1Km', {
        icono: 'icono.derecha.png',
        comportamiento: 'VolarHeroicamente',
        argumentos: '{}'
      });
      this.crearBloqueAccion('CambiarColor', 'changeLightColor', {
        icono: 'icono.cambiar.color.png',
        comportamiento: 'CambiarColor',
        argumentos: '{}'
      });
      this.crearBloqueAccion('SiguienteFoco', 'moveNextLight', {
        icono: 'icono.derecha.png',
        comportamiento: 'MoverACasillaDerecha',
        argumentos: '{}'
      });
      this.crearBloqueAccion('EmpezarFiesta', 'startParty', {
        icono: 'icono.empezar.fiesta.png',
        comportamiento: 'EmpezarFiesta',
        argumentos: '{idTransicion: "empezarFiesta"}'
      });
      this.crearBloqueAccion('VolverAlBordeIzquierdo', 'backToLeftBorder', {
        icono: 'icono.izquierdaTope.png',
        comportamiento: 'MoverTodoAIzquierda',
        argumentos: '{}'
      });
      this.crearBloqueAccion('IrAlPrimerSospechoso', 'goToFirstSuspect', {
        icono: 'icono.izquierda.png',
        comportamiento: 'MoverTodoAIzquierda',
        argumentos: '{}'
      });
      this.crearBloqueAccion('IrAlSiguienteSospechoso', 'nextSuspect', {
        icono: 'icono.derecha.png',
        comportamiento: 'MoverACasillaDerecha',
        argumentos: '{}'
      });
      this.crearBloqueAccion('InterrogarSospechoso', 'askSuspect', {
        icono: 'icono.sacar.disfraz.png',
        comportamiento: 'SacarDisfraz',
        argumentos: '{}'
      });
      blockly.createCustomBlock('SaltarHaciaAdelante', {
        message0: `${this.intl.t(`blocks.jumpFront`)}`,
        colour: Blockly.Blocks.primitivas.COLOUR,
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        args0: [{
          "type": "field_image",
          "src": `iconos/icono.arriba.png`,
          "width": 16,
          "height": 20,
          "alt": "*"
        }, {
          "type": "input_value",
          "name": "longitud"
        }],
        code: 'hacer(actor_id, "SaltarHaciaAdelante", {distancia: $longitud, alturaDeseada: 50, velocidad_inicial: 20, nombreAnimacion: "saltar"});'
      });
      Blockly.Blocks.SaltarHaciaAdelante.toolbox = `
    <block type="SaltarHaciaAdelante">
      <value name="longitud">
        <block type="math_number"><field name="NUM">100</field></block></value>
    </block>
  `;
      Blockly.Blocks.SaltarHaciaAdelante.categoryId = 'primitives';
      blockly.createCustomBlock('DibujarLado', {
        message0: `${this.intl.t(`blocks.drawSide`)}`,
        colour: Blockly.Blocks.primitivas.COLOUR,
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        args0: [{
          "type": "field_image",
          "src": `iconos/icono.DibujarLinea.png`,
          "width": 16,
          "height": 16,
          "alt": "*"
        }, {
          "type": "input_value",
          "name": "longitud"
        }],
        code: 'hacer(actor_id, "DibujarHaciaAdelante", {distancia: $longitud, voltearAlIrAIzquierda: false, velocidad: 60});'
      });
      Blockly.Blocks.DibujarLado.toolbox = `
      <block type="DibujarLado">
        <value name="longitud">
          <block type="math_number"><field name="NUM">100</field></block></value>
      </block>
    `;
      Blockly.Blocks.DibujarLado.categoryId = 'primitives';
      this.crearBloqueAccion('ComerChurrasco', 'eatSteak', {
        icono: 'icono.churrasco.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta:"Churrasco", nombreAnimacion: "comerChurrasco", animacionInteractuadoMientras: "desaparecer"}'
      });
      this.crearBloqueAccion('AgarrarTomate', 'pickTomato', {
        icono: 'icono.tomate.png',
        comportamiento: 'Recolectar',
        argumentos: `{
        etiqueta: "Tomate",
        nombreAnimacion: "agarrarTomate",
        animacionInteractuadoMientras: "desaparecer",
        idTransicion: "agarrarTomate"
        
      }`
      });
      this.crearBloqueAccion('AgarrarLechuga', 'pickLettuce', {
        icono: 'icono.lechuga.png',
        comportamiento: 'Recolectar',
        argumentos: `{
        etiqueta: "Lechuga",
        nombreAnimacion: "agarrarLechuga",
        animacionInteractuadoMientras: "desaparecer",
        idTransicion: "agarrarLechuga"
      }`
      });
      this.crearBloqueAccion('PrepararEnsalada', 'prepareSalad', {
        icono: 'icono.ensaladera.png',
        comportamiento: 'PrepararEnsalada',
        argumentos: `{}`
      }); // Para los desafíos de escribir y leer letras

      this.crearBloqueAccion('EscribirLetraActualEnOtraCuadricula', 'writeLetter', {
        icono: 'icono.DibujarLinea.png',
        comportamiento: 'EscribirLetraActualEnOtraCuadricula',
        argumentos: '{}'
      });
      blockly.createCustomBlock('EscribirTextoDadoEnOtraCuadricula', {
        message0: `${this.intl.t(`blocks.write`)}`,
        colour: Blockly.Blocks.primitivas.COLOUR,
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        args0: [{
          "type": "field_image",
          "src": `iconos/icono.DibujarLinea.png`,
          "width": 16,
          "height": 16,
          "alt": "*"
        }, {
          "type": "field_input",
          "name": "texto",
          "text": ""
        }]
      });
      Blockly.Blocks.EscribirTextoDadoEnOtraCuadricula.categoryId = 'primitives';

      Blockly.MyLanguage.EscribirTextoDadoEnOtraCuadricula = function (block) {
        return 'hacer(actor_id, "EscribirTextoDadoEnOtraCuadricula", {texto: "' + (block.getFieldValue('texto') || '') + '"});';
      };

      blockly.createCustomBlock('GirarGrados', {
        message0: `${this.intl.t(`blocks.turnDegrees`)}`,
        colour: Blockly.Blocks.primitivas.COLOUR,
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        args0: [{
          "type": "field_image",
          "src": `iconos/icono.Girar.png`,
          "width": 16,
          "height": 16,
          "alt": "*"
        }, {
          "type": "input_value",
          "name": "grados"
        }],
        code: 'hacer(actor_id, "Rotar", {angulo: - ($grados), voltearAlIrAIzquierda: false, velocidad: 60});'
      });
      Blockly.Blocks.GirarGrados.toolbox = `
      <block type="GirarGrados">
        <value name="grados">
          <block type="math_number"><field name="NUM">90</field></block></value>
      </block>
    `;
      Blockly.Blocks.GirarGrados.categoryId = 'primitives';
      this.crearBloqueAccion('MoverArribaDibujando', 'moveAndDrawUp', {
        icono: 'icono.arribaDibujando.png',
        comportamiento: 'DibujarLinea',
        argumentos: '{direccion: [0,1], nombreAnimacion: "correrDibujando", dibujarPuntos: true}'
      });
      this.crearBloqueAccion('MoverAbajoDibujando', 'moveAndDrawDown', {
        icono: 'icono.abajoDibujando.png',
        comportamiento: 'DibujarLinea',
        argumentos: '{direccion: [0,-1], nombreAnimacion: "correrDibujando", dibujarPuntos: true}'
      });
      this.crearBloqueAccion('MoverDerechaDibujando', 'moveAndDrawRight', {
        icono: 'icono.derechaDibujando.png',
        comportamiento: 'DibujarLinea',
        argumentos: '{direccion: [1,0], nombreAnimacion: "correrDibujando", dibujarPuntos: true}'
      });
      this.crearBloqueAccion('MoverIzquierdaDibujando', 'moveAndDrawLeft', {
        icono: 'icono.izquierdaDibujando.png',
        comportamiento: 'DibujarLinea',
        argumentos: '{direccion: [-1,0], nombreAnimacion: "correrDibujando", dibujarPuntos: true}'
      });
      this.crearBloqueAccion('SaltarArriba', 'jumpUp', {
        icono: 'icono.arriba.png',
        comportamiento: 'SaltarAnimado',
        argumentos: '{direccion: [0,1], distancia: 50, alturaDeseada: 50, velocidad_inicial: 20, nombreAnimacion: "saltar"}'
      });
      this.crearBloqueAccion('SaltarAbajo', 'jumpDown', {
        icono: 'icono.abajo.png',
        comportamiento: 'SaltarAnimado',
        argumentos: '{direccion: [0,-1], distancia: 50, alturaDeseada: 50, velocidad_inicial: 20, nombreAnimacion: "saltar"}'
      });
      this.crearBloqueAccion('SaltarDerecha', 'jumpRight', {
        icono: 'icono.derecha.png',
        comportamiento: 'SaltarAnimado',
        argumentos: '{direccion: [1,0], distancia: 50, alturaDeseada: 50, velocidad_inicial: 20, nombreAnimacion: "saltar"}'
      });
      this.crearBloqueAccion('SaltarIzquierda', 'jumpLeft', {
        icono: 'icono.izquierda.png',
        comportamiento: 'SaltarAnimado',
        argumentos: '{direccion: [-1,0], distancia: 50, alturaDeseada: 50, velocidad_inicial: 20, nombreAnimacion: "saltar"}'
      });
      this.crearBloqueAccion('MoverLeyendoDerecha', 'moveRight', {
        icono: 'icono.derecha.png',
        comportamiento: 'MoverLeyendoDerecha',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverLeyendoIzquierda', 'moveLeft', {
        icono: 'icono.izquierda.png',
        comportamiento: 'MoverLeyendoIzquierda',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverLeyendoArriba', 'moveUp', {
        icono: 'icono.arriba.png',
        comportamiento: 'MoverLeyendoArriba',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverLeyendoAbajo', 'moveDown', {
        icono: 'icono.abajo.png',
        comportamiento: 'MoverLeyendoAbajo',
        argumentos: '{}'
      });
    },

    _definirBloquesSensores() {
      this.crearBloqueSensor('TocandoBanana', 'bananaHere', {
        icono: 'icono.banana.png',
        funcionSensor: 'tocando("BananaAnimada")'
      });
      this.crearBloqueSensor('TocandoManzana', 'appleHere', {
        icono: 'icono.manzana.png',
        funcionSensor: 'tocando("ManzanaAnimada")'
      });
      this.crearBloqueSensor('TocandoNaranja', 'orangeHere', {
        icono: 'icono.naranja.png',
        funcionSensor: 'tocando("NaranjaAnimada")'
      });
      this.crearBloqueSensor('TocandoFogata', 'campfireHere', {
        icono: 'icono.FogataApagada.png',
        funcionSensor: 'tocando("FogataAnimada")'
      });
      this.crearBloqueSensor('TocandoInicio', 'atTheBeginning', {
        icono: 'icono.futbolInicio.png',
        funcionSensor: 'tocandoInicio()'
      });
      this.crearBloqueSensor('TocandoPelota', 'getToTheBall', {
        icono: 'icono.pelota.png',
        funcionSensor: 'tocando("PelotaAnimada")'
      });
      this.crearBloqueSensor('TocandoFinal', 'comeToTheEnd', {
        icono: 'icono.titoFinalizacion.png',
        funcionSensor: 'estoyUltimaFila()'
      });
      this.crearBloqueSensor('KmsTotales', 'kmToTravel', {
        icono: 'icono.kms.png',
        funcionSensor: 'kmsTotales()'
      });
      this.crearBloqueSensor('EstoyEnEsquina', 'atTheSquare', {
        icono: 'icono.prendiendoLasCompus2.png',
        funcionSensor: 'casillaActual().esEsquina()'
      });
      this.crearBloqueSensor('EstoySobreElInicio', 'atColumnBeginning', {
        icono: 'icono.casillainiciomono.png',
        funcionSensor: 'casillaActual().esInicio()'
      });
      this.crearBloqueSensor('EstoySobreElFinal', 'atColumnEnd', {
        icono: 'icono.casillafinalmono.png',
        funcionSensor: 'casillaActual().esFin()'
      });
      this.crearBloqueSensor('LargoColumnaActual', 'currentColumnLength', {
        icono: 'icono.largoCol.png',
        funcionSensor: 'largoColumnaActual()-1'
      });
      this.crearBloqueSensor('TocandoAbajo', 'canMoveDown', {
        icono: 'icono.abajo.png',
        funcionSensor: 'tocandoFlechaAbajo()'
      });
      this.crearBloqueSensor('TocandoDerecha', 'canMoveRight', {
        icono: 'icono.derecha.png',
        funcionSensor: 'tocandoFlechaDerecha()'
      });
      this.crearBloqueSensor('TocandoFinCamino', 'reachedGoal', {
        icono: 'icono.finCamino.png',
        funcionSensor: 'alFinalDelCamino()'
      });
      this.crearBloqueSensor('TocandoQueso', 'cheeseHere', {
        icono: 'queso.png',
        funcionSensor: 'tocando("QuesoAnimado")'
      });
      this.crearBloqueSensor('TocandoLuz', 'lampHere', {
        icono: 'icono.LamparitaApagada.png',
        funcionSensor: 'tocando("Lamparin")'
      });
      this.crearBloqueSensor('EsCulpable', 'frontOfGuilty', {
        id: 'Descubralculpable',
        icono: 'icono.culpable.png',
        funcionSensor: 'colisionaConElCulpable() && pilas.escena_actual().culpable.teEncontraron()'
      });
      this.crearBloqueSensor('HayChurrasco', 'steakHere', {
        icono: 'icono.churrasco.png',
        funcionSensor: 'tocando("Churrasco")'
      });
      this.crearBloqueSensor('HayObstaculoArriba', 'obstacleUp', {
        icono: 'icono.arriba.png',
        funcionSensor: 'tieneEnLaCasillaDeArriba("Obstaculo")'
      });
      this.crearBloqueSensor('HayObstaculoAbajo', 'obstacleDown', {
        icono: 'icono.abajo.png',
        funcionSensor: 'tieneEnLaCasillaDeAbajo("Obstaculo")'
      });
      this.crearBloqueSensor('HayObstaculoIzquierda', 'obstacleAtLeft', {
        icono: 'icono.izquierda.png',
        funcionSensor: 'tieneEnLaCasillaASuIzquierda("Obstaculo")'
      });
      this.crearBloqueSensor('HayObstaculoDerecha', 'obstacleAtRight', {
        icono: 'icono.derecha.png',
        funcionSensor: 'tieneEnLaCasillaASuDerecha("Obstaculo")'
      });
      this.crearBloqueSensor('HayCharco', 'puddleHere', {
        icono: 'icono.charco.png',
        funcionSensor: 'hayEnEscena("Charco")'
      });
      let sensorHayVocal = this.blockly.createCustomBlock('hayVocalRMT', {
        "type": "block_type",
        "message0": `${this.intl.t(`blocks.currentCharacter`)}`,
        "args0": [{
          type: "field_image",
          src: `iconos/icono.DibujarLinea.png`,
          width: 16,
          height: 16,
          alt: "*"
        }, {
          "type": "field_dropdown",
          "name": "letra",
          "options": [["R", "r"], ["M", "m"], ["T", "t"], ["A", "a"], ["E", "e"], ["I", "i"], ["O", "o"], ["U", "u"]]
        }],
        "output": null,
        "colour": Blockly.Blocks.sensores.COLOUR,
        "tooltip": "Es cierto cuando estoy leyendo esta letra ahora",
        "helpUrl": ""
      });
      sensorHayVocal.categoryId = "sensors";

      Blockly.MyLanguage.hayVocalRMT = function (block) {
        let codigo = `evaluar("leyendoCaracter('${block.getFieldValue('letra')}')")`;
        return [codigo, Blockly.MyLanguage.ORDER_ATOMIC];
      };

      this.crearBloqueSensor('HayLechuga', 'lettuceHere', {
        icono: 'icono.lechuga.png',
        funcionSensor: 'tocando("Lechuga")'
      });
      this.crearBloqueSensor('HayTomate', 'tomatoHere', {
        icono: 'icono.tomate.png',
        funcionSensor: 'tocando("Tomate")'
      });
    },

    _definirBloquesQueRepresentanValores() {
      this.crearBloqueValor("ParaLaDerecha", 'right', {
        icono: 'icono.derecha.png',
        valor: 'derecha',
        colour: Blockly.Blocks.direcciones.COLOUR
      });
      this.crearBloqueValor('ParaLaIzquierda', 'left', {
        icono: 'icono.izquierda.png',
        valor: 'izquierda',
        colour: Blockly.Blocks.direcciones.COLOUR
      });
      this.crearBloqueValor('ParaArriba', 'up', {
        icono: 'icono.arriba.png',
        valor: 'arriba',
        colour: Blockly.Blocks.direcciones.COLOUR
      });
      this.crearBloqueValor('ParaAbajo', 'down', {
        icono: 'icono.abajo.png',
        valor: 'abajo',
        colour: Blockly.Blocks.direcciones.COLOUR
      });
    },

    _definirBloquesIniciales() {
      const thisService = this;

      function fillOpacity(block, opacity) {
        block.getSvgRoot().style["fill-opacity"] = opacity;
      }

      function transparent(block) {
        fillOpacity(block, 0);
      }

      function opaque(block) {
        fillOpacity(block, 1);
      }

      function onChangeRequired(warningText) {
        return function (event) {
          if (event && event.runCode) {
            this.setWarningText(warningText);
            opaque(this);
          }

          if (this.warning && this.warning.bubble_) this.warning.bubble_.setColour('red');
        };
      }

      Blockly.Blocks.required_value = {
        init: function () {
          this.jsonInit({
            "type": "required_value",
            "message0": "",
            "output": null,
            "colour": "#ffffff",
            "tooltip": "",
            "helpUrl": ""
          });
          this.setShadow(true);
          transparent(this);
        },
        onchange: onChangeRequired(this.intl.t('blocks.errors.missingExpressionBlock').string)
      };
      Blockly.Blocks.required_statement = {
        init: function () {
          this.jsonInit({
            "type": "required_statement",
            "message0": "",
            "previousStatement": null,
            "colour": "#ffffff",
            "tooltip": "",
            "helpUrl": ""
          });
          this.setShadow(true);
          transparent(this);
        },
        onchange: onChangeRequired(this.intl.t('blocks.errors.missingCommandBlock').string)
      };
      Blockly.Blocks.al_empezar_a_ejecutar = {
        init: function () {
          this.setColour(Blockly.Blocks.eventos.COLOUR);
          this.appendDummyInput().appendField(thisService.tString('program'));
          this.appendStatementInput('program');
          this.setDeletable(false);
          this.setEditable(false);
          this.setMovable(false);
        }
      };
    },

    _definirBloquesEstructurasDeControl() {
      const thisService = this;
      Blockly.Blocks.RepetirVacio = {
        init: function () {
          this.setColour(Blockly.Blocks.control.COLOUR);
          this.setInputsInline(true);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.appendValueInput('count').setCheck('Number').appendField(thisService.tString('simpleRepetitionBeginning'));
          this.appendDummyInput().appendField(thisService.tString('simpleRepetitionEnd'));
          this.appendStatementInput('block');
        },
        categoryId: 'repetitions'
      };
      Blockly.Blocks.Repetir = {
        init: Blockly.Blocks['RepetirVacio'].init,
        categoryId: Blockly.Blocks['RepetirVacio'].categoryId,
        toolbox: `
      <block type="repetir">
        <value name="count">
          <block type="math_number"><field name="NUM">10</field></block>
        </value>
      </block>
      `
      };
      Blockly.Blocks.Hasta = {
        init: function () {
          this.setColour(Blockly.Blocks.control.COLOUR);
          this.setInputsInline(true);
          this.appendValueInput('condition').setCheck('Boolean').appendField(thisService.tString('conditionalRepetition'));
          this.appendStatementInput('block');
          this.setPreviousStatement(true);
          this.setNextStatement(true);
        },
        categoryId: 'repetitions'
      };
      Blockly.Blocks.Si = {
        init: function () {
          this.setColour(Blockly.Blocks.control.COLOUR);
          this.appendValueInput('condition').setCheck('Boolean').appendField(thisService.tString('simpleAlternative'));
          this.setInputsInline(true);
          this.appendStatementInput('block');
          this.setPreviousStatement(true);
          this.setNextStatement(true);
        },
        categoryId: 'alternatives'
      };
      Blockly.Blocks.SiNo = {
        init: function () {
          this.setColour(Blockly.Blocks.control.COLOUR);
          this.appendValueInput('condition').setCheck('Boolean').appendField(thisService.tString('simpleAlternative'));
          this.appendStatementInput('block1');
          this.setInputsInline(true);
          this.appendDummyInput().appendField(thisService.tString('completeAlternative'));
          this.appendStatementInput('block2');
          this.setPreviousStatement(true);
          this.setNextStatement(true);
        },
        categoryId: 'alternatives'
      };
      let init_base_callnoreturn = Blockly.Blocks.procedures_callnoreturn.init;

      Blockly.Blocks.procedures_callnoreturn.init = function () {
        this.setInputsInline(true);
        init_base_callnoreturn.call(this);
      };

      Blockly.Blocks.procedures_callnoreturn.onchange = function () {
        (0, _blockUtils.requiredAllInputs)(this); // Input fields are added after instantiation 
      };

      const deletedParameterError = this.intl.t('blocks.errors.deletedParameter').string;

      const wrongParameterError = procedureDef => this.intl.t('blocks.errors.wrongParameter', {
        procedure: (0, _blockUtils.getName)(procedureDef)
      }).string;

      Blockly.Blocks.variables_get = {
        init: function () {
          this.jsonInit({
            "type": "variables_get",
            "message0": "%1",
            "args0": [{
              "type": "field_label",
              "name": "VAR",
              "text": "nombre de variable"
            }],
            "output": null,
            "colour": Blockly.Blocks.variables.HUE,
            "tooltip": "",
            "helpUrl": ""
          });
        },
        mutationToDom: function () {
          var container = document.createElement('mutation');
          container.setAttribute('var', this.getFieldValue('VAR'));

          if (this.$parent) {
            container.setAttribute("parent", this.$parent);
          }

          return container;
        },
        domToMutation: function (xmlElement) {
          var var_name = xmlElement.getAttribute('var');
          this.setFieldValue(var_name, 'VAR');
          this.$parent = xmlElement.getAttribute("parent") || null;
        },
        onchange: function (event) {
          if (event && event.blockId === this.$parent && event.type === Blockly.Events.BLOCK_DELETE) {
            this.dispose();
            return;
          }

          if (this.$parent) {
            // Este if sirve para las soluciones viejas que no tienen $parent
            var procedureDef = this.workspace.getBlockById(this.$parent);
            var ok = (0, _blockUtils.isInsideProcedureDef)(this) && (0, _blockUtils.hasParam)(procedureDef, this);
            this.setDisabled(!ok);
            var warning = ok || (0, _blockUtils.isFlying)(this) || !procedureDef ? null : (0, _blockUtils.hasParam)(procedureDef, this) ? wrongParameterError(procedureDef) : deletedParameterError;
            this.setWarningText(warning);
          }
        }
      }; // Blockly dynamically loads stuff in procedures category that we don't want, so we take them out

      this._disableUnwantedProcedureBlocks();

      this.defineBlocklyTranslations();
      let init_base_procedimiento = Blockly.Blocks.procedures_defnoreturn.init;

      Blockly.Blocks.procedures_defnoreturn.init = function () {
        init_base_procedimiento.call(this);
      };
    },

    _generarLenguaje() {
      Blockly.MyLanguage = Blockly.JavaScript;
      Blockly.MyLanguage.addReservedWords('main', 'hacer', 'out_hacer', 'evaluar');

      Blockly.MyLanguage.required_value = function () {
        return null;
      };

      Blockly.MyLanguage.required_statement = function () {
        return null;
      };

      Blockly.MyLanguage.al_empezar_a_ejecutar = function (block) {
        let programa = Blockly.JavaScript.statementToCode(block, 'program');
        let codigo = `${programa}`;
        return codigo;
      };

      Blockly.MyLanguage.RepetirVacio = function (block) {
        var repeats = Blockly.MyLanguage.valueToCode(block, 'count', Blockly.MyLanguage.ORDER_ASSIGNMENT) || '0';
        var branch = Blockly.MyLanguage.statementToCode(block, 'block');
        branch = Blockly.MyLanguage.addLoopTrap(branch, block.id);
        var code = '';
        var loopVar = Blockly.JavaScript.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
        var endVar = repeats;

        if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
          endVar = Blockly.MyLanguage.variableDB_.getDistinctName('repeat_end', Blockly.Variables.NAME_TYPE);
          code += 'var ' + endVar + ' = ' + repeats + ';\n';
        }

        code += 'for (var ' + loopVar + ' = 0; ' + loopVar + ' < ' + endVar + '; ' + loopVar + '++) {\n' + branch + '}\n';
        return code;
      };

      Blockly.MyLanguage.Repetir = Blockly.MyLanguage.RepetirVacio;

      Blockly.MyLanguage.Si = function (block) {
        var condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
        var contenido = Blockly.MyLanguage.statementToCode(block, 'block');
        return `if (${condition}) {
        ${contenido}
      }`;
      };

      Blockly.MyLanguage.SiNo = function (block) {
        var condition = Blockly.MyLanguage.valueToCode(block, 'condition', Blockly.MyLanguage.ORDER_ASSIGNMENT) || 'false';
        var bloque_1 = Blockly.JavaScript.statementToCode(block, 'block1');
        var bloque_2 = Blockly.JavaScript.statementToCode(block, 'block2');
        return `if (${condition}) {
        ${bloque_1}
      } else {
        ${bloque_2}
      }`;
      };

      Blockly.MyLanguage.Hasta = function (block) {
        var condition = Blockly.MyLanguage.valueToCode(block, 'condition', Blockly.MyLanguage.ORDER_ASSIGNMENT) || 'false';
        var contenido = Blockly.MyLanguage.statementToCode(block, 'block');
        return `while (!${condition}) {
        ${contenido}
      }`;
      };

      Blockly.MyLanguage.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
      Blockly.MyLanguage.addReservedWords('highlightBlock');
    },

    _definirOperaciones() {
      //Este código fue sacado de Blockly
      this.blockly.createCustomBlock('OpAritmetica', {
        "type": "math_arithmetic",
        "message0": "%1 %2 %3",
        "args0": [{
          "type": "input_value",
          "name": "A",
          "check": "Number"
        }, {
          "type": "field_dropdown",
          "name": "OP",
          "options": [["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"], ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"], ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]]
        }, {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }],
        "inputsInline": true,
        "output": "Number",
        "colour": "%{BKY_MATH_HUE}",
        "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
        "extensions": ["math_op_tooltip"]
      });

      Blockly.MyLanguage.OpAritmetica = function (block) {
        // Basic arithmetic operators, and power.
        var OPERATORS = {
          'ADD': [' + ', Blockly.JavaScript.ORDER_ADDITION],
          'MINUS': [' - ', Blockly.JavaScript.ORDER_SUBTRACTION],
          'MULTIPLY': [' * ', Blockly.JavaScript.ORDER_MULTIPLICATION],
          'DIVIDE': [' / ', Blockly.JavaScript.ORDER_DIVISION],
          'POWER': [null, Blockly.JavaScript.ORDER_COMMA] // Handle power separately.

        };
        var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
        var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
        var op = block.getFieldValue('OP');
        var tuple = OPERATORS[op];
        var operator = tuple[0];
        var order = tuple[1];
        var isPow = !operator;
        var isDivision = op === 'DIVIDE';
        var code; // Power in JavaScript requires a special case since it has no operator.

        if (isPow) {
          code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
          return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
        }

        code = `
      (function(){
        if (${isDivision} && ${argument1} === 0)
          evaluar("lanzarActividadError('No se puede dividir por 0')")
        else
          return ${argument0 + operator + argument1}
      })()
      `;
        return [code, order];
      };

      Blockly.Blocks.OpAritmetica.categoryId = 'operators';
    },

    _definirBloquesAlias() {
      this.crearBloqueAlias('OpComparacion', 'logic_compare', 'operators');
      this.crearBloqueAlias('OpAritmetica', 'math_arithmetic', 'operators');
      this.crearBloqueAlias('Booleano', 'logic_boolean', 'values');
      this.crearBloqueAlias('Numero', 'math_number', 'values');
      this.crearBloqueAlias('Texto', 'text', 'values');
      this.crearBloqueAlias('param_get', 'variables_get');
      this.crearBloqueAlias('Procedimiento', 'procedures_defnoreturn', 'myProcedures', 'PROCEDURE');

      this._agregarAliasParaCompatibilidadHaciaAtras();
    },

    /**
     * Crea alias con nombres de bloques que fueron previamente usados
     * en pilas bloques, pero que han cambiado el nombre por otro actualmente.
     * Esto es necesario para mantener la retrocompatibilidad con ejercicios
     * que utilizan los bloques anteriormente citados.
     */
    _agregarAliasParaCompatibilidadHaciaAtras() {
      this.crearBloqueAlias('si', 'Si');
      this.crearBloqueAlias('Sino', 'SiNo');
      this.crearBloqueAlias('sino', 'SiNo');
      this.crearBloqueAlias('Descubralculpable', 'EsCulpable');
      this.crearBloqueAlias('hasta', 'Hasta');
      this.crearBloqueAlias('repetir', 'Repetir');
      this.crearBloqueAlias('tocandoBanana', 'TocandoBanana');
      this.crearBloqueAlias('tocandoManzana', 'TocandoManzana');
      this.crearBloqueAlias('prenderCompuConColision', 'PrenderComputadora');
      this.crearBloqueAlias('PrenderCompuConColision', 'PrenderComputadora');
      this.crearBloqueAlias('Prendercompu', 'PrenderComputadora');
      this.crearBloqueAlias('PrenderCompu', 'PrenderComputadora');
      this.crearBloqueAlias('ApagarCompu', 'ApagarComputadora');
      this.crearBloqueAlias('SiguienteCompu', 'PasarASiguienteComputadora');
      this.crearBloqueAlias('Prenderfogata', 'PrenderFogata');
      this.crearBloqueAlias('Dejarregalo', 'DejarRegalo');
      this.crearBloqueAlias('Contarbanana', 'ContarBanana');
      this.crearBloqueAlias('Contarmanzana', 'ContarManzana');
      this.crearBloqueAlias('AvanzarKm', 'Avanzar1km');
      this.crearBloqueAlias('cambiarColor', 'CambiarColor');
      this.crearBloqueAlias('siguienteFoco', 'SiguienteFoco');
      this.crearBloqueAlias('empezarFiesta', 'EmpezarFiesta');
      this.crearBloqueAlias('Volveralbordeizquierdo', 'VolverAlBordeIzquierdo');
      this.crearBloqueAlias('Primersospechoso', 'IrAlPrimerSospechoso');
      this.crearBloqueAlias('PrimerSospechoso', "IrAlPrimerSospechoso");
      this.crearBloqueAlias('Siguientesospechoso', 'IrAlSiguienteSospechoso');
      this.crearBloqueAlias('SiguienteSospechoso', "IrAlSiguienteSospechoso");
      this.crearBloqueAlias('Sacardisfraz', 'InterrogarSospechoso');
      this.crearBloqueAlias('SacarDisfraz', 'InterrogarSospechoso');
      this.crearBloqueAlias('tocandoFogata', 'TocandoFogata');
      this.crearBloqueAlias('tocandoInicio', 'TocandoInicio');
      this.crearBloqueAlias('tocandoFinal', 'TocandoFinal');
      this.crearBloqueAlias('tocandoPelota', 'TocandoPelota');
      this.crearBloqueAlias('Estoyenunaesquina', 'EstoyEnEsquina');
      this.crearBloqueAlias('tocandoQueso', 'TocandoQueso');
      this.crearBloqueAlias('tocandoLuz', 'TocandoLuz');
      this.crearBloqueAlias('Abrirojos', 'AbrirOjos');
      this.crearBloqueAlias('Cerrarojos', 'CerrarOjos');
      this.crearBloqueAlias('Soar', "Soniar");
      this.crearBloqueAlias('Agarrarllave', "AgarrarLlave");
      this.crearBloqueAlias('Abrircofre', "AbrirCofre");
      this.crearBloqueAlias('Darsombrero', "DarSombrero");
      this.crearBloqueAlias('Atacarconespada', "AtacarConEspada");
      this.crearBloqueAlias('Escaparenunicornio', 'EscaparEnUnicornio');
      this.crearBloqueAlias('estoyInicio', 'EstoySobreElInicio');
      this.crearBloqueAlias('estoyAlInicio', 'EstoySobreElInicio');
      this.crearBloqueAlias('estoyFinColumna', 'EstoySobreElFinal');
      this.crearBloqueAlias('EstoyAlFin', 'EstoySobreElFinal');
      this.crearBloqueAlias('ComerBananaNano', 'ComerBanana');
      this.crearBloqueAlias('saltar1', 'SaltarHablando');
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/constants", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    sniffer: Ember.inject.service('sniffer'),
    webkit: Ember.computed(function () {
      return /webkit/i.test(this.get('sniffer.vendorPrefix'));
    }),

    vendorProperty(name) {
      return this.get('webkit') ? `-webkit-${name.charAt(0)}${name.substring(1)}` : name;
    },

    CSS: Ember.computed('webkit', function () {
      let webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: `transitionend${webkit ? ' webkitTransitionEnd' : ''}`,
        ANIMATIONEND: `animationend${webkit ? ' webkitAnimationEnd' : ''}`,
        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),
    KEYCODE: Ember.Object.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });

  _exports.default = _default;
});
;define("pilasbloques/services/highlighter", ["exports", "pilasbloques/services/block-utils"], function (_exports, _blockUtils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /// Este service va recibiendo los Ids de los bloques que se ejecutan y SOLAMENTE se encarga del highlighting.
  /// Particularmente, tiene la lógica de highligh para los procedimientos.
  /// No sabe nada sobre qué hacen o cuándo se ejecutará cada bloque.
  var _default = Ember.Service.extend({
    blocks: [],

    step(blockId) {
      let block = this._workspace().getBlockById(blockId);

      if (!block) {
        console.warn(`Couldn't highlight block id: ${blockId}`);
        return;
      }

      this._removeLastBlockIfEndOfModule();

      this._removePreviousBlockIfContinue(block);

      if (!this._ignore(block)) {
        this.blocks.push(block);
      }

      this._updateHighlight();
    },

    clear() {
      this.blocks.length = 0;

      this._clearHighlight();
    },

    _lastBlock() {
      return this.blocks[this.blocks.length - 1];
    },

    _removeLastBlockIfEndOfModule() {
      if (this._shouldRemoveLastBlock()) {
        this.blocks.pop();
      }
    },

    _removePreviousBlockIfContinue(block) {
      if (block.getParent() === this._lastBlock()) {
        this.blocks.pop();
      }
    },

    _ignore(block) {
      return (0, _blockUtils.isFlying)(block);
    },

    _shouldRemoveLastBlock() {
      return this._lastBlock() && this._isEndOfModule(this._lastBlock()) && !(0, _blockUtils.isProcedureCall)(this._lastBlock());
    },

    _isEndOfModule(block) {
      return !block.getNextBlock();
    },

    _updateHighlight() {
      this._clearHighlight();

      this.blocks.forEach(b => this._workspace().highlightBlock(b.id, true));
    },

    _clearHighlight() {
      this._workspace().highlightBlock();
    },

    _workspace() {
      return Blockly.getMainWorkspace();
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/interpreter-factory", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    pilas: Ember.inject.service(),

    /**
     * Retorna un intérprete preparado para ejecutar el código que
     * se le envíe como argumento.
     *
     * El código se ejecutará de manera aislada, en un entorno protegido
     * sin acceso al exterior (no tendrá acceso a ember, pilas, window, ni nada...)
     * así que las únicas funciones a las que podrá acceder están detalladas
     * en la función _initFunction, que aparece más abajo.
     */
    crearInterprete(codigo, callback_cuando_ejecuta_bloque) {
      return new Interpreter(this.wrappearCodigo(codigo), (interpreter, scope) => {
        return this._initFunction(interpreter, scope, callback_cuando_ejecuta_bloque);
      });
    },

    /**
     * Inicializa el intérprete y su scope inicial, para que
     * pueda usar funcioens como "hacer", "console.log" etc..
     */
    _initFunction(interpreter, scope, callback_cuando_ejecuta_bloque) {
      let pilasService = this.pilas;
      var actor = pilasService.evaluar(`pilas.escena_actual().automata;`);

      var console_log_wrapper = function (txt) {
        txt = txt ? txt.toString() : '';
        return interpreter.createPrimitive(console.log(txt));
      };

      interpreter.setProperty(scope, 'console_log', interpreter.createNativeFunction(console_log_wrapper)); // Esto deberia estar en otro lado, es un comportamiento que lo unico que
      // hace es llamar a una función.

      var ComportamientoLlamarCallback = function (args) {
        this.argumentos = args;

        this.iniciar = function () {};

        this.actualizar = function () {
          this.argumentos.callback();
          return true;
        };

        this.eliminar = function () {};
      }; // Genera la función "out_hacer" que se llamará dentro del intérprete.
      //
      // Esta función encadenará dos comportamientos para simplificar el uso
      // de funciones asincrónicas. Agregará el comportamiento que represente
      // la acción que el usuario quiere hacer con el actor y luego agregará
      // otro comportamiento para indicar que la tarea asincrónica terminó.
      //
      // Por ejemplo, si en el código se llama a la función hacer así:
      //
      //      hacer("Saltar", {});
      //      hacer("Caminar", {pasos: 20});
      //
      // Internamente la función hará que el actor primero "salte" y luego
      // "camine" 20 pasos.


      var hacer_wrapper = function (comportamiento, params, callback) {
        comportamiento = comportamiento ? comportamiento.toString() : '';
        params = params ? params.toString() : '';
        params = JSON.parse(params);
        var clase_comportamiento = pilasService.evaluar(`
        var comportamiento = null;

        if (window['${comportamiento}']) {
          comportamiento = ${comportamiento};
        } else {
          if (pilas.comportamientos['${comportamiento}']) {
            comportamiento = pilas.comportamientos['${comportamiento}'];
          } else {
            throw new Error("No existe un comportamiento llamado '${comportamiento}'.");
          }
        }

        comportamiento;
      `);

        if (typeof params.receptor === 'string') {
          params.receptor = pilasService.evaluar(`pilas.escena_actual().${params.receptor}`);
        }

        actor.hacer_luego(clase_comportamiento, params);
        actor.hacer_luego(ComportamientoLlamarCallback, {
          callback
        });
      };

      interpreter.setProperty(scope, 'out_hacer', interpreter.createAsyncFunction(hacer_wrapper));
      /**
       * Es el código que se ejecuta con una expresión (sensor, operación, etc.)
       */

      function out_evaluar(expr) {
        expr = expr ? expr.toString() : '';
        return interpreter.createPrimitive(pilasService.evaluar(`
        try {
          var value = pilas.escena_actual().automata.${expr}
        } catch (e) {
          pilas.escena_actual().errorHandler.handle(e);
        }

        value`));
      }

      interpreter.setProperty(scope, 'evaluar', interpreter.createNativeFunction(out_evaluar));
      /**
       * Llama a callback_cuando_ejecuta_bloque con el id del bloque en ejecucion.
       */

      function out_highlightBlock(id) {
        id = id ? id.toString() : '';
        return interpreter.createPrimitive(callback_cuando_ejecuta_bloque.call(this, id));
      }

      interpreter.setProperty(scope, 'highlightBlock', interpreter.createNativeFunction(out_highlightBlock));
    },

    wrappearCodigo(codigo) {
      return js_beautify(`
        var actor_id = 'demo'; // se asume el actor receptor de la escena.

        function hacer(id, comportamiento, params) {
          out_hacer(comportamiento, JSON.stringify(params));
        }

        function main() {
          ${codigo}
        }

        main();
      `);
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/intl", ["exports", "pilas-bloques-ember-intl/services/intl", "pilasbloques/config/environment"], function (_exports, _intl, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _intl.default.extend({
    storage: Ember.inject.service(),

    t(key, options) {
      return this.addTranslationCheck(this._super(key, Ember.assign({
        htmlSafe: true
      }, options)));
    },

    addTranslationCheck(safeHTML) {
      return _environment.default.testTranslations ? Ember.String.htmlSafe("<del>" + safeHTML.string + "</del> <ins>(translated✓)</ins>") : safeHTML;
    },

    setSelectedLocale(selectedLocaleCode) {
      this.storage.saveSelectedLocale(selectedLocaleCode);
      window.location.reload(true);
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
;define("pilasbloques/services/media", ["exports", "ember-responsive/services/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _media.default;
  _exports.default = _default;
});
;define("pilasbloques/services/modal-dialog", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function computedFromConfig(prop) {
    return Ember.computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  var _default = Ember.Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: null // injected by initializer

  });

  _exports.default = _default;
});
;define("pilasbloques/services/notificador", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    ajax: Ember.inject.service(),
    hayActualizacion: false,
    versionActual: null,

    esVersionAnterior(stringV1, stringV2) {
      function parseVersionString(str) {
        if (typeof str !== 'string') {
          return false;
        }

        var x = str.split('+')[0].split('.'); // parse from string or default to 0 if can't parse

        var maj = parseInt(x[0]) || 0;
        var min = parseInt(x[1]) || 0;
        var pat = parseInt(x[2]) || 0;
        return {
          major: maj,
          minor: min,
          patch: pat
        };
      }

      var v1 = parseVersionString(stringV1);
      var v2 = parseVersionString(stringV2);
      return v1.major < v2.major || v1.major === v2.major && v1.minor < v2.minor || v1.major === v2.major && v1.minor === v2.minor && v1.patch < v2.patch;
    },

    /**
     * Consulta contra la API de github si existe una versión nueva de la
     * aplicación para actualizar.
     */
    consultar() {
      let versionActual = _environment.default.APP.version;
      let url = _environment.default['versionURL'];
      return this.ajax.request(url).then(data => {
        let versionDesdeElServidor = data.tag_name;

        if (this.esVersionAnterior(versionActual, versionDesdeElServidor)) {
          this.set('hayActualizacion', true);
          this.set('versionActual', data.tag_name);
          return {
            hayActualizacion: true,
            version: data.tag_name
          };
        } else {
          return {
            hayActualizacion: false,
            version: data.tag_name
          };
        }
      });
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/paper-sidenav", ["exports", "ember-paper/services/paper-sidenav"], function (_exports, _paperSidenav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSidenav.default;
    }
  });
});
;define("pilasbloques/services/paper-theme", ["exports", "ember-paper/services/paper-theme"], function (_exports, _paperTheme) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTheme.default;
    }
  });
});
;define("pilasbloques/services/paper-toaster", ["exports", "ember-paper/services/paper-toaster"], function (_exports, _paperToaster) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
;define("pilasbloques/services/pilas-ast", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.createEmptyNode = createEmptyNode;
  _exports.createNode = createNode;
  _exports.createReference = createReference;

  function createNode(tag, contents) {
    if (tag === "Equation") return [contents];
    return contents !== undefined ? {
      tag,
      contents
    } : {
      tag
    };
  }

  function createReference(name) {
    return createNode("Reference", name);
  }

  function createEmptyNode() {
    return createNode("None", []);
  }
});
;define("pilasbloques/services/pilas-bloques-analytics", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    sessionExpire
  } = _environment.default.pbAnalytics; //TODO: Rename 'Analytics' to 'session' related approach

  var _default = Ember.Service.extend({
    platform: Ember.inject.service(),
    storage: Ember.inject.service(),

    context() {
      const userId = this.storage.getUserId();
      const online = this.platform.online();
      const fingerprint = new ClientJS().getFingerprint();
      const session = this.getSession();
      const version = _environment.default.APP.version;
      return { ...session,
        online,
        browserId: fingerprint,
        userId: userId || fingerprint,
        version
      };
    },

    // This is async because it needs to be polymorphic with the service pilasBloquesApi
    async newAnswer(data) {
      const session = this.getSession();
      const answers = session.answers || [];
      answers.push(data);
      this.storage.saveAnalyticsSession({ ...session,
        answers
      });
    },

    _newSession() {
      const newSession = {
        id: uuidv4(),
        lastInteraction: new Date(),
        answers: []
      };
      this.storage.saveAnalyticsSession(newSession);
      return newSession;
    },

    _updatedSession(session) {
      const updatedSession = { ...session,
        lastInteraction: new Date()
      };
      this.storage.saveAnalyticsSession(updatedSession);
      return updatedSession;
    },

    getSession() {
      const session = this.storage.getAnalyticsSession();
      if (!session) return this._newSession();
      return this._isOld(session) ? this._newSession() : this._updatedSession(session);
    },

    logout() {
      this.storage.saveAnalyticsSession(null);
    },

    _isOld(_ref) {
      let {
        lastInteraction
      } = _ref;
      return (new Date() - lastInteraction) / 1000 / 60 > sessionExpire;
    } // Minutes


  });

  _exports.default = _default;
});
;define("pilasbloques/services/pilas-bloques-api", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    baseURL
  } = _environment.default.pbApi;

  const log = () => {}; // console.log


  const logger = topic => message => log(topic, message);

  var _default = Ember.Service.extend({
    storage: Ember.inject.service(),
    paperToaster: Ember.inject.service(),
    pilasBloquesAnalytics: Ember.inject.service(),
    platform: Ember.inject.service(),
    loading: {},
    connected: null,

    // SOLUTIONS
    openChallenge(challengeId) {
      this._send('POST', 'challenges', {
        challengeId
      }, false).catch(logger('openChallenge'));
    },

    lastSolution(challengeId) {
      if (!this.getUser()) return null;
      return this._send('GET', `challenges/${challengeId}/solution`, undefined, false).catch(() => null);
    },

    runProgram(challengeId, metadata) {
      const solutionId = uuidv4();
      const data = {
        challengeId,
        solutionId,
        ...metadata
      };

      this._send('POST', 'solutions', data, false).catch(logger('runProgram'));

      return solutionId;
    },

    executionFinished(solutionId, executionResult) {
      this._send('PUT', `solutions/${solutionId}`, {
        executionResult
      }, false).catch(logger('executionFinished'));
    },

    // LOGIN - REGISTER
    async login(credentials) {
      return this._send('POST', 'login', credentials).then(user => this.storage.saveUser(user));
    },

    async register(data) {
      const {
        username,
        avatarURL
      } = data;
      const profile = {
        nickName: username,
        avatarURL
      };
      return this._send('POST', 'register', { ...data,
        profile
      }).then(user => this.storage.saveUser(user));
    },

    async changePassword(newCredentials) {
      return this._send('PUT', 'credentials', newCredentials).then(user => this.storage.saveUser(user));
    },

    async passwordRecovery(username) {
      return this._send('POST', `password-recovery?username=${username}`);
    },

    async userExists(username) {
      return this._send('GET', `users/exists?username=${username}`);
    },

    async newAnswer(data) {
      return this._send('POST', `answers`, data).then(user => this.storage.saveUser(user));
    },

    logout() {
      this.pilasBloquesAnalytics.logout();
      this.storage.saveUser(null);
    },

    async ping() {
      return this._send('GET', 'ping', undefined, false);
    },

    getUser() {
      return this.storage.getUser();
    },

    async _send(method, resource, body) {
      let critical = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      const user = this.getUser();

      if (body) {
        body.context = this.pilasBloquesAnalytics.context();
        body.timestamp = new Date();
      } //TODO: Move user to Analytics / use id instead of nickname / rename Analytics to session related approach


      const url = `${baseURL}/${resource}`;
      const flag = `loading.${resource.split('?')[0].replace('/', '-')}`;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': user ? `Bearer ${user.token}` : null
      };
      this.set(flag, true);
      return this._doFetch(url, {
        method,
        body: JSON.stringify(body),
        headers
      }).catch(connectionErr => {
        if (critical) this._alertServerError();
        this.set('connected', false); // console.log({ connectionErr })

        throw connectionErr;
      }).then(res => {
        this.set('connected', true);

        if (res.status >= 400) {
          return res.text().then(message => {
            throw {
              status: res.status,
              message
            };
          });
        } else {
          return res.json().catch(() => {
            /** if not body present */
          });
        }
      }).finally(() => this.set(flag, false));
    },

    _doFetch(url, options) {
      try {
        return fetch(url, options);
      } catch (err) {
        return Promise.reject(err);
      }
    },

    _alertServerError() {
      this.paperToaster.show("Problemas con el servidor, intentar más tarde", {
        duration: 4000,
        position: "top"
      });
    },

    init() {
      this._super.apply(this, arguments);

      if (this.platform.inElectron()) {
        // Avoiding unnecessary requests when in website
        this.ping(); // forces setting of "connected"
      } else {
        this.set('connected', true);
      }
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/pilas-mulang", ["exports", "pilasbloques/services/block-utils", "pilasbloques/services/pilas-ast"], function (_exports, _blockUtils, _pilasAst) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    parseAll(workspace) {
      return workspace.getTopBlocks().map(this.parse);
    },

    parse(mainBlock) {
      return buildBlockAst(mainBlock);
    }

  });

  _exports.default = _default;

  function buildBlockAst(block) {
    if (block.isShadow()) return (0, _pilasAst.createEmptyNode)();
    let {
      tag,
      parse
    } = mulangParser(block);
    return (0, _pilasAst.createNode)(tag, parse(block));
  }

  function mulangParser(block) {
    let parser = pilasToMulangParsers[block.type] || searchAlias(block);
    if (parser) return parser;
    return (0, _blockUtils.isValue)(block) ? referenceParser : applicationParser;
  }

  function searchAlias(block) {
    for (const alias of Blockly.aliases(block.type)) {
      if (pilasToMulangParsers[alias]) {
        return pilasToMulangParsers[alias];
      }
    }
  }

  let entryPointParser = {
    tag: "EntryPoint",
    parse: parseEntryPoint
  };
  let repeatParser = {
    tag: "Repeat",
    parse: parseRepeat
  };
  let ifParser = {
    tag: "If",
    parse: parseIf
  };
  let untilParser = {
    tag: "While",
    parse: parseUntil
  };
  let numberParser = {
    tag: "MuNumber",
    parse: parseMuNumber
  };
  let procedureParser = {
    tag: "Procedure",
    parse: parseProcedure
  };
  let referenceParser = {
    tag: "Reference",
    parse: parseReference
  };
  let applicationParser = {
    tag: "Application",
    parse: parseApplication
  };
  let pilasToMulangParsers = {
    "al_empezar_a_ejecutar": entryPointParser,
    "repetir": repeatParser,
    "Si": ifParser,
    "SiNo": { ...ifParser,
      parse: parseIfElse
    },
    "Hasta": untilParser,
    "math_number": numberParser,
    "Numero": numberParser,
    "procedures_defnoreturn": procedureParser,
    "variables_get": { ...referenceParser,
      parse: parseVariable
    }
  };

  function buildSequenceAst(firstBlock) {
    if (!firstBlock || firstBlock.isShadow()) return (0, _pilasAst.createEmptyNode)();
    let siblings = (0, _blockUtils.getBlockSiblings)(firstBlock).filter(block => !block.isShadow());

    if (siblings.length) {
      return (0, _pilasAst.createNode)("Sequence", [firstBlock, ...siblings].map(b => buildBlockAst(b)));
    } else {
      return buildBlockAst(firstBlock);
    }
  }

  function parseMuNumber(block) {
    return parseFloat(block.getFieldValue("NUM"));
  }

  function parseEntryPoint(block) {
    return [block.type, buildSequenceAst((0, _blockUtils.getChild)(block))];
  }

  function referenceName(block) {
    return (0, _blockUtils.isProcedureCall)(block) ? block.getFieldValue('NAME') : (0, _blockUtils.isOperator)(block) ? block.getFieldValue('OP') : block.type;
  }

  function parseApplication(block) {
    return [(0, _pilasAst.createReference)(referenceName(block)), parseArguments(block)];
  }

  function parseReference(block) {
    return referenceName(block);
  }

  function parseVariable(block) {
    return block.getFieldValue("VAR");
  }

  function parseArguments(block) {
    return block.inputList.filter(input => input.type == Blockly.INPUT_VALUE).map(input => input.connection.targetBlock()).map(b => buildBlockAst(b)).concat(...parseText(block));
  }

  function parseText(block) {
    let text = block.getFieldValue("texto"); // TODO: Mega-hard-coded?

    if (!text) return [];
    return [(0, _pilasAst.createNode)("MuString", text)];
  }

  function parseRepeat(block) {
    let countBlock = block.getInputTargetBlock("count");
    let statements = block.getInputTargetBlock("block");
    return [buildBlockAst(countBlock), buildSequenceAst(statements)];
  }

  function parseUntil(block) {
    let condition = block.getInputTargetBlock("condition");
    let statements = block.getInputTargetBlock("block");
    return [negate(buildBlockAst(condition)), buildSequenceAst(statements)];
  }

  function parseIf(block) {
    let condition = block.getInputTargetBlock("condition");
    let statements = block.getInputTargetBlock("block");
    return [buildBlockAst(condition), buildSequenceAst(statements), (0, _pilasAst.createEmptyNode)()];
  }

  function parseIfElse(block) {
    let condition = block.getInputTargetBlock("condition");
    let statementsIf = block.getInputTargetBlock("block1");
    let statementsElse = block.getInputTargetBlock("block2");
    return [buildBlockAst(condition), buildSequenceAst(statementsIf), buildSequenceAst(statementsElse)];
  }

  function parseProcedure(block) {
    return [(0, _blockUtils.getName)(block), (0, _pilasAst.createNode)("Equation", parseEquation(block))];
  }

  function parseEquation(block) {
    return [parseEquationParams(block), parseEquationBody(block)];
  }

  function parseEquationParams(block) {
    return (0, _blockUtils.getParams)(block).map(argument => (0, _pilasAst.createNode)("VariablePattern", argument));
  }

  function parseEquationBody(block) {
    let bodyContents = buildSequenceAst((0, _blockUtils.getChild)(block));
    return (0, _pilasAst.createNode)("UnguardedBody", bodyContents);
  }

  function negate(condition) {
    return {
      tag: "Application",
      contents: [{
        tag: "Primitive",
        contents: "Negation"
      }, [condition]]
    };
  }
});
;define("pilasbloques/services/pilas", ["exports", "pilasbloques/components/listaImagenes"], function (_exports, _listaImagenes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * Provee acceso a pilasweb y sus eventos.
   *
   * @public
   * @module PilasService
   */

  /**
   * Pilas service is the component in charge of the communication with pilasweb (pilas engine) framework.
   * It is the interface in and out of the iframe where pilasweb is running.
   *
   * This service reports the event "errorDeActividad"
   *
   * @public
   * @class PilasService
   */
  var _default = Ember.Service.extend(Ember.Evented, {
    iframe: null,
    size: null,
    loading: true,
    currentChallenge: null,

    /**
     * Instantiates and runs pilas-engine (pilasweb) main framework.
     * Preloads needed challenge's images (TODO: decouple image preloading from fwk initialization).
     * Sets up messaging events from iframe.
     * NOTE: Doesn't load scene. For that you need to call setChallenge afterwards.
     * @param iframeElement is the iframe DOM where pilasengine will run.
     * @param size is the width and height in pixels of the main scene.
     * @param challenge is the Challenge object from which scene's images will be taken.
     */
    loadPilas(iframeElement, size, challenge) {
      this.set("iframe", iframeElement);
      this.set("size", size);
      this.set("currentChallenge", challenge);
      this.set("loading", true);
      this.conectarEventos();
      return new Promise(success => {
        // Cuidado: esto hace que no se pueda cargar una escena diferente en esta instancia de pilas.
        // La razón es que se le pregunta a la escena qué imágenes precargar.
        let listaImagenesSerializada = this.imagenesParaPrecargar(challenge).join("|");
        let pilasweb = this.evaluar(`
        var canvasElement = document.getElementById('canvas');
        var listaImagenes = "${listaImagenesSerializada}".split("|");
        var opciones = {ancho: ${size.width},
                        alto: ${size.height},
                        canvas: canvasElement,
                        data_path: 'libs/data',
                        imagenesExtra: listaImagenes,
                        cargar_imagenes_estandar: false,
                        silenciar_advertencia_de_multiples_ejecutar: true
                      };

        var pilas = pilasengine.iniciar(opciones);

        pilas;
      `);

        pilasweb.onready = () => {
          success();
          this.set("loading", false);
        };

        pilasweb.ejecutar();
        pilasweb.setFPS(100);
      });
    },

    async reloadPilas(challenge) {
      await this.loadPilas(this.get('iframe'), this.get('size'), challenge);
    },

    imagenesParaPrecargar(challenge) {
      //Le pregunto a la escena qué imágenes va a necesitar
      var imagenes = this.evaluar(`${this.nombreDeEscena(challenge.escena)}.imagenesPreCarga()`); //Si la escena no las sabe, cargo todas:

      imagenes = imagenes.length ? imagenes : _listaImagenes.default;
      if (challenge.imagesToPreload) imagenes = imagenes.concat(challenge.imagesToPreload);
      return imagenes;
    },

    nombreDeEscena(nombreOInicializadorDeEscena) {
      if (nombreOInicializadorDeEscena.indexOf('new') === -1) {
        // Significa que vino el nombre.
        return nombreOInicializadorDeEscena;
      } else {
        // Significa que hay una construcción en el string.
        // La expresión regular captura el nombre de la clase (\w+)
        // y el [1] accede al primer grupo de captura.
        return nombreOInicializadorDeEscena.match(/new\s+(\w+)\s*\(/)[1];
      }
    },

    /**
     * Libera los eventos y recursos instanciados por este servicio.
     *
     * @method liberarRecursos
     * @public
     */
    liberarRecursos() {
      this.desconectarEventos();
    },

    /**
     * Captura cualquier mensaje desde el iframe y lo propaga
     * como un evento de ember evented.
     *
     * Los eventos que se originan en el iframe tienen la forma:
     *
     *     {
     *       tipo: "tipoDeMensaje"    # Cualquiera de los listados más arriba.
     *       detalle: [...]           # string con detalles para ese evento.
     *     }
     *
     * Sin embargo esta función separa esa estructura para que sea más
     * sencillo capturarla dentro de ember.
     *
     * Por ejemplo, si queremos capturar un error (como hace la batería de tests),
     * podemos escribir:
     *
     *     pilas.on('errorDeActividad', function(motivoDelError) {
     *       // etc...
     *     });
     *
     * @method contectarEventos
     * @private
     *
     */
    conectarEventos() {
      $(window).on("message.fromIframe", e => {
        let datos = e.originalEvent.data;
        this.trigger(datos.tipo, datos.detalle);
      });
    },

    desconectarEventos() {
      $(window).off("message.fromIframe");
    },

    /**
     * Saves current challenge and switches pilas engine scene.
     * If the challenge is the same as the previous one, it restarts pilas engine scene.
     * If the challenge is different, reloads pilas engine, as we need to preload different images (TODO: decouple image preloading from pilas engine initialization)
     * Can be called any number of times, but loadPilas should have been called first once.
     * @param {*} challenge 
     */
    async setChallenge(challenge) {
      if (!challenge || !challenge.escena) throw "Scene missing in challenge";
      if (this.get('currentChallenge').id !== challenge.id) await this.reloadPilas(challenge);
      this.evaluar(`pilas.mundo.gestor_escenas.cambiar_escena(${this.sceneInitializer()})`);
    },

    sceneInitializer() {
      var initializer = this.get('currentChallenge').escena;

      if (initializer.indexOf('new') === -1) {
        // Means scene is just a class name
        initializer = `new ${initializer}()`;
      }

      return initializer;
    },

    estaResueltoElProblema() {
      return this.evaluar(`pilas.escena_actual().estaResueltoElProblema();`);
    },

    /**
     * Retorna una captura de pantalla de la escena en formato png/base64
     *
     * @method obtenerCapturaDePantalla
     * @public
     */
    obtenerCapturaDePantalla() {
      let iframeElement = this.iframe;
      return iframeElement.contentWindow.document.getElementById('canvas').toDataURL('image/png');
    },

    async restartScene() {
      this.evaluar("pilas.reiniciar()");
      await this.setChallenge(this.currentChallenge);
    },

    contarActoresConEtiqueta(etiqueta) {
      let codigo = `
      var actoresEnLaEscena = pilas.escena_actual().actores;

      var actoresConLaEtiqueta = actoresEnLaEscena.filter(function(actor) {
        return actor.tiene_etiqueta("${etiqueta}");
      });

      actoresConLaEtiqueta.length;
    `;
      return this.evaluar(codigo);
    },

    cambiarAModoDeLecturaSimple() {
      this.evaluar('pilas.cambiarAModoDeLecturaSimple()');
    },

    cambiarAModoDeLecturaNormal() {
      this.evaluar('pilas.cambiarAModoDeLecturaNormal()');
    },

    /**
     * Evalúa código directamente, sin reiniciar de ninguna forma.
     *
     * @method evaluar
     * @public
     */
    evaluar(codigo) {
      return this.get('iframe').contentWindow.eval(codigo);
    },

    habilitarModoTurbo() {
      this.evaluar('ComportamientoConVelocidad').modoTurbo = true;
      this.engine().ponerVelocidadMaxima();
    },

    deshabilitarModoTurbo() {
      this.evaluar('ComportamientoConVelocidad').modoTurbo = false;
      this.engine().ponerVelocidadNormal();
    },

    modoTurboEstaActivado() {
      return this.evaluar('ComportamientoConVelocidad').modoTurbo;
    },

    engine() {
      return this.evaluar('pilas');
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/platform", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    inElectron() {
      return /electron/i.test(navigator.userAgent);
    },

    online() {
      return !this.inElectron();
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/simple-read", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    storage: Ember.inject.service(),

    shouldShowSimpleRead(defaultValue) {
      return defaultValue || this.storage.getUseSimpleRead();
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/sniffer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  let isString = function (value) {
    return typeof value === 'string';
  };

  let lowercase = function (string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  let toInt = function (str) {
    return parseInt(str, 10);
  };

  var _default = Ember.Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,
    android: Ember.computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init() {
      this._super(...arguments);

      if (typeof FastBoot !== 'undefined') {
        return;
      }

      let _document = document;
      let _window = window;
      this.setProperties({
        _document,
        _window
      });
      let bodyStyle = _document.body && _document.body.style;
      let vendorPrefix, match;
      let vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;
      let transitions = false;
      let animations = false;

      if (bodyStyle) {
        for (let prop in bodyStyle) {
          match = vendorRegex.exec(prop);

          if (match) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || `${vendorPrefix}Transition` in bodyStyle);
        animations = !!('animation' in bodyStyle || `${vendorPrefix}Animation` in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);
      this.set('vendorPrefix', vendorPrefix);
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/storage", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    router: Ember.inject.service(),
    USER_KEY: 'PB_USER',
    ANALYTICS_KEY: 'PB_ANALYTICS_SESSION',
    TOS_ACCEPTED_KEY: 'PB_TOS_ACCEPTED',
    USE_NIGHT_THEME_KEY: 'PB_USE_NIGHT_THEME',
    USE_SIMPLE_READ_KEY: 'PB_USE_SIMPLE_READ',
    USE_TURBO_MODE_KEY: 'PB_USE_TURBO_MODE',
    SELECTED_LOCALE_KEY: 'PB_SELECTED_LOCALE',

    getUserId() {
      const user = this.getUser();
      return user && user.id;
    },

    getUser() {
      return this._get(this.USER_KEY);
    },

    saveUser(user) {
      this._save(this.USER_KEY, user);
    },

    getAnalyticsSession() {
      const session = this._get(this.ANALYTICS_KEY);

      return session && { ...session,
        lastInteraction: new Date(session.lastInteraction)
      };
    },

    saveAnalyticsSession(session) {
      this._save(this.ANALYTICS_KEY, session);
    },

    saveTermsAcceptance() {
      this._save(this.TOS_ACCEPTED_KEY, true);
    },

    termsAreAccepted() {
      return this._get(this.TOS_ACCEPTED_KEY);
    },

    getUseNightTheme() {
      return this._get(this.USE_NIGHT_THEME_KEY);
    },

    toggleNightTheme() {
      this._save(this.USE_NIGHT_THEME_KEY, !this.getUseNightTheme());
    },

    getUseSimpleRead() {
      return this._get(this.USE_SIMPLE_READ_KEY);
    },

    toggleSimpleRead() {
      this._save(this.USE_SIMPLE_READ_KEY, !this.getUseSimpleRead());
    },

    getUseTurboMode() {
      return this._get(this.USE_TURBO_MODE_KEY);
    },

    toggleTurboMode() {
      this._save(this.USE_TURBO_MODE_KEY, !this.getUseTurboMode());
    },

    saveSelectedLocale(selectedLocale) {
      this._save(this.SELECTED_LOCALE_KEY, selectedLocale);
    },

    getSelectedLocale() {
      return this._get(this.SELECTED_LOCALE_KEY);
    },

    clear() {
      localStorage.clear();
    },

    _get(key) {
      return this._doSafe(storage => JSON.parse(storage.getItem(key) || null));
    },

    _save(key) {
      let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this._doSafe(storage => storage.setItem(key, JSON.stringify(data)));
    },

    _doSafe(fn) {
      try {
        return fn(localStorage);
      } catch (e) {
        console.error("ERROR", e);
        this.router.transitionTo('clear');
      }
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("pilasbloques/services/text-measurer", ["exports", "ember-text-measurer/services/text-measurer"], function (_exports, _textMeasurer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
;define("pilasbloques/services/twitter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  //const URL = "http://localhost:3000/sendMessage";
  const URL_SEND_MESSAGE = "http://104.131.245.133:9914/sendMessage";

  var _default = Ember.Service.extend({
    compartir(mensaje, imagen) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: URL_SEND_MESSAGE,
          type: 'POST',
          dataType: 'json',
          contentType: "application/json",
          data: JSON.stringify({
            message: mensaje,
            media: imagen
          }),

          success(res) {
            resolve(res);
          },

          error(xhr) {
            console.error(xhr.responseText);
            reject(xhr.responseText);
          }

        });
      });
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/services/zoom", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    zoom: 100,

    getValue() {
      return this.zoom;
    },

    setValue(zoomValue) {
      this.set('zoom', zoomValue);
    }

  });

  _exports.default = _default;
});
;define("pilasbloques/templates/acercade", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7lY33aAA",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n\"],[8,\"header\",[],[[],[]],null],[2,\"\\n\"],[1,[30,[36,3],[[30,[36,2],null,null]],null]],[2,\"\\n\"],[10,\"div\"],[14,0,\"contenido-principal\"],[12],[2,\"\\n\\t\"],[10,\"div\"],[14,0,\"contenedor-acercade\"],[12],[2,\"\\n\\t\\t\"],[8,\"descripcion-acerca-de\",[],[[],[]],null],[2,\"\\n\\t\\t\"],[3,\" Componente necesario porque es usado desde pilas-engine-bloques-website. Ver scripts de construcción de ese proyecto \"],[2,\"\\n\\n\\t\\t\"],[10,\"p\"],[12],[1,[30,[36,0],[\"templates.acercade.yourCurrentVersion\"],null]],[2,\" \"],[1,[34,4]],[2,\"\\n\"],[6,[37,6],[[35,5]],null,[[\"default\"],[{\"statements\":[[2,\"\\t\\t\\t(\"],[1,[30,[36,0],[\"templates.acercade.youCanUpdate\"],null]],[2,\" \"],[1,[34,1]],[2,\")\\n\"]],\"parameters\":[]}]]],[2,\"\\t\\t\"],[13],[2,\"\\n\\t\\t\"],[10,\"p\"],[12],[2,\"\\n\\n\\t\\t\\t\"],[8,\"link\",[[24,0,\"visit-website-link\"]],[[\"@href\",\"@openOnNewTab\",\"@tooltip\"],[\"https://pilasbloques.program.ar/\",true,[30,[36,0],[\"templates.acercade.visitProjectWeb\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"fa fa-globe\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\" \"],[1,[30,[36,0],[\"templates.acercade.visitProjectWeb\"],null]],[2,\"\\n\\t\\t\\t\"]],\"parameters\":[]}]]],[2,\"\\n\\n\\t\\t\\t\"],[1,[34,7]],[2,\"\\n\\t\\t\"],[13],[2,\"\\n\\t\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"versionMasReciente\",\"-outlet\",\"component\",\"version\",\"hayActualizacion\",\"if\",\"pilas-update\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/acercade.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/application-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "F+B7GM27",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"],[8,\"spinner\",[],[[\"@centered\"],[true]],null]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/application-loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6LclM7v6",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\\n\"],[1,[34,2]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\",\"paper-toaster\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/challengue-creator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BweTGn8Z",
    "block": "{\"symbols\":[],\"statements\":[[10,\"iframe\"],[14,\"src\",\"libs/creador-de-desafios-pilasbloques/index.html\"],[14,0,\"challengue-creator\"],[12],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "pilasbloques/templates/challengue-creator.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/clear", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VQl7cVhq",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n  \"],[10,\"img\"],[14,\"src\",\"imagenes/logo.png\"],[12],[13],[2,\"\\n  \"],[8,\"clear-data\",[],[[],[]],null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "pilasbloques/templates/clear.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/book-navigation-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CG8134rv",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[8,\"paper-button\",[],[[\"@disabled\",\"@raised\",\"@fab\",\"@bubbles\",\"@href\"],[false,false,false,true,[30,[36,1],[\"libros.verLibro\",[35,0]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[1,[30,[36,2],[\"menu_book\"],[[\"class\"],[\"menu-button-icon\"]]]],[10,\"span\"],[14,0,\"menu-button-typography\"],[12],[18,1,null],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"index\",\"href-to\",\"paper-icon\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/book-navigation-button.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/breadcrumb-item", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vvqCTbFg",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,[37,3],[[30,[36,6],[[35,5],[30,[36,4],[[35,0],[35,0,[\"titulo\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"li\"],[15,0,[34,2]],[12],[2,\"\\n\"],[6,[37,3],[[35,1]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"            \"],[10,\"a\"],[15,6,[34,1]],[12],[18,1,null],[1,[35,0,[\"titulo\"]]],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"            \"],[10,\"a\"],[12],[18,1,null],[1,[35,0,[\"titulo\"]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"item\",\"href\",\"classes\",\"if\",\"and\",\"initial\",\"or\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/breadcrumb-item.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/breadcrumb", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "U8Y3BHQh",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"ul\"],[14,0,\"breadcrumb\"],[12],[2,\"\\n\\t\"],[18,1,null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/breadcrumb.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/bug-report-modal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lHD0UDif",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n\"],[8,\"modal\",[],[[\"@title\",\"@onClose\"],[[30,[36,0],[\"components.bugReportModal.problem\"],null],[30,[36,2],[[32,0],[35,1]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"p\"],[12],[1,[30,[36,0],[\"components.bugReportModal.problem\"],null]],[13],[2,\"\\n  \"],[10,\"p\"],[12],[1,[30,[36,0],[\"components.bugReportModal.error\"],null]],[13],[2,\"\\n  \"],[10,\"p\"],[12],[1,[30,[36,0],[\"components.bugReportModal.askTeacher\"],null]],[13],[2,\"\\n  \"],[10,\"p\"],[12],[1,[30,[36,0],[\"components.bugReportModal.mail\"],null]],[10,\"a\"],[14,6,\"mailto:pilasbloques@program.ar\"],[12],[2,\"pilasbloques@program.ar\"],[13],[13],[2,\"\\n  \"],[10,\"p\"],[12],[1,[30,[36,0],[\"components.bugReportModal.githubReport\"],null]],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"https://github.com/Program-AR/pilas-bloques/issues\",false]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"components.bugReportModal.issueTracker\"],null]]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\\n\\n\"],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"onClose\",\"action\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/bug-report-modal.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/button-to-challenge", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "T9seC7dA",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[8,\"breadcrumb\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,\"breadcrumb-item\",[],[[\"@href\",\"@initial\"],[[30,[36,2],[\"desafio\",[35,1,[\"id\"]],[30,[36,0],null,[[\"codigo\"],[\"\"]]]],null],true]],[[\"default\"],[{\"statements\":[[18,1,null]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"query-params\",\"challenge\",\"href-to\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/button-to-challenge.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "S4XbfeOc",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,[37,10],null,[[\"accent\",\"type\",\"disabled\",\"raised\",\"fab\",\"mini\",\"iconButton\",\"onClick\",\"title\",\"bubbles\",\"id\"],[[35,9],[35,8],[35,7],[35,6],[35,5],[35,4],[35,3],[35,2],[35,1],true,[35,0]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[18,1,null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"element-id\",\"tooltip\",\"onClick\",\"isButton\",\"isMini\",\"isFab\",\"isRaised\",\"isDisabled\",\"type\",\"accent\",\"paper-button\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/button.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/challenge-link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MyLqvFMc",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,4],[[35,1,[\"deshabilitado\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"img\"],[14,0,\"grayscale semi-transparente\"],[15,\"src\",[31,[\"images/desafios/\",[34,1,[\"nombreImagen\"]]]]],[12],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"ribbon right gray semi-transparente\"],[12],[10,\"a\"],[12],[1,[30,[36,3],[\"components.challengeLink.soon\"],null]],[13],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[[30,[36,2],[\"desafio\",[35,1],[30,[36,0],null,[[\"codigo\"],[\"\"]]]],null],false]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"img\"],[14,0,\"desafio-img\"],[15,\"src\",[31,[\"imagenes/desafios/\",[34,1,[\"nombreImagen\"]]]]],[12],[13],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"div\"],[14,0,\"pilas-desafio-titulo\"],[12],[1,[35,1,[\"titulo\"]]],[13]],\"hasEval\":false,\"upvars\":[\"query-params\",\"challenge\",\"href-to\",\"t\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/challenge-link.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/challenge-navigation-arrows", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "n62XGumC",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,2],[[35,0,[\"previousChallenge\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[8,\"button-to-challenge\",[[24,1,\"previous-challenge-arrow\"]],[[\"@challenge\"],[[34,0,[\"previousChallenge\"]]]],[[\"default\"],[{\"statements\":[[1,[30,[36,1],[\"keyboard_double_arrow_left\"],null]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,2],[[35,0,[\"nextChallenge\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"button-to-challenge\",[[24,1,\"next-challenge-arrow\"]],[[\"@challenge\"],[[34,0,[\"nextChallenge\"]]]],[[\"default\"],[{\"statements\":[[1,[30,[36,1],[\"keyboard_double_arrow_right\"],null]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"challenge\",\"paper-icon\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/challenge-navigation-arrows.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/challenge-workspace-buttons", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "a2TmUqb/",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"workspace-buttons flex layout-row\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n    \"],[10,\"input\"],[14,1,\"cargarActividadInput\"],[14,\"accept\",\".spbq\"],[14,0,\"hidden\"],[14,4,\"file\"],[12],[13],[2,\"\\n    \"],[10,\"a\"],[14,1,\"placeholder\"],[14,0,\"hidden\"],[12],[2,\"..\"],[13],[2,\"\\n    \"],[8,\"button\",[],[[\"@tooltip\",\"@isMini\",\"@isFab\",\"@isRaised\",\"@onClick\"],[[30,[36,0],[\"components.challengeWorkspaceButtons.open\"],null],true,true,true,[30,[36,1],[[32,0],\"abrirSolucion\"],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,2],[\"folder\"],null]]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,\"button\",[],[[\"@tooltip\",\"@isMini\",\"@isFab\",\"@isRaised\",\"@onClick\"],[[30,[36,0],[\"components.challengeWorkspaceButtons.save\"],null],true,true,true,[30,[36,1],[[32,0],\"guardarSolucion\"],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,2],[\"save\"],null]]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,\"button\",[],[[\"@tooltip\",\"@isMini\",\"@isFab\",\"@isRaised\",\"@onClick\"],[[30,[36,0],[\"components.challengeWorkspaceButtons.delete\"],null],true,true,true,[30,[36,1],[[32,0],[30,[36,4],[[35,3]],null],true],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,2],[\"delete\"],null]]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,\"button\",[],[[\"@tooltip\",\"@isMini\",\"@isFab\",\"@isRaised\",\"@onClick\"],[[30,[36,6],[[35,5],[30,[36,0],[\"components.challengeWorkspaceButtons.exit\"],null],[30,[36,0],[\"components.challengeWorkspaceButtons.fullScreen\"],null]],null],true,true,true,[34,7]]],[[\"default\"],[{\"statements\":[[1,[30,[36,2],[[30,[36,6],[[35,5],\"fullscreen_exit\",\"fullscreen\"],null]],null]]],\"parameters\":[]}]]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[8,\"modal-toggle\",[],[[\"@open\"],[[34,3]]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.challengeWorkspaceButtons.careful\"],null]],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[8,\"button\",[],[[\"@isRaised\",\"@onClick\"],[true,[30,[36,1],[[32,0],\"borrarSolucion\"],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"components.challengeWorkspaceButtons.delete\"],null]]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"action\",\"paper-icon\",\"deleteDialogIsOpen\",\"mut\",\"shouldUseFloatingMode\",\"if\",\"changeScreenMode\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/challenge-workspace-buttons.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/challenge-workspace", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MXuHDIoo",
    "block": "{\"symbols\":[],\"statements\":[[8,\"header\",[[24,1,\"header-workspace\"]],[[\"@book\",\"@challenge\",\"@chapter\",\"@group\"],[[34,4,[\"grupo\",\"capitulo\",\"libro\"]],[34,4],[34,4,[\"grupo\",\"capitulo\"]],[34,4,[\"grupo\"]]]],null],[2,\"\\n\\n\"],[10,\"div\"],[15,0,[31,[\"workspace flex layout-column \",[30,[36,7],[[30,[36,6],[[30,[36,2],[[32,0],[35,5]],null]],null],\"simple-read-mode\"],null]]]],[12],[2,\"\\n\\n\"],[6,[37,7],[[30,[36,9],[[30,[36,8],[\"isMobile\"],null],[30,[36,8],[\"isPortrait\"],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"phone-rotation-warning\",[],[[\"@modoLecturaSimple\"],[[30,[36,6],[[30,[36,2],[[32,0],[35,5]],null]],null]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,11],[[35,10]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"scene-details\",[[24,0,\"exercise-details\"]],[[\"@model\",\"@cargando\"],[[34,4],[34,3]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"div\"],[14,0,\"flex layout-row\"],[12],[2,\"\\n    \"],[8,\"paper-card\",[[16,0,[30,[36,7],[[35,10],\"flex-grow pilas-blockly-container floating-mode\",\"flex-grow pilas-blockly-container\"],null]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,\"pilas-blockly\",[],[[\"@guardar\",\"@registrarPrimerCodigo\",\"@hash\",\"@idAlumno\",\"@codigo\",\"@showCode\",\"@cargando\",\"@modelActividad\",\"@cuandoEjecuta\",\"@model\",\"@pasoAPasoHabilitado\",\"@persistirSolucionEnURL\",\"@debeMostrarFinDeDesafio\",\"@pilasService\",\"@bloques\",\"@onChangeWorkspace\",\"@onTerminoEjecucion\",\"@onErrorDeActividad\",\"@shouldUseFloatingMode\",\"@changeScreenMode\"],[\"guardar\",\"registrarPrimerCodigo\",[34,12],[34,13],[34,14],[34,15],[34,3],[34,4],[34,16],[34,4],[34,4,[\"debugging\"]],[34,17],[34,18],[34,19],[34,4,[\"bloques\"]],[34,20],[34,21],[34,22],[34,10],[30,[36,2],[[32,0],\"changeScreenMode\"],null]]],null],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[8,\"scene-buttons\",[],[[\"@cargando\",\"@isPausedOnBreackpoint\",\"@needShowRestartButton\",\"@needShowStepByStepButtons\",\"@pilas\",\"@reset\",\"@run\",\"@running\",\"@shouldUseFloatingMode\",\"@step\",\"@step-by-step-execution\"],[[34,3],[34,23],[34,24],[34,25],[34,19],[30,[36,2],[[32,0],\"reiniciar\",false],null],[30,[36,2],[[32,0],\"ejecutar\",false],null],[34,26],[34,10],[30,[36,2],[[32,0],\"step\",true],null],[30,[36,2],[[32,0],\"ejecutar\",true],null]]],null],[2,\"\\n\\n      \"],[8,\"scene\",[[24,0,\"flex-nogrow\"],[24,1,\"draggable\"]],[[\"@cargando\",\"@challenge\",\"@hideScene\",\"@onReady\",\"@shouldUseFloatingMode\"],[[34,3],[34,4],[30,[36,2],[[32,0],\"hideScene\"],null],[30,[36,2],[[32,0],\"onSceneReady\"],null],[34,10]]],null],[2,\"\\n\\n    \"],[13],[2,\"\\n\\n  \"],[13],[2,\"\\n\\n\"],[6,[37,11],[[35,10]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"footer\",[[24,0,\"app-footer\"]],[[\"@cargando\",\"@openReportAProblemModel\"],[[34,3],[30,[36,2],[[32,0],[30,[36,1],[[35,0]],null]],null]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,7],[[35,0]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"bug-report-modal\",[],[[\"@onClose\"],[[30,[36,2],[[32,0],[30,[36,1],[[35,0]],null],false],null]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"showReportAProblemModel\",\"mut\",\"action\",\"cargando\",\"model\",\"shouldShowSimpleRead\",\"compute\",\"if\",\"media\",\"and\",\"shouldUseFloatingMode\",\"unless\",\"hash\",\"idAlumno\",\"codigo\",\"showCode\",\"cuandoEjecuta\",\"persistirSolucionEnURL\",\"debeMostrarFinDeDesafio\",\"pilas\",\"onChangeWorkspace\",\"onTerminoEjecucion\",\"onErrorDeActividad\",\"estaPausadoEnUnBreackpoint\",\"debeMostarReiniciar\",\"debeMostrarPasoHabilitado\",\"ejecutando\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/challenge-workspace.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/challenges-book", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "R0JeCUrY",
    "block": "{\"symbols\":[],\"statements\":[[8,\"link\",[[24,\"data-test-book\",\"\"]],[[\"@href\",\"@openOnNewTab\"],[[30,[36,1],[\"libros.verLibro\",[35,0]],null],false]],[[\"default\"],[{\"statements\":[[2,\"\\n\\n\"],[6,[37,2],[[35,0,[\"imagen\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"exercises-book-image\"],[12],[2,\"\\n      \"],[10,\"img\"],[15,\"src\",[31,[\"imagenes/libros/\",[34,0,[\"imagen\"]]]]],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"h3\"],[14,0,\"book-title\"],[15,\"data-test-book-id\",[34,0,[\"id\"]]],[14,\"data-test-book-title\",\"\"],[12],[1,[35,0,[\"titulo\"]]],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"challenges-book-description\"],[12],[2,\"\\n    \"],[10,\"i\"],[14,\"data-test-book-description\",\"\"],[12],[1,[35,0,[\"descripcion\"]]],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"book\",\"href-to\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/challenges-book.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/clear-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "uR0Da5zK",
    "block": "{\"symbols\":[],\"statements\":[[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.clearData.deleting\"],null]],[2,\"\\n  \"],[8,\"spinner\",[],[[\"@centered\"],[true]],null],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/clear-data.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/collapsable", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nX4X5s3T",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,\"div\"],[24,0,\"collapsable-title\"],[4,[38,1],[[32,0],\"toggle\"],null],[12],[2,\"\\n  \"],[1,[34,2]],[2,\"\\n\"],[6,[37,4],[[35,3]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,0],[\"keyboard_arrow_up\"],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[1,[30,[36,0],[\"keyboard_arrow_down\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"],[6,[37,4],[[35,3]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[18,1,null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"paper-icon\",\"action\",\"title\",\"isExpanded\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/collapsable.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/congratulations-modal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kVU+E8nq",
    "block": "{\"symbols\":[],\"statements\":[[8,\"fireworks\",[],[[],[]],null],[2,\"\\n\"],[8,\"modal\",[],[[\"@title\",\"@onClose\"],[[30,[36,0],[\"components.congratulationsModal.youDidIt\"],null],[30,[36,2],[[32,0],[35,1]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n    \"],[10,\"img\"],[14,\"src\",\"imagenes/libros/primer-ciclo.png\"],[12],[13],[2,\"\\n    \"],[10,\"p\"],[12],[10,\"strong\"],[12],[1,[30,[36,0],[\"components.congratulationsModal.toThink\"],null]],[13],[2,\" \"],[1,[30,[36,0],[\"components.congratulationsModal.otherSolutions\"],null]],[13],[2,\"\\n    \"],[10,\"p\"],[12],[1,[30,[36,0],[\"components.congratulationsModal.concepts\"],null]],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"onClose\",\"action\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/congratulations-modal.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/create-custom-challenge", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JLKERA2j",
    "block": "{\"symbols\":[],\"statements\":[[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[[30,[36,0],[\"challengue-creator\"],null],false]],[[\"default\"],[{\"statements\":[[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"exercises-book-image\"],[12],[2,\"\\n    \"],[10,\"img\"],[14,\"src\",\"imagenes/libros/create-custom-challenges.png\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"h3\"],[14,0,\"book-title\"],[12],[1,[30,[36,1],[\"components.createCustomChallenge.create\"],null]],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"challenges-book-description\"],[12],[2,\"\\n    \"],[10,\"i\"],[12],[1,[30,[36,1],[\"components.createCustomChallenge.custom\"],null]],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"href-to\",\"t\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/create-custom-challenge.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/descripcion-acerca-de", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "gUzmmH3Q",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h1\"],[12],[1,[30,[36,0],[\"components.descripcionAcercaDe.about\"],null]],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.app\"],null]],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.challenges\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"h2\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.blocks\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.develop\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"h2\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.positive\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"ul\"],[12],[2,\"\\n\"],[10,\"li\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.concept\"],null]],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.difficulties\"],null]],[2,\"\\n\"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"h2\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.difference\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.learning\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"h2\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.sequence\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.plan\"],null]],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"https://program.ar/mision/\",true]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"components.descripcionAcercaDe.here\"],null]]],\"parameters\":[]}]]],[2,\".\\n\"],[13],[2,\"\\n\\n\"],[10,\"h2\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.whoCanDo\"],null]],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.activities\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"h2\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.anyone\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.tool\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"h2\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.contact\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.anyDoubts\"],null]],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"mailto:pilasbloques@program.ar\",false]],[[\"default\"],[{\"statements\":[[2,\"pilasbloques@program.ar\"]],\"parameters\":[]}]]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"h2\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.aboutAuthors\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.developed\"],null]],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"http://program.ar/\",true]],[[\"default\"],[{\"statements\":[[2,\"Program.AR\"]],\"parameters\":[]}]]],[2,\" - \"],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"http://www.fundacionsadosky.org.ar/\",true]],[[\"default\"],[{\"statements\":[[2,\"Fundación Sadosky\"]],\"parameters\":[]}]]],[2,\" \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.withTheCollaborationOf\"],null]],[2,\" \"],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"https://huayra.educar.gob.ar/\",true]],[[\"default\"],[{\"statements\":[[2,\"Huayra\"]],\"parameters\":[]}]]],[2,\" \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.usesTool\"],null]],[2,\" \"],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"http://pilas-engine.com.ar/\",true]],[[\"default\"],[{\"statements\":[[2,\"Pilas Engine Web\"]],\"parameters\":[]}]]],[2,\" \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.developedBy\"],null]],[2,\" \"],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"https://github.com/hugoruscitti\",true]],[[\"default\"],[{\"statements\":[[2,\"Hugo Ruscitti\"]],\"parameters\":[]}]]],[2,\".\\n\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.didacticSequence\"],null]],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"http://program.ar/\",true]],[[\"default\"],[{\"statements\":[[2,\"Program.AR\"]],\"parameters\":[]}]]],[1,[30,[36,0],[\"components.descripcionAcercaDe.material\"],null]],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.descripcionAcercaDe.iniciative\"],null]],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"https://program.ar/\",true]],[[\"default\"],[{\"statements\":[[2,\"program.ar\"]],\"parameters\":[]}]]],[2,\" \\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/descripcion-acerca-de.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/disclaimer-principal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MqJUwJam",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"div\"],[14,0,\"disclaimer-container\"],[12],[2,\"\\n  \"],[8,\"paper-card\",[[24,0,\"disclaimer\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,\"programar-disclaimer\",[],[[],[]],null],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[8,\"paper-card\",[[24,0,\"disclaimer\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,\"register-disclaimer\",[],[[],[]],null],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[18,1,null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/disclaimer-principal.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/fireworks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TMipQfeD",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"pyro\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"before\"],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"after\"],[12],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/fireworks.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/footer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Y0Mi9KqL",
    "block": "{\"symbols\":[],\"statements\":[[8,\"paper-card\",[[24,0,\"footer-card flex footer\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,7],[[35,6]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[8,\"spinner\",[],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"layout-row flex-grow\"],[12],[2,\"\\n    \"],[10,\"a\"],[14,0,\"program-ar-logo\"],[14,6,\"http://program.ar\"],[12],[13],[2,\"\\n    \"],[10,\"p\"],[14,0,\"app-version\"],[12],[10,\"code\"],[12],[1,[30,[36,0],[\"components.footer.version\"],null]],[13],[13],[1,[30,[36,1],null,[[\"class\"],[\"app-version\"]]]],[2,\"\\n    \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n    \"],[8,\"paper-button\",[],[[\"@onClick\",\"@disabled\",\"@raised\",\"@fab\",\"@bubbles\"],[[30,[36,3],[[32,0],[35,2]],null],false,false,false,true]],[[\"default\"],[{\"statements\":[[1,[30,[36,4],[\"help\"],[[\"class\"],[\"menu-button-icon\"]]]],[10,\"span\"],[14,0,\"menu-button-typography\"],[12],[1,[30,[36,0],[\"components.footer.problem\"],null]],[13]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,\"paper-button\",[],[[\"@disabled\",\"@raised\",\"@fab\",\"@bubbles\",\"@href\"],[false,false,false,true,[30,[36,5],[\"acercade\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[30,[36,4],[\"info\"],[[\"class\"],[\"menu-button-icon\"]]]],[10,\"span\"],[14,0,\"menu-button-typography\"],[12],[1,[30,[36,0],[\"components.footer.about\"],null]],[13]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"version\",\"openReportAProblemModel\",\"action\",\"paper-icon\",\"href-to\",\"cargando\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/footer.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RQ5V8/Ke",
    "block": "{\"symbols\":[],\"statements\":[[8,\"paper-toolbar\",[[24,0,\"header\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[8,\"paper-toolbar-tools\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\\n    \"],[10,\"a\"],[14,0,\"pilas-bloques-logo\"],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"imagenes/logo.png\"],[12],[13],[13],[2,\"\\n\\n\"],[6,[37,9],[[30,[36,8],[[35,1],[35,0]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n      \"],[10,\"span\"],[14,0,\"header-title\"],[12],[1,[30,[36,7],[\"components.header.tool\"],null]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,6],[[30,[36,8],[[35,1],[35,0]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,6],[[30,[36,5],[\"isMobile\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[8,\"navigation-menu\",[],[[\"@book\",\"@challenge\",\"@chapter\",\"@group\",\"@hidden\"],[[34,0],[34,1],[34,2],[34,3],[34,4]]],null],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n        \"],[8,\"navigation-breadcrumb\",[],[[\"@book\",\"@challenge\",\"@chapter\",\"@group\",\"@hidden\"],[[34,0],[34,1],[34,2],[34,3],[34,4]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[8,\"challenge-navigation-arrows\",[],[[\"@challenge\"],[[34,1]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n    \\n    \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n\\n    \"],[8,\"language-menu\",[],[[],[]],null],[2,\"\\n    \\n    \"],[8,\"simple-read-toggle\",[],[[\"@book\"],[[30,[36,8],[[35,0],[35,2,[\"libro\"]]],null]]],null],[2,\"\\n\\n    \"],[8,\"night-mode-toggle\",[],[[],[]],null],[2,\"\\n       \\n\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\\n\"]],\"hasEval\":false,\"upvars\":[\"book\",\"challenge\",\"chapter\",\"group\",\"openCustomScene\",\"media\",\"if\",\"t\",\"or\",\"unless\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/header.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/import-custom-challenge", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6Xwa/3YJ",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"link\"],[15,\"onClick\",[30,[36,0],[[32,0],\"importarProyecto\"],null]],[12],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"exercises-book-image\"],[12],[2,\"\\n    \"],[10,\"img\"],[14,\"src\",\"imagenes/libros/import-custom-challenges.png\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"h3\"],[14,0,\"book-title\"],[12],[1,[30,[36,1],[\"components.importCustomChallenge.import\"],null]],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"challenges-book-description\"],[12],[2,\"\\n    \"],[10,\"i\"],[12],[1,[30,[36,1],[\"components.importCustomChallenge.custom\"],null]],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"input\"],[14,1,\"cargarProyectoInput\"],[14,\"accept\",\".pbc\"],[14,0,\"hidden\"],[14,4,\"file\"],[12],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\",\"t\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/import-custom-challenge.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/language-menu", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/1PDxXfg",
    "block": "{\"symbols\":[\"menu\",\"content\",\"localeCode\"],\"statements\":[[8,\"paper-menu\",[],[[\"@offset\"],[\"5 43\"]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,\"paper-tooltip\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[30,[36,3],[\"changeLanguage\"],null]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\\n    \"],[8,[32,1,[\"trigger\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,\"paper-button\",[[24,1,\"language-menu\"],[24,0,\"md-menu-origin\"]],[[\"@iconButton\"],[true]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[1,[30,[36,4],[\"language\"],null]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\\n    \"],[8,[32,1,[\"content\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,7],[[30,[36,6],[[30,[36,6],[[35,5]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,[32,2,[\"menu-item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[8,\"paper-button\",[],[[\"@onClick\"],[[30,[36,0],[[32,0],\"setLocale\",[32,3]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n                \"],[10,\"span\"],[14,0,\"menu-item-typography\"],[12],[1,[30,[36,2],[[30,[36,0],[[32,0],[35,1]],null],[32,3]],null]],[13],[2,\"\\n            \"]],\"parameters\":[]}]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\"\\n\\n    \"]],\"parameters\":[2]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"action\",\"languageName\",\"compute\",\"t\",\"paper-icon\",\"localeCodes\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/language-menu.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "EyQTZ1yA",
    "block": "{\"symbols\":[\"&attrs\",\"&default\"],\"statements\":[[6,[37,2],[[30,[36,5],[[35,4,[\"inElectron\"]]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[11,\"a\"],[17,1],[24,0,\"link\"],[4,[38,3],[[32,0],\"abrirDesdeElectron\",[35,0]],null],[12],[18,2,null],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[11,\"a\"],[17,1],[24,0,\"link\"],[16,6,[34,0]],[16,\"target\",[30,[36,2],[[35,1],\"_blank\",\"\"],null]],[12],[18,2,null],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"href\",\"openOnNewTab\",\"if\",\"action\",\"platform\",\"compute\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/link.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3JQtsH6M",
    "block": "{\"symbols\":[\"form\",\"card\",\"title\",\"text\"],\"statements\":[[10,\"div\"],[14,0,\"login\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"login-item\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[1,[30,[36,0],[\"components.login.already\"],null]],[13],[2,\"\\n  \"],[8,\"paper-form\",[],[[\"@onSubmit\"],[[30,[36,1],[[32,0],\"doLogin\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,\"pb-input\",[],[[\"@label\",\"@model\",\"@required\"],[[30,[36,0],[\"components.login.username\"],null],[34,2,[\"username\"]],true]],null],[2,\"\\n\\n    \"],[8,\"pb-input\",[],[[\"@type\",\"@label\",\"@model\",\"@required\"],[\"password\",[30,[36,0],[\"components.login.password\"],null],[34,2,[\"password\"]],true]],null],[2,\"\\n\\n\"],[6,[37,4],[[35,3]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,\"paper-card\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"title\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,3,[\"text\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[10,\"p\"],[12],[1,[30,[36,0],[\"components.login.wrong\"],null]],[13],[2,\"\\n          \"]],\"parameters\":[4]}]]],[2,\"\\n        \"]],\"parameters\":[3]}]]],[2,\"\\n      \"]],\"parameters\":[2]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,\"progress-button\",[[24,4,\"submit\"]],[[\"@loading\"],[[34,5,[\"loading\",\"login\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[30,[36,0],[\"components.login.login\"],null]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"parameters\":[1]}]]],[2,\"\\n\\n  \"],[10,\"br\"],[12],[13],[2,\"\\n  \"],[8,\"link\",[],[[\"@href\"],[[30,[36,6],[\"password-recovery\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[1,[30,[36,0],[\"components.login.forgot\"],null]],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"login-item\"],[12],[2,\"\\n  \"],[10,\"img\"],[14,0,\"login-header\"],[14,\"src\",\"imagenes/session/login.png\"],[12],[13],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\" \"],[1,[30,[36,0],[\"components.login.dontHaveUser\"],null]],[2,\" \"],[13],[2,\"\\n    \"],[8,\"link\",[],[[\"@href\"],[[30,[36,6],[\"register\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[30,[36,0],[\"components.login.register\"],null]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"action\",\"credentials\",\"wrongLogin\",\"if\",\"pilasBloquesApi\",\"href-to\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/login.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/modal-ayuda", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FIyF/J/v",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,[37,5],[[35,4]],null,[[\"default\"],[{\"statements\":[[6,[37,3],null,[[\"onClose\",\"targetAttachment\",\"translucentOverlay\"],[[30,[36,0],[[32,0],\"close\"],null],\"center\",true]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[1,[30,[36,1],null,[[\"title\",\"close\"],[\"Ayuda\",[30,[36,0],[[32,0],\"close\"],null]]]]],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"modal-body\"],[12],[2,\"\\n    \"],[18,1,null],[2,\"\\n\\n    \"],[10,\"p\"],[12],[1,[30,[36,2],[\"components.modalAyuda.help\"],null]],[13],[2,\"\\n\\n    \"],[10,\"p\"],[12],[1,[30,[36,2],[\"components.modalAyuda.firstSteps\"],null]],[13],[2,\"\\n\\n    \"],[10,\"img\"],[14,\"src\",\"imagenes/ayuda/seleccionar.gif\"],[14,0,\"img-border\"],[12],[13],[2,\"\\n\\n    \"],[10,\"p\"],[12],[1,[30,[36,2],[\"components.modalAyuda.categories\"],null]],[13],[2,\"\\n\\n    \"],[10,\"p\"],[12],[1,[30,[36,2],[\"components.modalAyuda.dragAndDrop\"],null]],[13],[2,\"\\n\\n    \"],[10,\"img\"],[14,\"src\",\"imagenes/ayuda/arrastrar.gif\"],[14,0,\"img-border\"],[12],[13],[2,\"\\n\\n    \"],[10,\"p\"],[12],[1,[30,[36,2],[\"components.modalAyuda.continue\"],null]],[13],[2,\"\\n\\n    \"],[10,\"img\"],[14,\"src\",\"imagenes/ayuda/ejecutar.gif\"],[14,0,\"img-border\"],[12],[13],[2,\"\\n\\n    \"],[10,\"p\"],[12],[1,[30,[36,2],[\"components.modalAyuda.delete\"],null]],[13],[2,\"\\n\\n    \"],[10,\"img\"],[14,\"src\",\"imagenes/ayuda/borrar.gif\"],[14,0,\"img-border\"],[12],[13],[2,\"\\n\\n  \"],[13],[2,\"\\n\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"action\",\"modal-title\",\"t\",\"modal-dialog\",\"mostrar\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/modal-ayuda.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/modal-title", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vtBuYyeU",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"h4\"],[14,0,\"modal-title\"],[12],[1,[34,0]],[2,\" \"],[11,\"button\"],[24,1,\"cerrar-modal\"],[24,0,\"pull-right btn btn-xs btn-default\"],[4,[38,1],[[32,0],\"ocultar\"],null],[12],[10,\"i\"],[14,0,\"fa fa-close fa-2x\"],[14,\"aria-hidden\",\"true\"],[12],[13],[13],[13],[2,\"\\n\\n\"],[18,1,null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"title\",\"action\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/modal-title.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/modal-toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "F5/zexJk",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,[37,4],[[35,1]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[8,\"modal\",[],[[\"@title\",\"@onClose\"],[[34,0],[30,[36,3],[[32,0],[30,[36,2],[[35,1]],null],false],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[18,1,null],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"title\",\"open\",\"mut\",\"action\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/modal-toggle.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/modal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3TokQLod",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,[37,10],null,[[\"class\",\"onClose\",\"fullscreen\",\"origin\",\"parent\",\"clickOutsideToClose\"],[\"flex\",[35,0],true,[35,9],[35,8],true]],[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"paper-toolbar\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,\"paper-toolbar-tools\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[10,\"h2\"],[12],[1,[34,4]],[13],[2,\"\\n            \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n            \"],[8,\"button\",[],[[\"@onClick\",\"@isButton\"],[[34,0],true]],[[\"default\"],[{\"statements\":[[1,[30,[36,5],[\"close\"],null]]],\"parameters\":[]}]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,\"paper-dialog-content\",[[24,0,\"layout-column\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[18,1,null],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,7],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"paper-dialog-actions\",[[24,0,\"layout-row\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[8,\"button\",[],[[\"@onClick\"],[[34,0]]],[[\"default\"],[{\"statements\":[[1,[34,1]]],\"parameters\":[]}]]],[2,\"\\n            \"],[8,\"button\",[],[[\"@onClick\"],[[34,2]]],[[\"default\"],[{\"statements\":[[1,[34,3]]],\"parameters\":[]}]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"onClose\",\"cancel\",\"onSuccess\",\"success\",\"title\",\"paper-icon\",\"hasButtons\",\"if\",\"dialogParent\",\"dialogOrigin\",\"paper-dialog\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/modal.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/navigation-breadcrumb", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DLq9duy1",
    "block": "{\"symbols\":[],\"statements\":[[8,\"breadcrumb\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \\n\"],[2,\"    \"],[8,\"breadcrumb-item\",[[24,0,\"challenge-title\"]],[[\"@item\",\"@selected\"],[[34,4],true]],null],[2,\"\\n    \\n\"],[6,[37,5],[[35,1]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"breadcrumb-item\",[],[[\"@item\",\"@href\"],[[34,0],[30,[36,2],[\"libros.verLibro\",[35,1,[\"id\"]]],null]]],null],[2,\"\\n        \\n\"],[2,\"        \"],[8,\"breadcrumb-item\",[],[[\"@item\",\"@href\"],[[34,3],[30,[36,2],[\"libros.verLibro\",[35,1,[\"id\"]]],null]]],null],[2,\"\\n        \\n\"],[2,\"        \"],[8,\"breadcrumb-item\",[],[[\"@item\",\"@href\"],[[34,1],[30,[36,2],[\"libros.verLibro\",[35,1,[\"id\"]]],null]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \\n\"],[2,\"    \"],[8,\"breadcrumb-item\",[],[[\"@href\",\"@initial\"],[[30,[36,2],[\"index\"],null],true]],[[\"default\"],[{\"statements\":[[1,[30,[36,6],[\"home\"],null]]],\"parameters\":[]}]]],[2,\"\\n\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"group\",\"book\",\"href-to\",\"chapter\",\"challenge\",\"if\",\"paper-icon\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/navigation-breadcrumb.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/navigation-menu", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+f0v0gG/",
    "block": "{\"symbols\":[\"menu\",\"content\"],\"statements\":[[8,\"paper-menu\",[],[[\"@offset\"],[\"5 43\"]],[[\"default\"],[{\"statements\":[[2,\"\\n    \\n    \"],[8,[32,1,[\"trigger\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,\"paper-button\",[[24,1,\"navigation-menu\"],[24,0,\"md-menu-origin\"]],[[\"@iconButton\"],[true]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[1,[30,[36,6],[\"menu\"],null]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n    \\n    \"],[8,[32,1,[\"content\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\\n\"],[6,[37,5],[[35,0]],null,[[\"default\"],[{\"statements\":[[2,\"                \"],[8,[32,2,[\"menu-item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[8,\"paper-button\",[],[[\"@disabled\",\"@raised\",\"@fab\",\"@bubbles\",\"@href\"],[false,false,false,true,[30,[36,1],[\"libros.verLibro\",[35,0,[\"id\"]]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n                        \"],[10,\"span\"],[14,0,\"menu-item-typography\"],[12],[1,[35,0,[\"titulo\"]]],[13],[2,\"\\n                    \"]],\"parameters\":[]}]]],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n\\n\"],[2,\"                \"],[8,[32,2,[\"menu-item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[8,\"paper-button\",[],[[\"@disabled\",\"@raised\",\"@fab\",\"@bubbles\",\"@href\"],[false,false,false,true,[30,[36,1],[\"libros.verLibro\",[35,0,[\"id\"]]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n                        \"],[10,\"span\"],[14,0,\"menu-item-typography\"],[12],[1,[35,3,[\"titulo\"]]],[13],[2,\"\\n                    \"]],\"parameters\":[]}]]],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n\\n\"],[6,[37,5],[[35,4,[\"grupo\",\"titulo\"]]],null,[[\"default\"],[{\"statements\":[[2,\"                    \"],[8,[32,2,[\"menu-item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n                        \"],[8,\"paper-button\",[],[[\"@disabled\",\"@raised\",\"@fab\",\"@bubbles\",\"@href\"],[false,false,false,true,[30,[36,1],[\"libros.verLibro\",[35,0,[\"id\"]]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n                            \"],[10,\"span\"],[14,0,\"menu-item-typography\"],[12],[1,[35,2,[\"titulo\"]]],[13],[2,\"\\n                        \"]],\"parameters\":[]}]]],[2,\"\\n                    \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"            \\n\"],[2,\"            \"],[8,[32,2,[\"menu-item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n                \"],[8,\"paper-button\",[],[[\"@disabled\",\"@raised\",\"@fab\",\"@bubbles\"],[false,false,false,true]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"menu-item-typography challenge-title\"],[12],[1,[35,4,[\"titulo\"]]],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"]],\"parameters\":[]}]]],[2,\"\\n\\n        \"]],\"parameters\":[2]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"book\",\"href-to\",\"group\",\"chapter\",\"challenge\",\"if\",\"paper-icon\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/navigation-menu.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/night-mode-toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ARovR504",
    "block": "{\"symbols\":[],\"statements\":[[8,\"toggle\",[[24,0,\"night-mode\"]],[[\"@element-id\",\"@tooltip\",\"@isChecked\",\"@onToggle\"],[\"night-mode-slider\",[30,[36,2],[[35,1],[30,[36,0],[\"components.nightModeToggle.lightTheme\"],null],[30,[36,0],[\"components.nightModeToggle.darkTheme\"],null]],null],[34,1],[30,[36,3],[[32,0],\"toggleTheme\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"i\"],[15,0,[30,[36,2],[[35,1],\"slider-icon fa fa-moon-o moon\",\"slider-icon fa fa-sun-o sun\"],null]],[12],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"isNightTheme\",\"if\",\"action\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/night-mode-toggle.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/password-confirmation", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xUzVmqKx",
    "block": "{\"symbols\":[],\"statements\":[[8,\"pb-input\",[],[[\"@type\",\"@label\",\"@model\",\"@customValidations\",\"@required\"],[\"password\",[30,[36,0],[\"components.passwordConfirmation.password\"],null],[30,[36,3],[[35,2],[35,1]],null],[30,[36,6],[[30,[36,5],[[32,0],[35,4]],null],[35,2]],null],true]],null]],\"hasEval\":false,\"upvars\":[\"t\",\"passwordConfirm\",\"password\",\"if\",\"passwordConfirmValidation\",\"action\",\"compute\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/password-confirmation.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pb-input", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ntD3EhwG",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"paper-input\",[[17,1]],[[\"@type\",\"@label\",\"@value\",\"@onChange\",\"@errorMessages\",\"@customValidations\",\"@focusOut\",\"@onKeyDown\",\"@required\"],[[34,1],[34,2],[34,3],[30,[36,5],[[32,0],[30,[36,4],[[35,3]],null]],null],[30,[36,7],null,[[\"required\"],[[30,[36,6],[\"templates.pb-input.requiredField\"],null]]]],[30,[36,10],[[35,9],[30,[36,8],null,null]],null],[34,11],[34,12],[34,13]]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,14],[[35,0]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"md-input-messages-animation md-auto-hide\"],[14,1,\"ember267-error-messages\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,1,\"error-input-ember267-0\"],[14,0,\"paper-input-error ng-enter ng-enter-active md-input-message-animation\"],[14,5,\"opacity: 1; margin-top: 0\"],[12],[2,\"\\n        \"],[1,[34,0]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"error\",\"type\",\"label\",\"model\",\"mut\",\"action\",\"t\",\"hash\",\"array\",\"customValidations\",\"or\",\"focusOut\",\"onKeyDown\",\"required\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pb-input.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/personal-survey", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FbLEHmCA",
    "block": "{\"symbols\":[],\"statements\":[[3,\" Nothing to show, it's all javascript \"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/personal-survey.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/phone-rotation-warning", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hMrlhBt8",
    "block": "{\"symbols\":[],\"statements\":[[8,\"paper-card\",[[24,0,\"phone-rotation\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"span\"],[15,0,[30,[36,1],[[35,0],\"uppercase\",\"\"],null]],[12],[2,\"\\n        \"],[1,[30,[36,2],[\"components.phoneRotationWarning.rotate\"],null]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"img\"],[14,\"src\",\"imagenes/phone-rotation.png\"],[12],[13],[2,\"\\n    \"],[10,\"span\"],[15,0,[30,[36,1],[[35,0],\"uppercase\",\"\"],null]],[12],[2,\"\\n        \"],[1,[30,[36,2],[\"components.phoneRotationWarning.widerScreen\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"modoLecturaSimple\",\"if\",\"t\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/phone-rotation-warning.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-blockly", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "C9zktWMk",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,12],[[35,11]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[8,\"spinner\",[],[[\"@centered\"],[true]],null],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[8,\"ember-blockly\",[],[[\"@mediaFolder\",\"@blocks\",\"@workspace\",\"@withZoom\",\"@withTrash\",\"@comments\",\"@disable\",\"@duplicate\",\"@help\",\"@disableBlock\",\"@showCode\",\"@comment\",\"@onChangeWorkspace\",\"@onNewWorkspace\",\"@disableNotConnectedToMainBlock\"],[\"media/\",[34,1],[34,2],true,true,[34,3],[34,4],[34,5],false,false,[34,6],true,[30,[36,0],[[32,0],\"onChangeWorkspace\"],null],[30,[36,0],[[32,0],\"onNewWorkspace\"],null],true]],null],[2,\"\\n    \"],[10,\"span\"],[14,0,\"pilas-blockly-workspace-buttons\"],[12],[2,\"\\n      \"],[8,\"challenge-workspace-buttons\",[],[[\"@actividad\",\"@shouldUseFloatingMode\",\"@changeScreenMode\",\"@workspace\",\"@xml\"],[[34,7],[34,8],[34,9],[34,2],[34,10]]],null],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,12],[[35,13]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[8,\"congratulations-modal\",[],[[\"@onClose\"],[[30,[36,0],[[32,0],\"ocultarFinDesafio\"],null]]],null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"action\",\"blockly_toolbox\",\"initial_workspace\",\"blockly_comments\",\"blockly_disable\",\"blockly_duplicate\",\"showCode\",\"modelActividad\",\"shouldUseFloatingMode\",\"changeScreenMode\",\"codigoActualEnFormatoXML\",\"cargando\",\"if\",\"mostrarDialogoFinDesafio\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-blockly.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-botones-zoom", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "IagOKxuP",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,[37,2],[[35,1]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[11,\"button\"],[24,0,\"btn btn-success btn-rect\"],[4,[38,0],[[32,0],\"zoomOut\"],null],[12],[10,\"i\"],[14,0,\"fa fa-minus\"],[12],[13],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"button\"],[14,\"disabled\",\"\"],[14,0,\"btn btn-success btn-rect\"],[12],[10,\"i\"],[14,0,\"fa fa-minus\"],[12],[13],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[11,\"span\"],[24,0,\"zoom-label\"],[4,[38,0],[[32,0],\"zoomRestore\"],null],[12],[1,[34,3]],[2,\"%\"],[13],[2,\"\\n\\n\"],[6,[37,2],[[35,4]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[11,\"button\"],[24,0,\"btn btn-success btn-rect\"],[4,[38,0],[[32,0],\"zoomIn\"],null],[12],[10,\"i\"],[14,0,\"fa fa-plus\"],[12],[13],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"button\"],[14,\"disabled\",\"\"],[14,0,\"btn btn-success btn-rect\"],[12],[10,\"i\"],[14,0,\"fa fa-plus\"],[12],[13],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\\n\"],[18,1,null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"canZoomOut\",\"if\",\"zoomValue\",\"canZoomIn\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-botones-zoom.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-canvas", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iyyW55uk",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[15,0,[30,[36,1],[[35,0],\"iframe-container-collapsed\",\"iframe-container\"],null]],[12],[2,\"\\n\"],[6,[37,1],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"spinner\",[],[[\"@centered\"],[true]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[10,\"iframe\"],[14,\"src\",\"pilas.html\"],[14,1,\"innerIframe\"],[12],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"shouldUseFloatingMode\",\"if\",\"cargando\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-canvas.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-notificador", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "gWWliIcl",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"div\"],[15,0,[31,[\"pilas-notificador \",[30,[36,1],[[35,0],\"pilas-notificador-visible\",\"pilas-notificador-oculto\"],null]]]],[12],[2,\"\\n  \"],[11,\"div\"],[24,0,\"pilas-notificador-cerrar\"],[4,[38,2],[[32,0],\"cerrar\"],null],[12],[10,\"i\"],[14,0,\"fa fa-close\"],[12],[13],[13],[2,\"\\n\\n  \"],[10,\"p\"],[12],[1,[30,[36,3],[\"components.notifier.download\"],null]],[13],[2,\"\\n  \"],[10,\"p\"],[12],[1,[30,[36,3],[\"components.notifier.visit\"],null]],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[[30,[36,4],[\"linkDescarga\"],null],true]],[[\"default\"],[{\"statements\":[[10,\"strong\"],[12],[1,[30,[36,3],[\"components.notifier.moreInfo\"],null]],[13]],\"parameters\":[]}]]],[13],[2,\"\\n\\n  \"],[18,1,null],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"hayActualizacion\",\"if\",\"action\",\"t\",\"href-to\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-notificador.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/programar-disclaimer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5shSxXGi",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h3\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.programarDisclaimer.entered\"],null]],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"http://program.ar/programar-en-casa/\",true]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"components.programarDisclaimer.programar\"],null]]],\"parameters\":[]}]]],[2,\"?\\n\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"components.programarDisclaimer.in\"],null]],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[\"http://program.ar/programar-en-casa/\",true]],[[\"default\"],[{\"statements\":[[10,\"b\"],[12],[1,[30,[36,0],[\"components.programarDisclaimer.programar\"],null]],[13]],\"parameters\":[]}]]],[1,[30,[36,0],[\"components.programarDisclaimer.find\"],null]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"t\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/programar-disclaimer.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/progress-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Sw+OfK83",
    "block": "{\"symbols\":[\"@loading\",\"@isDisabled\",\"&attrs\",\"&default\"],\"statements\":[[10,\"div\"],[14,0,\"layout-row layout-align-center-center\"],[12],[2,\"\\n  \"],[8,\"button\",[[17,3]],[[\"@isDisabled\"],[[30,[36,0],[[32,2],[32,1]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[18,4,null],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,1],[[32,1]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"spinner\",[[24,5,\"margin: 0;\"]],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[13]],\"hasEval\":false,\"upvars\":[\"or\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/progress-button.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/register-disclaimer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lD6LBPbz",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h3\"],[12],[2,\"\\n\\t\"],[1,[30,[36,0],[\"components.registerDisclaimer.now\"],null]],[2,\" \"],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[[30,[36,1],[\"register\"],null],false]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"components.registerDisclaimer.register\"],null]]],\"parameters\":[]}]]],[2,\"! \\n\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"\\n\\t\"],[1,[30,[36,0],[\"components.registerDisclaimer.optional\"],null]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"href-to\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/register-disclaimer.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/scene-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "EQph+fBH",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,11],[[35,12]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[15,0,[34,5]],[12],[2,\"\\n        \"],[8,\"button\",[],[[\"@isDisabled\",\"@isFab\",\"@isMini\",\"@isRaised\",\"@element-id\",\"@tooltip\",\"@onClick\"],[[34,6],[34,7],[34,7],[34,7],[34,8],[34,9],[34,10]]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,2],[[35,3]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"                    \"],[1,[30,[36,4],[[35,3]],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[35,1]],null,[[\"default\"],[{\"statements\":[[2,\"                        \"],[10,\"i\"],[15,0,[34,1]],[12],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,11],[[35,7]],null,[[\"default\"],[{\"statements\":[[2,\"                    \"],[10,\"span\"],[14,0,\"button-typography\"],[12],[1,[34,0]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"]],\"parameters\":[]}]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"label\",\"faIcon\",\"if\",\"icon\",\"paper-icon\",\"class\",\"isDisabled\",\"isMini\",\"element-id\",\"tooltip\",\"onClick\",\"unless\",\"isHidden\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/scene-button.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/scene-buttons", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "O1A5usnO",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,13],[[35,15]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"paper-card\",[[16,0,[30,[36,1],[[35,0],\"exercise-buttons-collapsed-card exercise-actions flex layout-column\",\"exercise-buttons-card exercise-actions flex layout-row\"],null]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \\n        \"],[8,\"scene-button\",[],[[\"@class\",\"@element-id\",\"@label\",\"@icon\",\"@isHidden\",\"@isDisabled\",\"@isMini\",\"@onClick\",\"@tooltip\"],[\"step-by-step-button-container\",\"step-by-step-run-button\",[30,[36,2],[\"components.sceneButtons.stepByStepRun.label\"],null],\"skip_next\",[30,[36,6],[[30,[36,5],[[35,4]],null],[35,3]],null],[34,3],[34,0],[34,7],[30,[36,2],[\"components.sceneButtons.stepByStepRun.tooltip\"],null]]],null],[2,\"\\n\\n        \"],[8,\"scene-button\",[],[[\"@class\",\"@element-id\",\"@label\",\"@icon\",\"@isHidden\",\"@isDisabled\",\"@isMini\",\"@onClick\",\"@tooltip\"],[\"step-by-step-button-container\",\"run-step-button\",[30,[36,2],[\"components.sceneButtons.runStep.label\"],null],\"skip_next\",[30,[36,6],[[30,[36,5],[[35,4]],null],[30,[36,5],[[35,3]],null]],null],[30,[36,5],[[35,8]],null],[34,0],[34,9],[30,[36,2],[\"components.sceneButtons.runStep.tooltip\"],null]]],null],[2,\"\\n\\n        \"],[8,\"scene-button\",[],[[\"@class\",\"@element-id\",\"@label\",\"@icon\",\"@isHidden\",\"@isDisabled\",\"@isMini\",\"@onClick\",\"@tooltip\"],[\"run-button-container\",\"run-button\",[30,[36,2],[\"components.sceneButtons.run.label\"],null],\"play_arrow\",[34,10],[34,10],[34,0],[34,11],[30,[36,2],[\"components.sceneButtons.run.tooltip\"],null]]],null],[2,\"\\n\\n        \"],[8,\"scene-button\",[],[[\"@class\",\"@element-id\",\"@label\",\"@icon\",\"@isHidden\",\"@isDisabled\",\"@isMini\",\"@onClick\",\"@tooltip\"],[\"restart-button-container\",\"restart-button\",[30,[36,2],[\"components.sceneButtons.restart.label\"],null],\"refresh\",[30,[36,5],[[35,10]],null],[30,[36,5],[[35,10]],null],[34,0],[34,12],[30,[36,2],[\"components.sceneButtons.restart.tooltip\"],null]]],null],[2,\"\\n\\n\"],[6,[37,13],[[35,0]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,\"turbo-mode-toggle\",[[16,0,[30,[36,1],[[35,0],\"toggle-container-collapsed\",\"toggle-container\"],null]]],[[\"@pilas\"],[[34,14]]],null],[2,\"\\n\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"shouldUseFloatingMode\",\"if\",\"t\",\"running\",\"needShowStepByStepButtons\",\"not\",\"or\",\"step-by-step-execution\",\"isPausedOnBreackpoint\",\"step\",\"needShowRestartButton\",\"run\",\"reset\",\"unless\",\"pilas\",\"cargando\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/scene-buttons.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/scene-details", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Pt/NnKDs",
    "block": "{\"symbols\":[],\"statements\":[[8,\"paper-card\",[[24,1,\"exercise-detail\"],[24,0,\"details-card flex\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,5],[[35,8]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[8,\"spinner\",[],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"layout-row\"],[12],[2,\"\\n            \"],[10,\"img\"],[14,0,\"exercise-cover\"],[15,\"alt\",[31,[[34,0,[\"titulo\"]]]]],[15,\"src\",[34,1]],[12],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"flex-grow\"],[12],[2,\"\\n                \"],[10,\"div\"],[14,0,\"layout-row\"],[12],[2,\"\\n                    \"],[10,\"div\"],[14,0,\"tab layout-column\"],[12],[2,\"\\n                        \"],[8,\"button\",[[24,0,\"tablinks\"]],[[\"@tooltip\",\"@iconButton\",\"@mini\",\"@onClick\"],[[30,[36,2],[\"components.sceneDetails.seeDescription\"],null],true,true,[30,[36,3],[[32,0],\"setTab\",\"statement\"],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,4],[\"menu_book\"],null]]],\"parameters\":[]}]]],[2,\"\\n                        \"],[10,\"div\"],[15,0,[30,[36,5],[[35,0,[\"consignaInicial\"]],\"clue-button\",\"no-clue-button\"],null]],[12],[2,\"\\n                            \"],[8,\"button\",[],[[\"@tooltip\",\"@isDisabled\",\"@iconButton\",\"@isMini\",\"@onClick\"],[[30,[36,5],[[35,0,[\"consignaInicial\"]],[30,[36,2],[\"components.sceneDetails.getClue\"],null],[30,[36,2],[\"components.sceneDetails.noClues\"],null]],null],[30,[36,6],[[35,0,[\"consignaInicial\"]]],null],true,true,[30,[36,3],[[32,0],\"setTab\",\"clue\"],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,4],[\"wb_incandescent\"],null]]],\"parameters\":[]}]]],[2,\"\\n                        \"],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"div\"],[14,1,\"statement\"],[14,0,\"tabcontent active\"],[12],[2,\"\\n                        \"],[8,\"paper-card-title\",[[24,0,\"layout-column\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n                            \"],[8,\"paper-card-title-text\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n                                \"],[8,\"paper-card-header-subhead\",[[24,0,\"exercise-text\"],[24,\"data-test-challenge-description\",\"\"]],[[],[]],[[\"default\"],[{\"statements\":[[1,[30,[36,7],[[35,0,[\"enunciado\"]]],null]]],\"parameters\":[]}]]],[2,\"\\n                            \"]],\"parameters\":[]}]]],[2,\"\\n                        \"]],\"parameters\":[]}]]],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"div\"],[14,1,\"clue\"],[14,0,\"tabcontent\"],[12],[2,\"\\n                        \"],[8,\"paper-card-title\",[[24,0,\"layout-column\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n                            \"],[8,\"paper-card-title-text\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n                                \"],[8,\"paper-card-header-subhead\",[[24,0,\"exercise-text\"],[24,\"data-test-challenge-clue\",\"\"]],[[],[]],[[\"default\"],[{\"statements\":[[1,[30,[36,7],[[35,0,[\"consignaInicial\"]]],null]]],\"parameters\":[]}]]],[2,\"\\n                            \"]],\"parameters\":[]}]]],[2,\"\\n                        \"]],\"parameters\":[]}]]],[2,\"\\n                    \"],[13],[2,\"\\n                \"],[13],[2,\"\\n            \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"model\",\"exerciseCover\",\"t\",\"action\",\"paper-icon\",\"if\",\"not\",\"markdown-to-html\",\"cargando\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/scene-details.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/scene", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "j4h8QNS0",
    "block": "{\"symbols\":[],\"statements\":[[8,\"paper-card\",[[24,0,\"exercise-card flex layout-column\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[35,3]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"pilas-canvas-scene-buttons flex layout-row\"],[12],[2,\"\\n            \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n            \"],[8,\"button\",[],[[\"@tooltip\",\"@isIcon\",\"@onClick\"],[[30,[36,0],[\"components.scene.close\"],null],true,[34,1]]],[[\"default\"],[{\"statements\":[[1,[30,[36,2],[\"close\"],null]]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[8,\"pilas-canvas\",[[16,0,[30,[36,4],[[35,3],\"canvas-boder-radius canMove\",\"canvas-boder-radius\"],null]]],[[\"@shouldUseFloatingMode\",\"@onReady\",\"@challenge\",\"@cargando\"],[[34,3],[34,5],[34,6],[34,7]]],null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"hideScene\",\"paper-icon\",\"shouldUseFloatingMode\",\"if\",\"onReady\",\"challenge\",\"cargando\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/scene.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/session-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zafUpbjY",
    "block": "{\"symbols\":[\"menu\",\"content\"],\"statements\":[[6,[37,6],[[35,5]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[8,\"paper-menu\",[],[[\"@offset\"],[\"5 43\"]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"trigger\"]],[[24,0,\"user-menu\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[10,\"img\"],[14,0,\"face\"],[15,\"src\",[34,5,[\"avatarURL\"]]],[12],[13],[2,\"\\n      \"],[8,\"button\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\" \"],[1,[35,5,[\"nickName\"]]],[2,\" \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,[32,1,[\"content\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,2,[\"menu-item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,\"button\",[],[[\"@onClick\"],[[30,[36,3],[[32,0],\"changeUser\"],null]]],[[\"default\"],[{\"statements\":[[2,\" \"],[1,[30,[36,4],[\"components.sessionButton.changeUser\"],null]],[2,\" \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n\\n      \"],[8,[32,2,[\"menu-item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,\"button\",[],[[\"@onClick\"],[[30,[36,3],[[32,0],\"logout\"],null]]],[[\"default\"],[{\"statements\":[[2,\" \"],[1,[30,[36,4],[\"components.sessionButton.logout\"],null]],[2,\" \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"parameters\":[2]}]]],[2,\"\\n  \"]],\"parameters\":[1]}]]],[2,\"\\n  \"],[8,\"personal-survey\",[],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"img\"],[14,0,\"face gray\"],[15,\"src\",[34,0]],[12],[13],[2,\"\\n  \"],[8,\"button\",[[24,1,\"login-btn\"]],[[\"@onClick\"],[[30,[36,3],[[32,0],[30,[36,2],[[35,1]],null],true],null]]],[[\"default\"],[{\"statements\":[[2,\" \"],[1,[30,[36,4],[\"components.sessionButton.login\"],null]],[2,\" \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\\n\"],[8,\"modal-toggle\",[],[[\"@title\",\"@open\"],[[30,[36,4],[\"components.login.login\"],null],[34,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[8,\"login\",[],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"randomAvatar\",\"openLogin\",\"mut\",\"action\",\"t\",\"session\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/session-button.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/simple-read-toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tgqhcEye",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,6],[[35,5,[\"modoLecturaSimple\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"toggle\",[[24,0,\"simple-read\"]],[[\"@element-id\",\"@tooltip\",\"@isChecked\",\"@onToggle\"],[\"simple-read-slider\",[30,[36,4],[[30,[36,3],[[30,[36,2],[[32,0],[35,1]],null]],null],[30,[36,0],[\"components.simpleReadToggle.disable\"],null],[30,[36,0],[\"components.simpleReadToggle.enable\"],null]],null],[30,[36,3],[[30,[36,2],[[32,0],[35,1]],null]],null],[30,[36,2],[[32,0],\"toggleSimpleRead\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"i\"],[15,0,[30,[36,4],[[30,[36,3],[[30,[36,2],[[32,0],[35,1]],null]],null],\"slider-icon fa fa-font letterType\",\"slider-icon fa fa-times letterType\"],null]],[12],[13],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"shouldShowSimpleRead\",\"action\",\"compute\",\"if\",\"book\",\"unless\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/simple-read-toggle.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/spinner", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "R753MCJx",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[15,0,[31,[\"spinner \",[30,[36,1],[[35,0],\"spinner-centered\"],null]]]],[12],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"centered\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/spinner.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/splitter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "b4FEI2HX",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,1,\"splitter-first-child\"],[12],[13],[2,\"\\n\"],[10,\"div\"],[14,1,\"separator\"],[12],[13],[2,\"\\n\"],[10,\"div\"],[14,1,\"splitter-second-child\"],[12],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/splitter.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/terms-and-conditions-link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "uEh+/o4B",
    "block": "{\"symbols\":[],\"statements\":[[8,\"link\",[],[[\"@openOnNewTab\",\"@href\"],[true,\"https://docs.google.com/document/d/e/2PACX-1vTNX9zl8txZmuINNz2qODrodoQhvr0o2-r3T_6yFp6quEpidmPz6ORx1HSjo2KNUg6MnyHPN-Ti44z1/pub\"]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"components.acceptTermsAndConditions.termsLink\"],null]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/terms-and-conditions-link.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/terms", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "YvaQOE6w",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,3],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[8,\"modal\",[],[[\"@title\",\"@onClose\",\"@clickOutsideToClose\"],[\"Terminos y condiciones de uso\",[30,[36,0],[[32,0],\"rejectTerms\"],null],false]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"div\"],[12],[1,[30,[36,1],[\"components.acceptTermsAndConditions.askToRead\"],null]],[2,\" \"],[8,\"terms-and-conditions-link\",[],[[],[]],null],[2,\" \"],[1,[30,[36,1],[\"components.acceptTermsAndConditions.toUse\"],null]],[13],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[8,\"button\",[],[[\"@accent\",\"@isRaised\",\"@onClick\"],[true,true,[30,[36,0],[[32,0],\"acceptTerms\"],null]]],[[\"default\"],[{\"statements\":[[2,\" \"],[1,[30,[36,1],[\"components.acceptTermsAndConditions.accept\"],null]],[2,\" \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"action\",\"t\",\"shouldOpen\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/terms.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/toast", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yq1mbM+7",
    "block": "{\"symbols\":[\"toast\",\"&default\"],\"statements\":[[6,[37,7],[[35,3]],null,[[\"default\"],[{\"statements\":[[6,[37,6],null,[[\"onClose\"],[[30,[36,5],[[32,0],[30,[36,4],[[35,3]],null],false],null]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[6,[37,2],[[30,[36,1],[[32,1,[\"text\"]],\"expected `toast.text` to be a contextual component but found a string. Did you mean `(component toast.text)`? ('pilasbloques/templates/components/toast.hbs' @ L3:C7) \"],null]],null,[[\"default\"],[{\"statements\":[[1,[34,0]]],\"parameters\":[]}]]],[2,\"\\n    \"],[18,2,null],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"message\",\"-assert-implicit-component-helper-argument\",\"component\",\"needShowToast\",\"mut\",\"action\",\"paper-toast\",\"if\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/toast.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CWG8BMlV",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"label\"],[15,0,[31,[\"switch \",[30,[36,1],[[35,0],\"glow\",\"\"],null]]]],[15,\"title\",[34,2]],[12],[2,\"\\n    \"],[8,\"input\",[[16,\"onclick\",[34,6]]],[[\"@type\",\"@id\",\"@checked\",\"@disabled\"],[\"checkbox\",[34,3],[34,4],[34,5]]],null],[2,\"\\n    \"],[10,\"span\"],[15,0,[31,[\"slider round \",[30,[36,1],[[35,5],\"not-allowed\",\"pointer\"],null]]]],[12],[18,1,null],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"glow\",\"if\",\"tooltip\",\"element-id\",\"isChecked\",\"isDisabled\",\"onToggle\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/toggle.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/turbo-mode-toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nNXV0d2D",
    "block": "{\"symbols\":[],\"statements\":[[8,\"toggle\",[],[[\"@element-id\",\"@glow\",\"@isChecked\",\"@onToggle\",\"@tooltip\"],[\"turbo-button\",true,[34,0],[30,[36,1],[[32,0],\"updateTurboMode\"],null],[30,[36,3],[[35,0],[30,[36,2],[\"components.turboModeToggle.turnOff\"],null],[30,[36,2],[\"components.turboModeToggle.turnOn\"],null]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"i\"],[14,0,\"slider-icon fa fa-bolt\"],[12],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\\n\"],[8,\"toast\",[],[[\"@message\",\"@needShowToast\"],[\"Modo Turbo\",[34,4]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[1,[30,[36,3],[[35,0],[30,[36,2],[\"components.turboModeToggle.active\"],null],[30,[36,2],[\"components.turboModeToggle.inactive\"],null]],null]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"turboMode\",\"action\",\"t\",\"if\",\"needShowTurboModeIndicator\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/turbo-mode-toggle.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/version", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ulCH8eNS",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[12],[2,\"\\n  \"],[10,\"code\"],[14,0,\"show-version\"],[12],[1,[30,[36,0],null,[[\"versionOnly\"],[true]]]],[13],[2,\"\\n  \"],[1,[30,[36,1],[\"code\"],null]],[2,\"\\n  \"],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[[30,[36,2],[\"https://github.com/Program-AR/pilas-bloques/tree/\",[30,[36,0],null,[[\"shaOnly\"],[true]]]],null],true]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[1,[30,[36,0],null,[[\"shaOnly\"],[true]]]]],\"parameters\":[]}]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"app-version\",\"paper-icon\",\"concat\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/version.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafio-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "quNXaECD",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"],[8,\"spinner\",[],[[\"@centered\"],[true]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafio-loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafio", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "PvLOnplq",
    "block": "{\"symbols\":[],\"statements\":[[8,\"challenge-workspace\",[],[[\"@pilas\",\"@model\",\"@persistirSolucionEnURL\",\"@codigo\",\"@debeMostrarFinDeDesafio\"],[[34,0],[34,1],false,[34,2],true]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"pilas\",\"model\",\"codigo\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafio.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "jWoGnLl3",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"],[8,\"spinner\",[],[[\"@centered\"],[true]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios-loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6zGVKB1R",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios/desafio-por-nombre-error", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "epLOboWp",
    "block": "{\"symbols\":[],\"statements\":[[8,\"header\",[],[[],[]],null],[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"contenido-principal\"],[12],[2,\"\\n\\n  \"],[10,\"h2\"],[12],[1,[30,[36,2],[\"templates.desafios.desafioPorNombreError.wentWrong\"],null]],[13],[2,\"\\n\\n  \"],[10,\"p\"],[12],[1,[30,[36,2],[\"templates.desafios.desafioPorNombreError.doesntExist\"],null]],[13],[2,\"\\n\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\",\"t\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios/desafio-por-nombre-error.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AhevMtzH",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"contenido-principal\"],[12],[2,\"\\n\\n  \"],[10,\"p\"],[12],[1,[30,[36,0],[\"templates.desafios.index.chooseOne\"],null]],[13],[2,\"\\n\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/galeria", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "t70za2n/",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"contenido-principal\"],[12],[2,\"\\n  \"],[10,\"h1\"],[12],[2,\"Galería de bloques\"],[13],[2,\"\\n\\n  \"],[10,\"p\"],[12],[2,\"Esta sección muestra los bloques que actualmente migramos a\\n    la nueva versión de blockly.\"],[13],[2,\"\\n\\n  \"],[10,\"p\"],[12],[2,\"Esta información es temporal, y solo estará visible en el branch\\n  \"],[10,\"code\"],[12],[2,\"feature/actualizar-blockly\"],[13],[2,\".\"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"padding\"],[12],[2,\"\\n    \"],[8,\"ember-blockly-catalog\",[],[[\"@current_block\"],[[34,0]]],null],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"current_block\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/galeria.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NyUAxFdi",
    "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "pilasbloques/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/libros/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Ab7UHHo0",
    "block": "{\"symbols\":[\"book\"],\"statements\":[[8,\"header\",[],[[],[]],null],[2,\"\\n\\n\"],[10,\"div\"],[15,0,[31,[\"contenido-principal \",[30,[36,8],[[30,[36,7],[[30,[36,6],[[32,0],[35,5]],null]],null],\"simple-read-mode\"],null]]]],[12],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"box\"],[12],[2,\"\\n\\n    \"],[10,\"p\"],[12],[10,\"img\"],[14,0,\"main-logo\"],[14,\"src\",\"imagenes/main-logo.png\"],[14,\"width\",\"468\"],[14,\"height\",\"262\"],[12],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"\\n    \"],[1,[30,[36,0],[\"templates.libros.index.welcome\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\\n\\n    \"],[10,\"div\"],[14,0,\"jumbotron center\"],[12],[2,\"\\n      \"],[10,\"p\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"templates.libros.index.challenges\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\\n\"],[6,[37,11],[[30,[36,10],[[30,[36,10],[[35,9]],null]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,4],[[32,1,[\"oculto\"]]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,3],null,[[\"book\"],[[32,1]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"jumbotron center\"],[12],[2,\"\\n\\n\"],[6,[37,8],[[35,12]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"templates.libros.index.customChallenges\"],null]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[1,[34,1]],[2,\"\\n      \"],[1,[34,2]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"hr\"],[12],[13],[2,\"\\n\\n    \"],[10,\"p\"],[12],[2,\"\\n     \"],[1,[30,[36,0],[\"templates.libros.index.visitAbout.part1\"],null]],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[[30,[36,13],[\"acercade\"],null],false]],[[\"default\"],[{\"statements\":[[10,\"strong\"],[12],[1,[30,[36,0],[\"templates.libros.index.visitAbout.link1\"],null]],[13]],\"parameters\":[]}]]],[2,\"\\n           \"],[1,[30,[36,0],[\"templates.libros.index.visitAbout.part2\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\\n  \"],[13],[2,\"\\n\\n\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"create-custom-challenge\",\"import-custom-challenge\",\"challenges-book\",\"unless\",\"shouldShowSimpleRead\",\"action\",\"compute\",\"if\",\"model\",\"-track-array\",\"each\",\"enableChallengeCreator\",\"href-to\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/libros/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/libros/ver-libro", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "k7dRr7ty",
    "block": "{\"symbols\":[\"capitulo\",\"grupo\",\"desafio\"],\"statements\":[[8,\"header\",[],[[\"@book\"],[[34,5]]],null],[2,\"\\n\\n\"],[10,\"div\"],[15,0,[31,[\"contenido-principal \",[30,[36,2],[[30,[36,8],[[30,[36,7],[[32,0],[35,6]],null]],null],\"simple-read-mode\"],null]]]],[12],[2,\"\\n\\n\\n  \"],[10,\"h1\"],[12],[2,\" \"],[1,[30,[36,0],[\"templates.libros.ver-libro.challengesOf\"],null]],[2,\" \"],[1,[35,5,[\"titulo\"]]],[13],[2,\"\\n\\n  \"],[10,\"p\"],[12],[8,\"link\",[],[[\"@href\",\"@openOnNewTab\"],[[30,[36,9],[\"libros\"],null],false]],[[\"default\"],[{\"statements\":[[10,\"i\"],[14,0,\"fa fa-chevron-left\"],[12],[13],[2,\" \"],[1,[30,[36,0],[\"templates.libros.ver-libro.backBooksList\"],null]]],\"parameters\":[]}]]],[13],[2,\"\\n\\n\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[35,5,[\"capitulos\"]]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,\"data-test-book-view-chapter\",\"\"],[12],[2,\"\\n\\n\"],[6,[37,2],[[32,1,[\"titulo\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"h1\"],[15,\"data-test-book-view-chapter-id\",[32,1,[\"id\"]]],[14,\"data-test-book-view-chapter-title\",\"\"],[12],[1,[32,1,[\"titulo\"]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,1,[\"grupos\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,2],[[32,2,[\"titulo\"]]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,\"data-test-book-view-group\",\"\"],[12],[2,\"\\n            \"],[10,\"h3\"],[15,\"data-test-book-view-group-id\",[32,2,[\"id\"]]],[14,\"data-test-book-view-group-title\",\"\"],[12],[1,[32,2,[\"titulo\"]]],[13],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,2,[\"desafios\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],null,[[\"challenge\"],[[32,3]]]]],[2,\"\\n\"]],\"parameters\":[3]}]]]],\"parameters\":[2]}]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[2,\"    \"],[10,\"p\"],[14,0,\"mensaje-sin-desafios\"],[12],[1,[30,[36,0],[\"templates.libros.ver-libro.withoutChallenges\"],null]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,10],[[35,5,[\"capitulos\",\"isSettled\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"spinner\",[],[[\"@centered\"],[true]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"challenge-link\",\"if\",\"-track-array\",\"each\",\"model\",\"shouldShowSimpleRead\",\"action\",\"compute\",\"href-to\",\"unless\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/libros/ver-libro.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/password-recovery", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VPbA4mbn",
    "block": "{\"symbols\":[\"stepper\",\"step\",\"nextStep\",\"previousStep\",\"goTo\",\"step\",\"form\",\"step\",\"form\"],\"statements\":[[8,\"header\",[],[[],[]],null],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n\"],[6,[37,14],null,[[\"currentStep\",\"onStepChange\",\"vertical\"],[[35,13],[30,[36,7],[[32,0],[30,[36,6],[[35,13]],null]],null],true]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,10],[[35,9]],null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,1,[\"step\"]],\"expected `stepper.step` to be a contextual component but found a string. Did you mean `(component stepper.step)`? ('pilasbloques/templates/password-recovery.hbs' @ L9:C9) \"],null]],[[\"label\"],[[30,[36,1],[\"templates.password-recovery.enterUsername\"],null]]],[[\"default\"],[{\"statements\":[[6,[37,3],[[30,[36,2],[[32,8,[\"body\"]],\"expected `step.body` to be a contextual component but found a string. Did you mean `(component step.body)`? ('pilasbloques/templates/password-recovery.hbs' @ L10:C13) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[8,\"paper-form\",[],[[\"@onSubmit\"],[[30,[36,7],[[32,0],\"checkUsername\",[32,8,[\"nextStep\"]]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n\\n              \"],[8,\"pb-input\",[],[[\"@label\",\"@model\",\"@required\",\"@onKeyDown\",\"@error\"],[[30,[36,1],[\"templates.password-recovery.username\"],null],[34,4,[\"username\"]],true,[30,[36,7],[[32,0],[30,[36,6],[[35,12]],null],true],null],[30,[36,10],[[35,12],[30,[36,1],[\"templates.password-recovery.nonExistingUsername\"],null]],null]]],null],[2,\"\\n\\n              \"],[8,\"progress-button\",[[24,4,\"submit\"]],[[\"@loading\"],[[34,11,[\"loading\",\"password-recovery\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n                \"],[1,[30,[36,1],[\"templates.password-recovery.continue\"],null]],[2,\"\\n              \"]],\"parameters\":[]}]]],[2,\"\\n\\n            \"]],\"parameters\":[9]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[8]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,1,[\"step\"]],\"expected `stepper.step` to be a contextual component but found a string. Did you mean `(component stepper.step)`? ('pilasbloques/templates/password-recovery.hbs' @ L30:C7) \"],null]],[[\"label\"],[[30,[36,1],[\"templates.password-recovery.newPassword\"],null]]],[[\"default\"],[{\"statements\":[[6,[37,3],[[30,[36,2],[[32,6,[\"body\"]],\"expected `step.body` to be a contextual component but found a string. Did you mean `(component step.body)`? ('pilasbloques/templates/password-recovery.hbs' @ L31:C9) \"],null]],null,[[\"default\"],[{\"statements\":[[6,[37,8],[[35,4,[\"email\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"\\n          \"],[10,\"h2\"],[12],[10,\"strong\"],[12],[1,[30,[36,1],[\"templates.password-recovery.checkEmail\"],null]],[13],[13],[2,\"\\n          \"],[10,\"p\"],[12],[1,[30,[36,1],[\"templates.password-recovery.emailSent\"],null]],[1,[35,4,[\"email\"]]],[1,[30,[36,1],[\"templates.password-recovery.passwordRecoveryLink\"],null]],[13],[2,\"\\n        \\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \\n          \"],[8,\"paper-form\",[],[[\"@onSubmit\"],[[30,[36,7],[[32,0],\"changePassword\",[32,6,[\"nextStep\"]]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n\\n\"],[6,[37,10],[[35,9]],null,[[\"default\"],[{\"statements\":[[2,\"\\n              \"],[8,\"pb-input\",[],[[\"@label\",\"@model\",\"@required\",\"@onKeyDown\",\"@error\"],[[30,[36,1],[\"templates.password-recovery.accountID\"],null],[34,4,[\"parentDNI\"]],true,[30,[36,7],[[32,0],[30,[36,6],[[35,5]],null],false],null],[30,[36,8],[[35,5],[30,[36,1],[\"templates.password-recovery.invalidId\"],null]],null]]],null],[2,\"\\n\\n\"]],\"parameters\":[]}]]],[2,\"\\n            \"],[8,\"pb-input\",[],[[\"@type\",\"@label\",\"@model\",\"@required\"],[\"password\",[30,[36,1],[\"templates.password-recovery.newPassword\"],null],[34,4,[\"password\"]],true]],null],[2,\"\\n\\n            \"],[8,\"password-confirmation\",[],[[\"@password\"],[[34,4,[\"password\"]]]],null],[2,\"\\n\\n            \"],[8,\"progress-button\",[[24,4,\"submit\"]],[[\"@loading\"],[[34,11,[\"loading\",\"credentials\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n              \"],[1,[30,[36,1],[\"templates.password-recovery.finish\"],null]],[2,\"\\n            \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[8,\"paper-button\",[[16,\"onClick\",[30,[36,7],[[32,0],[32,6,[\"previousStep\"]]],null]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n              \"],[1,[30,[36,1],[\"templates.password-recovery.back\"],null]],[2,\"\\n            \"]],\"parameters\":[]}]]],[2,\"\\n\\n          \"]],\"parameters\":[7]}]]],[2,\"\\n\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[6]}]]],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,1,[\"step\"]],\"expected `stepper.step` to be a contextual component but found a string. Did you mean `(component stepper.step)`? ('pilasbloques/templates/password-recovery.hbs' @ L73:C7) \"],null]],[[\"label\"],[[30,[36,1],[\"templates.password-recovery.passwordChanged\"],null]]],[[\"default\"],[{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2,[\"body\"]],\"expected `step.body` to be a contextual component but found a string. Did you mean `(component step.body)`? ('pilasbloques/templates/password-recovery.hbs' @ L74:C9) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"h2\"],[12],[10,\"strong\"],[12],[1,[30,[36,1],[\"templates.password-recovery.helloAgain\"],null]],[13],[13],[2,\"\\n        \"],[10,\"p\"],[12],[1,[30,[36,1],[\"templates.password-recovery.passwordChanged\"],null]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,3],[[30,[36,2],[[32,2,[\"actions\"]],\"expected `step.actions` to be a contextual component but found a string. Did you mean `(component step.actions)`? ('pilasbloques/templates/password-recovery.hbs' @ L78:C9) \"],null]],null,[[\"default\"],[{\"statements\":[[6,[37,0],null,[[\"primary\",\"raised\",\"href\"],[true,true,\"#\"]],[[\"default\"],[{\"statements\":[[2,\"          Ok\\n\"]],\"parameters\":[]}]]]],\"parameters\":[3,4,5]}]]]],\"parameters\":[2]}]]],[2,\"\\n\\n\"]],\"parameters\":[1]}]]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"paper-button\",\"t\",\"-assert-implicit-component-helper-argument\",\"component\",\"credentials\",\"wrongCredentials\",\"mut\",\"action\",\"if\",\"token\",\"unless\",\"pilasBloquesApi\",\"usernameExists\",\"currentStep\",\"paper-stepper\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/password-recovery.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/register", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FpYucbRU",
    "block": "{\"symbols\":[\"form\",\"grid\",\"avatar\",\"tile\"],\"statements\":[[8,\"header\",[],[[],[]],null],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n  \"],[8,\"paper-form\",[[24,0,\"register-form\"]],[[\"@onSubmit\"],[[30,[36,2],[[32,0],\"doRegister\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"img\"],[14,\"src\",\"imagenes/session/register.png\"],[12],[13],[2,\"\\n    \\n    \"],[8,\"pb-input\",[],[[\"@label\",\"@model\",\"@focusOut\",\"@customValidations\",\"@required\",\"@error\"],[[30,[36,6],[\"templates.register.username\"],null],[34,0,[\"username\"]],[30,[36,2],[[32,0],\"checkUsername\"],null],[34,7],true,[30,[36,5],[[30,[36,4],[[35,8]],null],[30,[36,6],[\"templates.register.errors.userAlreadyExists\"],null]],null]]],null],[2,\"\\n\\n    \"],[8,\"pb-input\",[],[[\"@type\",\"@label\",\"@model\",\"@required\"],[\"password\",[30,[36,6],[\"templates.register.password\"],null],[34,0,[\"password\"]],true]],null],[2,\"\\n\\n    \"],[8,\"password-confirmation\",[],[[\"@password\"],[[34,0,[\"password\"]]]],null],[2,\"\\n\\n    \"],[8,\"pb-input\",[],[[\"@type\",\"@label\",\"@model\",\"@customValidations\"],[\"email\",[31,[[30,[36,6],[\"templates.register.email\"],null],\" (\",[30,[36,6],[\"templates.register.options.optional\"],null],\")\"]],[34,0,[\"email\"]],[34,9]]],null],[2,\"\\n\\n    \"],[10,\"p\"],[14,\"for\",\"avatarURL\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[1,[30,[36,6],[\"templates.register.chooseAvatar\"],null]],[2,\":\"],[13],[2,\"\\n      \"],[8,\"pb-input\",[[24,0,\"invisible-input\"]],[[\"@type\",\"@model\",\"@required\"],[\"checkbox\",[34,0,[\"avatarURL\"]],true]],null],[2,\"  \\n    \"],[13],[2,\"\\n    \"],[8,\"paper-grid-list\",[],[[\"@cols\",\"@rowHeight\"],[\"4\",\"gt-xs-1:1 gt-md-1:1\"]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,12],[[30,[36,11],[[30,[36,11],[[35,10]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,[32,2,[\"tile\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"button\"],[14,0,\"avatar\"],[15,\"onClick\",[30,[36,2],[[32,0],[30,[36,1],[[35,0,[\"avatarURL\"]]],null],[32,3]],null]],[14,4,\"button\"],[12],[2,\"\\n            \"],[10,\"img\"],[15,0,[30,[36,5],[[30,[36,4],[[30,[36,3],[[35,0,[\"avatarURL\"]],[32,3]],null]],null],\"gray\",\"selected\"],null]],[15,\"src\",[32,3]],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"]],\"parameters\":[4]}]]],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\"    \"]],\"parameters\":[2]}]]],[2,\"\\n\\n    \"],[10,\"p\"],[12],[1,[30,[36,6],[\"templates.register.parentalConsent\"],null]],[13],[2,\"\\n\\n    \"],[10,\"small\"],[12],[1,[30,[36,6],[\"templates.register.inAge\"],null]],[13],[2,\"\\n    \"],[10,\"p\"],[12],[13],[2,\"\\n\\n    \"],[8,\"pb-input\",[],[[\"@label\",\"@model\",\"@required\",\"@customValidations\"],[[30,[36,6],[\"templates.register.parentalFullname\"],null],[34,0,[\"parentName\"]],true,[34,13]]],null],[2,\"\\n\\n    \"],[8,\"pb-input\",[],[[\"@label\",\"@model\",\"@required\",\"@customValidations\"],[[30,[36,6],[\"templates.register.parentalId\"],null],[34,0,[\"parentDNI\"]],true,[34,14]]],null],[2,\"\\n\\n    \"],[8,\"collapsable\",[],[[\"@title\",\"@class\"],[[30,[36,6],[\"templates.register.whyData.title\"],null],\"left\"]],[[\"default\"],[{\"statements\":[[2,\"\\n\\n      \"],[10,\"p\"],[12],[1,[30,[36,6],[\"templates.register.whyData.privacy\"],null]],[13],[2,\"\\n      \"],[10,\"p\"],[12],[2,\"\\n        \"],[1,[30,[36,6],[\"templates.register.whyData.dataProtectionLaw\"],null]],[2,\"\\n        \"],[8,\"terms-and-conditions-link\",[],[[],[]],null],[2,\".\\n      \"],[13],[2,\"\\n      \"],[10,\"p\"],[12],[2,\"\\n        \"],[1,[30,[36,6],[\"templates.register.whyData.parentalContact\"],null]],[2,\" \\n        \"],[10,\"a\"],[14,6,\"mailto:pilasbloques@program.ar\"],[12],[2,\"pilasbloques@program.ar\"],[13],[2,\" \\n        \"],[1,[30,[36,6],[\"templates.register.whyData.whyContact\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\\n    \"],[8,\"input\",[[24,\"required\",\"\"]],[[\"@type\"],[\"checkbox\"]],null],[2,\" \\n    \"],[10,\"span\"],[12],[2,\"\\n      \"],[1,[30,[36,6],[\"templates.register.iHaveReadAndAccept\"],null]],[2,\" \\n      \"],[8,\"terms-and-conditions-link\",[],[[],[]],null],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\"\\n    \"],[8,\"progress-button\",[[24,0,\"link\"],[24,4,\"submit\"]],[[\"@isDisabled\",\"@loading\"],[[30,[36,4],[[35,8]],null],[34,15,[\"loading\",\"register\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[30,[36,6],[\"templates.register.register\"],null]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"parameters\":[1]}]]],[2,\"\\n  \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"registerData\",\"mut\",\"action\",\"eq\",\"not\",\"if\",\"t\",\"usernameFormatValidation\",\"validUsername\",\"mailValidation\",\"avatars\",\"-track-array\",\"each\",\"parentNameValidation\",\"DNIValidation\",\"pilasBloquesApi\"]}",
    "meta": {
      "moduleName": "pilasbloques/templates/register.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/tests/mirage/mirage/config.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/fixtures/capitulos.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/fixtures/capitulos.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/capitulos.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/fixtures/desafios.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/fixtures/desafios.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/desafios.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/fixtures/grupos.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/fixtures/grupos.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/grupos.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/fixtures/libros.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/fixtures/libros.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/libros.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/models/capitulo.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/models/capitulo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/capitulo.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/models/desafio.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/models/desafio.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/desafio.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/models/grupo.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/models/grupo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/grupo.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/models/libro.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/models/libro.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/libro.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/scenarios/default.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/scenarios/default.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/serializers/application.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass jshint.');
  });
});
;define("pilasbloques/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("pilasbloques/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("pilasbloques/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("pilasbloques/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;define("pilasbloques/transitions/cross-fade", ["exports", "liquid-fire/transitions/cross-fade"], function (_exports, _crossFade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
;define("pilasbloques/transitions/default", ["exports", "liquid-fire/transitions/default"], function (_exports, _default) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
;define("pilasbloques/transitions/explode", ["exports", "liquid-fire/transitions/explode"], function (_exports, _explode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
;define("pilasbloques/transitions/fade", ["exports", "liquid-fire/transitions/fade"], function (_exports, _fade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
;define("pilasbloques/transitions/flex-grow", ["exports", "liquid-fire/transitions/flex-grow"], function (_exports, _flexGrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
;define("pilasbloques/transitions/fly-to", ["exports", "liquid-fire/transitions/fly-to"], function (_exports, _flyTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
;define("pilasbloques/transitions/move-over", ["exports", "liquid-fire/transitions/move-over"], function (_exports, _moveOver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
;define("pilasbloques/transitions/scale", ["exports", "liquid-fire/transitions/scale"], function (_exports, _scale) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
;define("pilasbloques/transitions/scroll-then", ["exports", "liquid-fire/transitions/scroll-then"], function (_exports, _scrollThen) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
;define("pilasbloques/transitions/to-down", ["exports", "liquid-fire/transitions/to-down"], function (_exports, _toDown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
;define("pilasbloques/transitions/to-left", ["exports", "liquid-fire/transitions/to-left"], function (_exports, _toLeft) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
;define("pilasbloques/transitions/to-right", ["exports", "liquid-fire/transitions/to-right"], function (_exports, _toRight) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
;define("pilasbloques/transitions/to-up", ["exports", "liquid-fire/transitions/to-up"], function (_exports, _toUp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
;define("pilasbloques/transitions/wait", ["exports", "liquid-fire/transitions/wait"], function (_exports, _wait) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
;define("pilasbloques/utils/calculate-position", ["exports", "ember-basic-dropdown/utils/calculate-position"], function (_exports, _calculatePosition) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _calculatePosition.default;
    }
  });
});
;define("pilasbloques/utils/clamp", ["exports", "ember-paper/utils/clamp"], function (_exports, _clamp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clamp.default;
    }
  });
});
;define("pilasbloques/utils/intl/missing-message", ["exports", "pilas-bloques-ember-intl/-private/utils/missing-message"], function (_exports, _missingMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
;define("pilasbloques/utils/request", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.notFound = _exports.badRequest = void 0;

  const badRequest = cb => _ref => {
    let {
      status
    } = _ref;
    if (status === 400) cb();
  };

  _exports.badRequest = badRequest;

  const notFound = cb => _ref2 => {
    let {
      status
    } = _ref2;
    if (status === 404) cb();
  };

  _exports.notFound = notFound;
});
;

;define('pilasbloques/config/environment', [], function() {
  var prefix = 'pilasbloques';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("pilasbloques/app")["default"].create({"name":"pilasbloques","version":"1.9.1+60bc1dba"});
          }
        
//# sourceMappingURL=pilasbloques.map
