exports.BattlePokedex = {
weedle:{num:13,species:"Weedle",types:["Bug","Poison"],baseStats:{hp:40,atk:35,def:30,spa:20,spd:20,spe:50},abilities:{0:"Shield Dust",1:"Acid Rush",H:"Run Away"},heightm:0.3,weightkg:3.2,color:"Brown",evos:["kakuna"],eggGroups:["Bug"]},
beedrill:{num:15,species:"Beedrill",types:["Bug","Poison"],baseStats:{hp:65,atk:90,def:40,spa:45,spd:80,spe:75},abilities:{0:"Swarm",1:"Acid Rush",H:"Sniper"},heightm:1,weightkg:29.5,color:"Yellow",prevo:"kakuna",evoLevel:10,eggGroups:["Bug"]},
ekans:{num:23,species:"Ekans",types:["Poison"],baseStats:{hp:35,atk:60,def:44,spa:40,spd:54,spe:55},abilities:{0:"Intimidate",1:"Shed Skin",H:"High Molar"},heightm:2,weightkg:6.9,color:"Purple",evos:["arbok"],eggGroups:["Field","Dragon"]},
arbok:{num:24,species:"Arbok",types:["Poison"],baseStats:{hp:60,atk:85,def:69,spa:65,spd:79,spe:80},abilities:{0:"Intimidate",1:"Shed Skin",H:"High Molar"},heightm:3.5,weightkg:65,color:"Purple",prevo:"ekans",evoLevel:22,eggGroups:["Field","Dragon"]},
zubat:{num:41,species:"Zubat",types:["Poison","Flying"],baseStats:{hp:40,atk:45,def:35,spa:30,spd:40,spe:55},abilities:{0:"Inner Focus",1:"Toxic Overdrive",H:"Infiltrator"},heightm:0.8,weightkg:7.5,color:"Purple",evos:["golbat"],eggGroups:["Flying"]},
golbat:{num:42,species:"Golbat",types:["Poison","Flying"],baseStats:{hp:75,atk:80,def:70,spa:65,spd:75,spe:90},abilities:{0:"Inner Focus",1:"Toxic Overdrive",H:"Infiltrator"},heightm:1.6,weightkg:55,color:"Purple",prevo:"zubat",evos:["crobat"],evoLevel:22,eggGroups:["Flying"]},
oddish:{num:43,species:"Oddish",types:["Grass","Poison"],baseStats:{hp:45,atk:50,def:55,spa:75,spd:65,spe:30},abilities:{0:"Chlorophyll",1:"Chemical Regeneration",H:"Run Away"},heightm:0.5,weightkg:5.4,color:"Blue",evos:["gloom"],eggGroups:["Grass"]},
gloom:{num:44,species:"Gloom",types:["Grass","Poison"],baseStats:{hp:60,atk:65,def:70,spa:85,spd:75,spe:40},abilities:{0:"Chlorophyll",1:"Chemical Regeneration",H:"Stench"},heightm:0.8,weightkg:8.6,color:"Blue",prevo:"oddish",evos:["vileplume","bellossom"],evoLevel:21,eggGroups:["Grass"]},
vileplume:{num:45,species:"Vileplume",types:["Grass","Poison"],baseStats:{hp:75,atk:80,def:85,spa:110,spd:90,spe:50},abilities:{0:"Chlorophyll",1:"Chemical Regeneration",H:"Effect Spore"},heightm:1.2,weightkg:18.6,color:"Red",prevo:"gloom",evoLevel:21,eggGroups:["Grass"]},
grimer:{num:88,species:"Grimer",types:["Poison"],baseStats:{hp:80,atk:80,def:50,spa:40,spd:50,spe:25},abilities:{0:"Chemical Regeneration",1:"Sticky Hold",H:"Poison Touch"},heightm:0.9,weightkg:30,color:"Purple",evos:["muk"],eggGroups:["Amorphous"]},
muk:{num:89,species:"Muk",types:["Poison"],baseStats:{hp:105,atk:105,def:75,spa:65,spd:100,spe:50},abilities:{0:"Chemical Regeneration",1:"Sticky Hold",H:"Poison Touch"},heightm:1.2,weightkg:30,color:"Purple",prevo:"grimer",evoLevel:38,eggGroups:["Amorphous"]},
bellsprout:{num:69,species:"Bellsprout",types:["Grass","Poison"],baseStats:{hp:50,atk:75,def:35,spa:70,spd:30,spe:40},abilities:{0:"Chlorophyll",1:"Acid Rush",H:"Gluttony"},heightm:0.7,weightkg:4,color:"Green",evos:["weepinbell"],eggGroups:["Grass"]},
weepinbell:{num:70,species:"Weepinbell",types:["Grass","Poison"],baseStats:{hp:65,atk:90,def:50,spa:85,spd:45,spe:55},abilities:{0:"Chlorophyll",1:"Acid Rush",H:"Gluttony"},heightm:1,weightkg:6.4,color:"Green",prevo:"bellsprout",evos:["victreebel"],evoLevel:21,eggGroups:["Grass"]},
victreebel:{num:71,species:"Victreebel",types:["Grass","Poison"],baseStats:{hp:80,atk:105,def:65,spa:100,spd:70,spe:70},abilities:{0:"Chlorophyll",1:"Acid Rush",H:"Gluttony"},heightm:1.7,weightkg:15.5,color:"Green",prevo:"weepinbell",evoLevel:21,eggGroups:["Grass"]},
paras:{num:46,species:"Paras",types:["Bug","Grass"],baseStats:{hp:35,atk:70,def:55,spa:45,spd:55,spe:25},abilities:{0:"Effect Spore",1:"Dry Skin",H:"Toxic Overdrive"},heightm:0.3,weightkg:5.4,color:"Red",evos:["parasect"],eggGroups:["Bug","Grass"]},
parasect:{num:47,species:"Parasect",types:["Bug","Grass"],baseStats:{hp:60,atk:95,def:80,spa:60,spd:80,spe:30},abilities:{0:"Effect Spore",1:"Dry Skin",H:"Toxic Overdrive"},heightm:1,weightkg:29.5,color:"Red",prevo:"paras",evoLevel:24,eggGroups:["Bug","Grass"]},
koffing:{num:109,species:"Koffing",types:["Poison"],baseStats:{hp:40,atk:65,def:95,spa:60,spd:45,spe:35},abilities:{0:"Levitate",1:"Contamination"},heightm:0.6,weightkg:1,color:"Purple",evos:["weezing"],eggGroups:["Amorphous"]},
weezing:{num:110,species:"Weezing",types:["Poison"],baseStats:{hp:65,atk:90,def:120,spa:85,spd:70,spe:60},abilities:{0:"Levitate",1:"Contamination"},heightm:1.2,weightkg:9.5,color:"Purple",prevo:"koffing",evoLevel:35,eggGroups:["Amorphous"]},
spinarak:{num:167,species:"Spinarak",types:["Bug","Poison"],baseStats:{hp:40,atk:60,def:40,spa:40,spd:40,spe:30},abilities:{0:"Swarm",1:"High Molar",H:"Sniper"},heightm:0.5,weightkg:8.5,color:"Green",evos:["ariados"],eggGroups:["Bug"]},
ariados:{num:168,species:"Ariados",types:["Bug","Poison"],baseStats:{hp:70,atk:90,def:70,spa:60,spd:60,spe:40},abilities:{0:"Swarm",1:"High Molar",H:"Sniper"},heightm:1.1,weightkg:33.5,color:"Red",prevo:"spinarak",evoLevel:22,eggGroups:["Bug"]},
crobat:{num:169,species:"Crobat",types:["Poison","Flying"],baseStats:{hp:85,atk:90,def:80,spa:70,spd:80,spe:130},abilities:{0:"Inner Focus",1:"Toxic Overdrive",H:"Infiltrator"},heightm:1.8,weightkg:75,color:"Purple",prevo:"golbat",evoLevel:23,eggGroups:["Flying"]},
dustox:{num:269,species:"Dustox",types:["Bug","Poison"],baseStats:{hp:60,atk:50,def:70,spa:50,spd:90,spe:65},abilities:{0:"Shield Dust",1:"High Molar",H:"Compound Eyes"},heightm:1.2,weightkg:31.6,color:"Green",prevo:"cascoon",evoLevel:10,eggGroups:["Bug"]},
gulpin:{num:316,species:"Gulpin",types:["Poison"],baseStats:{hp:70,atk:43,def:53,spa:43,spd:53,spe:40},abilities:{0:"Liquid Ooze",1:"Sticky Hold",H:"Toxic Overdrive"},heightm:0.4,weightkg:10.3,color:"Green",evos:["swalot"],eggGroups:["Amorphous"]},
swalot:{num:317,species:"Swalot",types:["Poison"],baseStats:{hp:100,atk:73,def:83,spa:73,spd:83,spe:55},abilities:{0:"Liquid Ooze",1:"Sticky Hold",H:"Toxic Overdrive"},heightm:1.7,weightkg:80,color:"Purple",prevo:"gulpin",evoLevel:26,eggGroups:["Amorphous"]},
castformsludge:{num:351,species:"Castform-Sludge",baseSpecies:"Castform",forme:"Sludge",formeLetter:"S",types:["Poison"],baseStats:{hp:70,atk:70,def:70,spa:70,spd:70,spe:70},abilities:{0:"Forecast"},heightm:0.3,weightkg:0.8,color:"White",eggGroups:["Fairy","Amorphous"]},
stunky:{num:434,species:"Stunky",types:["Poison","Dark"],baseStats:{hp:63,atk:63,def:47,spa:41,spd:41,spe:74},abilities:{0:"Stench",1:"Aftermath",H:"Acid Rush"},heightm:0.4,weightkg:19.2,color:"Purple",evos:["skuntank"],eggGroups:["Field"]},
skuntank:{num:435,species:"Skuntank",types:["Poison","Dark"],baseStats:{hp:103,atk:93,def:67,spa:71,spd:61,spe:84},abilities:{0:"Stench",1:"Aftermath",H:"Acid Rush"},heightm:1,weightkg:38,color:"Purple",prevo:"stunky",evoLevel:34,eggGroups:["Field"]},
foongus:{num:590,species:"Foongus",types:["Grass","Poison"],baseStats:{hp:69,atk:55,def:45,spa:55,spd:55,spe:15},abilities:{0:"Effect Spore",1:"Chemical Regeneration",H:"Regenerator"},heightm:0.2,weightkg:1,color:"White",evos:["amoonguss"],eggGroups:["Grass"]},
amoonguss:{num:591,species:"Amoonguss",types:["Grass","Poison"],baseStats:{hp:114,atk:85,def:70,spa:85,spd:80,spe:30},abilities:{0:"Effect Spore",1:"Chemical Regeneration",H:"Regenerator"},heightm:0.6,weightkg:10.5,color:"White",prevo:"foongus",evoLevel:39,eggGroups:["Grass"]},
trubbish:{num:568,species:"Trubbish",types:["Poison"],baseStats:{hp:50,atk:50,def:62,spa:40,spd:62,spe:65},abilities:{0:"Stench",1:"Sticky Hold",H:"High Molar"},heightm:0.6,weightkg:31,color:"Green",evos:["garbodor"],eggGroups:["Mineral"]},
garbodor:{num:569,species:"Garbodor",types:["Poison"],baseStats:{hp:80,atk:95,def:82,spa:60,spd:82,spe:75},abilities:{0:"Stench",1:"Weak Armor",H:"High Molar"},heightm:1.9,weightkg:107.3,color:"Green",prevo:"trubbish",evoLevel:36,eggGroups:["Mineral"]},
goomy:{num:704,species:"Goomy",types:["Dragon"],baseStats:{hp:45,atk:50,def:35,spa:55,spd:75,spe:40},abilities:{0:"Chemical Regeneration",1:"Hydration",H:"Gooey"},heightm:0.3,weightkg:2.8,color:"Purple",evos:["sliggoo"],eggGroups:["Dragon"]},
sliggoo:{num:705,species:"Sliggoo",types:["Dragon"],baseStats:{hp:68,atk:75,def:53,spa:83,spd:113,spe:60},abilities:{0:"Chemical Regeneration",1:"Hydration",H:"Gooey"},heightm:0.8,weightkg:17.5,color:"Purple",prevo:"goomy",evos:["goodra"],evoLevel:40,eggGroups:["Dragon"]},
goodra:{num:706,species:"Goodra",types:["Dragon"],baseStats:{hp:90,atk:100,def:70,spa:110,spd:150,spe:80},abilities:{0:"Chemical Regeneration",1:"Hydration",H:"Gooey"},heightm:2,weightkg:150.5,color:"Purple",prevo:"sliggoo",evoLevel:50,eggGroups:["Dragon"]}
};