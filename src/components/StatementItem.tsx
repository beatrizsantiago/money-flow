import React from "react";
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface StatementItemProps {
  kind: 'deposit' | 'transfer';
  value: number;
  date: string;
};

const KIND_LABEL = {
  deposit: 'Depósito',
  transfer: 'Transferência',
};

const StatementItem = ({
  kind, value, date,
}:StatementItemProps) => {
  const formattedMonth = format(parseISO(date), 'MMMM', { locale: ptBR });
  const month = formattedMonth[0].toUpperCase() + formattedMonth.substring(1);

  const formattedMoney = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return (
    <div className="w-60 m-6">
      <p className="text-secondary-main text-sm font-semibold">
        {month}
      </p>

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
