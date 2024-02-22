
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";


export default function ChefCard({chef}) {
    return (
        <div className="chef-card">
            <img src={chef.img} alt="" />
            <div className="chef-card-info">
                <h3 className="chef-card-name">{chef.name}</h3>
                <p className="chef-recipe-count">Recipes: <b>{chef.recipesCount}</b></p>
                <p className="chef-cuisine">Cuisine: <b>{chef.cuisine}</b></p>
                <p className="chef-icons">
               
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
                </p>
            </div>
        </div>
    )
}