# e2e-garden

A tiny public garden the lintrules.sh registry's end-to-end tests plant from.

- `main` holds one valid rule, `lint-rules/no-em-dash`, so `npx lintrules add lintrules/e2e-garden` indexes and installs it.
- The `weeds` branch adds a rule whose `check.js` never returns. The registry must reject it on its CPU budget.

Don't put anything else here: the tests expect exactly this.
