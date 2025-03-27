import headerBg from '../../../assets/home/background.jpg';
import Button from '../../../entity/button';
export default function Header() {
  return <div className="w-full">
    <div className="container h-[736px] p-[54px] bg-cover bg-center flex flex-col items-start justify-end mx-auto lg:rounded-[30px]" style={{backgroundImage: `url(${headerBg})`}}>
      <div className="flex justify-between items-center">
        <button className="group p-[2px] bg-[rgba(217,217,217,0.29)] rounded-[19.24px] border-[0.5px] border-white relative">
          <span className="py-[10px] px-[18px] inline-flex bg-white rounded-[19.24px] justify-center items-center text-black text-[11.12px] leading-[120%] font-medium ">Наши Туры</span>
          <span className="py-[10px] px-[18px] inline-flex bg-transparent rounded-[19.24px] justify-center items-center text-white text-[11.12px] leading-[120%] font-medium">Выберите свою путевку</span>
        </button>
      </div>
      <h1 className="text-white text-[48px] font-[400] leading-[101%] font-bold mt-8">
          <span className="font-[800]">Asiatique Travel</span><br />
        Путешествие в сердце<br />
        Великой степи
      </h1>
      <div className="flex gap-[42px] mt-8">
        <Button variant="primary">
          <span>Оставить заявку</span>
        </Button>
      <Button variant="secondary">
          <span>Смотреть Направления</span>
        </Button>
      </div>
    </div>
  </div>;
}
