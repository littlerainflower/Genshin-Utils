const weaponTypes = require('./weapon_types.js')
const url = "https://xiaoru.sirv.com/genshin-utils/weapons/"

module.exports = [
   {
        "id": "dull_blade",
        "name": "Dull Blade",
        "lore": "Travels are full of meetings and partings. Perhaps the only trusty and inseparable companions of a Traveler, Are the sword in their hand and the dream in their heart.",
        "type": "sword",
        "rarity": 1,
        "base_atk" : [
            {
                "level" : "1",
                "value" : "23"
            },
            {
                "level" : "20/20",
                "value" : "56"
            },
            {
                "level" : "20/40",
                "value" : "68"
            },
            {
                "level" : "40/40",
                "value" : "102"
            },
            {
                "level" : "40/50",
                "value" : "113"
            },
            {
                "level" : "50/50",
                "value" : "130"
            },
            {
                "level" : "50/60",
                "value" : "141"
            },
            {
                "level" : "60/60",
                "value" : "158"
            },
            {
                "level" : "60/70",
                "value" : "169"
            },
            {
                "level" : "70/70",
                "value" : "185"
            }
        ],
        "secondary" : "none",
        "passive" : "none",
        "refinement" : "none",
        "img": url + "dull_blade.png",
        "2nd_img": url + "dull_blade_2nd.png",
        "sources": [
            "Chests",
        ]
   },
   {
        "id": "silver_sword",
        "name": "Silver Sword",
        "lore": "Despite how the folk belief would have it, silver does not actually have any special ability to exorcise. It is the pure heart of the wandering exorcist that is the true bane of evil.",
        "type": "sword",
        "rarity": 2,
        "base_atk" : [
            {
                "level" : "1",
                "value" : "33"
            },
            {
                "level" : "20/20",
                "value" : "80"
            },
            {
                "level" : "20/40",
                "value" : "91"
            },
            {
                "level" : "40/40",
                "value" : "139"
            },
            {
                "level" : "40/50",
                "value" : "151"
            },
            {
                "level" : "50/50",
                "value" : "174"
            },
            {
                "level" : "50/60",
                "value" : "186"
            },
            {
                "level" : "60/60",
                "value" : "209"
            },
            {
                "level" : "60/70",
                "value" : "220"
            },
            {
                "level" : "70/70",
                "value" : "243"
            }
        ],
        "secondary" : "none",
        "passive" : "none",
        "refinement" : "none",
        "img": url + "dull_blade.png",
        "2nd_img": url + "dull_blade_2nd.png",
        "sources": [
            "Chests",
        ]
   },
   {
        "id": "fillet_blade",
        "name": "Fillet Blade",
        "lore": "It was said that the Ticker Fish was a favorite among the people of Liyue. As word caught on, somehow Ticker became Tiger. Now, the real Ticker Fish is hard to come by, but Tiger Fish fillets have become synonymous with delicious fish for the people of Liyue.",
        "type": "sword",
        "rarity": 3,
        "base_atk" : [
            {
                "level" : "1",
                "value" : "39"
            },
            {
                "level" : "20/20",
                "value" : "94"
            },
            {
                "level" : "20/40",
                "value" : "113"
            },
            {
                "level" : "40/40",
                "value" : "169"
            },
            {
                "level" : "40/50",
                "value" : "189"
            },
            {
                "level" : "50/50",
                "value" : "216"
            },
            {
                "level" : "50/60",
                "value" : "236"
            },
            {
                "level" : "60/60",
                "value" : "263"
            },
            {
                "level" : "60/70",
                "value" : "282"
            },
            {
                "level" : "70/70",
                "value" : "309"
            },
            {
                "level" : "70/80",
                "value" : "329"
            },
            {
                "level" : "80/80",
                "value" : "355"
            },
            {
                "level" : "80/90",
                "value" : "375"
            },
            {
                "level" : "90/90",
                "value" : "401"
            }
        ],
        "secondary" : [
            {
                "level" : "1",
                "value" : "7.7%",
                "type" : "ATK"
            },
            {
                "level" : "20",
                "value" : "13.5%",
                "type" : "ATK"
            },
            {
                "level" : "40",
                "value" : "19.7%",
                "type" : "ATK"
            },
            {
                "level" : "50",
                "value" : "22.8%",
                "type" : "ATK"
            },
            {
                "level" : "60",
                "value" : "25.9%",
                "type" : "ATK"
            },
            {
                "level" : "70",
                "value" : "29.0%",
                "type" : "ATK"
            },
            {
                "level" : "80",
                "value" : "32.1%",
                "type" : "ATK"
            },
            {
                "level" : "80",
                "value" : "35.2%",
                "type" : "ATK"
            },
        ],
        "passive" : [
            {
                "refinement" : "1",
                "title" : "Gash",
                "description" : "On hit, has 50% chance to deal <b>240%</b> ATK DMG to a single enemy. Can only occur once every <b>15s</b>.",
                "cost" : "500"
            },
            {
                "refinement" : "2",
                "title" : "Gash",
                "description" : "On hit, has 50% chance to deal <b>280%</b> ATK DMG to a single enemy. Can only occur once every <b>14s</b>.",
                "cost" : "1000"
            },
            {
                "refinement" : "3",
                "title" : "Gash",
                "description" : "On hit, has 50% chance to deal <b>320%</b> ATK DMG to a single enemy. Can only occur once every <b>13s</b>.",
                "cost" : "2000"
            },
            {
                "refinement" : "4",
                "title" : "Gash",
                "description" : "On hit, has 50% chance to deal <b>360%</b> ATK DMG to a single enemy. Can only occur once every <b>12s</b>.",
                "cost" : "4000"
            },
            {
                "refinement" : "5",
                "title" : "Gash",
                "description" : "On hit, has 50% chance to deal <b>400%</b> ATK DMG to a single enemy. Can only occur once every <b>11s</b>.",
                "cost" : "N/A"
            },
        ],
        "img": url + "dull_blade.png",
        "2nd_img": url + "dull_blade_2nd.png",
        "sources": [
            "Chests",
        ]
   },
]
