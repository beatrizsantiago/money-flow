import React from "react";
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { PencilSimple, Trash } from '@phosphor-icons/react';

export interface StatementItemProps {
  kind: 'DEPOSIT' | 'TRANSFER';
  value: number;
  date: string;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
};

const KIND_LABEL = {
  DEPOSIT: 'Depósito',
  TRANSFER: 'Transferência',
};

const StatementItem = ({
  kind, value, date, onEditClick, onDeleteClick,
}:StatementItemProps) => {
  const formattedMonth = format(parseISO(date), 'MMMM', { locale: ptBR });
  const month = formattedMonth[0].toUpperCase() + formattedMonth.substring(1);

  const formattedMoney = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return (
    <div className="w-60 m-6">
      <div className="flex justify-between items-center">
        <p className="text-secondary-main text-sm font-semibold">
          {month}
        </p>
        <div className="flex">
          {onEditClick && (
            <button className="text-secondary-main mr-1">
              <PencilSimple size={20} weight="fill" />
            </button>
          )}
          {onDeleteClick && (
            <button className="text-red-600">
              <Trash size={20} weight="fill" />
            </button>
          )}
        </div>
      </div>

      <div className="w-full flex justify-between items-center my-2">
        <p>{KIND_LABEL[kind]}</p>
        <p className="text-sm text-gray-main">
          {format(parseISO(date), 'dd/MM/yyyy')}
        </p>
      </div>

      <p className="font-semibold">
        {formattedMoney}
      </p>

      <div className="h-px w-[180px] bg-secondary-main opacity-50" />
    </div>
  );
};

export default StatementItem;
