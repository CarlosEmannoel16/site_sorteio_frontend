import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from './footer.module.css'
export function Footer() {
  return (
    <footer className={styled.footer}>
      <ul>
        <li>

          <a href='https://www.instagram.com/c.emannoel.php/'>
            <FaInstagram />
          </a>

        </li>
        <li>

          <FaWhatsapp />
        </li>
      </ul>
    </footer>
  )
}