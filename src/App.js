// import logo from './logo.svg';
import React from "react";
import "./App.css";

// *Header
//   ->logo
//   ->Nav interms
// *Body
//   ->Search
//   ->Restaurant CSSContainer
//   ->Restrocard
//      --img
//      --Name of rest, star rating, cuisine, delivery Time.
// *Footer
//   ->copyright
//   ->links
//   ->Address
//   ->Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="./Eatslogo.png" alt="image1" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#e8dab3" }}>
      <img className="rest-logo" src="pizzahut.jpg" alt="restlogo" />
      <h2>Pizza Hut</h2>
      <h3> Italian-American</h3>
      <h4>4.3 stars</h4>
      <h4> 38 min</h4>
    </div>
  );
};




const resObj = {
    "card": {
  "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "header": {
      "title": "What's on your mind?",
      "headerStyling": {
        "padding": {
          "left": 16,
          "top": 16,
          "bottom": 4
        }
      }
    },
    "layout": {
      "rows": 1,
      "columns": 10,
      "horizontalScrollEnabled": true,
      "itemSpacing": 24,
      "widgetPadding": {
        
      },
      "containerStyle": {
        "containerPadding": {
          "left": 8,
          "top": 8,
          "right": 12,
          "bottom": 4
        }
      },
      "scrollBar": {
        
      },
      "widgetTheme": {
        "defaultMode": {
          "backgroundColour": "#FFFFFF",
          "theme": "THEME_TYPE_LIGHT"
        },
        "darkMode": {
          "theme": "THEME_TYPE_DARK"
        }
      }
    },
    "imageGridCards": {
      "info": [
        {
          "id": "750592",
          "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
          "action": {
            "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
            "text": "Biryani",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for biryani",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750580",
          "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
          "action": {
            "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
            "text": "pizzas",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for pizza",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "762797",
          "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
          "action": {
            "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
            "text": "Burgers",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for burger",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750582",
          "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
          "action": {
            "link": "https://www.swiggy.com/collections/83645?collection_id=83645&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
            "text": "North Indian",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for north indian",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian&search_context=northindian",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750223",
          "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
          "action": {
            "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
            "text": "Rolls",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for roll",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750588",
          "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
          "action": {
            "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
            "text": "Chinese",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurant curated for chinese",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750572",
          "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
            "text": "Pure Veg",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for veg",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750636",
          "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
            "text": "Kebabs",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurant curated for kebabs",
            "altTextCta": "open"
          },
          "entityId": "80452",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "749769",
          "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
            "text": "Momos",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurant curated for momos",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750203",
          "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
            "text": "Paratha",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for paratha",
            "altTextCta": "open"
          },
          "entityId": "80476",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750207",
          "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
            "text": "Pasta",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurant curated for pasta",
            "altTextCta": "open"
          },
          "entityId": "80480",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750597",
          "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
          "action": {
            "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
            "text": "Ice Cream",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for icecream",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "749774",
          "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
            "text": "Noodles",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurant curated for noodles",
            "altTextCta": "open"
          },
          "entityId": "80464",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "749879",
          "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
            "text": "Chole Bhature",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurant curated for chhole bhatoore",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750217",
          "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
            "text": "Pav Bhaji",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurant curated for pav bhaji",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750249",
          "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
            "text": "Shawarma",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurant curated for shawarma",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "749761",
          "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
            "text": "Khichdi",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for khicdhi",
            "altTextCta": "open"
          },
          "entityId": "80456",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "749874",
          "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
          "action": {
            "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
            "text": "Cakes",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurant curated for cakes",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750584",
          "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
          "action": {
            "link": "https://www.swiggy.com/collections/83646?collection_id=83646&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
            "text": "South Indian",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for south indian",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian&search_context=southindian",
          "frequencyCapping": {
            
          }
        },
        {
          "id": "750132",
          "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
          "action": {
            "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
            "text": "Dosa",
            "type": "WEBLINK"
          },
          "entityType": "BANNER",
          "accessibility": {
            "altText": "restaurants curated for dosa",
            "altTextCta": "open"
          },
          "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
          "frequencyCapping": {
            
          }
        }
      ],
      "style": {
        "width": {
          "type": "TYPE_RELATIVE",
          "value": 0.2941,
          "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
        },
        "height": {
          "type": "TYPE_RELATIVE",
          "value": 1.2444,
          "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
        }
      }
    },
    "id": "whats_on_your_mind",
    "gridElements": {
      "infoWithStyle": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
        "info": [
          {
            "id": "750592",
            "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
              "text": "Biryani",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for biryani",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750580",
            "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
              "text": "pizzas",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for pizza",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "762797",
            "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
              "text": "Burgers",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for burger",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750582",
            "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83645?collection_id=83645&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
              "text": "North Indian",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for north indian",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian&search_context=northindian",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750223",
            "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
              "text": "Rolls",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for roll",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750588",
            "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
              "text": "Chinese",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for chinese",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750572",
            "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
              "text": "Pure Veg",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for veg",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750636",
            "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
              "text": "Kebabs",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for kebabs",
              "altTextCta": "open"
            },
            "entityId": "80452",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "749769",
            "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
              "text": "Momos",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for momos",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750203",
            "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
              "text": "Paratha",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for paratha",
              "altTextCta": "open"
            },
            "entityId": "80476",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750207",
            "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
              "text": "Pasta",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for pasta",
              "altTextCta": "open"
            },
            "entityId": "80480",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750597",
            "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
              "text": "Ice Cream",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for icecream",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "749774",
            "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
              "text": "Noodles",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for noodles",
              "altTextCta": "open"
            },
            "entityId": "80464",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "749879",
            "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
              "text": "Chole Bhature",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for chhole bhatoore",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750217",
            "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
              "text": "Pav Bhaji",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for pav bhaji",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750249",
            "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
              "text": "Shawarma",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for shawarma",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "749761",
            "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
              "text": "Khichdi",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for khicdhi",
              "altTextCta": "open"
            },
            "entityId": "80456",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "749874",
            "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
              "text": "Cakes",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurant curated for cakes",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750584",
            "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
            "action": {
              "link": "https://www.swiggy.com/collections/83646?collection_id=83646&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
              "text": "South Indian",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for south indian",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian&search_context=southindian",
            "frequencyCapping": {
              
            }
          },
          {
            "id": "750132",
            "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
            "action": {
              "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
              "text": "Dosa",
              "type": "WEBLINK"
            },
            "entityType": "BANNER",
            "accessibility": {
              "altText": "restaurants curated for dosa",
              "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
            "frequencyCapping": {
              
            }
          }
        ],
        "style": {
          "width": {
            "type": "TYPE_RELATIVE",
            "value": 0.2941,
            "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
          },
          "height": {
            "type": "TYPE_RELATIVE",
            "value": 1.2444,
            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
          }
        }
      }
    }
  }
}
 
}





const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">
        {/* // restrocard */}
        <RestaurantCard />
      <resObj/>
      </div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
     
    </div>
  );
};

export default AppLayout;
// export default AppLayout
