const url = "https://xiaoru.sirv.com/genshin-utils/events/"

module.exports = [
    {
        id : "mimi_tomo",
        name : "Mimi Tomo",
        description : "During the event, complete the investigation of the \"Unusual Hilichurl\" to obtain rewards such as Liyue-style Furnishing Blueprints, Primogems, Hero's Wit, and Mora.",
        duration : [
            "Event Gameplay Period: 2021-05-27 - 2021-06-06\n",
            "\"The Lost Hilichurl\" Quest: 2021-06-06 - 2021-06-08"
        ],
        availability : "current",
        img: url + "mimi_tomo.jpg",
        eligibility: "Adventure Rank 20 or above",
        details : [
            "During the event, there are seven Sighting Locations to investigate. Once the event begins, one investigation location will be unlocked each day.",
            "With assistance from Hilichurlian expert Ella Musk, the Traveler is tasked with finding hilichurls that are open to communication and asking them for more information on the whereabouts of the Unusual Hilichurl.",
            "After completing requests for hilichurls, they will inform you of the time period during which the Unusual Hilichurl will be active, and also indicate the approximate location. Track down and defeat the Unusual Hilichurl at these times to obtain rewards.",
            "During the event, after a Traveler accepts the investigation quest in Co-Op Mode, only the host can carry out the quest.",
            "After the event gameplay period ends, Travelers who have completed the \"Mimi Tomo\" quest can accept \"The Lost Hilichurl\" quest at Katheryne's location in Mondstadt. Complete the quest to claim the corresponding rewards."
        ]
    },
    {
        id : "overflowing_mastery",
        name : "Overflowing Mastery",
        description : "During the event, Travelers who successfully challenge Talent Level-Up Material Domains and who consume Original Resin to obtain rewards will receive double the output.",
        duration : ["2021-05-31 - 2021-06-07"],
        availability : "current",
        img: url + "overflowing_mastery.jpg",
        eligibility: "After activating Talent Level-Up Material Domains",
        details: [
            "During the \"Overflowing Mastery\" event, Travelers who successfully challenge the Talent Level-Up Material Domains \"Forsaken Rift\" and \"Taishan Mansion\" and consume Original Resin to obtain rewards will receive double the output. A total of three opportunities to gain double drops will be available each day!"
        ]
    }
]
