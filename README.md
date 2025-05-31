# zebra

<a href="https://progressivepull.github.io/zebra/">Zebra Website</a>

# Descriptions
This HTML code defines a webpage that allows users to input values for positioning and styling a rectangle, which is then displayed on an HTML5 <canvas> element. Here's a summary of its key components:

* **Bootstrap & jQuery Libraries:** The page includes Bootstrap for styling and layout, as well as jQuery for JavaScript functionality.

* **Canvas Element:** A <canvas> tag provides a space where the rectangle will be drawn.

* **User Input Form:** A form enables users to enter parameters such as the rectangle's X and Y position, width, height, and color.

* **Buttons for Interaction:** There are "Submit" and "Clear" buttons to process user inputs and modify the canvas display.

* **External Scripts & Styles:** 

# Canvas Tutorial

The code references external CSS (style.css) and JavaScript (canvas-script.js) files for additional styling and logic.

In HTML, you can use the `<canvas>` element to create shapes dynamically with JavaScript. While lists (`<ul>` or `<ol>`) themselves don't directly integrate with the `<canvas>`, you can draw list-like structures—such as bullet points or other shapes—inside the canvas.

For example, in JavaScript, you can use the `CanvasRenderingContext2D` to draw shapes like circles or squares to visually represent list items:

```html
<canvas id="myCanvas" width="400" height="200"></canvas>
<script>
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  // Draw three list-like circles
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(50, 50 + (i * 40), 10, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
  }
</script>
```

If you want to create a visual representation of a structured list inside a `<canvas>`, you can draw rectangles or text alongside these shapes to make it look like an actual list.

# List Shapes


The `<canvas>` element is incredibly versatile, allowing you to draw a wide variety of shapes using JavaScript. Here are some common shapes you can create:

1. **Lines** – Use `moveTo(x, y)` and `lineTo(x, y)` to draw straight lines.
2. **Rectangles** – Draw filled or outlined rectangles with `fillRect(x, y, width, height)` and `strokeRect(x, y, width, height)`.
3. **Circles & Ellipses** – Use `arc(x, y, radius, startAngle, endAngle)` to draw circles and `ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)` for ellipses.
4. **Triangles & Polygons** – Combine `moveTo(x, y)` and `lineTo(x, y)` calls to create complex polygons.
5. **Curves** – Create smooth curves with `quadraticCurveTo()` or `bezierCurveTo()`.
6. **Text & Paths** – You can even write text with `fillText()` or `strokeText()`, and create complex paths with `beginPath()` and `closePath()`.


