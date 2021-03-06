import { createRef, useEffect, useRef } from 'react';
import anime from 'animejs';

import BackgroundPattern from '../components/BackgroundPattern';
import { Media, MediaContextProvider } from '../utils/responsive';
import styles from './index.module.scss';

export default function Home() {
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const backgroundRefs = Array.from({ length: 2 }, () => createRef<HTMLDivElement>());

  useEffect(() => {
    if (process.browser) {
      const tl = anime.timeline({
        easing: 'easeOutSine'
      });

      tl.add({
        targets: imgRef.current,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 750,
        delay: 300
      })
        .add(
          {
            targets: titleRef.current,
            translateX: [-25, 0],
            opacity: [0, 1],
            duration: 750
          },
          '-=550'
        )
        .add(
          {
            targets: introTextRef.current,
            translateX: [-25, 0],
            opacity: [0, 1],
            duration: 750
          },
          '-=550'
        )
        .add(
          {
            targets: backgroundRefs.filter(ref => ref.current).map(ref => ref.current),
            direction: 'reverse',
            keyframes: [
              { clipPath: 'polygon(0% 0, 0 0, 0 100%, 0% 100%)', opacity: 0 },
              { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', opacity: 1 }
            ],
            duration: 750
          },
          '-=750'
        )
        .play();
    }
  });

  return (
    <MediaContextProvider>
      <div className={styles.container}>
        <main>
          <section className={styles['content-container']}>
            <BackgroundPattern ref={backgroundRefs[0]} x={12} y={8} offX={0} offY={0} bottom={true} right={true} />
            <div className={styles['portrait-container']}>
              <Media greaterThan="mobile">
                <BackgroundPattern ref={backgroundRefs[1]} x={10} y={10} offX={-13} offY={-9} />
              </Media>
              <img ref={imgRef} src="/header-image.jpg" alt="Portrait Djovanni Tehubijuluw" />
            </div>
            <div className={styles['content-text']}>
              <h1 ref={titleRef}>
                Hi, I'm Djovanni, a{' '}
                <span ref={highlightRef} className={styles.highlight}>
                  web developer
                </span>
                .
              </h1>
              <p ref={introTextRef}>
                Passion for building and creating to bring idea???s and dreams to life. Bridging the gap between humans
                and the web through intuitive interaction.
              </p>
            </div>
          </section>
        </main>
      </div>
    </MediaContextProvider>
  );
}
