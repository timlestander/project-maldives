import { Wrapper, ListItem, Base, DetailsTable, DetailsTableRow, DetailsTableDataItem, DetailsTableHeaderItem } from './BetRow.styles';
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
        <DetailsTable>
          <DetailsTableRow>
            <DetailsTableHeaderItem>Typ</DetailsTableHeaderItem>
            <DetailsTableHeaderItem>Match</DetailsTableHeaderItem>
            <DetailsTableHeaderItem>Spelat på</DetailsTableHeaderItem>
            <DetailsTableHeaderItem>Sport</DetailsTableHeaderItem>
            <DetailsTableHeaderItem>Liga</DetailsTableHeaderItem>
            <DetailsTableHeaderItem>Utfall</DetailsTableHeaderItem>
          </DetailsTableRow>
          {bet.bets.map((detail, index) => (
            <DetailsTableRow key={index}>
              <DetailsTableDataItem>{detail.type}</DetailsTableDataItem>
              <DetailsTableDataItem>{detail.home} vs {detail.away}</DetailsTableDataItem>
              <DetailsTableDataItem>{detail.prediction} @ {detail.odds.toFixed(2)}</DetailsTableDataItem>
              <DetailsTableDataItem>{detail.sport}</DetailsTableDataItem>
              <DetailsTableDataItem>{detail.league}</DetailsTableDataItem>
              <DetailsTableDataItem>{detail.result}</DetailsTableDataItem>
            </DetailsTableRow>
          ))}
        </DetailsTable>
      }
    </Wrapper>
  )
}

export default BetRow;