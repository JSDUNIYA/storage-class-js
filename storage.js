class Storage {
    constructor(){
        this.store ={};
    }

   setItem(key, value){
    this.store[key] = value;
    window.localStorage.setItem(key, JSON.stringify(value));
   }

   getItem(key, value){
    if(key in this.store){
     return this.store[key];;
    } else {
        const value = window.localStorage.getItem(key);
        this.store[key] = JSON.parse(value);
        return this.store[key];
    }
}
    
    removeItem(key){
     delete this.store[key];
     window.localStorage.removeItem(key);
    }

    clear(){
        this.store = {};
        window.localStorage.clear();
    }
}





