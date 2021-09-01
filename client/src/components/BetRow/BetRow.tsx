import { Wrapper, ListItem, Details, Base, DetailsListHeader, DetailsListHeaderItem, DetailsListBody, DetailsListBodyItem } from './BetRow.styles';
import { BetType, BetType2 } from '../../assets/interfaces';
import ActionButtons from '../ActionButtons/ActionButtons';
import classnames from 'classnames';
import React, { useState } from 'react';

type Props = {
  bet: BetType2;
  index: number;
  deleteBet: (bet: BetType) => void;
  editBet: (bet: BetType) => void;
}

const BetRow: React.FC<Props> = ({ bet, index, deleteBet, editBet }) => {

  const [active, setIsActive] = useState(false);

  const onEditClick = () => {
    editBet(bet);
  }
  
  const onDeleteClick = () => {
    deleteBet(bet);
  }

  return (
    <Wrapper 
      className={ classnames({ odd: index % 2 !== 0, active }) }
      onClick={() => setIsActive(!active)}>
      <Base>
        <ListItem>{new Date(bet.timestamp).toLocaleDateString()}</ListItem>
        <ListItem>{bet.better}</ListItem>
        <ListItem>{bet.type}</ListItem>
        <ListItem>{bet.odds.toFixed(2)}</ListItem>
        <ListItem>{bet.amount} kr</ListItem>
        <ListItem>{bet.result}</ListItem>
        <ListItem>{Math.round(bet.profit)}</ListItem>
        <ListItem>
          <ActionButtons onEditClick={onEditClick} onDeleteClick={onDeleteClick}></ActionButtons>
        </ListItem>
      </Base>
      {active &&
        <Details>
          <DetailsListHeader>
            <DetailsListHeaderItem>Typ</DetailsListHeaderItem>
            <DetailsListHeaderItem>Match</DetailsListHeaderItem>
            <DetailsListHeaderItem>Spelat på</DetailsListHeaderItem>
            <DetailsListHeaderItem>Sport</DetailsListHeaderItem>
            <DetailsListHeaderItem>Liga</DetailsListHeaderItem>
            <DetailsListHeaderItem>Träff</DetailsListHeaderItem>
          </DetailsListHeader>
          {bet.bets.map((detail, index) => (
            <DetailsListBody key={index}>
              <DetailsListBodyItem>{detail.type}</DetailsListBodyItem>
              <DetailsListBodyItem>{detail.home} vs {detail.away}</DetailsListBodyItem>
              <DetailsListBodyItem>{detail.prediction} @ {detail.odds.toFixed(2)}</DetailsListBodyItem>
              <DetailsListBodyItem>{detail.sport}</DetailsListBodyItem>
              <DetailsListBodyItem>{detail.league}</DetailsListBodyItem>
              <DetailsListBodyItem>{detail.result}</DetailsListBodyItem>
            </DetailsListBody>
          ))}
        </Details>
      }
    </Wrapper>
  )
}

export default BetRow;