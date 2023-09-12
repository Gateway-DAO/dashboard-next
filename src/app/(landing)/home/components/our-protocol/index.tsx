import { useRef, useState } from 'react';

import Card from '@/app/(landing)/components/card';
import ArrowLeft from '@/app/(landing)/components/icons/arrow-left';
import ArrowRight from '@/app/(landing)/components/icons/arrow-right';
import CardId from '@/app/(landing)/components/svgs/card-id';
import CardPrivacy from '@/app/(landing)/components/svgs/card-privacy';
import CardStandardize from '@/app/(landing)/components/svgs/card-stamdardize';
import CardVerification from '@/app/(landing)/components/svgs/card-verification';
import Wrapper from '@/app/(landing)/components/wrapper';
import { joinClasses } from '@/app/(landing)/utils/function';
import Slider from 'react-slick';

import styles from './our-protocol.module.scss';

const cards = [
  {
    svg: (
      <div
        className={joinClasses(
          styles.card_vector_container,
          styles['styles.card_vector_container--full-width']
        )}
      >
        <CardId
          className={joinClasses(styles.card_svg, styles['card_svg--id'])}
        />
      </div>
    ),
    text: (
      <>
        Multiple accounts, one <strong>ID</strong>
      </>
    ),
  },
  {
    svg: (
      <div className={styles.card_vector_container}>
        <CardStandardize
          className={joinClasses(
            styles.card_svg,
            styles['card_svg--standardize']
          )}
        />
      </div>
    ),
    text: (
      <>
        <strong>Standardize</strong> complex data-sets for easy consumption
      </>
    ),
  },
  {
    svg: (
      <div className={styles.card_vector_container}>
        <CardPrivacy
          className={joinClasses(styles.card_svg, styles['card_svg--privacy'])}
        />
      </div>
    ),
    text: (
      <>
        Put your <strong>privacy</strong> first. Own your data and your
        experience
      </>
    ),
  },
  {
    svg: (
      <div className={styles.card_vector_container}>
        <CardVerification
          className={joinClasses(
            styles.card_svg,
            styles['card_svg--verification']
          )}
        />
      </div>
    ),
    text: (
      <>
        Encrypted data <strong>verification</strong>, public authentication.
      </>
    ),
  },
];

export default function OurProtocol() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<Slider>(null);
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next);
    },
  };

  const onClickLeft = () => {
    if (currentIndex === 0) return;
    sliderRef.current?.slickPrev();
  };

  const onClickRight = () => {
    if (currentIndex === cards.length - 3) return;
    sliderRef.current?.slickNext();
  };

  const handleClass = (condition: boolean, className: string) => {
    return condition ? className : '';
  };

  return (
    <section className={styles.element}>
      <Wrapper>
        <div className={styles.head}>
          <h2 className={styles.title}>Our Protocol</h2>

          <div className={styles.controls}>
            <button
              className={joinClasses(
                styles.controls_button,
                handleClass(
                  currentIndex === 0,
                  styles['controls_button--disabled']
                )
              )}
              onClick={onClickLeft}
            >
              <ArrowLeft className={styles.arrow} />
            </button>
            <button
              className={joinClasses(
                styles.controls_button,
                handleClass(
                  currentIndex === cards.length - 3,
                  styles['controls_button--disabled']
                )
              )}
              onClick={onClickRight}
            >
              <ArrowRight className={styles.arrow} />
            </button>
          </div>
        </div>

        <div className={joinClasses(styles.slider_test, 'slick-list-parent')}>
          <Slider {...settings} ref={sliderRef}>
            {cards.map((card, index) => (
              <Card
                key={index}
                svg={card.svg}
                text={<p className={styles.card_text}>{card.text}</p>}
              />
            ))}
          </Slider>
        </div>
      </Wrapper>
    </section>
  );
}
