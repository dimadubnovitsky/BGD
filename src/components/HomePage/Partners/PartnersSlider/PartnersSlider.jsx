import React from 'react';
import Slider from 'react-slick';
import styles from './PartnersSlider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import corner from '../../../../assets/images/homepage/partners/corner.svg';
import { ReactComponent as Arrow } from '../../../../assets/images/homepage/partners/arrow.svg';

import image1 from '../../../../assets/images/homepage/partners/gallery/g_a(reborn).png';
import image2 from '../../../../assets/images/homepage/partners/gallery/igda.png';
import image3 from '../../../../assets/images/homepage/partners/gallery/the_farm.png';
import image4 from '../../../../assets/images/homepage/partners/gallery/ukraine_g_n.png';
import image5 from '../../../../assets/images/homepage/partners/gallery/Group46.png';
import image6 from '../../../../assets/images/homepage/partners/gallery/Group47.png';
import image7 from '../../../../assets/images/homepage/partners/gallery/Group48.png';
import image8 from '../../../../assets/images/homepage/partners/gallery/Group49.png';
import image9 from '../../../../assets/images/homepage/partners/gallery/Group50.png';
import image10 from '../../../../assets/images/homepage/partners/gallery/Group51.png';
import image11 from '../../../../assets/images/homepage/partners/gallery/Group52.png';
import image12 from '../../../../assets/images/homepage/partners/gallery/Group53.png';
import image13 from '../../../../assets/images/homepage/partners/gallery/Group54.png';
import image14 from '../../../../assets/images/homepage/partners/gallery/Group55.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <Arrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <Arrow />
    </div>
  );
}

export default class PartnersSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Slider {...settings}>
            {images.map((image) => (
              <div>
                <img src={image} alt="slide" />
              </div>
            ))}
          </Slider>
        </div>
        <img className={styles.leftTop} src={corner} alt="corner" />
        <img className={styles.leftBot} src={corner} alt="corner" />
        <img className={styles.rightTop} src={corner} alt="corner" />
        <img className={styles.rightBot} src={corner} alt="corner" />
      </div>
    );
  }
}
