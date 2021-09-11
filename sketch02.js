const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI; // converts radiants to degrees!!!
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'red';
    context.translate(200, 400);

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.001;
    const h = height * 0.1;
    let x, y;

    const squareNum = 40;
    const radius = width * 0.3;

    for (let i = 0; i < squareNum; i++)
    {
      const slice = math.degToRad(360 / squareNum);
      const angle = slice * i;

    //x = cx * radius * Math.sin(angle);
    //y = cy * radius * Math.cos(angle);
      context.save(); // we need to save before restoring smth
    context.translate(x, y );
   // context.rotate(degToRad(45));
    context.rotate(angle);
    context.rotate(degToRad(Math.random() * 90)); // rotates the square randomly
    context.scale(random.range(0.4, 2), random.range(1,6)); // formula for min and max range!!


    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
    context.restore(); // resets the orientation

    context.save();
    context.fillStyle = 'magenta';
    context.translate(cx, cy);
    context.rotate(-angle);

    context.lineWidth = random.range(0.1, 15);

    context.beginPath();
    context.arc( 100, 100, radius * random.range(0.7, 5) , 800, slice * 5);
    context.stroke();
    context.restore();


    }

    context.translate(200, 400);


    context.beginPath();
    context.arc(100, -700, 150, 0, Math.PI * 2);
    context.stroke();
    


    context.beginPath();
    context.rect(100, random.range(801, -101), random.range(20,1500), random.range(50,100));
    context.stroke();

   

  };
};

canvasSketch(sketch, settings);
