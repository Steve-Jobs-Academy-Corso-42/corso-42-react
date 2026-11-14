# React Corso 42

Piccolo progetto didattico con React, TypeScript, Vite e Tailwind CSS.

## Avvio

```sh
npm install
npm run dev
```

Altri comandi: `npm run build` crea la versione pronta per la pubblicazione;
`npm run lint` controlla il codice.

## Struttura

- `index.html` fornisce il contenitore `#root` e carica il modulo d'ingresso.
- `src/main.tsx` collega React a `#root` e avvolge l'app nel provider globale.
- `src/App.tsx` definisce il layout comune, il menu e le rotte.
- `src/pages/` contiene le schermate mostrate dalle rotte:
  - `ProductsPage.tsx` carica i prodotti e gestisce gli stati di caricamento, errore e lista vuota.
  - `FormPage.tsx` mostra un form con input controllati dallo stato React.
  - `ExamplesPage.tsx` raccoglie gli esempi interattivi.
- `src/components/` contiene elementi riutilizzabili:
  - `Counter/Counter.tsx` mostra lo stato locale e gli aggiornamenti funzionali.
  - `Button/Button.tsx` applica uno stile comune e inoltra le props native del pulsante.
  - `Form/Form.tsx` accetta campi come `children` e inoltra le props native del form.
  - `Product/Product.tsx` tipizza le props e mostra una card riutilizzabile.
- `src/contexts/ThemeContext.ts` definisce il tipo e il contratto del tema condiviso.
- `src/providers/ThemeProvider.tsx` conserva il tema e rende disponibili tema e toggle ai discendenti.
- `src/hooks/useTheme.ts` offre ai componenti un accesso controllato al context.
- `src/styles/index.css` importa Tailwind e i token; `src/styles/theme.css` definisce font e colori personalizzati.
- `vite.config.ts` collega i plugin React e Tailwind a Vite.
- `tsconfig.json` collega le configurazioni TypeScript dell'app e degli strumenti; `tsconfig.app.json` controlla il codice in `src/` e `tsconfig.node.json` i file di configurazione Node.
- `eslint.config.js` configura ESLint per TypeScript, React Hooks e React Refresh.
- `package.json` elenca dipendenze e comandi di sviluppo, build, preview e lint.
- `public/favicon.svg` è l'icona servita come risorsa statica; `.gitignore` esclude dipendenze, build e file locali dal controllo versione.

## Flusso del tema

`main.tsx` monta `ThemeProvider` sopra `App`. Il provider mantiene lo stato e lo
espone con `ThemeContext`; i componenti lo leggono tramite `useTheme`. Premendo
il toggle in navbar, il context aggiorna lo stato e React renderizza nuovamente
gli elementi che usano il tema.

## Flusso dei prodotti

`ProductsPage` avvia la richiesta all'API con `useEffect`. I dati ricevuti
diventano stato, poi `map` crea una `Product` per ogni elemento. `ProductType`
descrive la forma dei dati usati dalla card e aiuta TypeScript a verificare le
props.

Le classi Tailwind descrivono lo stile vicino all'elemento che lo usa. Il tema
definisce soltanto font e colori personalizzati effettivamente usati.
