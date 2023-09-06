import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import { HeaderContainer } from './styles.js'
import 'swiper/css';
import "swiper/css/pagination";
const Header = () => {
  return (
    <HeaderContainer>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
        >
        <SwiperSlide>
            <img style={{width:'100%'}} src="https://d22fxaf9t8d39k.cloudfront.net/03061bd62b3c80a5edbaaff406ac7c81e1bb765cd0e236c15ebe8fdb017f6ff082758.jpg" alt="img-1"/>
        </SwiperSlide>
        <SwiperSlide>
            <img style={{width:'100%'}} src="https://d22fxaf9t8d39k.cloudfront.net/8773dea709fe4d2125963c67b93b4fc8329eab83258c7798b3563c47035324b482758.jpg" alt="img-2"/>
        </SwiperSlide>
        <SwiperSlide>
            <img style={{width:'100%'}} src="https://d22fxaf9t8d39k.cloudfront.net/301e87d7f60b7586534f76146cc28511b42fae2434e3e7f647f0d69f5a339f3582758.jpg" alt="img-3"/>
        </SwiperSlide>
        </Swiper>
    </HeaderContainer>
  );
};
export default Header