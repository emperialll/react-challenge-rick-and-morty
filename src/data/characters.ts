const characters = [
  {
    full_name: "Rick Sanchez",
    super_powers: [
      { name: "Genius-level intellect", symbol: "🧠" },
      { name: "Interdimensional travel", symbol: "🌀" },
      { name: "Time manipulation", symbol: "⏰" },
    ],
    weaknesses: [
      { name: "Alcohol dependency", symbol: "🍾" },
      { name: "Emotional detachment", symbol: "❤️‍🩹" },
    ],
    species: "Human",
  },
  {
    full_name: "Morty Smith",
    super_powers: [
      { name: "Adaptability", symbol: "🔄" },
      { name: "Moral compass", symbol: "🧭" },
      { name: "Survival instinct", symbol: "🔥" },
    ],
    weaknesses: [
      { name: "Insecurity", symbol: "😰" },
      { name: "Gullibility", symbol: "🤥" },
    ],
    species: "Human",
  },
  {
    full_name: "Summer Smith",
    super_powers: [
      { name: "Resourcefulness", symbol: "🛠️" },
      { name: "Bravery", symbol: "🦸‍♀️" },
      { name: "Quick learning", symbol: "📚" },
    ],
    weaknesses: [
      { name: "Rebelliousness", symbol: "🚫" },
      { name: "Attention seeking", symbol: "👀" },
    ],
    species: "Human",
  },
  {
    full_name: "Jerry Smith",
    super_powers: [
      { name: "Blind optimism", symbol: "🌞" },
      { name: "Average Joe charm", symbol: "😊" },
      { name: "Unpredictability", symbol: "🎲" },
    ],
    weaknesses: [
      { name: "Insecurity", symbol: "😰" },
      { name: "Incompetence", symbol: "🔧" },
    ],
    species: "Human",
  },
  {
    full_name: "Beth Smith",
    super_powers: [
      { name: "Medical expertise", symbol: "👩‍⚕️" },
      { name: "High intelligence", symbol: "💡" },
      { name: "Emotional strength", symbol: "💪" },
    ],
    weaknesses: [
      { name: "Fear of abandonment", symbol: "🏃‍♀️" },
      { name: "Parental issues", symbol: "👨‍👧" },
    ],
    species: "Human",
  },
  {
    full_name: "Mr. Meeseeks",
    super_powers: [
      { name: "Task-oriented existence", symbol: "🎯" },
      { name: "Creation on demand", symbol: "✨" },
      { name: "Physical adaptability", symbol: "🤸‍♂️" },
    ],
    weaknesses: [
      { name: "Short lifespan", symbol: "⏳" },
      { name: "Existential pain", symbol: "😖" },
    ],
    species: "Meeseeks",
  },
  {
    full_name: "Birdperson",
    super_powers: [
      { name: "Flight", symbol: "🕊️" },
      { name: "Enhanced strength", symbol: "💪" },
      { name: "Longevity", symbol: "⏳" },
    ],
    weaknesses: [
      { name: "Emotional vulnerability", symbol: "💔" },
      { name: "Physical fragility", symbol: "🩹" },
    ],
    species: "Birdperson",
  },
  {
    full_name: "Squanchy",
    super_powers: [
      { name: "Size alteration", symbol: "🔼" },
      { name: "Super strength", symbol: "💪" },
      { name: "Enhanced agility", symbol: "🐾" },
    ],
    weaknesses: [
      { name: "Impulsiveness", symbol: "⚡" },
      { name: "Substance dependency", symbol: "🍷" },
    ],
    species: "Cat-like Alien",
  },
  {
    full_name: "Evil Morty",
    super_powers: [
      { name: "High intelligence", symbol: "🧠" },
      { name: "Manipulation", symbol: "🕹️" },
      { name: "Strategic planning", symbol: "♟️" },
    ],
    weaknesses: [
      { name: "Arrogance", symbol: "👑" },
      { name: "Lack of empathy", symbol: "❤️‍🩹" },
    ],
    species: "Human",
  },
  {
    full_name: "Mr. Poopybutthole",
    super_powers: [
      { name: "Resilience", symbol: "🚀" },
      { name: "Optimism", symbol: "🌟" },
      { name: "Mysterious origins", symbol: "🔮" },
    ],
    weaknesses: [
      { name: "Physical vulnerability", symbol: "🩹" },
      { name: "Emotional sensitivity", symbol: "💧" },
    ],
    species: "Unknown",
  },
  {
    full_name: "Unity",
    super_powers: [
      { name: "Mind control", symbol: "🧠" },
      { name: "Mass assimilation", symbol: "🌐" },
      { name: "Telepathic communication", symbol: "🗣️" },
    ],
    weaknesses: [
      { name: "Emotional attachment", symbol: "💞" },
      { name: "Need for hosts", symbol: "👥" },
    ],
    species: "Collective Hive Mind",
  },
  {
    full_name: "Tammy Gueterman",
    super_powers: [
      { name: "Deception", symbol: "🎭" },
      { name: "Espionage skills", symbol: "🕵️‍♀️" },
      { name: "Marksmanship", symbol: "🎯" },
    ],
    weaknesses: [
      { name: "Vulnerability to personal feelings", symbol: "❤️" },
      { name: "Overconfidence", symbol: "👑" },
    ],
    species: "Human",
  },
  {
    full_name: "Krombopulos Michael",
    super_powers: [
      { name: "Assassination skills", symbol: "🗡️" },
      { name: "Stealth", symbol: "👤" },
      { name: "Combat proficiency", symbol: "🥋" },
    ],
    weaknesses: [
      { name: "Moral indifference", symbol: "⚖️" },
      { name: "Over-reliance on contracts", symbol: "📜" },
    ],
    species: "Alien",
  },
  {
    full_name: "Scary Terry",
    super_powers: [
      { name: "Dream manipulation", symbol: "💤" },
      { name: "Clawed hands", symbol: "🔪" },
      { name: "Intimidation", symbol: "😱" },
    ],
    weaknesses: [
      { name: "Insecurity", symbol: "😓" },
      { name: "Susceptibility to kindness", symbol: "🤝" },
    ],
    species: "Dream Demon",
  },
  {
    full_name: "Gearhead",
    super_powers: [
      { name: "Mechanical expertise", symbol: "⚙️" },
      { name: "Enhanced durability", symbol: "🔩" },
      { name: "Technological integration", symbol: "🤖" },
    ],
    weaknesses: [
      { name: "Over-talkativeness", symbol: "🗣️" },
      { name: "Predictability", symbol: "🔄" },
    ],
    species: "Gear Person",
  },
  {
    full_name: "Sleepy Gary",
    super_powers: [
      { name: "Memory implantation", symbol: "🧠" },
      { name: "Identity assimilation", symbol: "🎭" },
      { name: "Emotional manipulation", symbol: "💔" },
    ],
    weaknesses: [
      { name: "Dependence on host memory", symbol: "💾" },
      { name: "Vulnerability to reality checks", symbol: "🔍" },
    ],
    species: "Parasite",
  },
  {
    full_name: "Abradolf Lincler",
    super_powers: [
      { name: "Enhanced strength", symbol: "💪" },
      { name: "Strategic intellect", symbol: "🧠" },
      { name: "Historical knowledge", symbol: "📚" },
    ],
    weaknesses: [
      { name: "Identity crisis", symbol: "❓" },
      { name: "Conflicted loyalties", symbol: "⚔️" },
    ],
    species: "Human Clone",
  },
  {
    full_name: "Morty Jr.",
    super_powers: [
      { name: "Rapid growth", symbol: "🌱" },
      { name: "Physical strength", symbol: "💪" },
      { name: "Creative expression", symbol: "🎨" },
    ],
    weaknesses: [
      { name: "Naivety", symbol: "👶" },
      { name: "Rebellious nature", symbol: "🚩" },
    ],
    species: "Gazorpian",
  },
  {
    full_name: "Fart",
    super_powers: [
      { name: "Telepathy", symbol: "🧠" },
      { name: "Molecular manipulation", symbol: "🌀" },
      { name: "Intangibility", symbol: "👻" },
    ],
    weaknesses: [
      { name: "Vulnerability to certain frequencies", symbol: "🎵" },
      { name: "Lack of understanding of human morality", symbol: "⚖️" },
      { name: "Physical manifestation constraint", symbol: "🔗" },
    ],
    species: "Gaseous Being",
  },
  {
    full_name: "Pickle Rick",
    super_powers: [
      { name: "High intelligence in pickle form", symbol: "🧠" },
      { name: "Expertise in makeshift weaponry", symbol: "🔨" },
      { name: "Extreme adaptability", symbol: "🔄" },
    ],
    weaknesses: [
      { name: "Physical limitations as a pickle", symbol: "🥒" },
      { name: "Dependence on external mobility aids", symbol: "🚲" },
      { name: "Vulnerability to natural decomposition", symbol: "🍂" },
    ],
    species: "Pickle (Transformed Human)",
  },
];
