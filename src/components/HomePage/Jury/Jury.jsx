import React from 'react';
import styles from './Jury.module.scss';
import Title from '../../Title/Title';
import Member from './Member/Member';
import photo1 from '../../../assets/images/homepage/jury/ad_sp.jpg';
import photo2 from '../../../assets/images/homepage/jury/al_sy.jpg';
import photo3 from '../../../assets/images/homepage/jury/da_br.jpg';
import photo4 from '../../../assets/images/homepage/jury/da_mu.jpg';
import photo5 from '../../../assets/images/homepage/jury/ma_kr.jpg';
import photo6 from '../../../assets/images/homepage/jury/mi_bo.jpg';
import photo7 from '../../../assets/images/homepage/jury/na_st.jpg';
import photo8 from '../../../assets/images/homepage/jury/ni_ar.jpg';
import photo9 from '../../../assets/images/homepage/jury/pa_mi.jpg';
import photo10 from '../../../assets/images/homepage/jury/ra_gw.jpg';
import photo11 from '../../../assets/images/homepage/jury/ta_pe.jpg';
import photo12 from '../../../assets/images/homepage/jury/th_lu.jpg';
import photo13 from '../../../assets/images/homepage/jury/to_ka.jpg';
import photo14 from '../../../assets/images/homepage/jury/wo_pa.jpg';
import photo15 from '../../../assets/images/homepage/jury/ya_i.jpg';

const members = [
  {
    name: 'Adam<br>Sporka',
    description: 'Ph.D. Дизайнер игрового аудио, исследователь и инженер. Сооснователь <span>welove.audio GmbH</span>. Соавтор звука и музыки <span>Kingdom Come: Deliverance by Warhorse Studios</span> и т.д.',
    photo: photo1,
  },
  {
    name: 'Alexey<br>Sytyanov',
    description: 'Дизайнер, сценарист игр, психолог. Директор в <span>8D Studio</span>. Создатель таких проектов как: <span>«S.T.A.L.K.E.R.: Тень Чернобыля», «Метро 2033. Возвращение», «Метро: Исход», Chernobylite</span> и т.д.',
    photo: photo2,
  },
  {
    name: 'David<br>Brevik',
    description: 'Сооснователь и бывший президент <span>Blizzard</span>. Президент <span>Graybeard Games and Skystone Games Publishing</span>. Создатель <span>Diablo I и II, Warcraft III, World of Warcraft, The Lord of the Rings Online, It Lurks Below</span> и т.д',
    photo: photo3,
  },
  {
    name: 'David<br>Mullich',
    description: 'Дизайнер, продюсер, блогер и преподаватель. Создатель таких игр как: <span>The Prisoner, Heroes of Might And Magic III, Vampires Masquerade: Bloodlines</span> и т.д.',
    photo: photo4,
  },
  {
    name: 'Marianna<br>Krjakvina',
    description: 'Организатор <span>International Mobile Gaming Awards (IMGA)</span>. Главный организатор  <span>Game Dev Days Conference</span>. Президент в <span>IGDA Estonia</span>. Выпускала такие мобильные игры как <span>Hot Wheels infinite loop, Beholder, Drag Racing, The X-Files: Deep State</span> и т.д. ',
    photo: photo5,
  },
  {
    name: 'Mike<br>Bodie',
    description: 'Профессиональный актер театра и кино с академическим образованием. Озвучивает игры. Лауреат премий Оливера и Тони. Работал над такими ААА тайтлами как <span>Wofenstein 2, Star Wars: Battlefront 2, The Division 2, Ancestors Legacy, Ghost Recon: Breakingpoint, Synced: Off Planet</span> и т.д.',
    photo: photo6,
  },
  {
    name: 'Nate<br>Stephens',
    description: 'Principal Artist - <span>Playstation - Santa Monica Studio</span>. Работал над такими проектами как: <span>God of War; Titanfall; God of War: Ascension; God of War III; Starcraft Ghost; City of Heroes/City of Villains</span> и т.д.',
    photo: photo7,
  },
  {
    name: 'Nikolay<br>Armonik',
    description: 'Дизайнер, разработчик игр. <span>CEO BattleHive</span>. Создатель таких проектов как: <span>Discord Times, Legends of Eisenwald и Family Island</span> и т.д.',
    photo: photo8,
  },
  {
    name: 'Pawel<br>Miechowski',
    description: 'Сооснователь <span>11 bit studios</span>. Создатель таких игр как: <span>This War of Mine, Frostpunk, Anomaly</span> и т.д.',
    photo: photo9,
  },
  {
    name: 'Radoslaw<br>Qwarek',
    description: 'Главный AI дизайнер <span>11 bit studio</span>. Создатель таких игр как: <span>This War of Mine, Frostpunk</span> и т.д.',
    photo: photo10,
  },
  {
    name: 'Tatu<br>Petersen-Jessen',
    description: 'Арт Директор <span>Global STUDIOS - Rovio Entertainment Corporation</span>. Создатель таких проектов как: <span>Angry Birds, Angry Birds Evolution, Angry Birds Movie</span> и т.д.',
    photo: photo11,
  },
  {
    name: 'Thaine<br>Luman',
    description: 'Руководитель <span>WG Mobile Minsk, Wargaming</span>. Работал над такими проектами как: <span>Call of Duty 1-2, Destiny, Vampires Masquerade: Bloodlines, World of Tanks для PC</span> и т.д.',
    photo: photo12,
  },
  {
    name: 'Tomasz<br>Kaczmarek',
    description: 'Дизайнер и разработчик игр. Преподаватель геймдизайна <span>(#2 school of  design in the world) в London College of Communication</span>. Сооснователь и соорганизатор <span>Game Industry Conference</span>. ',
    photo: photo13,
  },
  {
    name: 'Wojciech<br>Pazdur',
    description: 'Художник и дизайнер игр, специалист по VR. Сооснователь и директор <span>The Farm 51</span>. Создатель таких проектов как: <span>The Witcher, Painkiller Hell & Damnation, Get Even, ChernobyLite</span> и т.д.',
    photo: photo14,
  },
  {
    name: 'Yaraslau<br>I. Kot. PHD',
    description: 'Дизайнер, сценарист и исследователь игр. Региональный координатор <span>(IGDA)</span>. Сооснователь <span>BelGameDev, IGDA Belarus, EuroPlay, CEEGA, Crystal Canvas contest</span>. Участвовал в создании таких проектов как <span>Space Rangers 2, AOL: RhyDin, Proze, Vampires Masquerade: St Louis by night, It Lurks Below</span> и т.д. ',
    photo: photo15,
  },
];

const Jury = () => (
  <div className={styles.wrapper} id="jury">
    <div className={styles.container}>
      <Title title="Жюри" />
      <div className={styles.members}>
        {members.map((member) => (
          <Member name={member.name} description={member.description} photo={member.photo} />
        ))}
      </div>
    </div>
  </div>
);

export default Jury;
