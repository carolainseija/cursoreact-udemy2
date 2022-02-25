import React, { useState } from 'react'

const ExpenseFilter = (props) => {

    const [filteredYear, setFilterYear] = useState("2020");

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear)
    }

    return (
        <div className='expense-filter'>
            <ExpenseFilter selected={filteredYear} onChange={filterChangeHandler} />
            <div className='expense-filter__control'>
                <label>Filtros por año</label>
                <selec value={props.selected}></selec>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </div>
        </div>
    )
}

export default ExpenseFilter;