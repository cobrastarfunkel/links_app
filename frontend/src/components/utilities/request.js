
const request = (url, data, method) => {
    return fetch(url, {
        method: method,
        headers: {
            "content_type": "application/json",
        },
        body: !data ? undefined : JSON.stringify(data),
        credentials: 'same-origin'
    })
        .then(res => res.json())
        .then(data => {
            console.log('[API Response]:', data);
            return true;
        })
        .catch((err) => {
            console.error('[Error]:', err);
            return false;
        });
}

export default request;