function draw_grid(context, minor, major, stroke, fill) {
    minor = minor || 10;
    major = major || minor * 5;
    stoke = stroke || "#00ff00";
    fill = fill || "009900";
    context.save();
    context.strokeStyle = stroke;
    context.fillStyle = fill;
    let width = context.canvas.width, height = context.canvas.height;

    for (var x = 0; x < width; x += minor) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.lineWidth = (x % major == 0) ? 0.5 : 0.25;
        context.stroke();
        if (x % major == 0) { context.fillText(x, x, 10);}
    }

    // for (var y = 0; y < height; y += minor) {
    //     context.beginPath();
    //     context.moveTo
    // }
    context.restore();

}











// let canvas = document.getElementById("asteriods");
// let context = canvas.getContext("2d");

// context.strokeStyle = "#00ff00";
// context.lineWidth = 0.25;

// for (let x = 0; x < canvas.width; x += 10) {
//     context.beginPath();
//     context.moveTo(x, 0);
//     context.lineTo(x, canvas.height);
//     context.lineWidth = (x % 50 == 0) ? 0.5 : 0.25;
//     context.stroke();
// }
// for (let y = 0; y < canvas.height; y += 10) {
//     context.beginPath();
//     context.moveTo(0, y);
//     context.lineTo(canvas.width, y);
//     context.lineWidth = (y % 50 == 0) ? 0.5 : 0.25;
//     context.stroke();
// }