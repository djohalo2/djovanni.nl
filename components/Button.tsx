import classNames from 'classnames';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Button.module.scss';

type Props = {
  href?: string;
  label?: string;
  icon?: IconDefinition;
} & ({ label: string } | { icon: IconDefinition });

function ButtonContent({ label, icon }: Props) {
  return (
    <div>
      {icon && <FontAwesomeIcon className="icon-xs" icon={icon} />}
      {label}
    </div>
  );
}

function DefaultButton(props: Props, classes: string) {
  return <button className={classes}>{ButtonContent(props)}</button>;
}

function LinkButton(props: Props, classes: string) {
  return (
    <a className={classes} href={props.href}>
      {ButtonContent(props)}
    </a>
  );
}

export default function Button(props: Props) {
  const classes = classNames({
    [styles.btn]: true,
    [styles['icon-only']]: props.icon && !props.label
  });

  return props.href ? LinkButton(props, classes) : DefaultButton(props, classes);
}
