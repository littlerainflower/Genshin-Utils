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
        "img": url + "dull_blade.png",
        "2nd_img": url + "dull_blade_2nd.png",
        "sources": [
            "Chests",
        ]
   },
   {
        "id": "fillet_blade",
        "name": "Fillet Blade",
        "description": "A sharp filleting knife. The blade is long, thin, and incredibly sharp.",
        "type": "sword",
        "rarity": 3,
        "base_atk" : [
            {
                "level" : "1/20",
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
        "secondary" : {
            "type" : "ATK",
            "stats" : [
                {
                    "level" : "1/20",
                    "value" : "8%",
                },
                {
                    "level" : "20/20",
                    "value" : "14%",
                },
                {
                    "level" : "20/40",
                    "value" : "14%",
                },
                {
                    "level" : "40/40",
                    "value" : "20%",
                },
                {
                    "level" : "40/50",
                    "value" : "20%",
                },
                {
                    "level" : "50/50",
                    "value" : "23%",
                },
                {
                    "level" : "50/60",
                    "value" : "23%",
                },
                {
                    "level" : "60/60",
                    "value" : "26%",
                },
                {
                    "level" : "60/70",
                    "value" : "26%",
                },
                {
                    "level" : "70/70",
                    "value" : "29%",
                },
                {
                    "level" : "70/80",
                    "value" : "29%",
                },
                {
                    "level" : "80/80",
                    "value" : "32%",
                },
                {
                    "level" : "80/90",
                    "value" : "32%",
                },
                {
                    "level" : "90/90",
                    "value" : "35%",
                },
            ]
        },
        "passive" : {
                "title" : "Gash",
                "description" : "On hit, has 50% chance to deal 240%/280%/320%/360%/400% ATK DMG to a single enemy. Can only occur once every 15/14/13/12/11s.",
        },
        "img": url + "fillet_blade.png",
        "2nd_img": url + "fillet_blade_2nd.png",
        "sources": [
            "Chests",
        ]
   },
]
