# zebra

# Shape Drawer - Summary

**Shape Drawer** is a web-based interactive drawing tool that allows users to draw various geometric shapes and text on an HTML5 canvas. The application is built using HTML, Bootstrap for styling, and jQuery for dynamic interactivity, with drawing operations handled via the Canvas 2D API.

<a href="https://progressivepull.github.io/zebra/">Zebra Website</a>

## Key Features

- **Shape Selection:** Users can choose from multiple shapes, including lines, rectangles, circles, ellipses, triangles, polygons, curves (quadratic Bezier), SVG paths, and text.
- **Dynamic Parameters:** Each shape type reveals a custom form for entering relevant parameters such as coordinates, sizes, colors, and text.
- **Drawing Capabilities:** Users submit parameter forms to draw the selected shape on the canvas. Each shape has a dedicated drawing function.
- **Clear Functionality:** Each shape form includes a "Clear" button to erase the canvas, allowing for new drawings.
- **User-Friendly UI:** The interface uses Bootstrap for responsive design and form controls, making the tool accessible and easy to use.
- **SVG Path Support:** Advanced users can input SVG path strings to draw custom paths.
- **Text Rendering:** Users can render text with customizable position, font, and color.

## How It Works

1. On page load, only the shape selector is visible.
2. Selecting a shape reveals the corresponding parameter form.
3. After filling in the parameters, clicking "Submit" draws the shape onto the canvas.
4. Clicking "Clear" erases the entire canvas for a fresh start.
5. All drawing operations are handled using JavaScript and the Canvas 2D context.

## Technologies Used

- **HTML5 & Canvas API**: For drawing and rendering.
- **Bootstrap 5**: For layout and styling.
- **jQuery**: For DOM manipulation and event handling.
- **JavaScript**: For drawing logic and form processing.

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


# References 

* [Canvas API - Mozilla Org](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

* [HTML Tutorial Canvas - w3schools]( https://www.w3schools.com/graphics/canvas_intro.asp)

---

**Summary:**  
Shape Drawer provides an intuitive and flexible platform for drawing a wide variety of shapes and text directly in the browser, suitable for educational purposes, prototyping, or general creative expression.
