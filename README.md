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

- `src/main.tsx` collega React al contenitore `#root` in `index.html`.
- `src/App.tsx` compone la pagina e passa dati ai componenti.
- `src/components/Counter/Counter.tsx` mostra lo stato locale e gli aggiornamenti.
- `src/components/Product/Product.tsx` mostra come tipizzare e riutilizzare le props.
- `src/styles/index.css` carica Tailwind e `theme.css` definisce i token condivisi.

Le classi Tailwind descrivono lo stile vicino all'elemento che lo usa. Il tema
definisce soltanto font e colori personalizzati effettivamente usati.
