const menu = [
  {
    category: "ENTRÉES",
    description:
      "Delicious starters to kick off your meal, featuring a variety of fresh and flavorful options.",
    items: [
      {
        name: "KEBABE BAHAR-GRILL",
        description: "Grilled kebabs prepared with fresh herbs and spices",
        price: 4.5
      },
      {
        name: "SALADE AU POULET",
        description:
          "Green salad with chicken, cucumber, tomato, and fresh coriander",
        price: 6.5
      },
      {
        name: "RAITA",
        description:
          "Plain yogurt with cucumber, tomato, grated carrot, and fresh coriander",
        price: 4.5
      },
      {
        name: "ALLO RAITA",
        description: "Plain yogurt with potatoes",
        price: 4.5
      },
      {
        name: "SALADE INDIENNE",
        description:
          "Indian salad with chicken, cucumber, tomato, and fresh coriander",
        price: 6.5
      },
      {
        name: "SALADE POISSON",
        description:
          "Green salad with fish, cucumber, tomato, and fresh coriander",
        price: 6.5
      },
      {
        name: "PRAWNS CHAT",
        description:
          "Indian salad with prawns, cucumber, tomato, and fresh coriander",
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
        description: "Lentil soup with carrots and cumin",
        price: 6.0
      },
      {
        name: "CHICKEN SOUPE",
        description: "Chicken soup flavored with ginger",
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
        description: "Lamb curry with spices and tomato sauce",
        price: 12.0
      },
      {
        name: "GHOST TIKKA MASALA",
        description: "Grilled lamb cooked in a rich, spicy curry sauce",
        price: 12.0
      },
      {
        name: "GHOST SHAI KORMA",
        description:
          "Chef’s special lamb dish in a cashew, almond, and cream sauce with raisins",
        price: 12.0
      },
      {
        name: "GHOST SAAGWALA",
        description: "Lamb curry with spinach (moderately spiced)",
        price: 11.5
      },
      {
        name: "GHOST RADA KHUMBE",
        description:
          "Lamb curry with bell peppers, tomatoes, peas (moderately spiced)",
        price: 12.0
      },
      {
        name: "GHOST VINDALOO",
        description: "Spiced lamb curry with potatoes and fresh herbs",
        price: 12.0
      },
      {
        name: "GHOST MILANE",
        description:
          "Lamb curry with fennel leaves, coriander, garlic, ginger, and fresh mushrooms",
        price: 12.0
      },
      {
        name: "GHOST CURRY",
        description: "Traditional lamb curry with fresh herbs and spices",
        price: 12.0
      }
    ]
  },
  {
    category: "TANDOORI",
    description:
      "Classic Indian grilled dishes, bursting with flavor from marinated meats and aromatic spices.",
    items: [
      {
        name: "MUTTON TIKKA",
        description: "Grilled lamb marinated with fresh herbs and spices",
        price: 6.5
      },
      {
        name: "RASHMI KABAB",
        description: "Chicken kebabs served with Indian herbs",
        price: 7.0
      },
      {
        name: "SHEAK KABAB",
        description:
          "Grilled lamb sausages flavored with ginger and fresh herbs",
        price: 8.0
      },
      {
        name: "MURGHI TIKKA",
        description:
          "Chicken kebabs marinated with yogurt, lemon juice, garlic, and ginger",
        price: 9.0
      },
      {
        name: "SAUMON TIKKA",
        description: "Grilled salmon with cream sauce and lime juice",
        price: 11.5
      },
      {
        name: "CHICKEN TANDOORI",
        description: "Grilled chicken flavored with fresh herbs",
        price: 12.0
      },
      {
        name: "GAMBAS TANDOORI",
        description: "Grilled prawns with fresh herbs (6 pcs)",
        price: 14.0
      },
      {
        name: "BARA KEBAB",
        description: "Grilled lamb shank with spices and fresh herbs",
        price: 12.0
      },
      {
        name: "BATERA TANDOORI",
        description: "Whole grilled quail with yogurt and Indian spices",
        price: 12.0
      },
      {
        name: "MIXTE GRILL",
        description:
          "Mixed grill platter with chicken, lamb, prawns, and kebabs (1-2 persons)",
        price: 14.0
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
        description: "Crispy onion fritters",
        price: 5.5
      },
      {
        name: "CREVETTES PAKORA",
        description: "Prawn fritters",
        price: 7.0
      },
      {
        name: "SAMOSA DE VIANDE",
        description: "Lamb samosas with peas",
        price: 6.0
      },
      {
        name: "SAMOSA VEGETABLE",
        description: "Vegetable samosas with potatoes and peas",
        price: 5.0
      },
      {
        name: "MIXED PAKORA",
        description:
          "Mixed fritters with eggplant, potatoes, cauliflower, and onions",
        price: 7.0
      },
      {
        name: "ALLO PAKORA",
        description: "Potato fritters",
        price: 5.0
      },
      {
        name: "FISH PAKORA",
        description: "Fish fritters",
        price: 7.0
      },
      {
        name: "VEG SPRING ROLL",
        description: "Spring rolls with cabbage, carrots, and Indian spices",
        price: 5.0
      }
    ]
  },
  {
    category: "PLATS POULET",
    description:
      "Succulent chicken dishes, cooked with aromatic spices and served with rich sauces.",
    items: [
      {
        name: "MURGHI SHAI KORMA",
        description: "Chicken in a creamy butter sauce with Indian spices",
        price: 12.0
      },
      {
        name: "MURGHI PISTESHEWALA",
        description: "Chicken with fresh pistachios and cream sauce",
        price: 12.0
      },
      {
        name: "MURGI TIKKA MASALA",
        description: "Grilled chicken in a rich curry sauce",
        price: 12.0
      },
      {
        name: "BUTTER CHICKEN",
        description:
          "Chef's specialty: Chicken in a cashew, almond, and cream sauce with raisins",
        price: 12.0
      },
      {
        name: "MURGHI VINDALLO",
        description: "Spicy chicken curry with potatoes and fresh herbs",
        price: 11.0
      },
      {
        name: "MURGHI MASALA",
        description:
          "Chicken curry with bell peppers, tomatoes, and peas (moderately spiced)",
        price: 11.0
      },
      {
        name: "MURGHI MUGHLAI",
        description: "Chicken curry with cream and nuts",
        price: 11.0
      },
      {
        name: "MURGHI SAAGWALA",
        description: "Chicken curry with spinach",
        price: 11.0
      },
      {
        name: "MURGHI CURRY",
        description: "Traditional chicken curry",
        price: 11.0
      }
    ]
  },
  {
    category: "DESSERTS",
    description:
      "A sweet ending to your meal, featuring exotic desserts from around the world.",
    items: [
      {
        name: "EXOTIC SORBET",
        description: "Exotic sorbet with fruits",
        price: 3.5
      },
      {
        name: "GULAB JAMUN",
        description: "Sweet dumplings with honey syrup",
        price: 3.5
      }
    ]
  }
];
export default menu;

export const specialMenu = [
  {
    name: "MENU EXPRESS 11,00",
    description:
      "(Sauf dimanche et jours fériés). Tous ces plats sont servis avecune galette maison (nan ou panner nan) et du riz basmati.",
    price: 11.00,
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
    price: 19.00,
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
    price: 22.00,
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
