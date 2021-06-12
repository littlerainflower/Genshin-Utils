const items_data = require('./items_data.js')
const item_types = require('./item_types.js')

module.exports = class items {

    constructor() {}

    get_all(){
        return items_data
    }

    get_without_details(){
        return items_data.reduce(function(result, current) {
            result[current.type] = result[current.type] || [];
            result[current.type].push(current);
            return result;
        }, {})
    }

    get_recently_added(){
        return items_data.slice(Math.max(items_data.length - 2, 1))
    }

    get_(id){
        for (let i = 0; i < items_data.length; i++) {
            const item = items_data[i];
            if(item["id"] === id){
                return item
            }
        }
        return "not found"
    }

    get_by_type(type){
        var data = [];
        items_data.forEach(item => {
            if(item["type"] === type){
                data.push(item)
            }
        });
        return data
    }

    get_types(){
        return item_types
    }

}
