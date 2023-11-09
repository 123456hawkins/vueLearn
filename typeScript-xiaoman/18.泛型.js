// 动态类型
function hawkins(a, b) {
    return [a, b];
}
var arr = hawkins(2, 3);
console.log(arr);
// 泛型
function fanxing(a, b) {
    return [a, b];
}
var arr2 = fanxing(2, 4);
var arr3 = fanxing('2', '13');
var data = {
    msg: 'waefw'
};
function add(a, b) {
    return [a, b];
}
var arr4 = add(5, false);
console.log(arr4);
// axios例子
var axios = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            };
            xhr.send(null);
        });
    }
};
axios.get('./data.json').then(function (res) { console.log(res.code); });
