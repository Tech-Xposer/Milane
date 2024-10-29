const menu = [

  {
    category: "ENTRÉES",
    description:
      "Delicious starters to kick off your meal, featuring a variety of fresh and flavorful options.",
  },

  {
    category: "SALADS",
    description:
      "Delicious starters to kick off your meal, featuring a variety of fresh and flavorful options.",
    items: [
      {
        name: "SALADE AU POULET",
        description:
          "Salade verte, poulet,concombre, tomate, coriandre fraîches",
        price: 6.5
      },
      {
        name: "RAITA",
        description:
          "Yaourt nature avec concombre, tomate, carotte râpéé coriandre fraîches",
        price: 4.5
      },
      {
        name: "ALLO RAITA",
        description: "Yaourt nature avec pomme deterre",
        price: 4.5
      },
      {
        name: "SALADE INDIENNE",
        description:
          "Salade verte, concombre, tomate,poivrons, carottes, mais",
        price: 6.5
      },
      {
        name: "SALADE POISSON",
        description:
          "Salade verte, poissan,concombre, tomate, coriandre",
        price: 6.5
      },
      {
        name: "PRAWNS CHAT",
        description:
          "Crevettes macérées dans du jus de citron vert et salade composée tomate,concombre, pommes et herbes fraîches",
        price: 8.0
      }
    ]
  },
  {
    category: "SOUPES",
    description:
      "A selection of heartwarming soups, perfect for a light yet satisfying start to your meal.",
    items: [
      {
        name: "RASAM SOUPE",
        description: "Soupe de lentilles, carottes, céleri",
        price: 6.0
      },
      {
        name: "CHICKEN SOUPE",
        description: "Soupe de poulet parfumée au gingembre",
        price: 7.0
      }
    ]
  },
  {
    category: "PLATS AGNEAU",
    description:
      "Exquisite lamb dishes cooked to perfection with traditional spices and rich flavors.",
    items: [
      {
        name: "GHOST MASALA",
        description: "Agneau au curry, poivrons, tomates, petits pois (moyennement relevé)",
        price: 12.0
      },
      {
        name: "GHOST TIKKA MASALA",
        description: "Agneau grillé au four tandoor, sauce au curry",
        price: 12.0
      },
      {
        name: "GHOST SHAI KORMA",
        description:
          "Spécialité du chef. Agneau sauce de noix de cajou, amandes, crème fraîches et raisins secs",
        price: 12.0
      },
      {
        name: "GHOST SAAGWALA",
        description: "Agneau au curry avec des épinards (moyennement relevé)",
        price: 11.5
      },
      {
        name: "GHOST RADA KHUMBE",
        description:
          "Agneau au curry, feuillus de fenouil, coriandre, ail, gingembre et champignons frais",
        price: 12.0
      },
      {
        name: "GHOST VINDALOO",
        description: "Agneau au curry, pommes de terre, herbes fralches, épices indiennes",
        price: 12.0
      },
      {
        name: "GHOST MILANE",
        description:
          "Morceau choisis d'agneau, épice, sauce tomate et amandes (releve)",
        price: 12.0
      },
      {
        name: "GHOST BAIGAN",
        description:
          "Agneau sauce curry avec des aubergines, coriandre, crème fraîche",
        price: 12.0
      },
      {
        name: "GHOST CURRY",
        description: "Agneau sauce curry, coriandre fraîche",
        price: 12.0
      }
    ]
  },
  {
    category: "KEBABE BAHAR-GRILL",
    description:
      "SPÉCIALITÉS TANDOORI",
    items: [
      {
        name: "MUTTON TIKKA",
        description: "Brochettes d'agneau macérées dans du yaourt, jus de citron, ail, gingembre",
        price: 9.0
      },
      {
        name: "RASHMI KABAB",
        description: "Blanc de poulet haché préparé à la coriandre, senvis avec une herbe indienne présenté sous forme de saucisses grillées",
        price: 6.5
      },
      {
        name: "SHEAK KABAB",
        description:
          "Palets de viande d'agneau hachés épais avec gingembre. herbes fraîches",
        price: 7.0
      },
      {
        name: "MURGHI TIKKA",
        description:
          "Morceaux de poulet aux herbes fraîchess, grillés au tandoor",
        price: 8.0
      },
      {
        name: "SAUMON TIKKA",
        description: "Saumon mariné, sauce à la crème, jus de citron vert",
        price: 11.5
      },
      {
        name: "CHICKEN TANDOORI",
        description: "Poulet grillé aromatisé d'herbes fraîchess",
        price: 6.0
      },
      {
        name: "GAMBAS TANDOORI",
        description: "Gambas grillées aux herbes fraîches (6 pcs)",
        price: 14.0
      },
      {
        name: "BARA KEBAB",
        description: "Jarret d'agneau grillé au tandoor, épices, herbes fraîches",
        price: 7.5
      },
      {
        name: "BATERA TANDOORI",
        description: "Cailles entières grillé, sauce au yaourt et épices indiennes",
        price: 9.0
      },
      {
        name: "MIXTE GRILL (1 pers)",
        description:
          "Morceaux de poulet, agneau, gambas,kebab (1 pers.)",
        price: 12.0
      },
      {
        name: "MIXTE GRILL (2 pers)",
        description:
          "cuits au tandoor avec beignets de légumes (2 pers.)",
        price: 22.0
      }
    ]
  },
  {
    category: "PAKORA (BEIGNETS)",
    description:
      "Crispy, deep-fried fritters that make for a perfect snack or appetizer.",
    items: [
      {
        name: "ONION BHAJI",
        description: "Beignets d'oignons",
        price: 4.0
      },
      {
        name: "CREVETTES PAKORA",
        description: "Marceaux de crevettes gratinées (beignets de crevettes)",
        price: 8.5
      },
      {
        name: "SAMOSA DE VIANDE",
        description: "Chausson de viande d'agneau hachée, avec petits pois",
        price: 5.50
      },
      {
        name: "SAMOSA VEGETABLE",
        description: "Ehausson de légumes, pommes de terre et petits pois, raisins secs et nois de cajou",
        price: 4.5
      },
      {
        name: "MIXED PAKORA",
        description:
          "Beignets d'aubergine, pommes de terre, chou-fleur, oignons ",
        price: 7.0
      },
      {
        name: "ALLO PAKORA",
        description: "Beignets de pomme de terre",
        price: 6.0
      },
      {
        name: "FISH PAKORA",
        description: "Beignets de poisson",
        price: 7.0
      },
      {
        name: "VEG SPRING ROLL",
        description: "Chou blanc, carottes, légumes, épices indienne",
        price: 5.0
      }
    ]
  },
  {
    category: "PLATS POULET",
    description:
      "LES PLATS SONT SERVIS SANS RIZ",
    items: [
      {
        name: "MURGHI SHAI KORMA",
        description: "Spécialité du chef Poulet à la sauce noix de cajou amandes, crème fraîches et raisin secs",
        price: 12.0
      },
      {
        name: "MURGHI PISTESHEWALA",
        description: "Morceaux de poulet aux pistaches fraîches",
        price: 11.0
      },
      {
        name: "MURGI TIKKA MASALA",
        description: "Poulet grillé au four tandoor, sauce au curry, créme fraîches",
        price: 12.0
      },
      {
        name: "BUTTER CHICKEN",
        description:
          "Poulet au curry avec sauce créme beurre, épices indienne",
        price: 12.0
      },
      {
        name: "MURGHI VINDALLO",
        description: "Poulet au curry, pommes de terre, herbes indienne (relevé)",
        price: 11.0
      },
      {
        name: "MURGHI MASALA",
        description:
          "Poulet au curry, poivrons, tomates, petits pois, meyennement relevéd",
        price: 11.0
      },
      {
        name: "MURGHI MUGHLAI",
        description: "Poulet au curry à la crème et aux oeufs",
        price: 11.0
      },
      {
        name: "MURGHI SAAGWALA",
        description: "Poulet au curry avec épinard",
        price: 11.0
      },
      {
        name: "MURGHI CURRY",
        description: "Poulet sauce curry coriandre fraîches",
        price: 10.0
      },
      {
        name: "MURGHI BAIGAN",
        description: "Poulet curry avec des aubergines, coriandre, crème fraîches",
        price: 11.0
      }
    ]
  },

  {
    category: "MASHLI YA JHINGHA",
    description:
      "SPÉCIALITÉS DE POISSON ET CRUSTACÉS",
    items: [
      {
        name: "FISH CURRY",
        description: "Poisson sauce curry, coriandre fraîche",
        price: 10.5
      },
      {
        name: "MASHLI MASALA",
        description: "Spécialité de Calcutta. Filet de poisson au curry, tomate, poivron vert, ail, gingembre, cumin, coriandre fraîche",
        price: 11.5
      },
      {
        name: "MASHLI MALABARI",
        description: "Spécialité du chef. Poisson, sauce au fromage et curry",
        price: 11.5
      },
      {
        name: "SAUMON TIKKA MASALA",
        description: "Filet de saumon au curry, herbes indiennes",
        price: 13.5
      },
      {
        name: "PRAWNS MADRAS",
        description: "Spécialité du sud. Crevettes au curry (épicé)",
        price: 12.0
      },
      {
        name: "PRAWNS MASALA",
        description: "Crevettes au curry moyennement épicées, poivron, tomate, petits pois, herbes fraîchess",
        price: 12.0
      },
      {
        name: "JHINGHA KORMA",
        description: "Spécialité du chef. Gambas préparées à la crème de noix de cajou, raisins secs, cumin, ail, gingembre (peu relevé)",
        price: 17.0
      },
      {
        name: "JHINGHA CURRY",
        description: "Gambas accomodées à la sauce curry (moyennement relevé)",
        price: 15.0
      },
    ]
  },

  {
    category: "RIZ BASMATI",
    description:
      "Special Rice",
    items: [
      {
        name: "RIZ PULAO",
        description: "Riz à la graine de cumin et cardamone",
        price: 4.0
      },
      {
        name: "KASHMIRI PULAO",
        description: "Riz à la cannelle, tomates, graines de cumin, fruits secs",
        price: 5.0
      },
      {
        name: "GREEN PEAS PULAO",
        description: "Riz avec petits pois et coriandre fraîche",
        price: 4.5
      },
      {
        name: "EGG RICE",
        description: "Graines de cumin, oeuf, coriandre fraîche",
        price: 5.0
      }
    ]
  },

  {
    category: "SUBZ BAHAR",
    description:
      "LÉGUMES",
    items: [
      {
        name: "KHUMBI BHAJEE",
        description: "Chapignons frais, oignons, petits pois, coriandre fraîche",
        price: 7.5
      },
      {
        name: "VEGETABLE KORMA",
        description: "Légumes variés, crème fraîche, amandes, ail, gingembre, herbes fraîches (peu relevé)",
        price: 8.0
      },
      {
        name: "DALL TARKA",
        description: "Lentilles accommodées aux herbes et aromate de l'Inde",
        price: 7.5
      },
      {
        name: "PALAK PANNER",
        description: "Épinards fromage maison, sauce aux épices et aux herbes (peu relevé",
        price: 8.0
      },
      {
        name: "ALLO PALAK",
        description: "Épinards préparés avec des pommes de terre aux herbes",
        price: 6.0
      },
      {
        name: "RAITA",
        description: "Yaourt aux carottes, concombre, coriandre, tomate",
        price: 4.5
      },
      {
        name: "BAIGAN BARTHA",
        description: "Aubergines, crème fraîche, sauce aux épices et herbes (peu relevé)",
        price: 8.0
      },
      {
        name: "ALLO MATAR",
        description: "Pommes de terre, petits pois, sauce curry",
        price: 7.5
      },
      {
        name: "BOMBAY ALLO",
        description: "Pommes de terre frites, crème fraîche, sauce riche en épices, coriandre fraîche",
        price: 7.5
      }
    ]
  },

  {
    category: "SHAHI",
    description:
      "PAINS TANDOORI",
    items: [
      {
        name: "NAN",
        description: "Pain à la farine de froment",
        price: 3.0
      },
      {
        name: "PANEER NAN",
        description: "Pain au fromage",
        price: 3.5
      },
      {
        name: "MASALA KULCHA",
        description: "Pain aromatisé aux légumes",
        price: 4.0
      },
      {
        name: "KEEMA NAN",
        description: "Pain fourré à la viande haché d'agneau",
        price: 4.0
      },
      {
        name: "TANDOORI PARATHA",
        description: "Galette à base de farine de froment et beurre",
        price: 3.5
      },
      {
        name: "ROTI",
        description: "Galette",
        price: 2.5
      },
      {
        name: "GARLIC NAN",
        description: "Pain à l'ail",
        price: 3.5
      },
      {
        name: "MIX NAN",
        description: "Pain au fromage et à l’ail",
        price: 4.0
      }
    ]
  },

  {
    category: "BIRYANI",
    description:
      "LE BIRYANI EST LE PLAT MAGHLAI COMPOSÉ DE RIZ BASMATI, ACCOMODÉ SOIT DE VIANDE EPICEE (AGNEAU OU POULET), DE CREVETTES OU DE LEGUMES SERVI AVEC RAITA",
    items: [
      {
        name: "GHOST BIRYANI",
        description: "Agneau",
        price: 13.5
      },
      {
        name: "MURGH BIRYANI",
        description: "Poulet",
        price: 12.5
      },
      {
        name: "VEGETABLE BIRYANI",
        description: "Légumes",
        price: 11.5
      },
      {
        name: "JHINGHA BIRYANI",
        description: "Crevettes",
        price: 13.5
      },
      {
        name: "MIXTE BIRYANI",
        description: "Poulet, agneau, crevettes, légumes",
        price: 14.0
      }
    ]
  },

  {
    category: "PLATS DE NOUILLES",
    description:
      "NOUILLES SAUTÉES AVEC SAUCE AU CURRY ET ÉPICES INDIENNES",
    items: [
      {
        name: "POULET OU AGNEAU",
        description: "...................",
        price: 13.0
      },
      {
        name: "CREVETTE",
        description: "...................",
        price: 14.0
      },
      {
        name: "LÉGUMES VARIÉS",
        description: "...................",
        price: 12.0
      }
    ]
  },

  {
    category: "DESSERTS",
    description:
      "Que diriez-vous d'un peu de douceur ?",
    items: [
      {
        name: "HALWA",
        description: "Exotic sorbet with fruits",
        price: 3.5
      },
      {
        name: "GULAB JAMUN",
        description: "Sweet dumplings with honey syrup",
        price: 4.5
      },
      {
        name: "KULFI PISTACHE",
        description: "Glace maison parfumée à la cardamone avec amandes et pistaches",
        price: 5.0
      },
      {
        name: "MANGO KULFI",
        description: "Glace maison parfumée à la mangue fraîches",
        price: 5.5
      },
      {
        name: "SORBET EXOTIQUE ET GLACE",
        description: "2 Boules au choix Noix de coco, fruits de la passion, mangue, citron, fraise, vanille ou chocolat",
        price: 5.0
      },
      {
        name: "MANGO ICE CREAM",
        description: "Boule de glace vanille avec coulis de mangue fraîche",
        price: 4.5
      },
      {
        name: "SALADE DE FRUITS",
        description: "Servie avec un coulis de mangue fraîche",
        price: 5.5
      },
      {
        name: "HMIX KULFI",
        description: "Glace maison parfumée mangue et pistaches",
        price: 5.5
      },
    ]
  }
];
export default menu;

export const specialMenu = [
  {
    name: "MENU ENFANT 10,00",
    description:
      "Salade + Poulet grillé + Riz + Allo Pakora +Nan fromage + GLACE",
    price: 10.0,
  },
  {
    name: "MENU EXPRESS 11,00",
    description:
      "(Sauf dimanche et jours fériés). Tous ces plats sont servis avecune galette maison (nan ou panner nan) et du riz basmati.",
    price: 11.0,
    items: [
      {
        PLATS: [
          {
            name: "Chicken Tandoori",
            description:
              "Poulet mariné et grillé aux herbesfraîches, cuit au tandoor"
          },
          {
            name: "Mixed Pakora",
            description: "Beignet de pommed de terre etoignon"
          },
          {
            name: "Prawns Chaat",
            description:
              " Crevettes macérées dans un jus de citron vertgarnies d'une salade composée (tomate,concombre, pommes) et herbes fraîches"
          },
          {
            name: "Chicken Curry",
            description:
              "2 Boules au choix Noix de coco, fruits de lapassion, mangue, citron, fraise, vanille ouchocolat"
          }
        ],
        DESSERT: [
          {
            name: "HALWA",
            description:
              "Gâteau de semoule : sucre, beurre,lait, amandes, cardamone, noix de"
          }
        ]
      }
    ]
  },
  {
    name: "MENU 19,00",
    description:
      "Toutes nos entrées sont servies avec une de nosgalettes maison (nan ou nan fromage)",
    price: 19.0,
    items: [
      {
        ENTRÉES: [
          {
            name: "RESHMI KABAB",
            description:
              "Blanc de poulet haché, coriandre, présenté sous forme de saucisses grillées"
          },
          {
            name: "SAMOSA VEGETABLE",
            description: "Chausson delegtumes"
          },
          {
            name: "PYAJ PKADRA",
            description: "Oignon servi en lamelles"
          },
          {
            name: "RAITA",
            description: "Yaourt aux crudités et épices"
          }
        ],
        Plats: [
          {
            name: "CHICKEN CURRY",
            description: "Poulet au curry, herbes et,epices"
          },
          {
            name: "FISH CURRY",
            description: "Fllets de poisson au curry, herbes etépices"
          },
          {
            name: "VEGETABLE CURRY",
            description: "Variété de légumes au curry"
          },
          {
            name: "DALL MAKHNI",
            description: "Lentilles au curry et beurre"
          }
        ],
        Desset: [
          {
            name: "HALWA ",
            description:
              " Gâteau de semoule : sucre, beurre,lait, amandes, cardamone, noix de coco "
          },
          {
            name: "MANGO ICE CREAM ",
            description:
              " Boule de glace à la vanille et coulisde mangue fraîche "
          }
        ]
      }
    ]
  },
  {
    name: "MENU 22,00",
    description:
      "Tous nos plats sont servis avec une de nosgalettes maison (nan ou nan fromage)",
    price: 22.0,
    items: [
      {
        ENTRÉES: [
          {
            name: "PRAWNS CHAT ",
            description:
              " Crevettes macérées dan ils de citron vert,garies une salade composée (tomate,concombre, pommes) et herbes fraiches "
          },
          {
            name: "CHICKEN TANDOORI ",
            description: " Poulet mariné grilé cuit au tandor etherbes fraiche "
          },
          {
            name: "SAMOSA DE VIANDE ",
            description: " Chausson de viande d agneau hachéeavec petts pois "
          },
          {
            name: "BAIGAN BHARTA ",
            description:
              " Aubergines grillée au tandor, réparéesavec tomate, oignons et crème fraîche "
          }
        ],
        Plats: [
          {
            name: "CHICKEN BADAMI ",
            description:
              "Morceaux de poulet accammodés à lacrème fraîche et de noix de cajou. amandes, all, gingembre et herbes indienne "
          },
          {
            name: "ROGAN JOSH ",
            description:
              " Agneau au cury assaisonné d'une sauceriche en épices et herbes indienne "
          },

          {
            name: "FISH BANGALI(SELON ARRIVAGE) ",
            description:
              "Poisson au curry avec piments verts,oignon, coriandre, farine de pois chicheet jus de citron vert "
          },
          {
            name: "VEGETABLE KORMA ",
            description:
              "Variété de légumes, de noix de cajou, raisinssecs, crème fraîche, amandes, ail, gingembre "
          }
        ],
        Desset: [
          {
            name: "HALWA ",
            description:
              "Gâteau de semoule : sucre, beurre,lait, amandes, cardamone, noix deCOCO "
          },
          {
            name: "GULAB JAMUN ",
            description: "Boule préparée à base de lait parfumé à la rose "
          },

          {
            name: "MANGO ICE CREAM ",
            description:
              "Boule de glaco à la vanille aveccoulis de mangue fraîche "
          }
        ]
      }
    ]
  }
];
