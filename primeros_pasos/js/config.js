const generateConfig = function() {
  const config = {
    autoSlideStoppable: true, 
    transition: 'slide',
    parallaxBackgroundImage: 'assets/backgrounds/fondo.svg',
    parallaxBackgroundSize: '2000px 1125px',
    controls: false,
    progress: true,
    history: false,
    help: false,
    center: true,
    embedded: false,
    autoSlide: 10000,
    loop: true,
    keyboard: {
      13: 'next', // Enter
      37: 'prev', // Flecha Izq
      39: 'next', // Flecha Der
      38: null, // Flecha Arriba
      40: null, // Flecha Abajo
      27: null, // Esc
      72: null, // H
      85: null, // U
      65: null, // A
      82: null, // Y
      89: null, // R
      32: null, // <Space>
      83: null, // S
      84: null, // T
      76: null, // L
      66: null, // B

    }
  };

  if (isDev) {
    config.keyboard[116] = function() { location.reload(true) };
  }

  return config;
}
