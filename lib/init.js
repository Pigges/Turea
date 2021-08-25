function createCanvas (gameWidth, gameHeight) {
  // Hide the address bar on iPhone/iPad
  let head    = document.getElementsByTagName('head')[0];
  let iOSMeta = document.createElement('meta');

  iOSMeta.name    = "apple-mobile-web-app-capable";
  iOSMeta.content = "yes";
  head.appendChild(iOSMeta);

  // Creates and setting up the canvas
  let canvas = document.createElement('canvas');
  
  canvas.id             = 'game';
  canvas.style.position = 'absolute';
  canvas.style.left     = '0';
  canvas.style.top      = '0';
  canvas.width          = gameWidth;
  canvas.height         = gameHeight;

  document.body.setAttribute("oncontextmenu", "return false");
  document.body.appendChild(canvas);
  return canvas;
}

export async function init (gameWidth, gameHeight) {
  if (!gameWidth) gameWidth = 600;
  if (!gameHeight) gameHeight = 300;
  console.log(gameWidth, gameHeight);
  const canvas = await createCanvas(gameWidth, gameHeight);
  //const canvas = document.querySelector("#game");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}