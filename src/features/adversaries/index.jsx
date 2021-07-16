import React from 'react';
import style from '../styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const Adversaries = () => {
  const adversary = [{
    name: '',
    type: '',
    description: '',
    characteristics: { type: [], of: 0 },
    derivedAttributes: { type: [], of: 0 },
    skills: [],
    talents: [],
    abilityIDs: [''],
    equipmentIDs: [''],
    worlds: [''],
    sourceID: { type: {}, ref: '' },
    tags: [''],
    lang: '',
  }];
  return (
    <div className={style.featureBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Adversaries</div>
              <Input className={style.search} type="text" />
            </div>),
          content: (
            <div className={style.elements}>
              {
              }
            </div>),
          footer: <Button caption="Add new Adversary" className={style.addButton} onClick={() => {}} />,
        }}
      </Menu>

      <div className={style.features}>
        <div className={style.name}>
          {adversary.name}
        </div>
        <div className={style.description}>
          <div className={style.info}>
            <span>Type: </span>
            {adversary.type}
          </div>
          <div className={style.info}>
            <span>Characteristics: </span>
            {adversary.characteristics}
          </div>
          <div className={style.info}>
            <span>Skills:</span>
            {adversary.skills}
          </div>
          <div className={style.info}>
            <span>Talents:</span>
            {adversary.talents}
          </div>
          <div className={style.info}>
            <span>Ability:</span>
            {adversary.abilityIDs}
          </div>
          <div className={style.info}>
            <span>Equipment:</span>
            {adversary.equipmentIDs}
          </div>
          <div className={style.info}>
            <span>Worlds:</span>
            {adversary.worlds}
          </div>
          <div className={style.info}>
            <span>Tags:</span>
            {adversary.tags}
          </div>
          <span>Description: </span>
          {adversary.description}
        </div>
      </div>
    </div>
  );
};
export default Adversaries;
