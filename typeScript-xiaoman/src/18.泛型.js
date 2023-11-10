function hawkins(a, b) {
    return [a, b];
}
const arr = hawkins(2, 3);
console.log(arr);
function fanxing(a, b) {
    return [a, b];
}
const arr2 = fanxing(2, 4);
const arr3 = fanxing('2', '13');
let data = {
    msg: 'waefw'
};
function add(a, b) {
    return [a, b];
}
const arr4 = add(5, false);
console.log(arr4);
const axios = {
    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            };
            xhr.send(null);
        });
    }
};
axios.get('./data.json').then(res => { console.log(res.code); });
