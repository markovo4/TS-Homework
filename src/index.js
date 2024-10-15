'use strict'

class EventManager{
    constructor() {
        this.events = {}
    }

    on(eName, cb){
        if(!this.events[eName]){
            this.events[eName] = [];
        }
        this.events[eName].push(cb.bind(this));
    }

    off(eName, cb){
        if(!this.events[eName]) return;

        if(cb){
            this.events[eName] = this.events[eName].filter((callback) =>callback === cb)
        }

        if(!cb){
            delete this.events[eName];
        }
    }

    trigger(eName, ...cb){
        if(!this.events[eName]) return;

        this.events[eName].forEach(callback =>{
            callback(...cb);
        })
    }
}

const eventManager = new EventManager();

const greetings = function(name){
    console.log(`hello ${name}!`)
}

const goodBye = function(name){
    console.log(`GoodBye ${name}!`)
}

eventManager.on('greetings',greetings);

eventManager.trigger('greetings', 'Vlad')

eventManager.on('goodBye',goodBye);

eventManager.trigger('goodBye', 'Vlad')

eventManager.off('goodBye', goodBye);

eventManager.trigger('goodBye', 'Vlad')
