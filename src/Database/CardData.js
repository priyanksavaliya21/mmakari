import img1 from "../../src/assets/img/pro1.png";
import img2 from "../../src/assets/img/pro2.png";
import img3 from "../../src/assets/img/pro3.png";
import img4 from "../../src/assets/img/pro4.png";
import img5 from "../../src/assets/img/pro5.png";
import img6 from "../../src/assets/img/pro6.png";
//rating imgs
import Star1 from "../assets/img/star1.png";
import Star2 from "../assets/img/star2.png";
//inner bigslider img's
import poster1 from "../assets/img/productPage/poster1.png";
import poster2 from "../assets/img/productPage/poster2.png";
import poster3 from "../assets/img/productPage/poster3.png";
import poster4 from "../assets/img/productPage/poster4.png";
import poster5 from "../assets/img/productPage/poster5.png";
import poster6 from "../assets/img/productPage/poster6.png";
import poster7 from "../assets/img/productPage/poster7.png";
import poster8 from "../assets/img/productPage/poster8.png";
//gallary photos 
import gal1 from "../assets/img/productPage/gal1.png";
import gal2 from "../assets/img/productPage/gal2.png";
import gal3 from "../assets/img/productPage/gal3.png";
import gal4 from "../assets/img/productPage/gal4.png";
import gal5 from "../assets/img/productPage/gal5.png";
import gal6 from "../assets/img/productPage/gal6.png";
import gal7 from "../assets/img/productPage/gal7.png";
import gal8 from "../assets/img/productPage/gal8.png";
// Photo Gallery
import item1 from "../assets/img/productPage/1.png";
import item2 from "../assets/img/productPage/2.png";
import item3 from "../assets/img/productPage/3.png";
import item4 from "../assets/img/productPage/4.png";
import item5 from "../assets/img/productPage/5.png";
import item6 from "../assets/img/productPage/6.png";
//Buy_invest_data
import buy_slider_img_1 from '../assets/img/Home_page/buy_slider_img_1.png';
import buy_slider_img_2 from '../assets/img/Home_page/buy_slider_img_2.png';
import buy_slider_img_3 from '../assets/img/Home_page/buy_slider_img_3.png';
// -----------------------------------------blog---import---------------------------------------------------------------------------------//
import Latest_news_blog_img_1 from '../assets/img/Latest_news_blog/Latest_news_blog_img_1.png';
import Latest_news_blog_img_2 from '../assets/img/Latest_news_blog/Latest_news_blog_img_2.png';
import Latest_news_blog_img_3 from '../assets/img/Latest_news_blog/Latest_news_blog_img_3.png';
import Latest_news_blog_img_4 from '../assets/img/Latest_news_blog/Latest_news_blog_img_4.png';
import Latest_news_blog_img_5 from '../assets/img/Latest_news_blog/Latest_news_blog_img_5.png';
import Latest_news_blog_img_6 from '../assets/img/Latest_news_blog/Latest_news_blog_img_6.png';


export const CardData = {
  Cards: [
    {
      id: "1",
      CardTopimg: [img1 , img1 , img1],
      propertystatus: "rent",
      bedrooms: "5",
      bathtubs: "3",
      area: "2400",
      price: "25000",
      location: "Sheikh Mohammed bin Rashid Blvd",
      properttheme : "Lifestyle Location" ,
      categories:"Downtown Dubai" ,
      productpage :{
        id_x :"1",
        pagetitle : "Lifestyle Location" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star1 , Star2 ],
        reviewText : "34",
        ButtonsDetils : ["Bad 5" , "SQ.FT 2400", "Garage 2" ,"Baths 3"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "Downtown Dubai" ,
        Description : "Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise. <br/> <br/> Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise." ,
        PropertyDetailInfo : {
          PropertyID : "HZ29" ,
          HomeArea : "2400 Sqft" ,
          Rooms : "5" ,
          Baths : "3" ,
          YearBuilt : "1992" ,
          LotArea : "HZ29" ,
          LotDimensions : "120 Sqft" ,
          Beds:  "5",
          Price: "25000 AED",
          PropertyStatus : "1992" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 21.175037338812114,
            lng : 72.82631498149652
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Lifestyle Location",
            },
            {
              src: gal2 ,
              caption: "Product 2 Lifestyle Location",
            },
            {
              src: gal3 ,
              caption: "Product 3 Lifestyle Location",
            },
            {
              src: gal4 ,
              caption: "Product 4 Lifestyle Location",
            },
            {
              src: gal5 ,
              caption: "Product 5 Lifestyle Location",
            },
            {
              src: gal6 ,
              caption: "Product 6 Lifestyle Location",
            },
            {
              src: gal7 ,
              caption: "Product 7 Lifestyle Location",
            },
            {
              src: gal8 ,
              caption: "Product 8 Lifestyle Location",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },
    {
      id: "2",
      CardTopimg: [img2 , img2 , img2],
      propertystatus: "sell",
      bedrooms: "4",
      bathtubs: "3",
      area: "2200",
      price: "28000",
      location: "Emaar Blvd - Downtown Dubai",
      properttheme : "Residencial Location" ,
      categories:"Emaar Beachfront" ,
      productpage :{
        id_x :"2",
        pagetitle : "Residencial Location" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star1 , Star1 ],
        reviewText : "28",
        ButtonsDetils : ["Bad 5" , "SQ.FT 2200", "Garage 2" ," Baths 3"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "57QJ+P78 - Downtown Dubai - Dubai - United Arab Emirates" ,
        Description : "Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise. <br/> <br/> Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise." ,
        PropertyDetailInfo : {
          PropertyID : "HZ29" ,
          HomeArea : "2200 Sqft" ,
          Rooms : "4" ,
          Baths : "3" ,
          YearBuilt : "1999" ,
          LotArea : "HZ27" ,
          LotDimensions : "145 Sqft" ,
          Beds:  "5",
          Price: "28000 AED",
          PropertyStatus : "1997" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 20.59744721502637,
            lng : 73.15944399371169,
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Residencial Location",
            },
            {
              src: gal2 ,
              caption: "Product 2 Residencial Location",
            },
            {
              src: gal3 ,
              caption: "Product 3 Residencial Location",
            },
            {
              src: gal4 ,
              caption: "Product 4 Residencial Location",
            },
            {
              src: gal5 ,
              caption: "Product 5 Residencial Location",
            },
            {
              src: gal6 ,
              caption: "Product 6 Residencial Location",
            },
            {
              src: gal7 ,
              caption: "Product 7 Residencial Location",
            },
            {
              src: gal8 ,
              caption: "Product 8 Residencial Location",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1   ] 
        }
      }
    },
    {
      id: "3",
      CardTopimg: [img3 , img3 , img3],
      propertystatus: "buy",
      bedrooms: "8",
      bathtubs: "1",
      area: "2148",
      price: "44000",
      location: "Sheikh Mohammed bin Rashid Blvd",
      properttheme : "Studio Location" ,
      categories:"Meydan" ,
      productpage :{
        id_x :"3",
        pagetitle : "Studio Location" ,
        ratingProduct : [Star1 ,Star1 , Star2 , Star2 , Star2 ],
        reviewText : "20",
        ButtonsDetils : ["Bad 8" , "SQ.FT 2148 ", "Garage 2" ," Baths 1"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "2A Street - Jumeirah 1 - Dubai - United Arab Emirates" ,
        Description : "Port De La Mer is set within the prestigious Jumeirah 1 district, and it is an inspirational beachfront destination. With fresh contemporary design, it boasts premium dining, shopping, entertainment, leisure and hospitality experiences along 2.5 kilometers of pristine beaches. The residential communities here benefit from excellent connectivity to the city’s most popular attractions, and easy accessibility to Dubai’s international airports." ,
        PropertyDetailInfo : {
          PropertyID : "HZ24" ,
          HomeArea : "2148 Sqft" ,
          Rooms : "5" ,
          Baths : "1" ,
          YearBuilt : "1991" ,
          LotArea : "HZ22" ,
          LotDimensions : "112 Sqft" ,
          Beds:  "8",
          Price: "44000 AED",
          PropertyStatus : "1990" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 22.188924962416813,
            lng : 69.20642515300649
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Studio Location",
            },
            {
              src: gal2 ,
              caption: "Product 2 Studio Location",
            },
            {
              src: gal3 ,
              caption: "Product 3 Studio Location",
            },
            {
              src: gal4 ,
              caption: "Product 4 Studio Location",
            },
            {
              src: gal5 ,
              caption: "Product 5 Studio Location",
            },
            {
              src: gal6 ,
              caption: "Product 6 Studio Location",
            },
            {
              src: gal7 ,
              caption: "Product 7 Studio Location",
            },
            {
              src: gal8 ,
              caption: "Product 8 Studio Location",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },
    {
      id: "4",
      CardTopimg: [img4 , img4 , img4],
      propertystatus: "sell",
      bedrooms: "5",
      bathtubs: "2",
      area: "1300",
      price: "50000",
      location: "Mohammed Bin  Maktoum District - UAE",
      properttheme : "Port De La Mer" ,
      categories:"Business Bay" ,
      productpage :{
        id_x :"4",
        pagetitle : "Port De La Mer" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star2 , Star2 ],
        reviewText : "48",
        ButtonsDetils : ["Bad 5" , "SQ.FT 1300 ", "Garage 3" ," Baths 2"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "Mohammed Bin Rashid Al Maktoum City District - Dubai - UAE" ,
        Description : "World-renowned fashion icon Elie Saab has breathed life into these spaces by naturally blending modern architectural details in a splendid community setting. Offering homeowners a superior standard of living, ELIE SAAB VIE at The Fields is where elegance truly flourishes and indulging comfort shapes everyday life. <br/><br/>Handover: December, 2023" ,
        PropertyDetailInfo : {
          PropertyID : "HZ23" ,
          HomeArea : "1300 Sqft" ,
          Rooms : "5" ,
          Baths : "1" ,
          YearBuilt : "1992" ,
          LotArea : "HZ20" ,
          LotDimensions : "1300 Sqft" ,
          Beds:  "8",
          Price: "50000 AED",
          PropertyStatus : "1995" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 22.305113720514765,
            lng : 70.79464191730621 
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Port De La Mer",
            },
            {
              src: gal2 ,
              caption: "Product 2 Port De La Mer",
            },
            {
              src: gal3 ,
              caption: "Product 3 Port De La Mer",
            },
            {
              src: gal4 ,
              caption: "Product 4 Port De La Mer",
            },
            {
              src: gal5 ,
              caption: "Product 5 Port De La Mer",
            },
            {
              src: gal6 ,
              caption: "Product 6 Port De La Mer",
            },
            {
              src: gal7 ,
              caption: "Product 7 Port De La Mer",
            },
            {
              src: gal8 ,
              caption: "Product 8 Port De La Mer",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }

    },
    {
      id: "5",
      CardTopimg: [img5 , img5 , img5],
      propertystatus: "rent",
      bedrooms: "4",
      bathtubs: "2",
      area: "5000",
      price: "60000",
      location: "Palm Jumeirah - Dubai - UAE",
      properttheme : "Mina" ,
      categories:"Port De La Mer" ,
      productpage :{
        id_x :"5",
        pagetitle : "Mina" ,
        ratingProduct : [Star1 ,Star1 , Star2 , Star2 , Star2 ],
        reviewText : "28",
        ButtonsDetils : ["Bad 8" , "SQ.FT 5000 ", "Garage 4" ," Baths 2"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "Palm Jumeirah - The Palm Jumeirah - Dubai - UAE" ,
        Description : "Mina is home to luxury residences and comprises apartments and penthouses. This beautifully crafted waterfront development hugs the shores and is caressed by the lapping sea, on the sands of one of the world’s most sought-after addresses, ELIE SAAB VIE at The Fields is where elegance truly flourishes and indulging comfort shapes everyday life. <br/><br/>Handover: December, 2023" ,
        PropertyDetailInfo : {
          PropertyID : "HZ26" ,
          HomeArea : "5000 Sqft" ,
          Rooms : "5",
          Baths : "1",
          YearBuilt : "2002" ,
          LotArea : "HZ25" ,
          LotDimensions : "1400 Sqft",
          Beds:  "8",
          Price: "60000 AED",
          PropertyStatus : "2005" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 25.029099113769096,
            lng : 55.13207690462071 
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Mina",
            },
            {
              src: gal2 ,
              caption: "Product 2 Mina",
            },
            {
              src: gal3 ,
              caption: "Product 3 Mina",
            },
            {
              src: gal4 ,
              caption: "Product 4 Mina",
            },
            {
              src: gal5 ,
              caption: "Product 5 Mina",
            },
            {
              src: gal6 ,
              caption: "Product 6 Mina",
            },
            {
              src: gal7 ,
              caption: "Product 7 Mina",
            },
            {
              src: gal8 ,
              caption: "Product 8 Mina",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }

    },
    {
      id: "6",
      CardTopimg: [img6 , img6 , img6],
      propertystatus: "rent",
      bedrooms: "5",
      bathtubs: "3",
      area: "2278",
      price: "80000",
      location: "Golf City - Dubai - United Arab Emirates",
      properttheme : "Venice" ,
      categories:"Hot Properties" ,
      productpage :{
        id_x :"6",
        pagetitle : "Venice" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star1 , Star2 ],
        reviewText : "424",
        ButtonsDetils : ["Bad 12" , "SQ.FT 2278 ", "Garage 2" ," Baths 3"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "Golf City - Dubai - United Arab Emirates" ,
        Description : "The Floating City (Fun Hub) <br/><br/> Call it the Fun Hub, from the gondola rides and waterside cafes to the live entertainment arena, Venice comes alive at DAMAC Lagoons in ways unimagined. Embrace the Venetian way of life at the Fun Hub, inspired by the art and design of the city" ,
        PropertyDetailInfo : {
          PropertyID : "HZ22" ,
          HomeArea : "2278 Sqft" ,
          Rooms : "12",
          Baths : "3",
          YearBuilt : "2022" ,
          LotArea : "HZ11" ,
          LotDimensions : "2278 Sqft",
          Beds:  "12",
          Price: "80000 AED",
          PropertyStatus : "2020" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 24.948008316060992,
            lng : 55.05750683484919  
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Venice",
            },
            {
              src: gal2 ,
              caption: "Product 2 Venice",
            },
            {
              src: gal3 ,
              caption: "Product 3 Venice",
            },
            {
              src: gal4 ,
              caption: "Product 4 Venice",
            },
            {
              src: gal5 ,
              caption: "Product 5 Venice",
            },
            {
              src: gal6 ,
              caption: "Product 6 Venice",
            },
            {
              src: gal7 ,
              caption: "Product 7 Venice",
            },
            {
              src: gal8 ,
              caption: "Product 8 Venice",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },
    {
      id: "7",
      CardTopimg: [img6 , img6 , img6],
      propertystatus: "buy",
      bedrooms: "7",
      bathtubs: "3",
      area: "3145",
      price: "71585",
      location: "X6XQ+9M3 - Remraam - Dubai - UAE",
      properttheme : "Costa Brava" ,
      categories:"Lagoons" ,
      productpage :{
        id_x :"7",
        pagetitle : "Costa Brava" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star1 , Star1 ],
        reviewText : "4452",
        ButtonsDetils : ["Bad 10" , "SQ.FT 3145 ", "Garage 2" ," Baths 3"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "X6XQ+9M3 - Remraam - Dubai - UAE" ,
        Description : "The Wild Coast (Adrenaline Hub) <br/><br/>At the Adrenaline Hub of Costa Brava, Catalonia vibes meet exhilarating adventures. Channel your inner thrill-seeker with new adventures every day – ziplining, rock climbing, kayaking, paddle surfing and wave riding." ,
        PropertyDetailInfo : {
          PropertyID : "HZ20" ,
          HomeArea : "3145 Sqft" ,
          Rooms : "10",
          Baths : "3",
          YearBuilt : "2020" ,
          LotArea : "HZ33" ,
          LotDimensions : "3145 Sqft",
          Beds:  "10",
          Price: "71585 AED",
          PropertyStatus : "2021" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 24.769187785660108,
            lng : 55.26534737052573 
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Costa Brava",
            },
            {
              src: gal2 ,
              caption: "Product 2 Costa Brava",
            },
            {
              src: gal3 ,
              caption: "Product 3 Costa Brava",
            },
            {
              src: gal4 ,
              caption: "Product 4 Costa Brava",
            },
            {
              src: gal5 ,
              caption: "Product 5 Costa Brava",
            },
            {
              src: gal6 ,
              caption: "Product 6 Costa Brava",
            },
            {
              src: gal7 ,
              caption: "Product 7 Costa Brava",
            },
            {
              src: gal8 ,
              caption: "Product 8 Costa Brava",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },
    {
      id: "8",
      CardTopimg: [img1 , img1 , img1],
      propertystatus: "buy",
      bedrooms: "6",
      bathtubs: "2",
      area: "5500",
      price: "121000",
      location: "264F+RWM - Golf City - Dubai - UAE",
      properttheme : "Santorini" ,
      categories:"Hot Properties" ,
      productpage :{
        id_x :"8",
        pagetitle : "Santorini" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star1 , Star2 ],
        reviewText : "223",
        ButtonsDetils : ["Bad 6" , "SQ.FT 5500", "Garage 4" ," Baths 2"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "264F+RWM - Golf City - Dubai - UAE" ,
        Description : `The Island Odyssey (Central Hub) <br><br> Push the boundaries at the Fitness & Wellness Zone, followed by a wall climbing dare. Then spend a relaxing afternoon by the nature pond and when the sun goes down, celebrate at The Clubhouse before you head to the Floating Cinema to enjoy a movie under the stars.` ,
        PropertyDetailInfo : {
          PropertyID : "HZ24" ,
          HomeArea : "5500 Sqft" ,
          Rooms : "6",
          Baths : "2",
          YearBuilt : "2018" ,
          LotArea : "HZ31" ,
          LotDimensions : "5500 Sqft",
          Beds:  "6",
          Price: "121000 AED",
          PropertyStatus : "2020" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 24.42208691792041,
            lng : 54.47681826737896 
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Santorini",
            },
            {
              src: gal2 ,
              caption: "Product 2 Santorini",
            },
            {
              src: gal3 ,
              caption: "Product 3 Santorini",
            },
            {
              src: gal4 ,
              caption: "Product 4 Santorini",
            },
            {
              src: gal5 ,
              caption: "Product 5 Santorini",
            },
            {
              src: gal6 ,
              caption: "Product 6 Santorini",
            },
            {
              src: gal7 ,
              caption: "Product 7 Santorini",
            },
            {
              src: gal8 ,
              caption: "Product 8 Santorini",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },
    {
      id: "9",
      CardTopimg: [img2 , img2 , img2],
      propertystatus: "rent",
      bedrooms: "7",
      bathtubs: "4",
      area: "8000",
      price: "12002",
      location: "Emaar Beachfront - Dubai - UAE",
      properttheme : "Malta" ,
      categories:"Lagoons" ,
      productpage :{
        id_x :"9",
        pagetitle : "Malta" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star2 , Star2 ],
        reviewText : "110",
        ButtonsDetils : ["Bad 7" , "SQ.FT 8000", "Garage 1" ," Baths 4"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "Emaar Beachfront - The Palm Jumeirah - Dubai - UAE" ,
        Description : "The Historic Capital (Play and Learn Hub)<br/><br/>Learning the fun way is the best way, especially when the classroom features a sensory plaza, discovery maze, camping island, AR nature trail, outdoor art exhibits, interactive water attractions and more" ,
        PropertyDetailInfo : {
          PropertyID : "HZ78" ,
          HomeArea : "8000 Sqft" ,
          Rooms : "8",
          Baths : "4",
          YearBuilt : "2019" ,
          LotArea : "HZ91" ,
          LotDimensions : "8000 Sqft",
          Beds:  "7",
          Price: "12002 AED",
          PropertyStatus : "2019" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 25.200986738745367,
            lng : 55.2756094017216 
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Malta",
            },
            {
              src: gal2 ,
              caption: "Product 2 Malta",
            },
            {
              src: gal3 ,
              caption: "Product 3 Malta",
            },
            {
              src: gal4 ,
              caption: "Product 4 Malta",
            },
            {
              src: gal5 ,
              caption: "Product 5 Malta",
            },
            {
              src: gal6 ,
              caption: "Product 6 Malta",
            },
            {
              src: gal7 ,
              caption: "Product 7 Malta",
            },
            {
              src: gal8 ,
              caption: "Product 8 Malta",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },
    {
      id: "10",
      CardTopimg: [img3 , img3 , img3],
      propertystatus: "sell",
      bedrooms: "5",
      bathtubs: "1",
      area: "6000",
      price: "85000",
      location: "266C+MR - Golf City - Dubai - UAE",
      properttheme : "Portofino" ,
      categories:"Downtown Dubai" ,
      productpage :{
        id_x :"10",
        pagetitle : "Portofino" ,
        ratingProduct : [Star1 ,Star1 , Star2 , Star2 , Star2 ],
        reviewText : "145",
        ButtonsDetils : ["Bad 5" , "SQ.FT 6000", "Garage 2" ," Baths 1"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "266C+MR - Golf City - Dubai - United Arab Emirates" ,
        Description : "The Ligurian Gem (Work and Play Hub)<br/><br/>Expect voluntary overtime at the Work & Play Hub of Portofino. Business is a real pleasure with lunch meetings at the waterside café, exciting team building events and more, and when it’s time to unwind, find your fix with kayaking, sailing and paddle surfing.Learning the fun way is the best way, especially when the classroom features a sensory plaza, discovery maze, camping island, AR nature trail, outdoor art exhibits, interactive water attractions and more" ,
        PropertyDetailInfo : {
          PropertyID : "HZ71" ,
          HomeArea : "6000 Sqft" ,
          Rooms : "8",
          Baths : "1",
          YearBuilt : "2017" ,
          LotArea : "HZ93" ,
          LotDimensions : "6000 Sqft",
          Beds:  "5",
          Price: "85000 AED",
          PropertyStatus : "2018" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 25.238752164179047,
            lng : 55.299782293114525  
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Portofino",
            },
            {
              src: gal2 ,
              caption: "Product 2 Portofino",
            },
            {
              src: gal3 ,
              caption: "Product 3 Portofino",
            },
            {
              src: gal4 ,
              caption: "Product 4 Portofino",
            },
            {
              src: gal5 ,
              caption: "Product 5 Portofino",
            },
            {
              src: gal6 ,
              caption: "Product 6 Portofino",
            },
            {
              src: gal7 ,
              caption: "Product 7 Portofino",
            },
            {
              src: gal8 ,
              caption: "Product 8 Portofino",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },
    {
      id: "11",
      CardTopimg: [img4 , img4 , img4],
      propertystatus: "sell",
      bedrooms: "7",
      bathtubs: "2",
      area: "6500",
      price: "83000",
      location: "34WQ+VCM Emaar Downtown Dubai",
      properttheme : "Beach Vista" ,
      categories:"Port De La Mer" ,
      productpage :{
        id_x :"11",
        pagetitle : "Beach Vista" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star1 , Star1 ],
        reviewText : "141",
        ButtonsDetils : ["Bad 7" , "SQ.FT 6500", "Garage 1" ," Baths 2"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "34WQ+VCM Emaar Beachfront - The Palm Jumeirah - Dubai Marina - Dubai - United Arab Emirates" ,
        Description : "The Beach Vista (Work and Play Hub)<br/><br/>Expect voluntary overtime at the Work & Play Hub of Portofino. Business is a real pleasure with lunch meetings at the waterside café, exciting team building events and more, and when it’s time to unwind, find your fix with kayaking, sailing and paddle surfing.Learning the fun way is the best way, especially when the classroom features a sensory plaza, discovery maze, camping island, AR nature trail, outdoor art exhibits, interactive water attractions and more" ,
        PropertyDetailInfo : {
          PropertyID : "HZ42" ,
          HomeArea : "6500 Sqft" ,
          Rooms : "10",
          Baths : "2",
          YearBuilt : "2017" ,
          LotArea : "HZ97" ,
          LotDimensions : "6500 Sqft",
          Beds:  "7",
          Price: "83000 AED",
          PropertyStatus : "2021" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 25.266809550822487,
            lng : 55.29747009254549  
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 Beach Vista",
            },
            {
              src: gal2 ,
              caption: "Product 2 Beach Vista",
            },
            {
              src: gal3 ,
              caption: "Product 3 Beach Vista",
            },
            {
              src: gal4 ,
              caption: "Product 4 Beach Vista",
            },
            {
              src: gal5 ,
              caption: "Product 5 Beach Vista",
            },
            {
              src: gal6 ,
              caption: "Product 6 Beach Vista",
            },
            {
              src: gal7 ,
              caption: "Product 7 Beach Vista",
            },
            {
              src: gal8 ,
              caption: "Product 8 Beach Vista",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },
    {
      id: "12",
      CardTopimg: [img5 , img5 , img5],
      propertystatus: "sell",
      bedrooms: "12",
      bathtubs: "3",
      area: "4100",
      price: "99900",
      location: "31WQ+VCM Emaar - Downtown Dubai",
      properttheme : "Marina Shores" ,
      categories:"Emaar Beachfront" ,
      productpage :{
        id_x :"12",
        pagetitle : "Marina Shores" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star1 , Star2 ],
        reviewText : "125",
        ButtonsDetils : ["Bad 5" , "SQ.FT 4100", "Garage 1" ," Baths 3"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "31WQ+VCM Emaar - Downtown - Dubai - United Arab Emirates" ,
        Description : "Marina Shores is the New Waterfront living in the heart of Dubai Marina. Available 80/20 Payment plan<br/><br/>Expect voluntary overtime at the Work & Play Hub of Portofino. Business is a real pleasure with lunch meetings at the waterside café, exciting team building events and more, and when it’s time to unwind, find your fix with kayaking, sailing and paddle surfing.Learning the fun way is the best way, especially when the classroom features a sensory plaza, discovery maze, camping island, AR nature trail, outdoor art exhibits, interactive water attractions and more <br/><br/>Handover: December, 2026" ,
        PropertyDetailInfo : {
          PropertyID : "HZ14" ,
          HomeArea : "4100 Sqft" ,
          Rooms : "14",
          Baths : "3",
          YearBuilt : "2018" ,
          LotArea : "HZ73" ,
          LotDimensions : "4100 Sqft",
          Beds:  "5",
          Price: "99900 AED",
          PropertyStatus : "2021" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 25.20266886312585,
            lng : 55.37878247922338 
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1",
            },
            {
              src: gal2 ,
              caption: "Product 2",
            },
            {
              src: gal3 ,
              caption: "Product 3",
            },
            {
              src: gal4 ,
              caption: "Product 4",
            },
            {
              src: gal5 ,
              caption: "Product 5",
            },
            {
              src: gal6 ,
              caption: "Product 6",
            },
            {
              src: gal7 ,
              caption: "Product 7",
            },
            {
              src: gal8 ,
              caption: "Product 8",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },
    {
      id: "13",
      CardTopimg: [img6 , img6 , img6],
      propertystatus: "rent",
      bedrooms: "8",
      bathtubs: "2",
      area: "3300",
      price: "75000",
      location: "57QJ+P78 - Downtown Dubai",
      properttheme : "W Residences" ,
      categories:"Business Bay" ,
      productpage :{
        id_x :"13",
        pagetitle : "W Residences" ,
        ratingProduct : [Star1 ,Star1 , Star2 , Star2 , Star2 ],
        reviewText : "115",
        ButtonsDetils : ["Bad 6" , "SQ.FT 3300", "Garage 2" ," Baths 2"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "57QJ+P78 - Downtown Dubai - Dubai - United Arab Emirates" ,
        Description : "W Residences Dubai – Downtown is situated in the spotlight of the city’s vibrant life. The Burj Khalifa is just outside the window, the Dubai Mall and the Dancing Fountains are only a few steps away. Elegant streets,majestic buildings, chic leisure points, the most exclusive venues: it all happens here." ,
        PropertyDetailInfo : {
          PropertyID : "HZ19" ,
          HomeArea : "3300 Sqft" ,
          Rooms : "10",
          Baths : "2",
          YearBuilt : "2017" ,
          LotArea : "HZ73" ,
          LotDimensions : "3300 Sqft",
          Beds:  "6",
          Price: "75000 AED",
          PropertyStatus : "2022" ,
          PropertyVideo : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" ,
          googlemap : {
            lat : 25.163610147928907,
            lng : 55.29554325873796  
          },
          gallary : [
            {
              src: gal1 ,
              isSelected: true,
              caption: "Product 1 W Residences",
            },
            {
              src: gal2 ,
              caption: "Product 2 W Residences",
            },
            {
              src: gal3 ,
              caption: "Product 3 W Residences",
            },
            {
              src: gal4 ,
              caption: "Product 4 W Residences",
            },
            {
              src: gal5 ,
              caption: "Product 5 W Residences",
            },
            {
              src: gal6 ,
              caption: "Product 6 W Residences",
            },
            {
              src: gal7 ,
              caption: "Product 7 W Residences",
            },
            {
              src: gal8 ,
              caption: "Product 8 W Residences",
            },
          ],
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },
  ],
  Filldata : null,
  Buy_invest_data :  [
    {
        slider_image: buy_slider_img_1,
        item_heading: "Ready property",
        item_description: "Move into a Ready Home or Start Earning a Tax Free 7% - 15% annual ROI",
    },
    {
        slider_image: buy_slider_img_2,
        item_heading: "Offplan",
        item_description: "Buy LOW with offplan and sell HIGH when completed, Payment Plan always available",
    },
    {
        slider_image: buy_slider_img_3,
        item_heading: "Ultra Luxury",
        item_description: "Be part of the Elite 1% investing in luxury branded property changing Dubai/World’s Skyline",
    },
    {
        slider_image: buy_slider_img_1,
        item_heading: "Ready property",
        item_description: "Move into a Ready Home or Start Earning a Tax Free 7% - 15% annual ROI",
    },
  ],
  Entire_market_data : [
    {
        id:1,
        box_image: Latest_news_blog_img_1,
        item_date: "07 July , 2022",
        item_description: "Dubai records AED1.6 billion in real estate transactions on Wednesday.",
        detils :{
            item_content:"Focus Content Squad",
            item_image:Latest_news_blog_img_1,
            item_description:{
                item_paragraph_1:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and PageMaker including versions more recently with desktop publishing software like Aldus are not PageMaker including versions of Lorem Ipsum.",
                item_paragraph_2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
                item_paragraph_3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                item_paragraph_4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        }
    },
    {
        id:2,
        box_image: Latest_news_blog_img_2,
        item_date: "08 July , 2022",
        item_description: "Retirement May Be Changing What You Need in a Home.",
        detils :{
            item_content:"Priyank Savaliya",
            item_image: Latest_news_blog_img_2,
            item_description:{
                item_paragraph_1:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and PageMaker including versions more recently with desktop publishing software like Aldus are not PageMaker including versions of Lorem Ipsum.",
                item_paragraph_2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
                item_paragraph_3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                item_paragraph_4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        }
    },
    {
        id:3,
        box_image: Latest_news_blog_img_3,
        item_date: "09 July , 2022",
        item_description: "Is it a Housing Challenge or Housing Opportunity?",
        detils :{
            item_content:"Invints LLP",
            item_image:Latest_news_blog_img_3,
            item_description:{
                item_paragraph_1:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and PageMaker including versions more recently with desktop publishing software like Aldus are not PageMaker including versions of Lorem Ipsum.",
                item_paragraph_2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
                item_paragraph_3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                item_paragraph_4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        }
    },
    {
        id:4,
        box_image: Latest_news_blog_img_4,
        item_date: "05 July , 2022",
        item_description: "Retirement May Be Changing What YouNeed in a Home.",
        detils :{
            item_content:"Hiren Savaliya",
            item_image:Latest_news_blog_img_4,
            item_description:{
                item_paragraph_1:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and PageMaker including versions more recently with desktop publishing software like Aldus are not PageMaker including versions of Lorem Ipsum.",
                item_paragraph_2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
                item_paragraph_3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                item_paragraph_4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        }
    },
    {
        id:5,
        box_image: Latest_news_blog_img_5,
        item_date: "06 July , 2022",
        item_description: "Is it a Housing Challenge or Housing Opportunity?.",
        detils :{
            item_content:"Nikung Borad",
            item_image: Latest_news_blog_img_5,
            item_description:{
                item_paragraph_1:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and PageMaker including versions more recently with desktop publishing software like Aldus are not PageMaker including versions of Lorem Ipsum.",
                item_paragraph_2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
                item_paragraph_3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                item_paragraph_4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        }
    },
    {
        id:6,
        box_image: Latest_news_blog_img_6,
        item_date: "10 July , 2022",
        item_description: "Monthly market report for Dubai and near Places.",
        detils :{
            item_content:"Jenish Savaliya",
            item_image:Latest_news_blog_img_6,
            item_description:{
                item_paragraph_1:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and PageMaker including versions more recently with desktop publishing software like Aldus are not PageMaker including versions of Lorem Ipsum.",
                item_paragraph_2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
                item_paragraph_3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                item_paragraph_4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        }
    },
    {
        id:7,
        box_image: Latest_news_blog_img_1,
        item_date: "25 July , 2022",
        item_description: "Dubai Records AED1.6 Billion In Real Estate Transactions On Wednesday",
        detils :{
            item_content:"Naredra Modi",
            item_image:Latest_news_blog_img_1,
            item_description:{
                item_paragraph_1:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and PageMaker including versions more recently with desktop publishing software like Aldus are not PageMaker including versions of Lorem Ipsum.",
                item_paragraph_2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
                item_paragraph_3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                item_paragraph_4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        }
    },
    {
        id:8,
        box_image: Latest_news_blog_img_2,
        item_date: "12 July , 2022",
        item_description: "Retirement May Be Changing What You Need in a Home.",
        detils :{
            item_content:"Amit Shah",
            item_image:Latest_news_blog_img_2,
            item_description:{
                item_paragraph_1:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and PageMaker including versions more recently with desktop publishing software like Aldus are not PageMaker including versions of Lorem Ipsum.",
                item_paragraph_2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
                item_paragraph_3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                item_paragraph_4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        }
    },
    {
        id:9,
        box_image: Latest_news_blog_img_3,
        item_date: "22 July , 2022",
        item_description: "Is it a Housing Challenge or Housing Opportunity?",
        detils :{
            item_content:"Raj Sharma",
            item_image:Latest_news_blog_img_3,
            item_description:{
                item_paragraph_1:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and PageMaker including versions more recently with desktop publishing software like Aldus are not PageMaker including versions of Lorem Ipsum.",
                item_paragraph_2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
                item_paragraph_3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                item_paragraph_4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        }
    }
  ] ,
  Blogpage: null,
};
