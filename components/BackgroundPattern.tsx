import { ForwardedRef, forwardRef } from 'react';

import styles from './BackgroundPattern.module.scss';

interface Props {
  x?: number;
  y?: number;
  offX?: number;
  offY?: number;
  bottom?: boolean;
  right?: boolean;
}

const PATTERN_SIZE = 20;
const OFFSET_SIZE = 5;

export default forwardRef(({ x, y, offX, offY, bottom, right }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className={styles['background-pattern']}
      style={{
        width: (x || 1) * PATTERN_SIZE,
        height: (y || 1) * PATTERN_SIZE,
        [right ? 'right' : 'left']: (offX || 1) * OFFSET_SIZE,
        [bottom ? 'bottom' : 'top']: (offY || 1) * OFFSET_SIZE
      }}
    />
  );
});
