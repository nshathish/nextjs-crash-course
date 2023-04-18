import Link from 'next/link';

import classes from './button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  onClick?: () => void;
}

export default function Button({ children, link, onClick }: ButtonProps) {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onClick}>{children}</button>
  );

}