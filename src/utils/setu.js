export function getSetu(r18) {
    return new Promise(resolve => {
        let xhr = new XMLHttpRequest();
        const url = r18 ? 'https://moe.jitsu.top/api/?sort=r18&type=json' : 'https://moe.jitsu.top/api/?type=json';
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhr.response));
            }
        }
    })
}