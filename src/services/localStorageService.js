export default class LocalStorageService {
    setItem(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    getItem(name) {
        return JSON.parse(localStorage.getItem(name));
    }
}