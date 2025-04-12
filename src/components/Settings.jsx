import './styles/global.css';

const Settings = () => {
    return (
        <div className="container">
            <div className="card">
                <h1 className="settings-title">Ustawienia</h1>

                <section className="settings-section">
                    <h2 className="section-title">Motyw aplikacji</h2>
                    <div className="options">
                        <label>
                            <input type="radio" name="theme" value="light" />
                            Jasny
                        </label>
                        <label>
                            <input type="radio" name="theme" value="dark" />
                            Ciemny
                        </label>
                        <label>
                            <input type="radio" name="theme" value="system" />
                            Systemowy
                        </label>
                    </div>
                </section>

                <section className="settings-section">
                    <h2 className="section-title">Powiadomienia</h2>
                    <div className="options">
                        <label>
                            <input type="checkbox" name="emailNotifications" />
                            Powiadomienia e-mail
                        </label>
                        <label>
                            <input type="checkbox" name="smsNotifications" />
                            Powiadomienia SMS
                        </label>
                        <label>
                            <input type="checkbox" name="pushNotifications" />
                            Powiadomienia Push
                        </label>
                    </div>
                </section>

                <section className="settings-section">
                    <h2 className="section-title">Język aplikacji</h2>
                    <div className="options">
                        <select name="language" className="dropdown">
                            <option value="pl">Polski</option>
                            <option value="en">Angielski</option>
                            <option value="de">Niemiecki</option>
                            <option value="fr">Francuski</option>
                        </select>
                    </div>
                </section>

                <div className="settings-actions">
                    <button className="button save-button">Zapisz</button>
                    <button className="button reset-button">Resetuj</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;