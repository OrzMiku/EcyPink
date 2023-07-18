export function getParams() {
    const res = {}
    let raw = window.location.href;
    raw = raw.split('?')[1];
    if (raw) {
        raw = raw.split('&');
        for (let i = 0; i < raw.length; i++) {
            let key = raw[i].split('=')[0];
            let value = raw[i].split('=')[1];
            res[key] = value;
        }
    }
    return res;
}

export function isR18() {
    const params = getParams();
    if ('r18' in params) {
        if (params['r18'] !== 'true' && params['r18'] !== '1') {
            return false;
        }
        return true;
    }
    return false;
}