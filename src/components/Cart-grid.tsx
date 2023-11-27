import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export function Cart(){

    const navigate = useNavigate();
    
    const navigateToCart = () => {
    navigate('/cart');
    }

    const navigateToManufacture = () => {
        navigate('/manufacture')
    }
    return (
        
        <div>
            <div className="border-2 border-black h-[3200px]">
                <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-4 my-40 h-[2200px]">

                    <div className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]"><Link to={'/cart'}></Link></div>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-black sm:h-[350px]" onClick={navigateToCart}></button>
                    <button className="w-40 h-[250px] sm:w-46 border-2 p-2 bg-amber-600 sm:h-[350px]" onClick={navigateToManufacture}></button>
                        
                </div>
            </div>

        </div>
    )
}

