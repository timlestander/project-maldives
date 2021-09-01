import React from 'react';
import { ActionButton } from './ActionButtons.styles';
import { EditIcon, DeleteIcon } from '../../icons';

type Props = {
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const ActionButtons: React.FC<Props> = ({ onEditClick, onDeleteClick }) => {
  return (
    <div>
      <ActionButton onClick={() => onEditClick()}><EditIcon /></ActionButton>
      <ActionButton onClick={() => onDeleteClick()}><DeleteIcon /></ActionButton>
    </div>
  )
}

export default ActionButtons;