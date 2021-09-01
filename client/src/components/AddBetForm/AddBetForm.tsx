import { Dispatch, useState } from "react"
import { Bet, BetType } from "../../assets/interfaces";
import { AddBetRow, Wrapper } from "./AddBetForm.styles";
import TextInput from "../TextInput/TextInput";
import DropdownInput from "../DropdownInput/DropdownInput";
import React from "react";
import { RESULT_TYPE } from "../../assets/enums";
import { AppState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import apis from "../../api";
import { BetterActions } from "../../store/actions/Better.actions";
import * as BetterConstants from '../../store/constants/Better.constants';
import * as LeagueConstants from '../../store/constants/League.constants';
import * as SportConstants from '../../store/constants/Sport.constants';
import * as TypeConstants from '../../store/constants/Type.constants';
import { LeagueActions } from "../../store/actions/League.actions";
import { SportActions } from "../../store/actions/Sport.actions";
import { TypeActions } from "../../store/actions/Type.actions";

const resultOptions = [
  RESULT_TYPE.WIN,
  RESULT_TYPE.LOSS,
  RESULT_TYPE.PENDING,
  RESULT_TYPE.CASHOUT,
  RESULT_TYPE.PUSH
];

type Props = {
  addBet: (bet: BetType) => void;
  closeDialog: () => void;
}

const AddBetForm: React.FC<Props> = ({ closeDialog, addBet }) => {

  const betterOptions = useSelector((state: AppState) => state.betters);
  const betterDispatch = useDispatch<Dispatch<BetterActions>>();

  const leagueOptions = useSelector((state: AppState) => state.leagues);
  const leagueDispatch = useDispatch<Dispatch<LeagueActions>>();

  const sportOptions = useSelector((state: AppState) => state.sports);
  const sportDispatch = useDispatch<Dispatch<SportActions>>();

  const typeOptions = useSelector((state: AppState) => state.types);
  const typeDispatch = useDispatch<Dispatch<TypeActions>>();


  const [formData, setFormData] = useState<BetType>({
    better: '',
    amount: 0,
    profit: 0,
    timestamp: new Date(),
    bets: [
      {
        home: '',
        away: '',
        prediction: '',
        sport: '',
        league: '',
        odds: 0,
        type: '1X2',
        result: RESULT_TYPE.PENDING,
      }
    ],
  });

  const addData = (name: string, value: string) => {
    switch (name) {
      case 'better':
        apis.createBetter({ name: value }).then((response: any) => {
          if (response.data.success) {
            betterDispatch({ type: BetterConstants.ADD_BETTER, payload: value })
          }
        })
        break;
      case 'league':
        apis.createLeague({ name: value }).then((response: any) => {
          if (response.data.success) {
            leagueDispatch({ type: LeagueConstants.ADD_LEAGUE, payload: value })
          }
        })
        break;
      case 'sport':
        apis.createSport({ name: value }).then((response: any) => {
          if (response.data.success) {
            sportDispatch({ type: SportConstants.ADD_SPORT, payload: value })
          }
        })
        break;
      case 'type':
        apis.createType({ name: value }).then((response: any) => {
          if (response.data.success) {
            typeDispatch({ type: TypeConstants.ADD_TYPE, payload: value })
          }
        })
        break;
    }
  }

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      bets: [...formData.bets],
      [e.target.name]: e.target.type === 'number' ? 
        parseInt(e.target.value) :
        e.target.value
    })

    console.log(formData);
  }

  const handleBetChange = (index: number) => (e: any) => {
    let bets: Bet[] = [ ...formData.bets ];
    
    bets[index] = {
      ...bets[index],
      [e.target.name]: e.target.value
    };

    setFormData({
      ...formData,
      bets
    })
  }

  const handleSave = () => {
    addBet(formData)
  }

  const removeBetRow = (index: number) => {
    setFormData({
      ...formData,
      bets: [...formData.bets.slice(0, index), ...formData.bets.slice(index + 1)]
    })
  }

  const addBetRow = () => {
    setFormData({
      ...formData,
      bets: [
        ...formData.bets,
        {
          home: '',
          away: '',
          prediction: '',
          sport: '',
          league: '',
          odds: 0,
          type: '1X2',
          result: RESULT_TYPE.PENDING
        }
      ]
    })
  }

  return (
    <Wrapper>
      <DropdownInput
        name="better"
        label="Gambler *"
        createable={true}
        required={true}
        options={betterOptions}
        value={formData.better}
        handleChange={handleChange}
        addData={addData} />

      <TextInput
        type="number"
        name="amount"
        label="Insats *"
        required={true}
        value={formData.amount}
        handleChange={handleChange} />

      <TextInput
        name="profit"
        type="number"
        label="Utbetalt"
        required={false}
        value={formData.profit}
        handleChange={handleChange} />

      <h3>Bets</h3>

      {formData.bets.map((bet, index) => (
        <AddBetRow key={index}>
          <DropdownInput
            name="type"
            label="Speltyp *"
            createable={true}
            required={true}
            options={typeOptions}
            value={bet.type}
            handleChange={handleBetChange(index)}
            addData={addData} />  

          <TextInput
            type="text"
            name="home"
            label="Hemmalag"
            required={false}
            value={bet.home}
            handleChange={handleBetChange(index)} />

          <TextInput
            type="text"
            name="away"
            label="Bortalag"
            required={false}
            value={bet.away}
            handleChange={handleBetChange(index)} />

          <TextInput
            type="text"
            name="prediction"
            label="Satsat på *"
            required={true}
            value={bet.prediction}
            handleChange={handleBetChange(index)} />  

          <TextInput
            type="number"
            label="Odds *"
            name="odds"
            required={true}
            value={bet.odds}
            handleChange={handleBetChange(index)} />

          <DropdownInput
            name="sport"
            label="Sport *"
            createable={true}
            required={true}
            options={sportOptions}
            value={bet.sport}
            handleChange={handleBetChange(index)}
            addData={addData} />  

          <DropdownInput
            name="league"
            label="Liga"
            required={false}
            createable={true}
            options={leagueOptions}
            value={bet.league}
            handleChange={handleBetChange(index)}
            addData={addData} />

          <DropdownInput
            name="result"
            label="Resultat *"
            required={true}
            createable={false}
            options={resultOptions}
            value={bet.result}
            handleChange={handleBetChange(index)}
            addData={addData} />

          <div className="delete" onClick={() => removeBetRow(index)}>X</div>
        </AddBetRow>
      ))}

      <div className="buttons">
        <button onClick={() => handleSave()}>Spara</button>
        <button onClick={() => closeDialog()}>Stäng</button>
        <button onClick={() => addBetRow()}>Lägg till rad</button>
      </div>
    </Wrapper>
  )
}

export default AddBetForm;