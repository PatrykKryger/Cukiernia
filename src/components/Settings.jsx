import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import './styles/global.css';

const Settings = () => {
    const { setTheme, setLanguage, theme, language, t } = useContext(AppContext);
    const [selectedTheme, setSelectedTheme] = useState(theme);
    const [selectedLanguage, setSelectedLanguage] = useState(language);

    const handleSave = () => {
        setTheme(selectedTheme);
        setLanguage(selectedLanguage);
    };

    const handleReset = () => {
        setTheme("light");
        setLanguage("pl");
        setSelectedTheme("light");
        setSelectedLanguage("pl");
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="settings-title">{t("settings")}</h1>

                <section className="settings-section">
                    <h2 className="section-title">{t("appTheme")}</h2>
                    <div className="options">
                        <label>
                            <input
                                type="radio"
                                name="theme"
                                value="light"
                                checked={selectedTheme === "light"}
                                onChange={() => setSelectedTheme("light")}
                            />
                            {t("light")}
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="theme"
                                value="dark"
                                checked={selectedTheme === "dark"}
                                onChange={() => setSelectedTheme("dark")}
                            />
                            {t("dark")}
                        </label>
                    </div>
                </section>

                <section className="settings-section">
                    <h2 className="section-title">{t("appLanguage")}</h2>
                    <div className="options">
                        <select
                            name="language"
                            className="dropdown"
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                        >
                            <option value="pl">{t("polish")}</option>
                            <option value="en">{t("english")}</option>
                        </select>
                    </div>
                </section>

                <div className="settings-actions">
                    <button className="button save-button" onClick={handleSave}>{t("save")}</button>
                    <button className="button reset-button" onClick={handleReset}>{t("reset")}</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
