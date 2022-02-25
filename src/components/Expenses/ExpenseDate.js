/* eslint-disable use-isnan */
import React from "react";
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    /*hora uruguay
   {timeZone: "America/Montevideo"} */
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            {
                (month === NaN) ?
                    (<p>no hay datos</p>) : (
                        <>
                            <div className="expense-date__month">
                                {month}
                            </div>
                            <div className="expense-date__year">
                                {year}
                            </div>
                            <div className="expense-date__day">
                                {day}
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default ExpenseDate;
