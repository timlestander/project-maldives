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
      <ActionButton 
        onClick={(e) => { 
          e.stopPropagation();
          onEditClick();
        }}><EditIcon />
      </ActionButton>
      <ActionButton
        onClick={(e) => {
          e.stopPropagation();
          onDeleteClick();
        }}><DeleteIcon />
      </ActionButton>
    </div>
  )
}

export default ActionButtons;