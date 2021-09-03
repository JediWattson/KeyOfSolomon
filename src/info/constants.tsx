export let planets = [
    "ShBThAI, Shabbathai, Saturn",
    "TzDQ, Tzedeq, Jupiter",
    "MADIM, Madim, Mars",
    "ShMSh, Shemesh, the Sun",
    "NVGH, Nogah, Venus",
    "KVKB, Kokav, Mercury",
    "LBNH, Levanah, the Moon"
]

export let weekIndexes = [3, 6, 2, 5, 1, 4, 0]

export let themes = [
    "In the Days and Hours of Saturn thou canst perform experiments to summon the Souls from Hades, but only of those who have died a natural death. Similarly on these days and hours thou canst operate to bring either good or bad fortune to buildings; to have familiar Spirits attend thee in sleep; to cause good or ill success to business, possessions, goods, seeds, fruits, and similar things, in order to acquire learning; to bring destruction and to give death, and to sow hatred and discord.",
    "The Days and Hours of Jupiter are proper for obtaining honours, acquiring riches; contracting friendships, preserving health; and arriving at all that thou canst desire.",
    "In the Days and Hours of Mars thou canst make experiments regarding War; to arrive at military honour; to acquire courage; to overthrow enemies; and further to cause ruin, slaughter, cruelty, discord; to wound and to give death.",
    "The Days and Hours of the Sun are very good for perfecting experiments regarding temporal wealth, hope, gain, fortune, divination, the favour of princes, to dissolve hostile feeling, and to make friends.",
    "The Days and Hours of Venus are good for forming friendships; for kindness and love; for joyous and pleasant undertakings, and for travelling.",
    "The Days and Hours of Mercury are good to operate for eloquence and intelligence; promptitude in business; science and divination; wonders; apparitions; and answers regarding the future. Thou canst also operate under this Planet for thefts; writings; deceit; and merchandise.",
    "The Days and Hours of the Moon are good for embassies; voyages envoys; messages; navigation; reconciliation; love; and the acquisition of merchandise by water. "
]

export interface groupingType {
    planets: Array<number>
    text: string
}

export let grouping: Array<groupingType> = [
    { planets: [0, 2], text: "The Hours of Saturn, of Mars, and of the Moon are alike good for communicating and speaking with Spirits; as those of Mercury are for recovering thefts by the means of Spirits."},
    { planets: [2], text: "The Hours of Mars serve for summoning Souls from Hades, 2 especially of those slain in battle." },
    { planets: [3, 1, 4], text: "The Hours of the Sun, of Jupiter, and of Venus, are adapted for preparing any operations whatsoever of love, of kindness, and of invisibility, as is hereafter more fully shown, to which must be added other things of a similar nature which are contained in our work." },
    // I need to add logic for this sucker
    { planets: [], text: "The Hours of Saturn and Mars and also the days on which the Moon is conjunct 1 with them, or when she receives their opposition or quartile aspect, are excellent for making experiments of hatred, enmity, quarrel, and discord; and other operations of the same kind which are given later on in this work." },
    { planets: [5], text: "The Hours of Mercury are good for undertaking experiments relating to games, raillery, jests, sports, and the like." },
    { planets: [3, 1, 4], text: "The Hours of the Sun, of Jupiter, and of Venus, particularly on the days which they rule, are good for all extraordinary, uncommon, and unknown operations." },
    { planets: [6], text: "The Hours of the Moon are proper for making trial of experiments relating to recovery of stolen property, for obtaining nocturnal visions, for summoning Spirits in sleep, and for preparing anything relating to Water." },
    { planets: [4], text: "The Hours of Venus are furthermore useful for lots, poisons, all things of the nature of Venus, for preparing powders provocative of madness and the like things." }
]
