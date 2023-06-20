import  {NavLink, Outlet} from 'react-router-dom'
const activeMenuClass = ({isActive}) => isActive ? 'active-menu' : ''


const Layout = () => {
  return (
    <>
        <nav>
                <ul>
                <li><NavLink
                    to={'/'} 
                    className={activeMenuClass}>
                    Main</NavLink> </li>
                <li><NavLink
                    to={'/posts'} 
                    className={activeMenuClass}>
                    PostPage</NavLink> </li>
                <li><NavLink to={'/postslist'} className={activeMenuClass}>PostList</NavLink> </li>
                
                </ul>
            </nav>
            <Outlet />
    </>
  )
}

export default Layout