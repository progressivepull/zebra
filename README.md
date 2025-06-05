# zebra

# Shape Drawer - Summary

**Shape Drawer** is a web-based interactive drawing tool that allows users to draw various geometric shapes and text on an HTML5 canvas. The application is built using HTML, Bootstrap for styling, and jQuery for dynamic interactivity, with drawing operations handled via the Canvas 2D API.

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

## Supported Shapes

- Line
- Rectangle
- Circle
- Ellipse
- Triangle
- Polygon (with arbitrary points)
- Quadratic Bezier curve
- SVG Path
- Text (customizable font, color, and content)

---

**Summary:**  
Shape Drawer provides an intuitive and flexible platform for drawing a wide variety of shapes and text directly in the browser, suitable for educational purposes, prototyping, or general creative expression.
