var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
console.log(Color.red, Color.green, Color.blue);
let code = 0;
if (code == 0) {
    console.log('success');
}
var Types1;
(function (Types1) {
    Types1[Types1["success"] = 456] = "success";
})(Types1 || (Types1 = {}));
let success = 0;
let key = Types1[success];
console.log(success);
console.log(key);
