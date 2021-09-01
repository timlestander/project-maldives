import BetList from '../../components/BetList/BetList';
import { BetType, BetType2 } from '../../assets/interfaces';
import Dialog from "@material-ui/core/Dialog";
import React, { useEffect, useState } from "react";
import { Dispatch } from 'redux';
import AddBetForm from "../../components/AddBetForm/AddBetForm";
import { RESULT_TYPE } from "../../assets/enums";
import { InfoBoxes, Wrapper } from './BetPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { BetActions } from '../../store/actions/Bet.actions';
import InfoBox from '../../components/InfoBox/InfoBox';
import apis from '../../api';
import * as BetConstants from '../../store/constants/Bet.constants';
import * as BetterConstants from '../../store/constants/Better.constants';
import * as LeagueConstants from '../../store/constants/League.constants';
import * as SportConstants from '../../store/constants/Sport.constants';
import * as TypeConstants from '../../store/constants/Type.constants';
import { BetterActions } from '../../store/actions/Better.actions';
import { LeagueActions } from '../../store/actions/League.actions';
import { SportActions } from '../../store/actions/Sport.actions';
import { TypeActions } from '../../store/actions/Type.actions';
import { Spinner } from '../../components/Spinner/Spinner';

type Props = {
  bets: BetType2[];
}

const BetPage: React.FC<Props> = () => {
  const bets = useSelector((state: AppState) => state.bets).sort((a, b) => a > b ? -1 : 1);

  const betDispatch = useDispatch<Dispatch<BetActions>>();
  const betterDispatch = useDispatch<Dispatch<BetterActions>>();
  const leagueDispatch = useDispatch<Dispatch<LeagueActions>>();
  const sportDispatch = useDispatch<Dispatch<SportActions>>();
  const typeDispatch = useDispatch<Dispatch<TypeActions>>();

  const [isFakeLoading, setIsFakeLoading] = useState(true);
  const [selectedBet, setSelectedBet] = useState<BetType | undefined>(undefined);
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  
  setTimeout(() => {
    setIsFakeLoading(false);
  }, 5000);

  useEffect(() => {
    // TODO: merge all these requests
    apis.getAllBets().then((response: any) => {
      betDispatch({ type: BetConstants.ADD_BETS, payload: response.data.data })
    })

    apis.getAllBetters().then((response: any) => {
      betterDispatch({ type: BetterConstants.ADD_BETTERS, payload: response.data.data });
    })

    apis.getAllLeagues().then((response: any) => {
      leagueDispatch({ type: LeagueConstants.ADD_LEAGUES, payload: response.data.data });
    })

    apis.getAllSports().then((response: any) => {
      sportDispatch({ type: SportConstants.ADD_SPORTS, payload: response.data.data });
    })
    
    apis.getAllTypes().then((response: any) => {
      typeDispatch({ type: TypeConstants.ADD_TYPES, payload: response.data.data });
    })
  }, [])

  const getROI = () => {
    let wagered: number = 0;
    let winnings: number = 0;

    bets.forEach(bet => {
      if (bet.result != RESULT_TYPE.PENDING) {
        wagered += bet.amount;
        winnings += bet.profit;
      }
    })

    return Math.floor((winnings / wagered) * 100);
  }

  const getTotal = () => {
    return bets.reduce((acc: number, bet: BetType2) => {
      if (bet.result === RESULT_TYPE.WIN) {
        return bet.profit ? acc + bet.profit : acc + bet.odds * bet.amount;
      } else {
        return acc;
      }
    }, 0)
  }

  const getHitRate = () => {
    let hits: number = 0;
    const total: number = bets.filter(bet => bet.result === RESULT_TYPE.WIN || bet.result === RESULT_TYPE.LOSS).length;

    bets.forEach(bet => {
      if (bet.result === RESULT_TYPE.WIN) {
        hits++;
      } 
    });

    return total === 0 ? 100 : Math.floor(hits * 100 / total);
  }

  const deleteBet = (bet: BetType) => {
    apis.deleteBet(bet._id).then(() => {
      if (bet._id) {
        betDispatch({ type: BetConstants.DELETE_BET, payload: bet._id });
      }
    }).catch(err => {
      console.log(err);
    })
  }

  const addBet = (bet: BetType) => {
    apis.createBet(bet).then((response: any) => {
      if (response.data.success) {
        betDispatch({ type: BetConstants.ADD_BET, payload: response.data.data })
        setAddDialogOpen(false);
      }
    })
  }

  const newBet = () => {
    setAddDialogOpen(true);
  }

  const editBet = (bet: BetType) => {
    setSelectedBet(bet);
    setEditDialogOpen(true);
    console.log(selectedBet);
  }

  const closeDialog = (type: any) => {
    if (type === 'mouseup') return;
    setEditDialogOpen(false);
  }

  return (
    <Wrapper>
      {bets && !isFakeLoading && (
        <React.Fragment>
          <InfoBoxes>
            <InfoBox title="Antal spel" value={bets.length} suffix="st"/>
            <InfoBox title="ROI" value={getROI()} suffix="%" />
            <InfoBox title="Andel träffar" value={getHitRate()} suffix="%"/>
            <InfoBox title="Totalt i banken" value={getTotal()} suffix="kr" />
          </InfoBoxes>

          <BetList 
            bets={bets} 
            newBet={newBet}
            deleteBet={deleteBet}
            editBet={editBet}
          />

          <Dialog
            open={isAddDialogOpen}
            onClose={closeDialog}
            maxWidth={'lg'}
            scroll={'paper'}
          >
            <AddBetForm
              closeDialog={() => setAddDialogOpen(false)} 
              addBet={addBet}
            >
            </AddBetForm> 
          </Dialog>
        </React.Fragment>
      )}
      {isFakeLoading && <Spinner />}
    </Wrapper>
  )
}

export default BetPage;