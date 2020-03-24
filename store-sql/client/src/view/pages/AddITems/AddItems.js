import React from 'react';
import './AddItems.css';

//control
import {addItem} from '../../../controls/sendToDB';

export default function () {
    return (
        <div className='page'>
            <h1>הוספת פריטים</h1>
            <form className="pure-form pure-form-stacked" onSubmit={addItem}>

                <legend>הוספת פריט חדש</legend>
                <label htmlFor="item_name">שם הפריט</label>
                <input id="item_name" name='item_name' type="text" placeholder="שם הפריט" />
                <span className="pure-form-message">This is a required field.</span>

                <label htmlFor="item-catNumber">מק״ט</label>
                <input id="item-catNumber" name='item_cat_number' type="text" placeholder="מק״ט" />
                <span className="pure-form-message">This is a required field.</span>

                <label htmlFor="item-price">מחיר</label>
                <input id="item-price" name='item_price' type="text" placeholder="מחיר" />
                <span className="pure-form-message">This is a required field.</span>

                <label htmlFor="state">נשים או גברים</label>
                <select id="state" name='item_gender'>
                    <option value='women'>נשים</option>
                    <option value='men'>גברים</option>
                    <option value='unisex'>יוני-סקס</option>
                </select>



                <button type="submit" className="pure-button pure-button-primary">הוספת פריט</button>

            </form>
        </div>
    )
}