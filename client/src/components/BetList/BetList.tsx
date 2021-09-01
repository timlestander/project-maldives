import { Wrapper, ListHeader, ListHeaderItem, ListBody, AddRowButton, AddIcon } from "./BetList.styles"
import { BetType, BetType2 } from '../../assets/interfaces';
import BetRow from '../BetRow/BetRow';
import React from "react";

type Props = {
  bets: BetType2[];
  newBet: () => void;
  deleteBet: (bet: BetType) => void;
  editBet: (bet: BetType) => void;
}

const BetList: React.FC<Props> = ({ bets, deleteBet, newBet, editBet }) => {
  return (
    <Wrapper>
      <ListHeader>
        <ListHeaderItem>Datum</ListHeaderItem>
        <ListHeaderItem>Bettare</ListHeaderItem>
        <ListHeaderItem>Speltyp</ListHeaderItem>
        <ListHeaderItem>Odds</ListHeaderItem>
        <ListHeaderItem>Insats</ListHeaderItem>
        <ListHeaderItem>Vinst</ListHeaderItem>
        <ListHeaderItem>Bank</ListHeaderItem>
        <ListHeaderItem>Actions</ListHeaderItem>
      </ListHeader>
      <ListBody>
        {bets && bets.map((bet, index) => (
          <BetRow bet={bet} index={index} key={bet._id} deleteBet={deleteBet} editBet={editBet}/>
        ))}
      </ListBody>
      <AddRowButton onClick={newBet}>
        <AddIcon />
      </AddRowButton>
    </Wrapper>
  )
}

export default BetList;