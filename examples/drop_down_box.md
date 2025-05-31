Below is a simple example of how you can create a **drop-down box** (HTML `<select>` element) that lets users pick a shape to draw on a `<canvas>` element using JavaScript.

### **Code Example: Drop-down Box for Drawing Shapes on Canvas**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canvas Drop-down Box</title>
</head>
<body>
    <label for="shapeSelect">Choose a shape:</label>
    <select id="shapeSelect">
        <option value="circle">Circle</option>
        <option value="rectangle">Rectangle</option>
        <option value="triangle">Triangle</option>
    </select>
    <button onclick="drawShape()">Draw</button>
    
    <canvas id="myCanvas" width="400" height="300" style="border:1px solid black;"></canvas>

    <script>
        function drawShape() {
            let canvas = document.getElementById("myCanvas");
            let ctx = canvas.getContext("2d");
            let selectedShape = document.getElementById("shapeSelect").value;

            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

            if (selectedShape === "circle") {
                ctx.beginPath();
                ctx.arc(200, 150, 50, 0, Math.PI * 2);
                ctx.fillStyle = "blue";
                ctx.fill();
            } else if (selectedShape === "rectangle") {
                ctx.fillStyle = "red";
                ctx.fillRect(150, 100, 100, 80);
            } else if (selectedShape === "triangle") {
                ctx.beginPath();
                ctx.moveTo(200, 50);
                ctx.lineTo(150, 150);
                ctx.lineTo(250, 150);
                ctx.closePath();
                ctx.fillStyle = "green";
                ctx.fill();
            }
        }
    </script>
</body>
</html>
```

### **Explanation**
- The `<select>` element provides options (Circle, Rectangle, Triangle).
- A button (`<button>`) calls the `drawShape()` function when clicked.
- The function gets the selected shape and draws it onto the `<canvas>`.
- `clearRect()` is used to clear the canvas before drawing a new shape.
