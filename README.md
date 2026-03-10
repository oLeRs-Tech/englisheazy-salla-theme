# EnglishEazy Salla Theme

Custom Salla storefront theme styled to match the EnglishEazy platform visual language.

## Local preview

```bash
salla login
npm install
npm run production
salla theme preview --store YOUR_STORE_DOMAIN --only-link
```

## Publish

```bash
npm run production
salla theme publish
```

## Notes

- Theme files live under `src/`.
- Main style file: `src/assets/styles/englisheazy.css`.
- Main layout: `src/views/layouts/master.twig`.
