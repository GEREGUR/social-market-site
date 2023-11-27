import { Footer } from "./Footer"
import Hamburger from "./Hamburger"
import { useNavigate } from "react-router";

export function Cart_page(){
    const navigate = useNavigate();
    
    const navigateToHome = () => {
    navigate('/');
    }
    return(
        <div className="h-[100em]">
            <div className="w-full mb-16">
                <Hamburger onClick={open}></Hamburger>
                <img src="/src/images/sm logo.svg" alt="SM logo" className='h-8 w-18 cursor-pointer mt-10 ml-10' onClick={navigateToHome}/>
            </div>
            <div className="h-[24em] sm:h-[35em] w-full sm:w-[35em] bg-slate-200 sm:mx-96"></div>
            <div className="sm:mx-96 sm:w-[35em] border-dashed border-black border-b-2">
                <h1 className="text-2xl">Brand</h1>
                <h2 className="text-3xl">Type NAME</h2>
                <ul className="flex flex-row gap-10 my-8">
                    <li>
                        <div className="rounded-full bg-black h-8 w-8 hover:cursor-pointer hover:border-4 hover:border-x-zinc-950"></div>
                        <h3 className="text-center">S</h3>
                    </li>
                    <li>
                        <div className="rounded-full bg-lime-700 h-8 w-8 hover:cursor-pointer"></div>
                        <h3 className="text-center">M</h3>
                    </li>
                    <li>
                        <div className="rounded-full bg-sky-500 h-8 w-8 hover:cursor-pointer"></div>
                        <h3 className="text-center">L</h3>
                    </li>
                    <li>
                        <div className="rounded-full bg-white border-2 h-8 w-8 hover:cursor-pointer"></div>
                        <h3 className="text-center">XL</h3>
                    </li>
                </ul>
            </div>
            <button className="my-10 sm:mx-96 border-black border-2 py-2 px-10 font-extrabold uppercase hover:bg-red-800 hover:text-yellow-50">
                Добавить в корзину
            </button>
            <div className=" sm:w-[35em] flex justify-center sm:mx-96 mb-10">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus, qui quasi corrupti ex sint fuga facilis, dolorem dolores saepe beatae aliquam suscipit. Iste, eveniet vel dolorum nemo ipsa vero?
                Dolore debitis sit aperiam nam ea alias delectus voluptate maxime pariatur repellendus. Dolor animi, possimus repellat atque illum rerum corporis sequi consequuntur numquam voluptatum aliquid laboriosam molestias fugit, earum harum.
                Iure illum numquam sunt, obcaecati et pariatur! Itaque totam aperiam nostrum eius corrupti quo ipsa magnam, rem fugit explicabo asperiores ut quibusdam, modi, delectus repudiandae iusto omnis a earum expedita?
                Nobis nostrum sequi eius adipisci eos autem non nihil a eaque ut facere voluptate, qui consectetur in tempore, quam culpa vitae esse blanditiis. Sed minima ratione ducimus laudantium, perspiciatis corporis.
                Hic explicabo, tempore sapiente reiciendis unde odit debitis numquam, minus corrupti accusamus dolorum itaque perferendis, impedit illum eligendi ab veritatis doloribus velit totam iusto libero officiis! Quam qui dolor mollitia!
                Inventore quod dolore non aliquid beatae iusto pariatur cumque corrupti reprehenderit est. Exercitationem temporibus libero, dicta aut quam aspernatur perspiciatis quidem sed obcaecati dolor architecto nisi reprehenderit doloremque nemo voluptate.
                A labore maxime voluptatibus quam voluptate assumenda nulla adipisci maiores exercitationem dolor ea consectetur officiis, laboriosam asperiores veniam aut saepe libero autem repellat dolorum fugiat molestiae cum. Quae, earum voluptas.
                Molestias quisquam dignissimos magni voluptas nihil. Et, aspernatur vitae voluptatem deserunt temporibus saepe laudantium asperiores eum culpa id? Commodi neque quis fugiat blanditiis esse nostrum, impedit explicabo. Soluta, rem vero.
                Atque animi libero delectus quam quos totam? Molestiae incidunt illo dolorum, optio, voluptates fuga error, temporibus omnis vel ratione ipsa quae commodi officia repudiandae perspiciatis. Earum aperiam perferendis qui? Laudantium!
                Autem ducimus et laborum iste ullam at sequi non ut nostrum odio libero, ipsum dicta praesentium atque aliquam enim earum nobis obcaecati consectetur. Maxime cupiditate ratione molestiae alias unde. Hic?</p>
            </div>
            <Footer></Footer>
        </div>
    )
}