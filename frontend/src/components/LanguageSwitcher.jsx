import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import i18n from "../i18n";

const languageOptions = [
    { label: "EN", value: "en" },
    { label: "中文", value: "zh-CN" },
];

const getActiveLanguage = () => {
    const language = i18n.resolvedLanguage || i18n.language;
    return language?.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
};

const LanguageSwitcher = () => {
    const [activeLanguage, setActiveLanguage] = useState(getActiveLanguage);

    useEffect(() => {
        const handleLanguageChanged = () => {
            setActiveLanguage(getActiveLanguage());
        };

        i18n.on("languageChanged", handleLanguageChanged);
        handleLanguageChanged();

        return () => {
            i18n.off("languageChanged", handleLanguageChanged);
        };
    }, []);

    const handleLanguageChange = (_event, language) => {
        if (language) {
            i18n.changeLanguage(language);
        }
    };

    return (
        <ToggleButtonGroup
            size="small"
            exclusive
            value={activeLanguage}
            onChange={handleLanguageChange}
            aria-label="language selector"
            sx={{
                bgcolor: "rgba(255, 255, 255, 0.12)",
                borderRadius: 1,
                "& .MuiToggleButton-root": {
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.35)",
                    px: 1.5,
                    py: 0.5,
                    "&.Mui-selected": {
                        bgcolor: "white",
                        color: "primary.main",
                    },
                    "&.Mui-selected:hover": {
                        bgcolor: "white",
                    },
                    "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                    },
                },
            }}
        >
            {languageOptions.map((language) => (
                <ToggleButton key={language.value} value={language.value}>
                    {language.label}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default LanguageSwitcher;
