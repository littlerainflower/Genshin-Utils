const events_data = require('./events_data.js')

module.exports = class items {

    constructor() {}

    get_all(){
        return events_data
    }

    get_curr_events(){
        const data = []
        for(let i = 0; i < events_data.length; i++){
            data.push({
                id : events_data[i].id,
                name : events_data[i].name
            })
        }
        return data
    }

    get_(id){
        for (let i = 0; i < events_data.length; i++) {
            const item = events_data[i];
            if(item["id"] === id){
                return item
            }
        }
        return "not found"
    }

}
