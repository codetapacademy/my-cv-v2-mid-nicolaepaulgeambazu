import React from 'react'
import { Button } from '../button'
import { Celula } from '../celula/celula.component'
import * as HS from './header.style'

export const Header = ({ title }) => {
  return (
    <HS.StyledHeader>
      <HS.StyledTitle>{title}</HS.StyledTitle>
      <Celula jc="center" >
        <Button type="disc" bgCuloare="#D52027">
          <span className="icon__youtube"></span>
        </Button>
      </Celula>
    </HS.StyledHeader>
  )
}
