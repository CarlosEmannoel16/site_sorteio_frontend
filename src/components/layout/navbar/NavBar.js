import styled from './navbar.module.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ImMenu } from "react-icons/im";
export function NavBar() {


  const location = useLocation()


  const routeName = location.pathname

  return (



    <nav className={styled.nav}>
      <div className={styled.container}>

        {
          routeName == '/' ? (

            <>
              <ul>
                <li>
                  Sorteia Ai!
                </li>

                <li>
                  <Link
                    className={styled.link}
                    to="/login">
                    Login
                  </Link>

                </li>
              </ul>
            </>
          ) : (
            <>
              <ul>
                <li className={styled.iconMenu}>
                 <ImMenu/>
                </li>

                <li>
                  <Link
                    className={styled.link}
                    to="/login">
                    Sorteia Ai!
                  </Link>

                </li>
              </ul>
            </>
          )
        }

      </div>
    </nav>
  )
}