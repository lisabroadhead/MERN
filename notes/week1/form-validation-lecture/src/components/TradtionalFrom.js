import React,{ useState } from 'react';
import styled from './css/TradtionalFormStyles.module.css';


const TradtionalFrom = (props) => {
    const [flavor, setFlavor] = useState("");
    const [sauce, setSauce] = useState("");
    const [toppings, setToppings] = useState("");
    const [whippedCreame, setWhippedCreame] = useState(false);


    return(
        <div className={styled.container}>
            <div>
                <label htmlFor="Flavor">Flavor: </label>
                <input type="name" name="flavor" value={ flavor }  onChange={ (event) => setFlavor(event.target.value)}/>
            </div>

            <div>
                <label htmlFor="sauce">Sauce: </label>
                <input type="text" name="sauce" value={sauce} onChange={ (event) => setSauce(event.target.value) }/>
            </div>

            <div>
                <label htmlFor="toppings">Toppings: </label>
                <select name="toppings" value={toppings} onChange={ (event) => setToppings(event.target.value)}>
                    <option value="Cookie Dough">Cookie Dough</option>
                    <option value="Peanuts">Peanuts</option>
                    <option value="Brownie Bits">Brownie Bits</option>
                    <option value="Bananas">Bananas</option>
                    <option value="Oreo's">Oreo's</option>
                    <option value="Cherries">Cherries</option>
                    <option value="Hot Tamalies">Hot Tamalies</option>
                    <option value="Bubba Bursts">Bubba Bursts</option>
                    <option value="Strawberries">Strawberries</option>
                </select>
            </div>
            
            <div>
                <label htmlFor="whippedCream">Whipped Cream: </label>
                <input type="checkbox" name="whippedCream" value={whippedCreame} onChange={(event) => setWhippedCreame(event.target.checked)}/>
            </div>

            <marquee behavior="" direction=""><input type="submit" value="Submit!" /></marquee>

            <p><strong>Flavor:</strong> {flavor}</p>
            <p><strong>Sauce:</strong> {sauce}</p>
            <p><strong>Toppings:</strong> {toppings}</p>
            <p><strong>Whipped Cream:</strong> {whippedCreame}</p>
        </div>
    );
}

export default TradtionalFrom;