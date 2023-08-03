import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                        minus quas rerum assumenda provident beatae placeat magnam
                        similique. Sapiente dolore sequi tempora necessitatibus ut laborum
                        saepe, totam doloremque maiores laudantium.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img  className="banner-img" src={BannerImg} alt="BannerImage" />
            </div>
        </div>
    );
};
export default Banner;
