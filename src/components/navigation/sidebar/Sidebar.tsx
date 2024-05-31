import { IoHeart } from 'react-icons/io5';
import PokeballIcon from '../../../assets/images/icons/pokeball.svg';

import styles from './styles/Sidebar.module.css';
import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems = [
  {
    path: '/',
    icon: <img src={PokeballIcon} width={ 40 } height={ 40 } alt='Home icon' />,
    title: 'Home',
    subTitle: 'Poke App Home',
  },
  {
    path: '/favorites',
    icon: <IoHeart size={ 40 } />,
    title: 'Favorites',
  },
];

export const Sidebar = () => {
  return (
    <div id="menu"
      style={ { width: '400px' } }
      className={ styles.menuContainer }>
      <div id="logo" className={ styles.logoContainer }>
        <h1 className={ styles.logoText }>
          <img src={PokeballIcon} width={ 20 } height={ 20 } alt='Home icon' />
          <span className='ml-2'>Poke App</span>
        </h1>
        <p className={ styles.sloganText }>Find All the Pokémon You Love in Our App</p>
      </div>

      <div id="nav" className={ styles.navConatiner }>

        {
          menuItems.map( item => (
            <SidebarMenuItem key={ item.path } { ...item } />
          ) )
        }

      </div>
    </div>
  );
};
