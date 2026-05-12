# Dashboard i18n Implementation Plan

## Summary

Add i18next-based translation support for only the Dashboard section of Volcano Dashboard. The feature will support English and Simplified Chinese, detect browser language on first visit, persist user language choice, and provide a visible language switcher for local testing and reviewer screenshots.

## Parent Issue

Title:

Add i18next-based Simplified Chinese translation support for Dashboard section

Goal:

Introduce frontend i18n infrastructure and translate only the Dashboard section into Simplified Chinese.

Acceptance Criteria:

- Dashboard UI can render in English and Simplified Chinese.
- English remains the fallback language.
- Browser language detection selects Chinese when the browser language starts with `zh`.
- A visible `EN / 中文` switcher lets users manually change language.
- Selected language persists after refresh.
- Non-dashboard pages remain untranslated.
- PR includes Dashboard screenshots in English and Chinese.

## Child Issues

### 1. Add i18next setup

Add the frontend i18n foundation.

Tasks:

- Install `i18next`, `react-i18next`, and `i18next-browser-languagedetector`.
- Create i18n configuration under `frontend/src/i18n/`.
- Configure supported languages: `en`, `zh-CN`.
- Configure fallback language: `en`.
- Configure detection order: `localStorage`, then browser `navigator`.
- Import i18n initialization once in `frontend/src/main.jsx`.

PR title:

Add i18next configuration for frontend translations

### 2. Add language switcher

Add manual language selection for testing and users.

Tasks:

- Add `EN / 中文` switcher in the app header.
- Use `i18n.changeLanguage("en")` and `i18n.changeLanguage("zh-CN")`.
- Show active language state.
- Confirm the selected language persists after refresh.

PR title:

Add language switcher for frontend i18n

### 3. Translate Dashboard section

Translate only Dashboard-visible text.

Tasks:

- Add English and Simplified Chinese keys for:
    - Dashboard title
    - Refresh tooltip
    - Stat cards
    - Job status chart
    - Queue resources chart
    - Chart labels
    - Empty states
- Replace Dashboard hardcoded strings with `t(...)`.
- Keep Sidebar, Jobs, Queues, Pods, and PodGroups unchanged.

PR title:

Translate Dashboard section to Simplified Chinese

### 4. Add tests and screenshots

Make the contribution review-ready.

Tasks:

- Test default English rendering.
- Test switching to Chinese.
- Test language persistence after refresh.
- Test fallback behavior.
- Capture screenshots of Dashboard in English and Chinese.

PR title:

Add tests and screenshots for Dashboard i18n

## Translation Trigger Behavior

Language selection priority:

1. Saved language from `localStorage`.
2. Browser language from `navigator.languages` or `navigator.language`.
3. English fallback.

Expected behavior:

- First visit with Chinese browser language shows Chinese.
- First visit with non-Chinese browser language shows English.
- Manual switcher overrides browser language.
- Refresh keeps the selected language.

## Assumptions

- Use Simplified Chinese: `zh-CN`.
- Use real i18n libraries, not a custom translation helper.
- Scope is limited to the Dashboard section.
- Split implementation into small PRs mapped to child issues.
