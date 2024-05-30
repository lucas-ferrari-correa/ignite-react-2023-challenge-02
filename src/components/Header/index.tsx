import { CardsThree, MapPin, ShoppingCart } from '@phosphor-icons/react'

import { Link } from 'react-router-dom'
import { Aside, Container } from './styles'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Vitória, ES</span>
        </div>

        <Link to={`cart`} aria-disabled={CardsThree.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 && <span>{cart.length}</span>}
        </Link>
      </Aside>
    </Container>
  )
}
