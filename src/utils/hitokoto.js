
export function getHitokoto() {
    return new Promise(resolve => {
        let res = "";
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://v1.hitokoto.cn/', true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhr.response));
            }
        }
    })
}