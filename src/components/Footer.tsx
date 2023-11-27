export function Footer(){
    return(
        <div>
            <footer className="h-80 w-screen  bg-black sm:h-80 sm:w-full sm:inset-x-0 sm:bottom-0 sm:grid sm:grid-cols-4">
                <div>
                    <ul className='flex flex-column sm:flex-row h-full gap-24 mx-10 pt-16'>
                        <li>
                            <div>
                                <h2 className="mb-4 w-48 text-white font-bold">Клиентам</h2>
                                <ul>
                                    <li className='text-white text-sm my-3'>Личный кабинет</li>
                                    <li className='text-white text-sm my-3'>Программа лояльности</li>
                                    <li className='text-white text-sm my-3'>Оплата и доставка</li>
                                    <li className='text-white text-sm my-3'>FAQ</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <ul>
                                    <h2 className="mb-4 w-36 text-white font-bold">Социальные сети</h2>
                                    <li className='text-white text-sm my-3'>Вконтакте</li>
                                    <li className='text-white text-sm my-3'>Telegram</li>
                                    <li className='text-white text-sm my-3'>Instagram</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="mb-4 text-white font-bold">Информация</h2>
                                <ul>
                                    <li className='text-white text-sm my-3'>О нас</li>
                                    <li className='text-white text-sm my-3'>Магазин</li>
                                    <li className='text-white text-sm my-3'>Контакты</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}