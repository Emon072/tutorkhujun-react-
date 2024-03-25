export function write_database(key , value){
    localStorage.setItem(key, JSON.stringify(value));
}