import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

function Product() {
    return (
        <div className="products">
            <div className="box">
                <img src={one} alt="First Image" />
                <p>Denver Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>
            <div className="box">
                <img src={two} alt="Second Image" />
                <p>Bold Mist Intense, Eau De Parfum, Long-lasting Fragrance, 75ml</p>
            </div>
            <div className="box">
                <img src={three} alt="Third Image" />
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume, 100ml</p>
            </div>

        </div>)
}

export default Product