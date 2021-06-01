const itemTypes = require('./item_types.js')
const url = "https://xiaoru.sirv.com/genshin-utils/items/"


module.exports = [
   {
      "id": "mora",
      "name": "Mora",
      "description": "Common currency. The one language everybody speaks.",
      "type": "common_currency",
      "rarity": 3,
      "img": url + "mora.png",
      "sources": [
         "Quest Rewards",
         "Defeating Monsters",
         "Opening Chests",
         "Shops"
      ]
   },
   {
      "id": "wanderers_advice",
      "name": "Wanderer's Advice",
      "description": "These experiences are still beneficial even if one does not live in Teyvat.",
      "effect": "Character EXP material. Gives 1,000 EXP.",
      "type": "character_exp_materials",
      "img": url + "wanderers_advice.png",
      "rarity": 2,
      "sources": [
         "Adventure Rank Rewards",
         "Spiral Abyss Chamber's Bounty",
         "Chests",
         "Ley Line Outcrops Blossom of Revelation"
      ]
   },
   {
      "id": "adventures_experience",
      "name": "Adventure's Experience",
      "description": "These experiences are very beneficial for journeys into the unknown.",
      "effect": "Character EXP material. Gives 5,000 EXP.",
      "type": "character_exp_materials",
      "img": url + "adventures_experience.png",
      "rarity": 3,
      "sources": [
         "Adventure and Exploration Reward",
         "Paimon's Bargains",
         "Ley Line Outcrops Blossom of Revelation",
         "Quest completion reward"
      ]
   },
   {
      "id": "heros_wit",
      "name": "Hero's Wit",
      "description": "These experiences are extremely precious for a pilgrim traveling through Teyvat in order to be closer to Celestia.",
      "effect": "Character EXP material. Gives 20,000 EXP.",
      "type": "character_exp_materials",
      "img": url + "heros_wit.png",
      "rarity": 4,
      "sources": [
         "Ley Line Outcrops Blossom of Revelation (AR 35+)",
         "Quest completion reward",
         "Event Rewards",
         "Realm Depot"
      ]
   },
   {
      "id": "brilliant_diamond_sliver",
      "name": "Brilliant Diamond Sliver",
      "description": "Welcome to this world.",
      "type": "character_ascension_materials",
      "img": url + "brilliant_diamond_sliver.png",
      "rarity": 2,
      "sources": [
         "Adventure Rank 15 Reward (x1)"
      ]
   },
   {
      "id": "brilliant_diamond_fragment",
      "name": "Brilliant Diamond Fragment",
      "description": "Welcome to this world.",
      "type": "character_ascension_materials",
      "parent": "brilliant_diamond_sliver",
      "img": url + "brilliant_diamond_fragment.png",
      "rarity": 3,
      "sources": [
         "Adventure Rank 25 Reward (x3)",
         "Adventure Rank 26 Reward (x2)",
         "Adventure Rank 28 Reward (x2)",
         "Adventure Rank 30 Reward (x2)"
      ]
   },
   {
      "id": "brilliant_diamond_chunk",
      "name": "Brilliant Diamond Chunk",
      "description": "Welcome to this world.",
      "type": "character_ascension_materials",
      "parent": "brilliant_diamond_fragment",
      "img": url + "brilliant_diamond_chunk.png",
      "rarity": 4,
      "sources": [
         "Adventure Rank 35 Reward (x3)",
         "Adventure Rank 38 Reward (x3)",
         "Adventure Rank 40 Reward (x3)"
      ]
   },
   {
      "id": "brilliant_diamond_gemstone",
      "name": "Brilliant Diamond Gemstone",
      "description": "Welcome to this world.",
      "type": "character_ascension_materials",
      "parent": "brilliant_diamond_chunk",
      "img": url + "brilliant_diamond_gemstone.png",
      "rarity": 5,
      "sources": [
         "Adventure Rank 41 Reward (x2)",
         "Adventure Rank 42 Reward (x2)",
         "Adventure Rank 45 Reward (x2)"
      ]
   },
   {
      "id": "agnidus_agate_sliver",
      "name": "Agnidus Agate Sliver",
      "description": "Character Ascension Material.",
      "type": "character_ascension_materials",
      "img": url + "agnidus_agate_sliver.png",
      "rarity": 2,
      "sources": [
         "Dropped by Pyro Regisvine",
         "Dropped by Wolf of the North Challenge",
         "Dropped by Primo Geovishap",
         "Purchased from Souvenir Shops",
         "Alchemy"
      ]
   },
   {
      "id": "agnidus_agate_fragment",
      "name": "Agnidus Agate Fragment",
      "description": "\"A pilgrimage for a wish; a battle to earn a name...\"",
      "type": "character_ascension_materials",
      "parent": "agnidus_agate_sliver",
      "img": url + "agnidus_agate_fragment.png",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Pyro Regisvine",
         "Dropped by Lv.40+ Wolf of the North Challenge",
         "Dropped by Lv.40+ Primo Geovishap",
         "Alchemy"
      ]
   },
   {
      "id": "agnidus_agate_chunk",
      "name": "Agnidus Agate Chunk",
      "description": "\"A pilgrimage for a wish; a battle to earn a name…\" \" Burnt to cinders for a dream.\"",
      "type": "character_ascension_materials",
      "img": url + "agnidus_agate_chunk.png",
      "parent": "agnidus_agate_fragment",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Pyro Regisvine",
         "Dropped by Lv.60+ Wolf of the North Challenge",
         "Dropped by Lv.60+ Primo Geovishap",
         "Alchemy"
      ]
   },
   {
      "id": "agnidus_agate_gemstone",
      "name": "Agnidus Agate Gemstone",
      "description": "\"A pilgrimage for a wish; a battle to earn a name...\" \"Burnt to cinders for a dream.\" \"If the intention yet remains, achieved ██'s truth he has.\"",
      "type": "character_ascension_materials",
      "img": url + "agnidus_agate_gemstone.png",
      "parent": "agnidus_agate_chunk",
      "rarity": 5,
      "sources": [
         "Dropped by Lv.75+ Pyro Regisvine",
         "Dropped by Lv.75+ Wolf of the North Challenge",
         "Dropped by Lv.75+ Primo Geovishap",
         "Alchemy"
      ]
   },
   {
      "id": "varunada_lazurite_sliver",
      "name": "Varunada Lazurite Sliver",
      "description": "Character Ascension Material.",
      "type": "character_ascension_materials",
      "img": url + "varunada_lazurite_sliver.png",
      "rarity": 2,
      "sources": [
         "Dropped by Rhodeia of Loch",
         "Dropped by Confront Stormterror I-VI",
         "Dropped by Enter the Golden House I-IV",
         "Purchased from Souvenir Shops",
         "Commission Bonus Rewards"
      ]
   },
   {
      "id": "varunada_lazurite_fragment",
      "name": "Varunada Lazurite Fragment",
      "description": "\"My ideals have no stains.\"",
      "type": "character_ascension_materials",
      "parent": "varunada_lazurite_sliver",
      "img": url + "varunada_lazurite_fragment.png",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Rhodeia of Loch",
         "Dropped by Confront Stormterror I-VI",
         "Dropped by Enter the Golden House I-IV",
         "Alchemy"
      ]
   },
   {
      "id": "varunada_lazurite_chunk",
      "name": "Varunada Lazurite Chunk",
      "description": "\"My ideals have no stains. I must correct you. People here bear no sins in the eyes of the gods...\"",
      "type": "character_ascension_materials",
      "img": url + "varunada_lazurite_chunk.png",
      "parent": "varunada_lazurite_fragment",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Rhodeia of Loch",
         "Dropped by Confront Stormterror III-VI",
         "Dropped by Enter the Golden House I-IV",
         "Alchemy"
      ]
   },
   {
      "id": "varunada_lazurite_gemstone",
      "name": "Varunada Lazurite Gemstone",
      "parent": "varunada_lazurite_chunk",
      "description": "\"My ideals have no stains. I must correct you. People here bear no sins in the eyes of the gods... Only laws and the Tribunal can judge someone. They can judge even me. So praise my magnificence and purity.\"",
      "type": "character_ascension_materials",
      "img": url + "varunada_lazurite_gemstone.png",
      "rarity": 5,
      "sources": [
         "Dropped by Lv.75+ Rhodeia of Loch",
         "Dropped by Confront Stormterror V-VI",
         "Dropped by Enter the Golden House III-IV",
         "Alchemy"
      ]
   },
    {
      "id": "vajrada_amethyst_sliver",
      "name": "Vajrada Amethyst Sliver",
      "description": "Character Ascension Material.",
      "type": "character_ascension_materials",
      "img": url + "vajrada_amethyst_sliver.png",
      "rarity": 2,
      "sources": [
         "Dropped by Electro Hypostasis",
         "Dropped by Confront Stormterror I-VI",
         "Dropped by Enter the Golden House I-IV",
         "Purchased from Souvenir Shops",
         "Commission Bonus Rewards"
      ]
   },
   {
      "id": "vajrada_amethyst_fragment",
      "name": "Vajrada Amethyst Fragment",
      "parent": "vajrada_amethyst_sliver",
      "description": "\"This body is the noblest and most eminent of all in this world.\"",
      "type": "character_ascension_materials",
      "img": url + "vajrada_amethyst_fragment.png",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Electro Hypostasis",
         "Dropped by Confront Stormterror I-VI",
         "Dropped by Enter the Golden House I-IV",
         "Alchemy"
      ]
   },
   {
      "id": "vajrada_amethyst_chunk",
      "name": "Vajrada Amethyst Chunk",
      "parent": "vajrada_amethyst_fragment",
      "description": "\"This body is the noblest and most eminent of all in this world. It should hold absolute control over this world.\"",
      "type": "character_ascension_materials",
      "img": url + "vajrada_amethyst_chunk.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Electro Hypostasis",
         "Dropped by Confront Stormterror III-VI",
         "Dropped by Enter the Golden House I-IV",
         "Alchemy"
      ]
   },
   {
      "id": "vajrada_amethyst_gemstone",
      "name": "Vajrada Amethyst Gemstone",
      "parent": "vajrada_amethyst_chunk",
      "description": "\"This body is the noblest and most eminent of all in this world.\" \"It should hold absolute control over this world.\" \"It once promised its people a dream: the never-changing 'eternity.'\"",
      "type": "character_ascension_materials",
      "img": url + "vajrada_amethyst_gemstone.png",
      "rarity": 5,
      "sources": [
         "Dropped by Lv.75+ Electro Hypostasis",
         "Dropped by Confront Stormterror V-VI",
         "Dropped by Enter the Golden House III-IV",
         "Alchemy"
      ]
   },
   {
      "id": "vayuda_turquoise_sliver",
      "name": "Vayuda Turquoise Sliver",
      "description": "Character Ascension Material.",
      "type": "character_ascension_materials",
      "img": url + "vayuda_turquoise_sliver.png",
      "rarity": 2,
      "sources": [
         "Dropped by Anemo Hypostasis",
         "Dropped by Confront Stormterror I-VI",
         "Dropped by Enter the Golden House I-IV",
         "Purchased from Souvenir Shops",
         "Commission Bonus Rewards"
      ]
   },
   {
      "id": "vayuda_turquoise_fragment",
      "name": "Vayuda Turquoise Fragment",
      "parent": "vayuda_turquoise_sliver",
      "description": "\"Still, the winds change direction.\"",
      "type": "character_ascension_materials",
      "img": url + "vayuda_turquoise_fragment.png",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Anemo Hypostasis",
         "Dropped by Confront Stormterror I-VI",
         "Alchemy"
      ]
   },
   {
      "id": "vayuda_turquoise_chunk",
      "name": "Vayuda Turquoise Chunk",
      "parent": "vayuda_turquoise_fragment",
      "description": "\"Still, the winds change direction. Someday, they will blow towards a brighter future…\"",
      "type": "character_ascension_materials",
      "img": url + "vayuda_turquoise_chunk.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Anemo Hypostasis",
         "Dropped by Confront Stormterror III-VI",
         "Alchemy"
      ]
   },
   {
      "id": "vayuda_turquoise_gemstone",
      "name": "Vayuda Turquoise Gemstone",
      "parent": "vayuda_turquoise_chunk",
      "description": "\"Still, the winds change direction. \"Someday, they will blow towards a brighter future…\" \"Take my blessings and live leisurely from this day onward.\"",
      "type": "character_ascension_materials",
      "img": url + "vayuda_turquoise_gemstone.png",
      "rarity": 5,
      "sources": [
         "Dropped by Lv.75+ Anemo Hypostasis",
         "Dropped by Confront Stormterror V-VI",
         "Alchemy"
      ]
   },
   {
      "id": "shivada_jade_sliver",
      "name": "Shivada Jade Sliver",
      "description": "Character Ascension Material.",
      "type": "character_ascension_materials",
      "img": url + "shivada_jade_sliver.png",
      "rarity": 2,
      "sources": [
         "Dropped by Cryo Regisvine",
         "Dropped by Cryo Hypostasis",
         "Wolf of the North Challenge Reward",
         "Purchased from the Souvenir Shop"
      ]
   },
   {
      "id": "shivada_jade_fragment",
      "name": "Shivada Jade Fragment",
      "parent": "shivada_jade_sliver",
      "description": "\"Sorry...\"",
      "type": "character_ascension_materials",
      "img": url + "shivada_jade_fragment.png",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Cryo Regisvine",
         "Dropped by Lv.40+ Cryo Hypostasis",
         "Lv. 40+ Wolf of the North Challenge Reward",
         "Talk to Ivanovich (one time)",
         "Alchemy"
      ]
   },
   {
      "id": "shivada_jade_chunk",
      "name": "Shivada Jade Chunk",
      "parent": "shivada_jade_fragment",
      "description": "\"Sorry...\" \"...to also have you shoulder the grievances of the world.\"",
      "type": "character_ascension_materials",
      "img": url + "shivada_jade_chunk.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Cryo Regisvine",
         "Dropped by Lv.60+ Cryo Hypostasis",
         "Lv. 60+ Wolf of the North Challenge Reward",
         "Alchemy"
      ]
   },
   {
      "id": "shivada_jade_gemstone",
      "name": "Shivada Jade Gemstone",
      "parent": "shivada_jade_chunk",
      "description": "\"Sorry… to also have you shoulder the grievances of the world.\" \"Since you could endure my bitter cold, you must have the desire to burn?\" \"Then, burn away the old world for me.\"",
      "type": "character_ascension_materials",
      "img": url + "shivada_jade_gemstone.png",
      "rarity": 5,
      "sources": [
         "Dropped by Lv.75+ Cryo Regisvine",
         "Dropped by Lv.75+ Cryo Hypostasis",
         "Dropped by Lv.75+ Primo Geovishaps",
         "Lv. 80+ Enter the Golden House Reward",
         "Lv. 84+ Wolf of the North Challenge Reward",
         "Lv. 80+ Beneath the Dragon-Queller Reward",
         "Alchemy"
      ]
   },
   {
      "id": "prithiva_topaz_sliver",
      "name": "Prithiva Topaz Sliver",
      "description": "Character Ascension Material.",
      "type": "character_ascension_materials",
      "img": url + "prithiva_topaz_sliver.png",
      "rarity": 2,
      "sources": [
         "Dropped by Geo Hypostasis",
         "Dropped by Wolf of the North Challenge",
         "Dropped by Primo Geovishap",
         "Purchased from Souvenir Shops",
         "Lv. 84+ Wolf of the North Challenge Reward",
         "Lv. 80+ Beneath the Dragon-Queller Reward",
         "Alchemy"
      ]
   },
   {
      "id": "prithiva_topaz_fragment",
      "name": "Prithiva Topaz Fragment",
      "parent": "prithiva_topaz_sliver",
      "description": "\"The currencies that flow through this land are my flesh and blood.\"",
      "type": "character_ascension_materials",
      "img": url + "prithiva_topaz_fragment.png",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Geo Hypostasis",
         "Dropped by Lv.40+ Wolf of the North Challenge",
         "Dropped by Lv.40+ Primo Geovishap",
         "Alchemy"
      ]
   },
   {
      "id": "prithiva_topaz_chunk",
      "name": "Prithiva Topaz Chunk",
      "parent": "prithiva_topaz_fragment",
      "description": "\"The currencies that flow through this land are my flesh and blood.\" \"I am the guarantor of the people's hard work, wisdom, and future.\"",
      "type": "character_ascension_materials",
      "img": url + "prithiva_topaz_chunk.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Geo Hypostasis",
         "Dropped by Lv.60+ Wolf of the North Challenge",
         "Dropped by Lv.60+ Primo Geovishap",
         "Alchemy"
      ]
   },
   {
      "id": "prithiva_topaz_gemstone",
      "name": "Prithiva Topaz Gemstone",
      "parent": "prithiva_topaz_chunk",
      "description": "\"The currencies that flow through this land are my flesh and blood.\" \"For thus did I become the guarantor of the people's hard work, wisdom, and future.\" \"This is the trust I have placed in them. Betray it, and you taint my blood.\"",
      "type": "character_ascension_materials",
      "img": url + "prithiva_topaz_gemstone.png",
      "rarity": 5,
      "sources": [
         "Dropped by Lv.75+ Geo Hypostasis",
         "Dropped by Lv.73+ Primo Geovishaps",
         "Lv. 84+ Wolf of the North Challenge Reward",
         "Alchemy",
         "Lv. 80+ Beneath the Dragon-Queller Reward"
      ]
   },
   {
      "id": "hurricane_seed",
      "name": "Hurricane Seed",
      "description": "The imploded form of an Anemo Hypostasis upon its defeat. It contains the essence of Anemo energy. It is said that the power to create hurricanes resides within its seemingly fragile body. This butterfly of pure Anemo energy must be waiting for the day to conjure up storms once again.",
      "type": "character_ascension_materials",
      "img": url + "hurricane_seed.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.30+ Anemo Hypostasis"
      ]
   },
   {
      "id": "lightning_prism",
      "name": "Lightning Prism",
      "description": "An Electro Hypostasis channels nearby elemental energy to repair damaged elemental entities. It contains the essence of Electro energy. A common prism separates white light into component colors; a Lightning Prism, however, channels flowing energy and weaves them into lightning. It will continue to do so even after the Electro Hypostasis has been defeated.",
      "type": "character_ascension_materials",
      "img": url + "lightning_prism.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.30+ Electro Hypostasis"
      ]
   },
   {
      "id": "basalt_pillar",
      "name": "Basalt Pillar",
      "description": "A pillar form by the shell of a Geo Hypostasis. It is composed of high-density Geo energy. This is the heaviest component of a Geo Element. Maybe the reason a Geo Hypostasis creates this polar out of its shell and raises itself is just to get closer to the sky, not to combat enemies.",
      "type": "character_ascension_materials",
      "img": url + "basalt_pillar.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.30+ Geo Hypostasis"
      ]
   },
   {
      "id": "hoarfrost_core",
      "name": "Hoarfrost Core",
      "description": "The exposed core of a defeated Cryo Regisvine. Pure cryo elements are contained within it. Energy and thoughts that swell deep within the earth will eventually erupt on the surface. Even the deathly silent frost will attach to creatures on the ground, causing even the vines and branches of vegetation to become huge and fierce, attracting the hunter's gaze.",
      "type": "character_ascension_materials",
      "img": url + "hoarfrost_core.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.30+ Cryo Regisvines"
      ]
   },
   {
      "id": "everflame_seed",
      "name": "Everflame Seed",
      "description": "A seed that fuels the unending flames of the Pyro Regisvine. It emits pyro energy as if it will burn all that has ever sprouted from the ground. Endless desires flow among turbulent energy deep within the earth. What desire could steadily hold such fire to the plants and long so eagerly to bathe everything in unquenchable flames?",
      "type": "character_ascension_materials",
      "img": url + "everflame_seed.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.30+ Pyro Regisvines"
      ]
   },
   {
      "id": "cleansing_heart",
      "name": "Cleansing Heart",
      "description": "A scoop of eternal water left by an oceanid. Though it has already diffused among the depths of the lake, its purity remains all the same. But why would a creature so pure and clean as an oceanid desire the appearance of plants born of the ground and assume such a form with pure water? They need not breathe nor do they require sustenance...",
      "type": "character_ascension_materials",
      "img": url + "cleansing_heart.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.30+ Oceanids"
      ]
   },
   {
      "id": "juvenile_jade",
      "name": "Juvenile Jade",
      "description": "A crystalline substance taken from a Primo Geovishap. Within it is contained the potential to become a dragon. These dull crystals are precipitated within the bodies of vishaps sleeping in the mountains. Liyue folklore holds that they will gather power over many years, after which this crystal will, at last, replace their original heart, and the vishap will become a true dragon — one that can shake the mountains and split the earth..",
      "type": "character_ascension_materials",
      "img": url + "juvenile_jade.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.30+ Primo Geovishaps"
      ]
   },
   {
      "id": "crystalline_bloom",
      "name": "Crystalline Bloom",
      "description": "An ice crystal of exceeding purity that is created in frigid blooming of a Cryo Hypostasis. Those frosty crystals will continue to grow according to their own cold, rigid laws, till one day a flower of winter shall bloom and freeze everything. Perhaps it is stagnant time, that never-thawing bosom, that is the essence of this undying flower.",
      "type": "character_ascension_materials",
      "img": url + "crystalline_bloom.png",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.30+ Cryo Hypostasis"
      ]
   },
   {
      "id": "teachings_of_freedom",
      "name": "Teachings of Freedom",
      "description": "Freedom is the spirit of the Land of the Wind. The freedom to live is one of such. It is the freedom to live freely and healthily without concerns of one's own safety.",
      "type": "talent_level_up_materials",
      "img": url + "teachings_of_freedom.png",
      "rarity": 2,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Forsaken Rift (Monday/Thursday/Sunday)"
      ]
   },
   {
      "id": "guide_to_freedom",
      "name": "Guide to Freedom",
      "parent": "teachings_of_freedom",
      "description": "Freedom is the spirit of the Land of the Wind. The freedom of travel is one of such. It is the freedom to traverse the land freely without being obstructed.",
      "type": "talent_level_up_materials",
      "img": url + "guide_to_freedom.png",
      "rarity": 3,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Forsaken Rift (Monday/Thursday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "philosophies_of_freedom",
      "name": "Philosophies of Freedom",
      "parent": "guide_to_freedom",
      "description": "Freedom is the spirit of the city of wind. To sing is one such freedom. To sing on the land created by the Anemo Archon is to send your heart away with the song on the wind.",
      "type": "talent_level_up_materials",
      "img": url + "philosophies_of_freedom.png",
      "rarity": 4,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Forsaken Rift (Monday/Thursday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "teachings_of_resistance",
      "name": "Teachings of Resistance",
      "description": "Resistance is the backbone of the Land of the Wind. The history of Mondstadt is one of resistances. People rose up to prevent past conflicts from ever being forgotten, like sprouts breaking through the soil, like the eternal wind eroding through stone walls.",
      "type": "talent_level_up_materials",
      "img": url + "teachings_of_resistance.png",
      "rarity": 2,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Forsaken Rift (Tuesday/Friday/Sunday)"
      ]
   },
   {
      "id": "guide_to_resistance",
      "name": "Guide to Resistance",
      "parent": "teachings_of_resistance",
      "description": "Resistance is the backbone of the city of Wind. The history of Mondstadt is one of resistances. People rose up to grant the citizens of Mondstadt the freedom they now enjoy, like the Anemo Archon blowing away the snow, or like Vennessa rising up to fight.",
      "type": "talent_level_up_materials",
      "img": url + "guide_to_resistance.png",
      "rarity": 3,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Forsaken Rift (Tuesday/Friday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "philosophies_of_resistance",
      "name": "Philosophies of Resistance",
      "parent": "guide_to_resistance",
      "description": "Resistance is the backbone of the Land of the Wind. The history of Mondstadt is one of resistances. People rose up to allow the future Mondstadt's poetry to freely be that of the wind and be spread across the land.",
      "type": "talent_level_up_materials",
      "img": url + "philosophies_of_resistance.png",
      "rarity": 4,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Forsaken Rift (Tuesday/Friday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "teachings_of_ballad",
      "name": "Teachings of Ballad",
      "description": "Poetry is the soul of the Land of the Wind. Poetry is the manifestations of beautiful feelings. On a beautiful day, the breezes carry with them poetry that touches the heart of people like the wind caressing the leaves.",
      "type": "talent_level_up_materials",
      "img": url + "teachings_of_ballad.png",
      "rarity": 2,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Forsaken Rift (Wednesday/Saturday/Sunday)"
      ]
   },
   {
      "id": "guide_to_ballad",
      "name": "Guide to Ballad",
      "parent": "teachings_of_ballad",
      "description": "Poetry is the soul of the Land of the Wind. Poetry is the manifestations of the will to encourage. In the dark days, the gales in the streets and alleyways whisper words of fury, like the battle drums, like the low rumbling before the storm.",
      "type": "talent_level_up_materials",
      "img": url + "guide_to_ballad.png",
      "rarity": 3,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Forsaken Rift (Wednesday/Saturday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "philosophies_of_ballad",
      "name": "Philosophies of Ballad",
      "parent": "guide_to_ballad",
      "description": "Poetry is the soul of the Land of the Wind. Poetry is the manifestations of the desire to spread the word. Though nothing is eternal, though nothing will be the same, the wind's poetry will still spread beyond the skies, the land, the seas, to every corner of the world.",
      "type": "talent_level_up_materials",
      "img": url + "philosophies_of_ballad.png",
      "rarity": 4,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Forsaken Rift (Wednesday/Saturday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "teachings_of_prosperity",
      "name": "Teachings of Prosperity",
      "description": "Prosperity is the pursuit of the land of the earth. Prosperity is the blessing of Liyue, is the great city built by the gods and the people of Liyue, is the source of the peace and safety of the land.",
      "type": "talent_level_up_materials",
      "img": url + "teachings_of_prosperity.png",
      "rarity": 2,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Taishan Mansion (Monday/Thursday/Sunday)",
         "Chests"
      ]
   },
   {
      "id": "guide_to_prosperity",
      "name": "Guide to Prosperity",
      "parent": "teachings_of_prosperity",
      "description": "Prosperity is the pursuit of the Land of the Earth. Prosperity is the promise made by Liyue to its children: To repay the hard-working laborers with enough gold to brighten up this land.",
      "type": "talent_level_up_materials",
      "img": url + "guide_to_prosperity.png",
      "rarity": 3,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Taishan Mansion (Monday/Thursday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "philosophies_of_prosperity",
      "name": "Philosophies of Prosperity",
      "parent": "guide_to_prosperity",
      "description": "Prosperity is the pursuit of the Land of the Earth. Prosperity is Liyue's past, present, and future. This prosperity, unmatched and unobtainable by any of the other nations, is all for Liyue and its children to enjoy.",
      "type": "talent_level_up_materials",
      "img": url + "philosophies_of_prosperity.png",
      "rarity": 4,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Taishan Mansion (Monday/Thursday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "teachings_of_diligence",
      "name": "Teachings of Diligence",
      "description": "Industriousness is the foundation of the Land of the Earth. Diligence is to conquer mountains and seas, pursue prosperity, golden bravery, and power with honest, hard work.",
      "type": "talent_level_up_materials",
      "img": url + "teachings_of_diligence.png",
      "rarity": 2,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Taishan Mansion (Tuesday/Friday/Sunday)"
      ]
   },
   {
      "id": "guide_to_diligence",
      "name": "Guide to Diligence",
      "parent": "teachings_of_diligence",
      "description": "Industriousness is the foundation of the Land of the Earth. Industriousness is the catalyst the flows in the blood of the people of Liyue, able to turn rocks into gold. It is what makes its great commercial port great.",
      "type": "talent_level_up_materials",
      "img": url + "guide_to_diligence.png",
      "rarity": 3,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Taishan Mansion (Tuesday/Friday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "philosophies_of_diligence",
      "name": "Philosophies of Diligence",
      "parent": "guide_to_diligence",
      "description": "Industriousness is the foundation of the land of the earth. Industriousness is believing in one's own ability to earn a place in the land of the gods through sweat, wisdom, and power.",
      "type": "talent_level_up_materials",
      "img": url + "philosophies_of_diligence.png",
      "rarity": 4,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Taishan Mansion (Tuesday/Friday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "teachings_of_gold",
      "name": "Teachings of Gold",
      "description": "Gold is the symbol of the Land of the Earth. Gold is the blood flowing deep under the land of Liyue, is the muscles that pump Liyue's heart, and the bones that make Liyue stand proud.",
      "type": "talent_level_up_materials",
      "img": url + "teachings_of_gold.png",
      "rarity": 2,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Taishan Mansion (Wednesday/Saturday/Sunday)"
      ]
   },
   {
      "id": "guide_to_gold",
      "name": "Guide to Gold",
      "parent": "teachings_of_gold",
      "description": "Gold is the symbol of the Land of the Earth. Gold symbolizes conversion. This is the unspoken understanding between Liyue's mountains, land, city, and its people. In Liyue, industriousness is converted to gold, and gold to prosperity.",
      "type": "talent_level_up_materials",
      "img": url + "guide_to_gold.png",
      "rarity": 3,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Taishan Mansion (Wednesday/Saturday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "philosophies_of_gold",
      "name": "Philosophies of Gold",
      "parent": "guide_to_gold",
      "description": "Gold is the symbol of the Land of the Earth. Gold is the wealth of Liyue, but Liyue's true wealth is the hearts of its people that shine like gold.",
      "type": "talent_level_up_materials",
      "img": url + "philosophies_of_gold.png",
      "rarity": 4,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Taishan Mansion (Wednesday/Saturday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "crown_of_insight",
      "name": "Crown of Insight",
      "description": "Once a medium for the storage and transfer of wisdom in ancient times. Now wisdom is found in ancient texts and in profound speech. Nevertheless, this Crown of Insight must still be able to impart some transcendent power and wisdom to its bearer.",
      "type": "talent_level_up_materials",
      "img": url + "crown_of_insight.png",
      "rarity": 5,
      "sources": [
         "Upgrading the Frostbearing Tree to level 11",
         "Limited-duration Event reward"
      ]
   },
   {
      "id": "dvalins_plume",
      "name": "Dvalin's Plume",
      "description": "A feather from the tail of the Dragon of the East. As a dragon's feather it has experienced more than a thousand years' worth of winds. Its ambition to be free almost evokes light breezes to break it off its current shackles, but its previous owner's recognition of you has kept it in your hands.",
      "type": "talent_level_up_materials",
      "img": url + "dvalins_plume.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Stormterror Challenge Reward"
      ]
   },
   {
      "id": "dvalins_claw",
      "name": "Dvalin's Claw",
      "description": "A claw from the Dragon of the East. As it had once torn through the flesh of the shadow dragon Durin, it used to contain his vicious poison. However, thanks to your purification and healing, it is no longer toxic.",
      "type": "talent_level_up_materials",
      "img": url + "dvalins_claw.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Stormterror Challenge Reward"
      ]
   },
   {
      "id": "dvalins_sigh",
      "name": "Dvalin's Sigh",
      "description": "A bit of power taken from the whirlwinds evoked by the Dragon of the East. Beautiful and transparent, both trade winds and tornadoes will work in its name. The winds moves as its companion, its voice, and its freedom. Its enemies are the thousands who stand against the wind.",
      "type": "talent_level_up_materials",
      "img": url + "dvalins_sigh.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Stormterror Challenge Reward"
      ]
   },
   {
      "id": "tail_of_boreas",
      "name": "Tial of Boreas",
      "description": "A handful of tail scales from the Great Wolf King of the North. Even without its physical body and beyond death, Andrius still possesses extraordinary powers. It took a form comprised of ice and wind to embrace a new challenge, but even such form could not house all of its power. The ice scales that fell during the battle still retain some of its spiritual energy.",
      "type": "talent_level_up_materials",
      "img": url + "tail_of_boreas.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Wolf of the North Challenge Reward"
      ]
   },
   {
      "id": "ring_of_boreas",
      "name": "Ring of Boreas",
      "description": "A bit of crystallized ice from the Great Wolf King of the North. This land was once a realm of sub-zero blizzards and ice storms filled with razor-sharp ice shards, all at the command of Boreas. Though its powers may have diminished, flash-freezing the land is still a breeze.",
      "type": "talent_level_up_materials",
      "img": url + "ring_of_boreas.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Wolf of the North Challenge Reward"
      ]
   },
   {
      "id": "spirit_locket_of_boreas",
      "name": "Spirit Locket of Boreas",
      "description": "A bit of the Great Wolf King of the North's power drawn from its soul. This land was once a realm of sub-zero blizzards and ice storms filled with razor-sharp ice shards, all at the command of Boreas. In its final moments, it finally realized the chilling north wind could only extinguish life, not nurture it; therefore, Boreas let its powers freely flow into the land to protect it and its inhabitants.",
      "type": "talent_level_up_materials",
      "img": url + "spirit_locket_of_boreas.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Wolf of the North Challenge Reward"
      ]
   },
   {
      "id": "tusk_of_monoceros_caeli",
      "name": "Tusk of Monoceros Caeli",
      "description": "The horn of a whale that you obtained from defeating Childe, who had unleashed the might of his Delusion. It is said that the shape of one's constellation determines one's character. The image of a whale cruising across the celestial heights represents a solipsism that seeks to crush and devour all in its path. Embracing this aspect of himself, Childe gleefully summoned one such beast before throwing himself into battle against you.",
      "type": "talent_level_up_materials",
      "img": url + "tusk_of_monoceros_caeli.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Childe Challenge Reward"
      ]
   },
   {
      "id": "shard_of_a_foul_legacy",
      "name": "Shard of a Foul Legacy",
      "description": "The shard of a weapon that you obtained from defeating Childe, who had unleashed the might of his Delusion. It is stained with a profound color that is not of this world, no doubt due to the land of endless darkness that the young boy saw with his own two eyes. Perhaps it has nothing to do with the power of a Delusion, but as they say, the weapon reflects its user...",
      "type": "talent_level_up_materials",
      "img": url + "shard_of_a_foul_legacy.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Childe Challenge Reward"
      ]
   },
   {
      "id": "shadow_of_the_warrior",
      "name": "Shadow of the Warrior",
      "description": "A fragment of power that you obtained from defeating Childe, who had unleashed the might of his Delusion. It is the product of a will to fight that has been honed over countless slaughters. If humans do indeed have destinies, then his must surely have been twisted by such deeds. Why else, then, would he always be at the heart of every conflict?",
      "type": "talent_level_up_materials",
      "img": url + "shadow_of_the_warrior.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Childe Challenge Reward"
      ]
   },
   {
      "id": "dragon_lords_crown",
      "name": "Dragon Lord's Crown",
      "description": "Horns created from hardened jade crystallized over a thousand years are the natural crown of the dragon king. Infused with spirit and carved from bedrock, it was born from the mountain's heart to show the strength of the earth to the land amidst monoliths, and its long golden horns are the mark of its ancient strife with an ancient lord. For a time, this horn was shattered and lost its luster, but now it gleams cold and gold as it sits in your palm.",
      "type": "talent_level_up_materials",
      "img": url + "dragon_lords_crown.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Azhdaha Challenge Reward"
      ]
   },
   {
      "id": "bloodjade_branch",
      "name": "Bloodjade Branch",
      "description": "Nurtured by the might of the dragon king, these bone branches glitter with strange, unique colors. Hatred coursed through the natural streams and kissed the cold moonlight, and from them were these crystalline branches born and grown... Even though they were severed in battle, these branches steeped in dragon blood rustle as if eternally ill-at-ease.",
      "type": "talent_level_up_materials",
      "img": url + "bloodjade_branch.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Azhdaha Challenge Reward"
      ]
   },
   {
      "id": "gilded_scale",
      "name": "Gilded Scale",
      "description": "Scaled armor that grows naturally over mystical stone, tough and silent, and filled with the strength of the dragon king. Across the years as countless generations returned to the mulch of the earth, gold and obsidian embedded themselves into flesh and blood forged from bedrock before spreading and turning into scales. Searing agony, wordless cries... perhaps they will all vanish when the grudges that spawned them, too, finally come to an end.",
      "type": "talent_level_up_materials",
      "img": url + "gilded_scale.png",
      "rarity": 5,
      "sources": [
         "Lv.70+ Azhdaha Challenge Reward"
      ]
   },
   {
      "id": "enchancement_ore",
      "name": "Enchncement Ore",
      "type": "weapon_enchancement_materials",
      "img": url + "enchancement_ore.png",
      "effect": "Weapon EXP material. Gives 400 EXP.",
      "description": "A refined ingot with endless possibilities that can be used to enhance weapons.",
      "rarity": 1
   },
   {
      "id": "fine_enchancement_ore",
      "name": "Fine Enhancement Ore",
      "type": "weapon_enchancement_materials",
      "img": url + "fine_enchancement_ore.png",
      "effect": "Weapon EXP material. Gives 2,000 EXP.",
      "description": "For reasons unknown, this special and refined ore can be absorbed by weapons to greatly increase their strengths.",
      "rarity": 2
   },
   {
      "id": "mystic_enchancement_ore",
      "name": "Mystic Enchncement Ore",
      "type": "weapon_enchancement_materials",
      "img": url + "mystic_enchancement_ore.png",
      "effect": "Weapon EXP material. Gives 10,000 EXP.",
      "description": "Legend has it that this refined ingot contains the memories of battles that had taken place on the land. The weapons that benefit from these memories naturally become sentient.",
      "rarity": 3
   },
   {
      "id": "tile_of_decarabians_tower",
      "name": "Tile of Decarabian's Tower",
      "type": "weapon_ascension_materials",
      "img": url + "tile_of_decarabians_tower.png",
      "description": "The place now known as Stormterror's Lair was once the capital city of Decarabian, the God of Storms. Since this dream of prosperity was created entirely by his divine might, the broken pieces left behind by the shattering of that dream still possess great power.",
      "rarity": 2,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Monday/Thursday/Sunday)"
      ]
   },
   {
      "id": "debris_of_decarabians_city",
      "name": "Debris of Decarabian's City",
      "parent": "tile_of_decarabians_tower",
      "type": "weapon_ascension_materials",
      "img": url + "debris_of_decarabians_city.png",
      "description": "Decarabian, the God of Storms, was content with the capital city he had raised, and accepted the worship of the people from atop his tower. But he knew not that the people did not bow to him out of respect or adoration.",
      "rarity": 3,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Monday/Thursday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "fragment_of_decarabians_epic",
      "name": "Fragment of Decarabian's Epic",
      "parent": "debris_of_decarabians_city",
      "type": "weapon_ascension_materials",
      "img": url + "fragment_of_decarabians_epic.png",
      "description": "Andrius once declared war upon Decarabian, but failed to even scratch the capital of the Lord of the Tower. If it were not for the song of freedom that shattered the city in an instant, Decarabian's dream would have gone on forever.",
      "rarity": 4,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Monday/Thursday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "scattered_piece_of_decarabians_dream",
      "name": "Scattered Piece of Decarabian's Dream",
      "parent": "fragment_of_decarabians_epic",
      "type": "weapon_ascension_materials",
      "img": url + "scattered_piece_of_decarabians_dream.png",
      "description": "The people did not bow to Decarabian out of respect or adoration, but because the harsh winds had laid them low. This was the shattered dream and ambition of the Anemo Archon before the rise of Barbatos. He tried so hard to make his dream come true, and so the fragments of that dream are still mighty.",
      "rarity": 5,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Monday/Thursday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "boreal_wolfs_milk_tooth",
      "name": "Boreal Wolf's Milk Tooth",
      "type": "weapon_ascension_materials",
      "img": url + "boreal_wolfs_milk_tooth.png",
      "description": "Andrius' wolf pack is its blessed honor guard, and even the milk teeth of a wolf's cub possess great potential. In the past, the gods had the responsibility to love all people, which made Andrius quite the oddball for only adopting abandoned babies and accepting wanderers.",
      "rarity": 2,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Tuesday/Friday/Sunday)"
      ]
   },
   {
      "id": "boreal_wolfs_cracked_tooth",
      "name": "Boreal Wolf's Cracked Tooth",
      "parent": "boreal_wolfs_milk_tooth",
      "type": "weapon_ascension_materials",
      "img": url + "boreal_wolfs_cracked_tooth.png",
      "description": "The life of a wolf is not without violence; broken bones or cracked teeth are nothing special. Andrius found humans to be a disappointment, but believed babies to be innocent. If both the wolf pack and the adopted children chose each other, then they become a Lupical, a fated family.",
      "rarity": 3,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Tuesday/Friday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "boreal_wolfs_broken_fang",
      "name": "Boreal Wolf's Broken Fang",
      "parent": "boreal_wolfs_cracked_tooth",
      "type": "weapon_ascension_materials",
      "img": url + "boreal_wolfs_broken_fang.png",
      "description": "The wolf pack also understands that humans are not solitary creatures. The honorary broken tooth is a parting gift said to bring protection and luck. In the legends of a far-off world, a female wolf once adopted two great humans. Their home was known as the Cave of Wolves, or Lupercal - that word meaning the same thing as Lupical does in this world.",
      "rarity": 4,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Tuesday/Friday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "boreal_wolfs_nostalgia",
      "name": "Boreal Wolf's Nostalgia",
      "parent": "boreal_wolfs_broken_fang",
      "type": "weapon_ascension_materials",
      "img": url + "boreal_wolfs_nostalgia.png",
      "description": "The Wolf King, believing itself to despise humans, thought itself unable to envision a happy life for humanity, making it unworthy of becoming the Lord of the Winds of the world. Therefore, it chose to disappear. Yet, in truth, it gazed on the ones the world abandoned ever so gently.",
      "rarity": 5,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Tuesday/Friday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "fetters_of_the_dandelion_gladiator",
      "name": "Feeters of the Dandelion Gladiator",
      "type": "weapon_ascension_materials",
      "img": url + "fetters_of_the_dandelion_gladiator.png",
      "description": "It's a human thing to exaggerate on a hero's story, even to the point of elevating the fetters that once bound the hero to the level of an enemy of true freedom. As a result, these fetters were granted extraordinary powers.",
      "rarity": 2,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Wednesday/Saturday/Sunday)"
      ]
   },
   {
      "id": "chains_of_the_dandelion_gladiator",
      "name": "Chains of the Dandelion Gladiator",
      "parent": "fetters_of_the_dandelion_gladiator",
      "type": "weapon_ascension_materials",
      "img": url + "chains_of_the_dandelion_gladiator.png",
      "description": "The chains that once bound the great hero Vennessa. In truth, all gladiators would have worn chains in that era, and Vennessa was but one of them.",
      "rarity": 3,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Wednesday/Saturday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "shackles_of_the_dandelion_gladiator",
      "name": "Shackles of the Dandelion Gladiator",
      "parent": "chains_of_the_dandelion_gladiator",
      "type": "weapon_ascension_materials",
      "img": url + "shackles_of_the_dandelion_gladiator.png",
      "description": "Vennessa was not truly bound by her chains. If she had so wished, no ordinary physical constraints forged in Mondstadt could have held her, for the land there yielded no ore of exceptional quality, nor did it possess the divine flame of her ancestral home. She was only bound by her responsibility to take care of her tribespeople.",
      "rarity": 4,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Wednesday/Saturday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "dream_of_the_dandelion_gladiator",
      "name": "Dream of the Dandelion Gladiator",
      "parent": "shackles_of_the_dandelion_gladiator",
      "type": "weapon_ascension_materials",
      "img": url + "dream_of_the_dandelion_gladiator.png",
      "description": "Vennessa was freed from her slavery, but that which constrained her only grew greater - from her tribesmen to all of Mondstadt, and even to the concept of freedom itself, extending to the whole world. What she really hoped for, in truth, was that the world might grow stronger.",
      "rarity": 5,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Cecilia Garden (Wednesday/Saturday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "luminous_sands_from_guyun",
      "name": "Luminous Sands from Guyun",
      "type": "weapon_ascension_materials",
      "img": url + "luminous_sands_from_guyun.png",
      "description": "The stone pillars that tower amid the Guyun Stone Forest were once the stone lances Morax used to defeat his enemies. As time passed, the body of these gods penetrated into the pillars, granting them divinity. The pillars would sometimes shed crumbs of hatred and curses.",
      "rarity": 2,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Monday/Thursday/Sunday)",
         "Purchase from the Souvenir Shop in Liyue"
      ]
   },
   {
      "id": "lustrous_stone_from_guyun",
      "name": "Lustrous Stone from Guyun",
      "parent": "luminous_sands_from_guyun",
      "type": "weapon_ascension_materials",
      "img": url + "lustrous_stone_from_guyun.png",
      "description": "To the informed, Guyun Stone Forest is not some miraculous sight on the sea to behold, but the cemetery of the former gods of Liyue. Hatred and filth have periodically raised up from it, but all have been subdued by a demon-conquering young man.",
      "rarity": 3,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Monday/Thursday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "relic_from_guyun",
      "name": "Relic from Guyun",
      "parent": "lustrous_stone_from_guyun",
      "type": "weapon_ascension_materials",
      "img": url + "relic_from_guyun.png",
      "description": "The stone lance has a glimmering core formed by the power of the defeated gods. Their hatred is not directed at Morax, for they have lost themselves a long time ago and are incapable of holding personal grudges.",
      "rarity": 4,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Monday/Thursday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "divine_body_from_guyun",
      "name": "Divine Body from Guyun",
      "parent": "relic_from_guyun",
      "type": "weapon_ascension_materials",
      "img": url + "divine_body_from_guyun.png",
      "description": "That which lurks within and animates this relic are the divine remains of lamenting gods. They are unrealized ideals, designs for a prosperous humanity that could never be. They may now lie deep within stone and sea, but they will not go quietly into the night.",
      "rarity": 5,
      "day": [
         "Monday",
         "Thursday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Monday/Thursday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "mist_veiled_lead_elixir",
      "name": "Mist Veiled Lead Elixir",
      "type": "weapon_ascension_materials",
      "img": url + "mist_veiled_lead_elixir.png",
      "description": "Jueyun Karst is the realm of the mighty and illuminated adepti. But other than the ability to control the elements of the world, Jueyun Karst is also home to three other untold secrets: Danding (Alchemy), Fulu (Sigils), and Waijing (Sub-Space Creation).",
      "rarity": 2,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Tuesday/Friday/Sunday)",
         "Purchase from the Souvenir Shop in Liyue"
      ]
   },
   {
      "id": "mist_veiled_mercury_elixir",
      "name": "Mist Veiled Mercury Elixir",
      "parent": "mist_veiled_lead_elixir",
      "type": "weapon_ascension_materials",
      "img": url + "mist_veiled_mercury_elixir.png",
      "description": "With Fulu (Sigils), the adepti can store their power in the form of symbols, and with Waijing (Sub-Space Creation) they can fashion a cosmic paradise with the power of their minds. The manufacture of elixirs, however, has always been shrouded in mystery, for certain death follows for any who swallow them.",
      "rarity": 3,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Tuesday/Friday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "mist_veiled_gold_elixir",
      "name": "Mist Veiled Gold Elixir",
      "parent": "mist_veiled_mercury_elixir",
      "type": "weapon_ascension_materials",
      "img": url + "mist_veiled_gold_elixir.png",
      "description": "Elixirs are in fact pills made from metal alloys. They were created by the adepti, and are able to grant weapons transcendent powers. However, they are rarely seen in the world due to the hubris of the practitioners of martial arts, who prized the ways of combat over the paths of the adepti.",
      "rarity": 4,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Tuesday/Friday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "mist_veiled_primo_elixir",
      "name": "Mist Veiled Primo Elixir",
      "parent": "mist_veiled_gold_elixir",
      "type": "weapon_ascension_materials",
      "img": url + "mist_veiled_primo_elixir.png",
      "description": "An elixir of the highest quality. It embodies a state of intertwining order and chaos, and is said to mirror how the world was when it was first created. Of course, a certain someone knows that this was not the case.",
      "rarity": 5,
      "day": [
         "Tuesday",
         "Friday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Tuesday/Friday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "grain_of_aerosiderite",
      "name": "Grain of Aerosiderite",
      "type": "weapon_ascension_materials",
      "img": url + "grain_of_aerosiderite.png",
      "description": "A black meteor once fell beyond Liyue's Sea of Clouds, said to have fallen to vanquish a monster. However, it was stained by powerful tainted blood, so this item no longer possesses the pure power of Rex Lapis.",
      "rarity": 2,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Wednesday/Saturday/Sunday)",
         "Purchase from the Souvenir Shop in Liyue"
      ]
   },
   {
      "id": "piece_of_aerosiderite",
      "name": "Piece of Aerosiderite",
      "parent": "grain_of_aerosiderite",
      "type": "weapon_ascension_materials",
      "img": url + "piece_of_aerosiderite.png",
      "description": "Rumors of sea monsters are commonplace in Liyue, since the other-shore is an unknown region that lies outside of Teyvat. Without the protection of The Seven, all that lies beyond is unknown chaos. Only power beyond the order of Teyvat is able to stain the power of Rex Lapis black.",
      "rarity": 3,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Wednesday/Saturday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "bit_of_aerosiderite",
      "name": "Bit of Aerosiderite",
      "parent": "piece_of_aerosiderite",
      "type": "weapon_ascension_materials",
      "img": url + "bit_of_aerosiderite.png",
      "description": "The coastal nations of Teyvat refer to the region beyond the protection of The Seven as the Dark Sea. It is said many defeated gods refused to live under the new order of The Seven, so they fled to remote islands and became evil gods. However, their powers came from the same source as Rex Lapis, separate from this all-devouring darkness.",
      "rarity": 4,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Wednesday/Saturday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "chunk_of_aerosiderite",
      "name": "Chunk of Aerosiderite",
      "parent": "piece_of_aerosiderite",
      "type": "weapon_ascension_materials",
      "img": url + "chunk_of_aerosiderite.png",
      "description": "When Khaenri'ah was destroyed, a great sinner created endless monsters with alien, dark blood flowing through their veins. They rampaged across the land, destroying all in their paths. Their lives were mutations, caused by powers beyond this world. The black serpentine dragon Durin that attacked Mondstadt was such a mutation.",
      "rarity": 5,
      "day": [
         "Wednesday",
         "Saturday",
         "Sunday"
      ],
      "sources": [
         "Hidden Palace of Lianshan Formula (Wednesday/Saturday/Sunday)",
         "Alchemy"
      ]
   },
   {
      "id": "festering_dragon_marrow",
      "name": "Festering Dragon Marrow",
      "type": "refinement_materials",
      "img": url + "festering_dragon_marrow.png",
      "description": "This is the product of purifying Durin's vile venom, which has seeped into and spread throughout Dragonspine's ley lines. By using it on a bloodthirsty sword with a strong affinity for such materials, you can increase that sword's power.",
      "rarity": 4,
      "effect": "Specialized refinement material for Festering Desire.",
      "sources": [
         "The Chalk Prince and the Dragon Event Shops"
      ]
   },
   {
      "id": "the_visible_winds",
      "name": "\"The Visible Winds\"",
      "type": "refinement_materials",
      "img": url + "the_visible_winds.png",
      "description": "An intricately-made ornament that symbolizes the windmills and windblumes, and is that which adorns the limbs of the Windblume Ode. The wind is invisible and intangible, but the windmills that keep turning and the swaying flowers in the emerald fields are \"the visible winds\" that show people that the breeze will always care for all life in Mondstadt.",
      "rarity": 4,
      "effect": "Specialized refinement material for Windblume Ode.",
      "sources": [
         "Invitation of Windblume Event Shop"
      ]
   },
   {
      "id": "slime_condensate",
      "name": "Slime Condensate",
      "type": "common_ascension_materials",
      "img": url + "slime_condensate.png",
      "description": "A thick coating found on slimes. Most commonly seen material in elemental workshops.",
      "rarity": 1,
      "sources": [
         "Dropped by Slimes"
      ]
   },
   {
      "id": "slime_secretions",
      "name": "Slime Secretions",
      "parent": "slime_condensate",
      "type": "common_ascension_materials",
      "img": url + "slime_secretions.png",
      "description": "Mildly purified slime secretions. Harmful to the skin. Please avoid direct exposure.",
      "rarity": 2,
      "sources": [
         "Dropped by Lv.40+ Slimes",
         "Alchemy"
      ]
   },
   {
      "id": "slime_concentrate",
      "name": "Slime Concentrate",
      "parent": "slime_secretions",
      "type": "common_ascension_materials",
      "img": url + "slime_concentrate.png",
      "description": "Concentrated slime essence. When left on its own, it will begin to move on its own.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.60+ Slimes",
         "Alchemy"
      ]
   },
   {
      "id": "damaged_mask",
      "name": "Damage Mask",
      "type": "common_ascension_materials",
      "img": url + "damaged_mask.png",
      "description": "A broken bone mask that once belonged to some hilichurl. Now more broken than complete, it can no longer perform its primary function.",
      "rarity": 1,
      "sources": [
         "Dropped by Hilichurls"
      ]
   },
   {
      "id": "stained_mask",
      "name": "Stained Mask",
      "parent": "damaged_mask",
      "type": "common_ascension_materials",
      "img": url + "stained_mask.png",
      "description": "A bone mask covered in unidentifiable stains and a mysterious odor. Yet such is the devotion of hilichurls to masks that they will wear it nonetheless.",
      "rarity": 2,
      "sources": [
         "Dropped by Lv.60+ Hilichurls",
         "Alchemy"
      ]
   },
   {
      "id": "ominous_mask",
      "name": "Ominous Mask",
      "parent": "stained_mask",
      "type": "common_ascension_materials",
      "img": url + "ominous_mask.png",
      "description": "A glossy bone mask with oil markings painted on it, meant to intimidate enemies. No-one really knows why hilichurls are so fascinated with masks. Some say it's because they don't want to see their own reflections in the water.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.60+ Hilichurls",
         "Alchemy"
      ]
   },
   {
      "id": "divining_scroll",
      "name": "Divining Scroll",
      "type": "common_ascension_materials",
      "img": url + "divining_scroll.png",
      "description": "A scroll that likely relates to some kind of magic. Exudes an inexplicable but ominous warmth.",
      "rarity": 1,
      "sources": [
         "Dropped by Samachurls"
      ]
   },
   {
      "id": "sealed_scroll",
      "name": "Sealed Scroll",
      "parent": "divining_scroll",
      "type": "common_ascension_materials",
      "img": url + "sealed_scroll.png",
      "description": "An old scroll lacking in detail and clarity. By following the img on it, some magical creatures can recreate a small part of its magic.",
      "rarity": 2,
      "sources": [
         "Dropped by Lv.40+ Samachurls",
         "Alchemy"
      ]
   },
   {
      "id": "forbidden_cursed_scroll",
      "name": "Forbidden Cursed Scroll",
      "parent": "sealed_scroll",
      "type": "common_ascension_materials",
      "img": url + "forbidden_cursed_scroll.png",
      "description": "A scroll inscribed with ancient img. It is said that few can decipher its meaning, and the few scholars that have all went mad.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.60+ Samachurls",
         "Alchemy"
      ]
   },
   {
      "id": "firm_arrowhead",
      "name": "Firm Arrowhead",
      "type": "common_ascension_materials",
      "img": url + "firm_arrowhead.png",
      "description": "A roughly produced arrowhead. Though unimpressive, neither it nor the bow should be underestimated, for even the bravest knight can be felled by an arrow from the rear.",
      "rarity": 1,
      "sources": [
         "Dropped by Hilichurl Shooter"
      ]
   },
   {
      "id": "sharp_arrowhead",
      "name": "Sharp Arrowhead",
      "parent": "firm_arrowhead",
      "type": "common_ascension_materials",
      "img": url + "sharp_arrowhead.png",
      "description": "A well-made arrowhead. Sharp enough to penetrate armor with the ease of a rock through the surface of water.",
      "rarity": 2,
      "sources": [
         "Dropped by Lv.40+ Hilichurl Shooter",
         "Alchemy"
      ]
   },
   {
      "id": "weathered_arrowhead",
      "name": "Weathered Arrowhead",
      "parent": "sharp_arrowhead",
      "type": "common_ascension_materials",
      "img": url + "weathered_arrowhead.png",
      "description": "An old arrowhead coated in blood. The arrowhead has long since lost its sharpness and thus its use as a weapon. However it represents the pride of a hunter and acts as both an amulet and a medal.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.60+ Hilichurl Shooter",
         "Alchemy"
      ]
   },
   {
      "id": "heavy_horn",
      "name": "Heavy Horn",
      "type": "common_ascension_materials",
      "img": url + "heavy_horn.png",
      "description": "A crude horn used by hilichurls to warn each other. Given the damage to the horn, it won't be warning anyone any time soon.",
      "rarity": 2,
      "sources": [
         "Dropped by Mitachurls"
      ]
   },
   {
      "id": "black_bronze_horn",
      "name": "Black Bronze Horn",
      "parent": "heavy_horn",
      "type": "common_ascension_materials",
      "img": url + "black_bronze_horn.png",
      "description": "A metallic monster horn that can only be obtained from especially strong hilichurls, since blowing on the horn takes real strength.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Mitachurls",
         "Alchemy"
      ]
   },
   {
      "id": "black_crystal_horn",
      "name": "Black Crystal Horn",
      "parent": "black_bronze_horn",
      "type": "common_ascension_materials",
      "img": url + "black_crystal_horn.png",
      "description": "A metallic horn with an ominous shine decorated with black crystals of an unknown source. It has hardly been used at all. It is likely a ceremonial item of the hilichurls'.",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Mitachurls",
         "Alchemy"
      ]
   },
   {
      "id": "dead_ley_line_branch",
      "name": "Dead Ley Line branch",
      "type": "common_ascension_materials",
      "img": url + "dead_ley_line_branch.png",
      "description": "Fragile branches from deep within the earth. Even after years of age, from beneath it's mottled surface you can see that its power is not yet entirely lost.",
      "rarity": 2,
      "sources": [
         "Dropped by Abyss Mages"
      ]
   },
   {
      "id": "dead_ley_line_leaves",
      "name": "Dead Ley Line Leaves",
      "parent": "dead_ley_line_branch",
      "type": "common_ascension_materials",
      "img": url + "dead_ley_line_leaves.png",
      "description": "A twig from deep within the earth. Though it is far from where it once lay, its leaves still pulsate with energy.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Abyss Mages",
         "Alchemy"
      ]
   },
   {
      "id": "ley_line_sprouts",
      "name": "Ley Line Sprouts",
      "parent": "dead_ley_line_leaves",
      "type": "common_ascension_materials",
      "img": url + "ley_line_sprouts.png",
      "description": "It is said that there was a great tree whose roots once spread out to every corner of the world, and this branch is said to be part of it. It is almost if it was never broken off and taken far away, for its vitality is such that it still sprouts new leaves even now.",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Abyss Mages",
         "Alchemy"
      ]
   },
   {
      "id": "chaos_device",
      "name": "Chaos Device",
      "type": "common_ascension_materials",
      "img": url + "chaos_device.png",
      "description": "Comes from ancient defunct relic structures. A part that once held the structure together. Its aesthetically-pleasing engineering is quite exquisite.",
      "rarity": 2,
      "sources": [
         "Dropped by Automatons"
      ]
   },
   {
      "id": "choas_circuit",
      "name": "Chaos Circuit",
      "parent": "chaos_device",
      "type": "common_ascension_materials",
      "img": url + "chaos_circuit.png",
      "description": "Comes from ancient defunct relic structures. Was once a logic circuit responsible for movement functions. Sadly, no-one is able to make sense of how it worked.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Automatons",
         "Alchemy"
      ]
   },
   {
      "id": "chaos_core",
      "name": "Chaos Core",
      "parent": "choas_circuit",
      "type": "common_ascension_materials",
      "img": url + "chaos_core.png",
      "description": "Comes from ancient defunct relic structures. The core that once drove a mechanical beast. Should you come to understand its workings and reproduce it, you could perhaps change the world.",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Automatons",
         "Alchemy"
      ]
   },
   {
      "id": "mist_grass_pollen",
      "name": "Mist Grass Pollen",
      "type": "common_ascension_materials",
      "img": url + "mist_grass_pollen.png",
      "description": "Strange spores created by Mist Grass in enclosed spaces. They are the Cicins' favorite food",
      "rarity": 2,
      "sources": [
         "Dropped by Fatui Cicin Mages"
      ]
   },
   {
      "id": "mist_grass",
      "name": "Mist Grass",
      "parent": "mist_grass_pollen",
      "type": "common_ascension_materials",
      "img": url + "mist_grass.png",
      "description": "Well-preserved Mist Grass. Some would take advantage of the Cicins' love for the Mist Grass to control them.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Fatui Cicin Mages",
         "Alchemy"
      ]
   },
   {
      "id": "mist_grass_wick",
      "name": "Mist Grass Wick",
      "parent": "mist_grass",
      "type": "common_ascension_materials",
      "img": url + "mist_grass_wick.png",
      "description": "A rare bundle of Mist Grass that gives off a faint glow. Those who carry it invite both the Cicins and misfortune.",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Fatui Cicin Mages",
         "Alchemy"
      ]
   },
   {
      "id": "hunters_sacrificial_knife",
      "name": "Hunter's Sacrificial Knife",
      "img": url + "hunters_sacrificial_knife.png",
      "type": "common_ascension_materials",
      "description": "A sharp alloy weapon. Though its owner has been lost, it still reflects a disturbingly cold light.",
      "rarity": 2,
      "sources": [
         "Dropped by Fatui Agents"
      ]
   },
   {
      "id": "agents_sacrificial_knife",
      "name": "Agent's Sacrificial Knife",
      "parent": "hunters_sacrificial_knife",
      "type": "common_ascension_materials",
      "img": url + "agents_sacrificial_knife.png",
      "description": "An oddly-shaped weapon made with superior Snezhnayan technology that once belonged to a senior agent. Proper training is required for using this strange weapon.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Fatui Agents",
         "Alchemy"
      ]
   },
   {
      "id": "inspectors_sacrificial_knife",
      "name": "Inspector's Sacrificial Knife",
      "parent": "agents_sacrificial_knife",
      "type": "common_ascension_materials",
      "img": url + "inspectors_sacrificial_knife.png",
      "description": "In the hands of its lord, this fierce weapon has handled many \"debts.\" No-one has eyes in the back of their heads, and this weapon and its related techniques are designed around that weakness.",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Fatui Agents",
         "Alchemy"
      ]
   },
   {
      "id": "recuits_insignia",
      "name": "Recuit's Insignia",
      "type": "common_ascension_materials",
      "img": url + "recuits_insignia.png",
      "description": "An insignia to identify the recruits. Makes one wonder about what the ones joining the Fatui's war machine were thinking.",
      "rarity": 1,
      "sources": [
         "Dropped by Fatuis"
      ]
   },
   {
      "id": "sergeants_insignia",
      "name": "Sergeant's Insignia",
      "type": "common_ascension_materials",
      "img": url + "sergeants_insignia.png",
      "description": "An insignia with a different shape to tell the sergeants from new recruits. Perhaps there are complicated emotions behind it.",
      "rarity": 2,
      "sources": [
         "Dropped by Lv.40+ Fatuis",
         "Alchemy"
      ]
   },
   {
      "id": "lieutenants_insignia",
      "name": "Lieutenant's Insignia",
      "parent": "sergeants_insignia",
      "type": "common_ascension_materials",
      "img": url + "lieutenants_insignia.png",
      "description": "An armband to identify officers. The Fatui possess a colossal army, so there must be something extraordinary about the ones who achieved this rank within the group.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.60+ Fatuis",
         "Alchemy"
      ]
   },
   {
      "id": "treasure_hoarder_insignia",
      "name": "Treasure Hoarder Insignia",
      "type": "common_ascension_materials",
      "img": url + "treasure_hoarder_insignia.png",
      "description": "A signet that proudly represents its owner's position as a member of the Treasure Hoarders. The pursuit of treasure knows no bounds. That said... is being a thief something to be proud of?",
      "rarity": 1,
      "sources": [
         "Dropped by Treasure Hoarders"
      ]
   },
   {
      "id": "silver_raven_insignia",
      "name": "Silver Raven Insignia",
      "parent": "treasure_hoarder_insignia",
      "type": "common_ascension_materials",
      "img": url + "silver_raven_insignia.png",
      "description": "A raven insignia used by members of the Treasure Hoarders to identify each other. The Treasure Hoarders ask for no resume. Anyone who has an insatiable desire for treasure and is backed up by an equal amount of courage can become a worthy member.",
      "rarity": 2,
      "sources": [
         "Dropped by Lv.40+ Treasure Hoarders",
         "Alchemy"
      ]
   },
   {
      "id": "golden_raven_insignia",
      "name": "Golden Raven Insignia",
      "parent": "silver_raven_insignia",
      "type": "common_ascension_materials",
      "img": url + "golden_raven_insignia.png",
      "description": "A raven insignia that symbolizes the pride and the guiding principle of the Treasure Hoarders. Whether it's hidden amidst the vastness of the land or in the depths of the seas, as long as there are treasures to be hunted down, the spirit of Treasure Hoarders, who will stop at nothing to acquire them, will never die.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.60+ Treasure Hoarders",
         "Alchemy"
      ]
   },
   {
      "id": "whopperflower_nectar",
      "name": "Whopperflower Nectar",
      "type": "common_ascension_materials",
      "img": url + "whopperflower_nectar.png",
      "description": "Nectar extracted from the stamen of a Whopperflower that contains trace amounts of elements. The taste of the nectar has a hint of Sweet Flower in it.",
      "rarity": 1,
      "sources": [
         "Dropped by Whopperflower"
      ]
   },
   {
      "id": "shimmering_nectar",
      "name": "Shimmering Nectar",
      "parent": "whopperflower_nectar",
      "type": "common_ascension_materials",
      "img": url + "shimmering_nectar.png",
      "description": "Nectar that is full of pure elements. Scholars generally concur that Whopperflowers are advanced life forms among the elemental plants, but there has yet to be a satisfactory explanation regarding their predatory habits.",
      "rarity": 2,
      "sources": [
         "Dropped by Lv.40+ Whopperflower",
         "Alchemy"
      ]
   },
   {
      "id": "energy_nectar",
      "name": "Energy Nectar",
      "parent": "shimmering_nectar",
      "type": "common_ascension_materials",
      "img": url + "energy_nectar.png",
      "description": "A thick and sticky honey that is full of energy. The Whopperflower hunts by tricking its prey, a process it uses to possibly evolve into a more powerful and pure form.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.60+ Whopperflower",
         "Alchemy"
      ]
   },
   {
      "id": "fragile_bone_shard",
      "name": "Fragile Bone Shard",
      "type": "common_ascension_materials",
      "img": url + "fragile_bone_shard.png",
      "description": "A bone shard once carried by a Geovishap Hatchling. Although they are quite fragile, they seem to still harbor some indescribable power.",
      "rarity": 2,
      "sources": [
         "Dropped by Geovishaps"
      ]
   },
   {
      "id": "sturdy_bone_shard",
      "name": "Sturdy Bone Shard",
      "parent": "fragile_bone_shard",
      "type": "common_ascension_materials",
      "img": url + "sturdy_bone_shard.png",
      "description": "A fragment of an unknown creature's bones that appear to be prized by Geovishap Hatchlings for some reason. The fragment appears to be quite aged. Despite being dragon-like beasts with no spoken language, they still seem to have some sort of special affection for these bone shards.",
      "rarity": 3,
      "sources": [
         "Dropped by Lv.40+ Geovishaps",
         "Alchemy"
      ]
   },
   {
      "id": "fossilized_bone_shard",
      "name": "Fossilized Bone Shard",
      "parent": "sturdy_bone_shard",
      "type": "common_ascension_materials",
      "img": url + "fossilized_bone_shard.png",
      "description": "A fossilized bone fragment sometimes found after defeating Geovishap Hatchlings. Geovishap Hatchlings all dream of growing into great dragons one day. They see these fossils as dragon bones and greatly cherish them, perhaps because they too hope to attain the dragons' longevity and power.",
      "rarity": 4,
      "sources": [
         "Dropped by Lv.60+ Geovishaps",
         "Alchemy"
      ]
   },
   {
      "id": "wolfhook",
      "name": "Wolfhook",
      "type": "mondstadt_local_specialties",
      "img": url + "wolfhook.png",
      "description": "A berry with thorns that often gets attached to a wolf's pelt. When you look at it, you can almost hear the echoing cries of the wolves in the woods.",
      "sources": [
         "Found in the wild",
         "Found in Wolvendom",
         "Sold by Chloris"
      ]
   },
   {
      "id": "valberry",
      "name": "Valberry",
      "type": "mondstadt_local_specialties",
      "img": url + "valberry.png",
      "description": "A plump and translucent berry that has a fragrant smell and a sweet refreshing taste. In the past, the watchers of the storms found solace in the sweetness of the fruit and the hope for the city's security.",
      "sources": [
         "Found in the wild around Stormbearer Mountains",
         "Sold by Chloris"
      ]
   },
   {
      "id": "cecilia",
      "name": "Cecilia",
      "type": "mondstadt_local_specialties",
      "img": url + "cecilia.png",
      "description": "A beautiful flower with a name that suits its appearance. It only grows where harsh winds blow, and is just as intangible as the true heart of an unbound soul.",
      "sources": [
         "Found in the wild",
         "Found on Starsnatch Cliff",
         "Sold by Flora"
      ]
   },
   {
      "id": "windwheel_asters",
      "name": "Windwheel Asters",
      "type": "mondstadt_local_specialties",
      "img": url + "windwheel_asters.png",
      "description": "A plant that adores the wind. To the proud children of the wind, or the citizens of Mondstadt, the Windwheel Asters are the \"visible winds.\"",
      "sources": [
         "Found near the Statue of The Seven at Windrise and Dawn Winery",
         "Found under trees in the wild",
         "Found in Stormterror's Lair",
         "Sold by Flora"
      ]
   },
   {
      "id": "philameno_mushroom",
      "name": "Philameno Mushroom",
      "type": "mondstadt_local_specialties",
      "img": url + "philameno_mushroom.png",
      "description": "A fungus that grows in the warm caress of the wind. It is as everlasting as the wind, nourishing life.",
      "sources": [
         "Found under the eaves of houses",
         "Sold by Chloris"
      ]
   },
   {
      "id": "small_lamp_grass",
      "name": "Small Lamp Grass",
      "type": "mondstadt_local_specialties",
      "img": url + "small_lamp_grass.png",
      "description": "A wild grass that emits light at night. Used in cooking to enhance other flavors.",
      "sources": [
         "Found in the wild at night",
         "Found in Wolvendom",
         "Found in the Whispering Woods",
         "Sold by Flora"
      ]
   },
   {
      "id": "calla_lily",
      "name": "Calla Lily",
      "type": "mondstadt_local_specialties",
      "img": url + "calla_lily.png",
      "description": "A flower that grows near water sources. When cooked the petals have a chunky texture, yet are sweet and a little bitter.",
      "sources": [
         "Found near lakes",
         "Found in Springvale",
         "Sold by Flora"
      ]
   },
   {
      "id": "dandelion_seed",
      "name": "Dandelion Seed",
      "type": "mondstadt_local_specialties",
      "img": url + "dandelion_seed.png",
      "description": "A tiny seed that rides on the wind. Even without its feathered wings, it still holds the hope from afar within.",
      "sources": [
         "Found in the wild",
         "Found at Mondstadt's front gates"
      ]
   },
   {
      "id": "jueyun_chili",
      "name": "Jueyun Chili",
      "type": "mondstadt_local_specialties",
      "img": url + "jueyun_chili.png",
      "description": "A spicy plant native to Liyue. Merely smelling it makes one hot and thirsty.",
      "sources": [
         "Found in the wild",
         "Found in Qingce Village",
         "Sold at Wanmin Restaurant"
      ]
   },
   {
      "id": "noctilucous_jade",
      "name": "Noctilucous Jade",
      "type": "liyue_local_specialties",
      "img": url + "noctilucous_jade.png",
      "description": "A rare mineral that glimmers in the dark. It's said to be a mutated gemstone condensed from the flourishing elements of the world.",
      "sources": [
         "Found in caves in Liyue",
         "Found in Mingyun Village",
         "Sold by Shitou"
      ]
   },
   {
      "id": "silk_flower",
      "name": "Silk Flower",
      "type": "liyue_local_specialties",
      "img": url + "silk_flower.png",
      "description": "A crimson flower that blooms like the rainbow clouds in Liyue. It can be made into silky-smooth fabric.",
      "sources": [
         "Found near Yujing Terrace, Liyue Harbor",
         "Found near Wangshu Inn",
         "Sold by Verr Goldet",
         "Sold by Ms. Bai"
      ]
   },
   {
      "id": "glaze_lily",
      "name": "Glaze Lily",
      "type": "liyue_local_specialties",
      "img": url + "glaze_lily.png",
      "description": "An extremely ancient flower that was said to be commonly seen in Liyue. It transforms the memories of the land into its fragrance during florescence.",
      "sources": [
         "Found in the wild",
         "Sold by Ms. Bai",
         "Found in Qingce Village",
         "Found in Yujing Terrace, Liyue Harbor"
      ]
   },
   {
      "id": "qingxin",
      "name": "Qingxin",
      "type": "liyue_local_specialties",
      "img": url + "qingxin.png",
      "description": "A translucent white flower that only grows on the highest stone peaks. It eschews the warmth and moisture of the plains to gaze out afar from the solitary mountaintops.",
      "sources": [
         "Found in the heights of stone forests",
         "Sold by Bubu Pharmacy",
         "Found in Huaguang Stone Forest",
         "Found in Jueyun Karst"
      ]
   },
   {
      "id": "starconch",
      "name": "Starconch",
      "type": "liyue_local_specialties",
      "img": url + "starconch.png",
      "description": "Empty seashells brought ashore by the tides. Hold it close to your ear, and hear the longing calls of the sea.",
      "sources": [
         "Found on the beaches of Liyue",
         "Found on the frigid coastlines of Dragonspine closer to Liyue",
         "Buy from Bolai"
      ]
   },
   {
      "id": "violetgrass",
      "name": "Violetgrass",
      "type": "liyue_local_specialties",
      "img": url + "violetgrass.png",
      "description": "A small flower with strong vitality. It was said its downward-blooming flower keeps its fragrance from dissipating.",
      "sources": [
         "Found near cliffs in Liyue",
         "Sold by Verr Goldet",
         "Sold at Bubu Pharmacy"
      ]
   },
   {
      "id": "cor_lapis",
      "name": "Cor Lapis",
      "type": "liyue_local_specialties",
      "img": url + "cor_lapis.png",
      "description": "A precious crystal of condensed pure Geo element that usually grows along with other minerals. It's also commonly called \"Cor Petrae.\"",
      "sources": [
         "Found under cliffs in Liyue",
         "Found in Mt. Hulao",
         "Sold by Changshun"
      ]
   },
   {
      "id": "almond",
      "name": "Almond",
      "type": "cooking_materials",
      "img": url + "almond.png",
      "description": "A seed with a peculiar fragrance that gives food a refreshing taste.",
      "sources": [
         "Sold by Second Life",
         "Sold by Ms. Bai"
      ]
   },
   {
      "id": "bacon",
      "name": "Bacon",
      "type": "cooking_materials",
      "img": url + "bacon.png",
      "description": "Smoked strips of pork. With just enough fat, but not too greasy. Mmmmm... Bacon.Meat must be processed first to be made into Bacon.",
      "rarity": 3,
      "sources": [
         "Sold by Good Hunter",
         "Processing"
      ]
   },
   {
      "id": "bacon",
      "name": "Bamboo Shoot",
      "type": "cooking_materials",
      "img": url + "bacon.png",
      "description": "A fresh young bamboo shoot, straight out of the ground. It is a delicious cooking ingredient with an exotic aroma, found exclusively in bamboo-growing regions.",
      "sources": [
         "Found in the wild",
         "Sold by Wanmin Restaurant"
      ]
   },
   {
      "id": "berry",
      "name": "Berry",
      "type": "cooking_materials",
      "img": url + "berry.png",
      "description": "Small brightly-colored fruit. They can be found everywhere, and the taste of them wipes the fatigue of a long journey away.",
      "sources": [
         "Found in the wild"
      ]
   },
   {
      "id": "butter",
      "name": "Butter",
      "type": "cooking_materials",
      "img": url + "butter.png",
      "description": "An extract from milk. With the appropriate application, it can bring rich aromas to even the most basic ingredients.",
      "rarity": 2,
      "sources": [
         "Sold by Good Hunter",
         "Sold by Verr Goldet"
      ]
   },
   {
      "id": "butter",
      "name": "Cabbage",
      "type": "cooking_materials",
      "img": url + "cabbage.png",
      "description": "A layered, leafy vegetable. Said to have originally been an ornamental plant, it certainly looks great in the pot.",
      "sources": [
         "Found in the wild",
         "Sold by Second Life",
         "Sold by Mondstadt General Goods",
         "Dropped by Unusual Hilichurl"
      ]
   },
   {
      "id": "carrot",
      "name": "Carrot",
      "type": "cooking_materials",
      "img": url + "carrot.png",
      "description": "A healthy and nutritious vegetable that is crunchy and sweet to the taste. Easy to grow and harvest.",
      "sources": [
         "Found in the wild",
         "Found in crates and barrels",
         "Sold at Wanmin Restaurant"
      ]
   },
   {
      "id": "cheese",
      "name": "Cheese",
      "type": "cooking_materials",
      "img": url + "cheese.png",
      "description": "Made from fermented milk. With high energy and limitless possibilities, it's used in a wide range of dishes.Milk must be processed first to be made into Cheese.",
      "rarity": 3,
      "sources": [
         "Sold by Good Hunter",
         "Processing",
         "Sold by Changshun"
      ]
   },
   {
      "id": "chilled_meat",
      "name": "Chilled Meat",
      "type": "cooking_materials",
      "img": url + "chilled_meat.png",
      "description": "Rare, fresh meat.This species of boar is recorded to have gone extinct several hundred years ago and has been preserved by the extreme temperatures on Dragonspine. For the gourmets of Teyvat, this is an ingredient of unspeakable sacrosanctness.",
      "sources": [
         "Snowboars"
      ]
   },
    {
      "id": "crab",
      "name": "Crab",
      "type": "cooking_materials",
      "img": url + "crab.png",
      "description": "A shelled creature that lives near the ocean. Its flaky, delicious meat can easily be made into tasty dishes.",
      "sources": [
         "Found near lakes, river banks, and beaches",
         "Sold by Uncle Sun",
         "Sold at Wanmin Restaurant"
      ]
   },
    {
      "id": "crab_roe",
      "name": "Crab Roe",
      "type": "cooking_materials",
      "img": url + "crab_roe.png",
      "description": "A delicacy specific to female crabs. A rare and prized ingredient that isn't quite to everyone's taste.",
      "rarity": 3,
      "sources": [
         "Sold by Good Hunter",
         "Processing"
      ]
   },
   {
      "id": "cream",
      "name": "Cream",
      "type": "cooking_materials",
      "img": url + "cream.png",
      "description": "A dairy product made from milk. An essential ingredient in making pastries.",
      "rarity": 2,
      "sources": [
         "Sold by Good Hunter",
         "Processing"
      ]
   },
   {
      "id": "fish",
      "name": "Fish",
      "type": "cooking_materials",
      "img": url + "fish.png",
      "description": "A fresh fillet of fish. Handled correctly it can make a rich dish.",
      "sources": [
         "Found swimming in water",
         "Sold by Uncle Sun",
         "Sold by Uncle Gao",
         "Sold at Wanmin Restaurant"
      ]
   },
   {
      "id": "flour",
      "name": "Flour",
      "type": "cooking_materials",
      "img": url + "flour.png",
      "description": "A powder ground from wheat. No matter what it goes into it brings a sense of satisfaction to the diner. Wheat must be processed first to be made into Flour.",
      "sources": [
         "Sold by Good Hunter",
         "Sold by Wanmin Restaurant",
         "Processing"
      ]
   },
   {
      "id": "fowl",
      "name": "Fowl",
      "type": "cooking_materials",
      "img": url + "fowl.png",
      "description": "A fresh bird. Handled correctly it can make a hearty meal.",
      "sources": [
         "Found in the wild",
         "Sold by Draff, Head of Hunters at Springvale"
      ]
   },
   {
      "id": "ham",
      "name": "Ham",
      "type": "cooking_materials",
      "img": url + "ham.png",
      "description": "Smoked leg meat. Even the thinnest slice is packed full of flavor.Meat must be processed first to be made into Ham.",
      "rarity": 2,
      "sources": [
         "Processing",
         "Sold by Good Hunter",
         "Sold by Wanmin Restaurant"
      ]
   },
   {
      "id": "jam",
      "name": "Jam",
      "type": "cooking_materials",
      "img": url + "jam.png",
      "description": "A puree made from fruit and sugar. Even a little bit can easily wake up drowsy taste buds. Apples and Berries must be processed first to be made into Jam.",
      "rarity": 3,
      "sources": [
         "Processing",
         "Sold by Good Hunter"
      ]
   },
   {
      "id": "lotus_head",
      "name": "Lotus Head",
      "type": "cooking_materials",
      "img": url + "lotus_head.png",
      "description": "An aquatic plant native to Liyue that grows and blooms in pairs. One is fragrant, and the other bitter. It's said to make a good herbal medicine.",
      "sources": [
         "Found near lakes and river banks",
         "Sold by Bubu Pharmacy",
         "Sold at Wanmin Restaurant"
      ]
   },
   {
      "id": "matsutake",
      "name": "Matsutake",
      "type": "cooking_materials",
      "img": url + "matsutake.png",
      "description": "A rare fungus that generally grows on or near pine trees. Its delicate aroma gives away its location.",
      "sources": [
         "Found in the wild",
         "Sold at Wanmin Restaurant",
         "Sold by Verr Goldet"
      ]
   },
   {
      "id": "milk",
      "name": "Milk",
      "type": "cooking_materials",
      "img": url + "milk.png",
      "description": "Sweet and fragrant cow's milk. Don't waste a single drop, not even that one rolling down your chin.",
      "sources": [
         "Sold by Mondstadt General Goods",
         "Sold by Second Life"
      ]
   },
   {
      "id": "mint",
      "name": "Mint",
      "description": "A refreshingly cool ingredient. The cool, fresh flavor can cut through the heat of many dishes.",
      "type": "cooking_materials",
      "img": url + "mint.png",
      "sources": [
         "Found in the wild",
         "Sold by Chloris"
      ]
   },
   {
      "id": "mushroom",
      "name": "Mushroom",
      "description": "Hardy common fungi. Can grow anywhere with the right amount of shade and moisture.",
      "type": "cooking_materials",
      "img": url + "mushroom.png",
      "sources": [
         "Found in the wild",
         "Purchased at Wanmin Restaurant"
      ]
   },
   {
      "id": "onion",
      "name": "Onion",
      "type": "cooking_materials",
      "img": url + "onion.png",
      "description": "A spherical vegetable. As vengeance for cutting it, it will make you cry, no matter how brave you are.",
      "sources": [
         "Sold by Mondstadt General Goods",
         "Sold by Second Life"
      ]
   },
   {
      "id": "pepper",
      "name": "Pepper",
      "type": "cooking_materials",
      "img": url + "pepper.png",
      "description": "Peppery. Cuts through oily flavors and excites the taste buds. Goes best on meat.",
      "sources": [
         "Sold by Second Life",
         "Sold by Mondstadt General Goods"
      ]
   },
   {
      "id": "pinecone",
      "name": "Pinecone",
      "type": "cooking_materials",
      "img": url + "pinecone.png",
      "description": "Filled with oil-rich seeds. Certainly won't be growing into a tree from inside a squirrel's stomach.",
      "sources": [
         "Found in the wild"
      ]
   },
   {
      "id": "potato",
      "name": "Potato",
      "type": "cooking_materials",
      "img": url + "potato.png",
      "description": "A chunky vegetable. A gift from the earth that you never tire of with its multitude of cooking methods.",
      "sources": [
         "Found in the wild",
         "Sold by Mondstadt General Goods",
         "Sold by Second Life",
         "Sold by Changshun"
      ]
   },
   {
      "id": "radish",
      "name": "Radish",
      "description": "A fresh chunk of meat. Handled properly it can be used to make delicious food.",
      "type": "cooking_materials",
      "img": url + "radish.png",
      "sources": [
         "Found in the wild",
         "Sold by Draff",
         "Processing"
      ]
   },
   {
      "id": "rice",
      "name": "Rice",
      "description": "A grain crop commonly found in Teyvat. People of all walks of life enjoy its distinct grainy texture. As the saying goes, \"The same kind of rice can feed one hundred kinds of people.\"",
      "type": "cooking_materials",
      "img": url + "rice.png",
      "sources": [
         "Sold by Second Life"
      ]
   },
   {
      "id": "salt",
      "name": "Salt",
      "description": "A savory seasoning. A precise but adequate amount will elevate the quality of the cuisine.",
      "type": "cooking_materials",
      "img": url + "salt.png",
      "sources": [
         "Sold by Mondstadt General Goods",
         "Sold by Second Life"
      ]
   },
   {
      "id": "sausage",
      "name": "Sausage",
      "description": "Finely minced meat wrapped in a skin. A staple of every meat lover's daily diet.Meat must be processed first to be made into Sausages.",
      "type": "cooking_materials",
      "rarity": 3,
      "img": url + "sausage.png",
      "sources": [
         "Sold by Mondstadt General Goods",
         "Sold by Second Life"
      ]
   },
   {
      "id": "shrimp_meat",
      "name": "Shrimp Meat",
      "description": "A whole piece of deep sea shrimp meat, full of nutrients and bursting with delicious flavor.",
      "type": "cooking_materials",
      "img": url + "shrimp_meat.png",
      "sources": [
         "Sold by Second Life",
         "Sold by Uncle Sun"
      ]
   },
   {
      "id": "smoked_fowl",
      "name": "Smoked Fowl",
      "description": "Fowl that has been smoked. The firm texture gives new taste to dishes.Fowl must be processed first to be made into Smoked Fowl.",
      "rarity": 2,
      "type": "cooking_materials",
      "img": url + "smoked_fowl.png",
      "sources": [
         "Sold by Good Hunter",
         "Processing"
      ]
   },
   {
      "id": "snapdragon",
      "name": "Snapdragon",
      "description": "Can be eaten once cooked. As a spice it can bring wonderful flavor to dishes.",
      "type": "cooking_materials",
      "img": url + "snapdragon.png",
      "sources": [
         "Found in the wild",
         "Sold by Chloris"
      ]
   },
   {
      "id": "sugar",
      "name": "Sugar",
      "description": "A seasoning derived from Sweet Flowers. Has the power to give both energy and happiness.Can be purchased from the merchants in the city, or made with Sweet Flowers.",
      "type": "cooking_materials",
      "rarity": 2,
      "img": url + "sugar.png",
      "sources": [
         "Sold by Good Hunter",
         "Sold by Wanmin Restaurant",
         "Sold by Changshun",
         "Processing"
      ]
   },
   {
      "id": "sweet_flower",
      "name": "Sweet Flower",
      "description": "Particularly fragrant flowers. They can be found easily, even in the dark. Just follow the scent.",
      "type": "cooking_materials",
      "img": url + "sweet_flower.png",
      "sources": [
         "Found in the wild",
         "Purchase from Flora in Mondstadt"
      ]
   },
   {
      "id": "tofu",
      "name": "Tofu",
      "description": "Freshly made bean product that has a silky-smooth tender texture.",
      "type": "cooking_materials",
      "img": url + "tofu.png",
      "sources": [
         "Sold by Second Life",
         "Sold by Ms. Bai"
      ]
   },
   {
      "id": "tomato",
      "name": "Tomato",
      "description": "A bright red ingredient that gives a tangy kick. Yes, the 'fruit or vegetable' debate is still going…",
      "type": "cooking_materials",
      "img": url + "tomato.png",
      "sources": [
         "Found in the wild",
         "Sold by Second Life",
         "Sold by Mondstadt General Goods"
      ]
   },
   {
      "id": "wheat",
      "name": "Wheat",
      "description": "Golden sun-kissed tassels. Needs to be ground down to flour for further use.",
      "type": "cooking_materials",
      "img": url + "wheat.png",
      "sources": [
         "Found in barrels and crates",
         "Sold by Mondstadt General Goods",
         "Sold by Second Life"
      ]
   },
   {
      "id": "unmoving_essential_oil",
      "name": "Unmoving Essential Oil",
      "description": "Grants greater affinity for Geo. boosting Geo DMG. You can feel the fine Geo pellets within when applied. It's said to help with physical injuries.",
      "effect": "Increases all party members' Geo DMG by 25% for 300s.",
      "type": "potions",
      "img": url + "unmoving_essential_oil.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "desiccant_potion",
      "name": "Desiccant Potion",
      "description": "A kind of medicine that boosts Hydro RES and makes one able to withstand highly humid environments. It is said to act like a desiccant to keep items dry that can also be ingested for the same effect.",
      "effect": "Increases all party members' Hydro RES by 25% for 300s.",
      "type": "potions",
      "img": url + "desiccant_potion.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "dustproof_potion",
      "name": "Dustproof Potion",
      "description": "A potion that boosts Geo RES and keeps one from getting bothered by sand and dust. It has a strange taste not unlike magnets. It keeps a traveler clean from all the sand and dust out there.",
      "effect": "Increases all party members' Geo RES by 25% for 300s.",
      "type": "potions",
      "img": url + "dustproof_potion.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "flaming_essential_oil",
      "name": "Flaming Essential Oil",
      "description": "Grants greater affinity to Pyro, boosting Pyro DMG. It is made of materials that gestates Pyro elements, which serves to draw in Pyro elements more effectively. It also makes the user more passionate.",
      "effect": "Increases all party members' Pyro DMG by 25% for 300s.",
      "type": "potions",
      "img": url + "flaming_essential_oil.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "frosting_essential_oil",
      "name": "Frosting Essential Oil",
      "description": "Grants greater affinity to Cryo, boosting Cryo DMG. It has a chilling sensation when applied, able to better channel Cryo elements. It also helps to keep you cool and calm.",
      "effect": "Increases all party members' Cryo DMG by 25% for 300s.",
      "type": "potions",
      "img": url + "frosting_essential_oil.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "frostshield_potion",
      "name": "Frostshield Potion",
      "description": "A miraculous that boosts Cryo RES and makes one able to withstand deep cold. Induces a chilling sensation when drank, but when you get used to the chilling cold, you won't feel cold anymore.",
      "effect": "Increases all party members' Cryo RES by 25% for 300s.",
      "type": "potions",
      "img": url + "frostshield_potion.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "heatshield_potion",
      "name": "Heatshield Potion",
      "description": "A miraculous potion that boosts Pyro RES and makes one able to withstand high heat. The principle of it is making the body adaptable to the heat instead of cooling the body.",
      "effect": "Increases all party members' Pyro RES by 25% for 300s.",
      "type": "potions",
      "img": url + "heatshield_potion.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "gushing_essential_oil",
      "name": "Gushing Essential Oil",
      "description": "Grants greater affinity to Anemo, boosting Anemo DMG. It has a fragrant smell. It's said, using it on travels will make you walk as if you're riding on the wind.",
      "effect": "Increases all party members' Anemo DMG by 25% for 300s.",
      "type": "potions",
      "img": url + "gushing_essential_oil.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "insulation_potion",
      "name": "Insulation Potion",
      "description": "A potion that boosts Electro RES and keeps one from getting electroshocked. Induces a tingling sensation when drank. However, it's principle is to fill the body with inversely-charged electrons to cancel out the damage from being electroshocked.",
      "effect": "Increases all party members' Electro RES by 25% for 300s.",
      "type": "potions",
      "img": url + "insulation_potion.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "shocking_essential_oil",
      "name": "Shocking Essential Oil",
      "description": "Grants greater affinity to Electro, boosting Electro DMG. It induces a tingling sensation on the skin, able to better channel Electro elements at the risk of electrical fire that would definitely ruin your perfect hair.",
      "effect": "Increases all party members' Electro DMG by 25% for 300s.",
      "type": "potions",
      "img": url + "insulation_potion.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "streaming_essential_oil",
      "name": "Streaming Essential Oil",
      "description": "Grants greater affinity to Hydro, boosting Hydro DMG. It's a slippery medicine for external use, able to better channel Hydro elements. It has a strange smell.",
      "effect": "Increases all party members' Hydro DMG by 25% for 300s.",
      "type": "potions",
      "img": url + "streaming_essential_oil.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id": "windbarrier_potion",
      "name": "Windbarrier Potion",
      "description": "A mysterious potion that boosts Anemo RES and makes one able to withstand strong winds. It works wonders for adventurers out in the world and is even said to keep the cold away.",
      "effect": "Increases all party members' Anemo RES by 25% for 300s.",
      "type": "potions",
      "img": url + "windbarrier_potion.png",
      "sources": [
         "Alchemy"
      ]
   },
   {
      "id" : "dwelling_in_the_clouds_blueprints",
      "name" : "\"Dwelling in the Clouds\" Blueprints",
      "description" : "The designs for the Dwelling in the Clouds, built long ago by Cloud Retainer.",
      "type": "quest_items",
      "img" : url + "dwelling_in_the_clouds_blueprints.png",
      "sources" : [
         "An Adeptal Summons"
      ]
   }
]
