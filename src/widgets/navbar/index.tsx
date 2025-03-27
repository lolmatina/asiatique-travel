import logo from '../../assets/navbar/logo.svg';

export default function Navbar() {
  return <div className="w-full px-10">
    <div className="container mx-auto py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" width={54} />
          <h1 className="text-[21px] font-manrope font-bold">
            ASIATIQUE TRAVEL
          </h1>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center lg:gap-12">
            <li>Главная</li>
            <li>О нас</li>
            <li>Найти Тур</li>
            <li>Отзывы</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="flex items-center">

        </div>
      </div>
    </div>
  </div>;
}

