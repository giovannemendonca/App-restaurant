import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState<boolean>(false);
  const nomeOrdenador =
    ordenador && opcoes.find(({ value }) => value === ordenador)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== '',
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => {
        setAberto(false);
        setOrdenador('');
      }}
    >
      <span>{nomeOrdenador || 'Ordenar por'}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles['ordenador__options--ativo']]: aberto ? true : false,
        })}
      >
        {opcoes.map(({ nome, value }) => (
          <div
            key={value}
            className={styles.ordenador__option}
            onClick={() => setOrdenador(value)}
          >
            {nome}
          </div>
        ))}
      </div>
    </button>
  );
}
