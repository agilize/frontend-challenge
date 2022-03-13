import style from './style.module.scss';

interface ButtonProps {
  name: string;
  handleClick: () => void;
}

export default function Button({ handleClick, name }: ButtonProps) {
  return (
    <button
      className={style.button}
      style={{ backgroundColor: name === 'CALCULAR' ? '#71FFA0' : '#ce493d' }}
      type="button"
      onClick={handleClick}
      name={name}
    >
      <strong>{name}</strong>
    </button>
  );
}
