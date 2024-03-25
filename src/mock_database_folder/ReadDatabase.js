
export function read_database(key) {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : [];
}