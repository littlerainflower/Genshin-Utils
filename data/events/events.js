const events_data = require('./events_data.js')

module.exports = class items {

    constructor() {}

    get_all(){
        return events_data
    }

    get_curr_events(){
        const data = []
        for(let i = 0; i < events_data.length; i++){
            const event = events_data[i]
            if(event.availability === "current")
                data.push({
                    id : event.id,
                    name : event.name
                })
        }
        return data
    }

    get_without_details(){
        return events_data.reduce(function(result, current) {
            result[current.availability] = result[current.availability] || [];
            result[current.availability].push(current);
            return result;
        }, {})
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
