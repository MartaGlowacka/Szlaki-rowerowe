import React from 'react';
import { NavLink } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return (
            <div className='lower'>
                <div className="wrapper">
                    <h2>Kontakt</h2>
                    <div className="box">
                        <form action="#">
                            <input type="text" placeholder="Imię i nazwisko" name="username" required/>
                                <input type="email" placeholder="Adres Email" name="email" required/>
                                <input type="tel" placeholder="Numer teefonu" name="phone" required/>
                                    <textarea name="message" cols="30" rows="10" placeholder="Treść wiadomości.." required>

                                    </textarea>
                                    <div className="checkbox-wrapper">
                                        <input type="checkbox"/>
                                            <p>Wyslij kopię maila do mnie</p>
                                    </div>
                                    <button>Wyślij wiadomość</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}



export default Contact;
