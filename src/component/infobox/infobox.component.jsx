import React from 'react'
import { Button } from '../button/button.component'
import * as IB from './infobox.style'


export const Infobox = ({icon, title, description, label, link, close }) => {
  return (
    <IB.StyledWrapper>
      <IB.WrapperHead>
        <IB.StyledTitle>{title}</IB.StyledTitle>
        <Button onClick={close} type="disc" bgCuloare="#1875F0">
          <span style={{ fontSize: "20px" }} className="icon__cross"/>
        </Button>
      </IB.WrapperHead>
      <IB.WrapperHead>
        <IB.StyledDescription>{description}</IB.StyledDescription>
      <Button type="link" link={link} target="_blank" />
        <span className="icon__link" style={{marginRight: "8px", fontSize:"13px"}}/>
        <span className="text">{label}</span>
      </IB.WrapperHead>
    </IB.StyledWrapper>
  )
}
