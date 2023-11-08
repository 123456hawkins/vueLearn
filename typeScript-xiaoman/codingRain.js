var canvas = document.querySelector('canvas');
var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
if (canvas) {
    canvas.width = screen.availWidth;
    canvas.height = screen.availHeight;
    var str_1 = 'awefawjhtfyjfbfhserthytjkrfyujngfdhsergfbaegnmgzd'.split('');
    var Arr_1 = Array(Math.ceil(canvas.width / 10)).fill(0);
    console.log(Arr_1);
    var rain = function () {
        ctx === null || ctx === void 0 ? void 0 : ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx === null || ctx === void 0 ? void 0 : ctx.fillStyle = '#0f0';
        Arr_1.forEach(function (item, index) {
            ctx === null || ctx === void 0 ? void 0 : ctx.fillText(str_1[Math.floor(Math.random * str_1.length)], index * 10, item + 10);
            Arr_1[index] = item > (canvas === null || canvas === void 0 ? void 0 : canvas.height) || item > 10121 * Math.random() ? 0 : item + 10;
        });
    };
    setInterval(rain, 40);
}
