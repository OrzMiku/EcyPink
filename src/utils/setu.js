export function getSetu() {
    return new Promise(resolve => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://moe.jitsu.top/api/?sort=r18&type=json', true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhr.response));
            }
        }
    })
}