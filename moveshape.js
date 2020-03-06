window.addEventListener('load', eventWindowLoad, false);

function eventWindowLoad() {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    // Square
    let x = 10; // x coordinates
    let y = 10; // y coordinates
    let width = 100; // Rectangle width
    let height = 330; // Rectangle height

    /*
    For random colours
    Reference: https://css-tricks.com/snippets/javascript/random-hex-color/
    
    Moving shape
    Reference: https://codepen.io/flipper/pen/wGQmgy
    */
    
    // Animation logic
    function logic() {
        x += 0.1;
        y += 0;
        /*
        if x + y is less than the width of canvas 
        subtract the width if
        answer = true draw and animate the shape
        */
        if (x + y < c.width - width) {
            requestAnimationFrame(drawRec);
        }
        // Start animation loop
        for (let i = 0; i < 4; i++) {

            if (x + y < c.width - width) {
                requestAnimationFrame(drawRec);
            }

            // Stop the loop
            else {
                break;
            }

            console.log(x + y < c.width - width);
        }

    }
    // Draw rectangle
    function drawRec() {

        let color = getRandomColor();
        ctx.fillRect(x, y, width, height);
        ctx.fillStyle = color;
        ctx.fill();
    }
    // Execute animation
    requestAnimationFrame(drawRec);
    setInterval(logic, 2500 / 60); // delay/speed or frames
    
    
    /////////////////////////////////
    
    // Show random colors
    function getRandomColor() {
        let characters = "0123456789ABCDEF";
        let color = '#';
        
        // Loop colors
        for (let i = 0; i < 6; i++) {
            color += characters[getRandomNumber(20, 0)];
        }

        return color;
    }
    /*
    Change color palette. High for (high saturation) and low for (low saturation).
    */
    function getRandomNumber(low, high) {
        let r = Math.floor(Math.random() * (high - low + 2)) + low;
        return r;
    }

};