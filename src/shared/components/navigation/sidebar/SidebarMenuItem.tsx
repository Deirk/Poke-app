'use client';


import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles/SidebarMenuItem.module.css';

interface SidebarMenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle?: string;
}

export const SidebarMenuItem = ( { path, icon, title, subTitle }: SidebarMenuItemProps ) => {
  const currentPath = useLocation();

  return (
    <NavLink to={ path } className={ `${ styles.MenuItemLink } ${ ( path === currentPath.pathname ) ? styles.ActiveMenuItemLink : '' }` }>
      <div>
        { icon }
      </div>
      <div className={ styles.MenuItemTextContainer }>
        <span className={ styles.MenuItemTitle }>{ title }</span>
        { subTitle && <span className={ styles.menuItemSubtitle }>{ subTitle }</span> }
      </div>
    </NavLink>
  );
};
