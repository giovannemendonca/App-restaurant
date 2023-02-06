import React from 'react';
import styles from './Item.module.scss';
import cardapio from 'data/cardapio.json';
import TagsPratos from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';

type Props = typeof cardapio[0];

const Item = (data: Props) => {
  const { title, description, photo,id } = data;
  const navigate = useNavigate();


  return (
    <div 
      className={styles.item}
      onClick={() => navigate(`/prato/${id}`)}
    >
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPratos {...data}/>
      </div>
    </div>
  );
};

export default Item;
