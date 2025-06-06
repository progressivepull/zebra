$(document).ready(function () {
    var canvas = document.getElementById('drawing-canvas');
    var context = canvas.getContext('2d');

    // On load, only show the shape selector
    $('.shape-params').hide();
    $('.hide-on-load').hide();

    // Show/hide parameter templates based on shape selection
    $('#shape-select').on('change', function () {
        var selectedShape = $(this).val();
        $('.shape-params').removeClass('active').hide();
        if (selectedShape) {
            $('#' + selectedShape + '-params').addClass('active').show();
        }
    });

    // ======= Drawing Functions =======

function drawRect(x, y, width, height, color) {
    console.log(`drawRect(x=${x}, y=${y}, width=${width}, height=${height}, color=${color})`);
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

function drawLine(x1, y1, x2, y2, color) {
    console.log(`drawLine(x1=${x1}, y1=${y1}, x2=${x2}, y2=${y2}, color=${color})`);
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function drawCircle(x, y, radius, color) {
    console.log(`drawCircle(x=${x}, y=${y}, radius=${radius}, color=${color})`);
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
}

function drawEllipse(x, y, radiusX, radiusY, color) {
    console.log(`drawEllipse(x=${x}, y=${y}, radiusX=${radiusX}, radiusY=${radiusY}, color=${color})`);
    context.fillStyle = color;
    context.beginPath();
    context.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
    context.fill();
}

function drawTriangle(x1, y1, x2, y2, x3, y3, color) {
    console.log(`drawTriangle(x1=${x1}, y1=${y1}, x2=${x2}, y2=${y2}, x3=${x3}, y3=${y3}, color=${color})`);
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();
    context.fill();
}

function drawPolygon(points, color) {
    console.log(`drawPolygon(points=${JSON.stringify(points)}, color=${color})`);
    context.fillStyle = color;
    if (points.length < 3) return;
    context.beginPath();
    context.moveTo(points[0][0], points[0][1]);
    for (var i = 1; i < points.length; i++) {
        context.lineTo(points[i][0], points[i][1]);
    }
    context.closePath();
    context.fill();
}

function drawCurve(x1, y1, cpx, cpy, x2, y2, color) {
    console.log(`drawCurve(x1=${x1}, y1=${y1}, cpx=${cpx}, cpy=${cpy}, x2=${x2}, y2=${y2}, color=${color})`);
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.quadraticCurveTo(cpx, cpy, x2, y2);
    context.stroke();
}

function drawText(x, y, text, font, color) {
    console.log(`drawText(x=${x}, y=${y}, text="${text}", font="${font}", color=${color})`);
    context.fillStyle = color;
    context.font = font;
    context.fillText(text, x, y);
}

function drawPath(pathString, color) {
    console.log(`drawPath(pathString="${pathString}", color=${color})`);
    try {
        var path = new Path2D(pathString);
        context.strokeStyle = color;
        context.stroke(path);
    } catch (e) {
        alert("Invalid SVG path string.");
    }
}

    // ======= Submit and Clear Buttons for Each Shape =======


    $('#rectangle-submit').click(function () {
        var x = parseInt($('#rect-x').val());
        var y = parseInt($('#rect-y').val());
        var width = parseInt($('#rect-width').val());
        var height = parseInt($('#rect-height').val());
        var color = $('#rect-color').val();
        drawRect(x, y, width, height, color);
    });
    $('#rectangle-clear').click(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Line
    $('#line-submit').click(function () {
        var x1 = parseInt($('#line-x1').val());
        var y1 = parseInt($('#line-y1').val());
        var x2 = parseInt($('#line-x2').val());
        var y2 = parseInt($('#line-y2').val());
        var color = $('#line-color').val();
        drawLine(x1, y1, x2, y2, color);
    });
    $('#line-clear').click(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Circle
    $('#circle-submit').click(function () {
        var x = parseInt($('#circle-x').val());
        var y = parseInt($('#circle-y').val());
        var radius = parseInt($('#circle-radius').val());
        var color = $('#circle-color').val();
        drawCircle(x, y, radius, color);
    });
    $('#circle-clear').click(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Ellipse
    $('#ellipse-submit').click(function () {
        var x = parseInt($('#ellipse-x').val());
        var y = parseInt($('#ellipse-y').val());
        var rx = parseInt($('#ellipse-radiusX').val());
        var ry = parseInt($('#ellipse-radiusY').val());
        var color = $('#ellipse-color').val();
        drawEllipse(x, y, rx, ry, color);
    });
    $('#ellipse-clear').click(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Triangle
    $('#triangle-submit').click(function () {
        var x1 = parseInt($('#tri-x1').val());
        var y1 = parseInt($('#tri-y1').val());
        var x2 = parseInt($('#tri-x2').val());
        var y2 = parseInt($('#tri-y2').val());
        var x3 = parseInt($('#tri-x3').val());
        var y3 = parseInt($('#tri-y3').val());
        var color = $('#tri-color').val();
        drawTriangle(x1, y1, x2, y2, x3, y3, color);
    });
    $('#triangle-clear').click(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Polygon
    $('#polygon-submit').click(function () {
        var pointsStr = $('#polygon-points').val();
        var color = $('#polygon-color').val();
        // Parse points as "x1,y1 x2,y2 ..." -> [[x1,y1],[x2,y2],...]
        var points = pointsStr.trim().split(' ').map(function (pair) {
            var xy = pair.split(',');
            return [parseInt(xy[0]), parseInt(xy[1])];
        });
        drawPolygon(points, color);
    });
    $('#polygon-clear').click(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Curve (Quadratic Bezier)
    $('#curve-submit').click(function () {
        var x1 = parseInt($('#curve-x1').val());
        var y1 = parseInt($('#curve-y1').val());
        var cpx = parseInt($('#curve-cpx').val());
        var cpy = parseInt($('#curve-cpy').val());
        var x2 = parseInt($('#curve-x2').val());
        var y2 = parseInt($('#curve-y2').val());
        var color = $('#curve-color').val();
        drawCurve(x1, y1, cpx, cpy, x2, y2, color);
    });
    $('#curve-clear').click(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Text
    $('#text-submit').click(function () {
        var x = parseInt($('#text-x').val());
        var y = parseInt($('#text-y').val());
        var text = $('#text-content').val();
        var font = $('#text-font').val();
        var color = $('#text-color').val();
        drawText(x, y, text, font, color);
    });
    $('#text-clear').click(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Path
    $('#path-submit').click(function () {
        var pathString = $('#path-data').val();
        var color = $('#path-color').val();
        drawPath(pathString, color);
    });
    $('#path-clear').click(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // --- Download canvas as image ---
$('#download-canvas').click(function () {
    var canvas = document.getElementById('drawing-canvas');
    var link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});

// --- Show file input when upload button is clicked ---
$('#upload-canvas-btn').click(function () {
    $('#upload-canvas').click();
});

// --- Load image onto canvas when file is selected ---
$('#upload-canvas').change(function (e) {
    var file = e.target.files[0];
    console.log('Upload input changed. File selected:', file ? file.name : 'none');
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (event) {
        console.log('FileReader loaded file.');
        var img = new Image();
        img.onload = function () {
            console.log('Image loaded. Drawing on canvas.');
            var canvas = document.getElementById('drawing-canvas');
            var context = canvas.getContext('2d');
            // Optionally, clear the canvas first:
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            console.log('Image drawn on canvas.');
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

});
