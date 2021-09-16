import { Wrapper, ListItem, Details, Base, DetailsListHeader, DetailsListHeaderItem, DetailsListBody, DetailsListBodyItem } from './BetRow.styles';
import { BetType, BetType2 } from '../../assets/interfaces';
import ActionButtons from '../ActionButtons/ActionButtons';
import classnames from 'classnames';
import React, { useState } from 'react';
import classNames from 'classnames';
import { RESULT_TYPE } from '../../assets/enums';

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
        <ListItem>
          <span className={ 
            classNames('result', {
              win: bet.result === RESULT_TYPE.WIN || (bet.result === RESULT_TYPE.CASHOUT && bet.profit > bet.amount),
              loss: bet.result === RESULT_TYPE.LOSS || (bet.result === RESULT_TYPE.CASHOUT && bet.profit <= bet.amount),
              push: bet.result === RESULT_TYPE.PUSH,
              pending: bet.result === RESULT_TYPE.PENDING,
            })}>
            {bet.result}
          </span>
        </ListItem>
        <ListItem>
          <span className={
            classNames('profit', {
              win: bet.result === RESULT_TYPE.WIN || (bet.result === RESULT_TYPE.CASHOUT && bet.profit > bet.amount),
              loss: bet.result === RESULT_TYPE.LOSS || (bet.result === RESULT_TYPE.CASHOUT && bet.profit <= bet.amount),
              push: bet.result === RESULT_TYPE.PUSH,
              pending: bet.result === RESULT_TYPE.PENDING,
            })
          }>
            {bet.result === RESULT_TYPE.LOSS && `-${bet.amount}`}
            {bet.result == RESULT_TYPE.WIN && `+${Math.round(bet.profit)}`}
            {bet.result == RESULT_TYPE.PUSH && `+${Math.round(bet.amount)}`}
            {bet.result == RESULT_TYPE.CASHOUT && `+${Math.round(bet.profit)}`}
            {bet.result === RESULT_TYPE.PENDING && 'TBD'}
          </span>
        </ListItem>
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
            <DetailsListHeaderItem>Utfall</DetailsListHeaderItem>
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