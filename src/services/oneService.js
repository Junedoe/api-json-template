import http from './httpService';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

function itemUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getItems() {
    return http.get(apiEndpoint);
}

export function getItem(itemId) {
    return http.get(itemUrl(itemId));
}

export function saveItem(item) {
    //  item exist then use put to create item+save else use post to create item+save
    if (item.id) {
        const body = { ...item };
        delete body.id;
        console.log(itemUrl(item.id));
        return http.put(itemUrl(item.id), body);
    }

    return http.post(apiEndpoint, item);
}

export function deleteItem(itemId) {
    return http.delete(itemUrl(itemId));
}