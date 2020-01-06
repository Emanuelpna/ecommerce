import React, { useState, useEffect } from 'react';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import * as S from './styled';

import BannerImg from '../../../../assets/img/banner.jpg';
import BannerImg2 from '../../../../assets/img/banner2.jpg';

const Banner = () => {
  const [carrossel] = useState([BannerImg, BannerImg2, BannerImg, BannerImg2]);
  const [carrosselAtivo, setCarrosselAtivo] = useState(0);

  useEffect(() => {
    const carrosselAnimation = setInterval(() => {
      nextBanner(carrosselAtivo, carrossel);
    }, 3000);
    return () => {
      clearInterval(carrosselAnimation);
    };
  }, [carrosselAtivo, carrossel]);

  const nextBanner = (carrosselAtivo, carrossel) => {
    let nextImg = carrosselAtivo + 1;
    if (carrosselAtivo === carrossel.length - 1) nextImg = 0;

    setCarrosselAtivo(nextImg);
  };

  const prevBanner = (carrosselAtivo, carrossel) => {
    let nextImg = carrosselAtivo - 1;
    if (carrosselAtivo === 0) nextImg = carrossel.length - 1;

    setCarrosselAtivo(nextImg);
  };

  return (
    <S.BannerContainer>
      <S.BannerButton onClick={() => prevBanner(carrosselAtivo, carrossel)}>
        <S.Anterior />
      </S.BannerButton>

      <S.Img src={carrossel[carrosselAtivo]} alt="Banner" />

      <S.BannerButton
        right
        onClick={() => nextBanner(carrosselAtivo, carrossel)}
      >
        <S.Proximo />
      </S.BannerButton>
    </S.BannerContainer>
  );
};

export default Banner;
