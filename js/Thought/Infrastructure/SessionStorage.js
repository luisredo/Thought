export class SessionStorage{
    #tableName = null;
    #data = null;
    constructor(tableName){
        this.#tableName = tableName;
        this.#data = this.readAll() === null ? [] : this.readAll;
    }
    create(data){
        this.#data.push(data);
        this.save();
    }
    read(id){
        return this.#data[id] === undefined ? null : this.#data[id];
    }
    update(id,data){
        if (this.#data[id] === undefined){
            throw "Element not exist";
        }
        this.#data[id] = data;
        this.save();
    }
    delete(id){
        if (this.#data[id] === undefined){
            throw "Element not exist";
        }
        sessionStorage.removeItem(id);
    }
    save(){
        sessionStorage.setItem(this.#tableName,this.#data);
    }
    readAll(){
        return sessionStorage.getItem(this.#tableName);
    }
}
