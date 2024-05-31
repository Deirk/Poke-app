import { BiLogOut, BiSolidBookHeart } from 'react-icons/bi';
import PokeballIcon from '../../../assets/images/icons/pokeball.svg';

import styles from './styles/Sidebar.module.css';
import { SidebarMenuItem } from './SidebarMenuItem';
import { useAuthStore } from '../../../config/stores';

const menuItems = [
  {
    path: '/',
    icon: <img src={ PokeballIcon } width={ 40 } height={ 40 } alt='Home icon' />,
    title: 'Home',
    subTitle: 'Poke App Home',
  },
  {
    path: '/favourites',
    icon: <BiSolidBookHeart size={ 40 } />,
    title: 'Favourites',
  },
];

export const Sidebar = () => {

  const logout = useAuthStore( state => state.logoutUser );

  return (
    <div id="menu"
      className={ styles.menuContainer }>
        <div id="logo" className={ styles.logoContainer }>
          <div className={ styles.logoTitleContainer }>
            <img src={ PokeballIcon } width={ 20 } height={ 20 } alt='Home icon' />
            <span >Poke App</span>
            <BiLogOut className={ styles.logoutButton } onClick={ logout } />
          </div>
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
