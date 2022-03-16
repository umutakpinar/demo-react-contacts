//Contacts index.js
import React from 'react'
import List from './List'
import Form from './Form'

function index() {
    return (
        <>
            <div className='container'>
                <h3 className='display-3'>Contacts Section</h3>
                <hr />
                <List></List>
                <Form></Form>
            </div>
        </>
    )
}

export default index