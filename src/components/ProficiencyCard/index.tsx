import './styles.css';
import { HTMLAttributes } from 'react';

interface ProficiencyCardProps extends HTMLAttributes<HTMLElement> {}

const ProficiencyCard = ({ children, className }: ProficiencyCardProps) => {
  const classList = className
    ? ['proficiency-card', className]
    : ['proficiency-card'];

  return <section className={classList.join(' ')}>{children}</section>;
};

export default ProficiencyCard;
