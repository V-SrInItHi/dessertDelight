import ChefCard from "./ChefCard"
import "./ChefCard.css"

export default function ChefsSection(){
    const chefs = [
        {
            name: "Gaston Lenôtre",
            img: "https://images.squarespace-cdn.com/content/v1/5f6cf496877e360119ee98c2/1604632720238-UNHIMRP0U6J6B96DA4YB/17.Gaston+Len%C3%B4tre.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: " Hironobu Fukano",
            img: "https://images.squarespace-cdn.com/content/v1/5f6cf496877e360119ee98c2/1603263931912-BIRXL0XJ7ILNY1WQDURB/12.Hironobu+Fukano1.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Pierre Hermé",
            img: "https://www.relais-desserts.net/wp-content/uploads/2020/02/Herm%C3%A9_Pierre_2022_BD.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Gordon Ramsay",
            img: "https://wallpapers.com/images/featured/gordon-ramsay-pictures-k3nf6wcbkydkryus.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Elizabeth Falkner",
            img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/18/2/COAT_Elizabeth-Falkner-02-Horz_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611543531.jpeg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Gale Gand",
            img: "https://www.dailyhawker.com/wp-content/uploads/2020/12/Gale-Gand.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        },
        {
            name: "Prathamesh Lele",
            img: "https://sep.in.net/wp-content/uploads/2023/07/Chef-Prathamesh-min.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        },
        {
            name: "Pooja Dhingra",
            img: "https://im.rediff.com/getahead/2013/aug/05le15-pooja-dhingra1.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        },
        {
            name: "Jessica Préalpato",
            img: "https://static.wixstatic.com/media/cd6132_7db2638132f14b2d897497df6a976823~mv2.jpg/v1/fill/w_640,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cd6132_7db2638132f14b2d897497df6a976823~mv2.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        },
        {
            name: "Duff Goldman",
            img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/1/0/WY0102_Duff-Goldman_s4x3.jpg.rend.hgtvcom.616.462.suffix/1475539317591.jpeg",
            recipesCount: "04",
            cuisine: "Indian"
        },
    ]
    
    const h1Style = {
        paddingTop:"30px",
        color: 'black',         
        fontSize: '2.5rem',      
        textAlign: 'center',
        fontFamily: 'Monaco,Monospaced'  ,
      
          };
    
          return (
        <div className="section chefs">
            <h1 className="title" style={h1Style}>OUR TOP CHEFS</h1>
         
            <div className="top-chefs-container">
                
                { chefs.map(chef => <ChefCard key={chef.name} chef={chef} />) }
            </div>
        </div>
    )
}