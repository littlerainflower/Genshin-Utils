const weapons_data = require('./weapons_data.js')
const weapon_types = require('./weapon_types.js')

module.exports = class weapons {

    constructor() {}

    get_all(){
        return weapons_data
    }

    get_without_details(){
        return weapons_data.reduce(function(result, current) {
            result[current.type] = result[current.type] || [];
            result[current.type].push(current);
            return result;
        }, {})
    }

    get_(id){
        for (let i = 0; i < weapons_data.length; i++) {
            const weapon = weapons_data[i];
            if(weapon["id"] === id){
                return weapon
            }
        }
        return "not found"
    }

    get_by_type(type){
        var data = [];
        weapons_data.forEach(weapon => {
            if(weapon["type"] === type){
                data.push(weapon)
            }
        });
        return data
    }

    get_types(){
        return weapon_types
    }
}
