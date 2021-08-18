import './Button.scss';

import './Button.scss';
import React from 'react';
import classNames from 'classnames';
import { Icon, IconifyIcon } from '@iconify/react';

type ButtonVariant = 'search';

interface ButtonProps {
  text?: string;
  className: string;
  icon?: IconifyIcon;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = (props) => {
  const buttonClassName = classNames('button', [
    props.className,
    props.variant?.toString(),
  ]);
  return (
    <button
      className={buttonClassName}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.icon ? <Icon icon={props.icon} /> : null}
      {props.text ? <span className='button-label'>{props.text}</span> : null}
    </button>
  );
};

export default Button;
