import React, { useState } from 'react'

import { connect } from 'react-redux';

export const History = ({ history }) => {
    const [show, setShow] = useState([]); // List of indexs to show.

    return (
        <div className='history'>
            <h1>History »</h1>
            <div className='history__items'>
                {
                    history.map((item, indx) => (
                        <div className='history__items__item' key={indx}>
                            <p className='history__items__item--username'>{item.user}</p>
                            <p className='history__items__item--equation'>{item.equation}</p>
                            <p className='history__items__item--answer' onClick={() => setShow([...show, indx])}>
                                { show.includes(indx) ? item.answer : 'Show Answer'}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default connect(
    ({ history }) => ({ history }),
)(History);
