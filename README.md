# Лаборатори 7 — GitHub Actions CI Pipeline

Энгийн тооны машины Node.js төсөл. Push болон Pull Request бүрт GitHub Actions автоматаар тест ажиллуулна.

## Ажиллуулах

```bash
npm install
npm test     # тест ажиллуулах
npm start    # жишээ гаралт харах
```

## CI workflow (`.github/workflows/ci.yml`)

| Алхам    | Юу хийдэг вэ                          |
|----------|---------------------------------------|
| Checkout | `actions/checkout@v4` — кодыг татна   |
| Setup    | `actions/setup-node@v4` — Node 24     |
| Install  | `npm install`                         |
| Test     | `npm test` (Node-ийн built-in test runner) |

## Тайлбар

**Амжилттай build:** Бүх 5 тест давж, бүх алхам ногоон ✅ болсон.

## Screenshot-ууд

- Амжилттай: `screenshots/success.png`
