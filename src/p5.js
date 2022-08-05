import React from "react";
import Sketch from "react-p5";

let t;
let increment = 0.0005;

const P5 = () => {
    const setup = (p5, canvasParentRef) => {

        canvasParentRef = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        canvasParentRef.parent('canvasForHTML');

        p5.frameRate(24);
        p5.strokeWeight(0.1);
        p5.noFill();
        t = 0;
    };

    const draw = (p5) => {
        function makeLine(xPos, yPos, circleSize) {
            let x = p5.width * p5.noise(t + xPos);
            let y = p5.height * p5.noise(t + yPos);
            let size = p5.width * p5.noise(t + circleSize);

            p5.line(x, y, size, size);

            t += increment;
        }

        p5.background(255, 10);
        p5.stroke(Math.floor(Math.random() * 256), 0, 0);

        makeLine(4, 50, Math.floor(Math.random() * 100000));
        makeLine(0, 200, Math.floor(Math.random() * 100000));
        makeLine(90, 200, Math.floor(Math.random() * 100000));
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default P5;