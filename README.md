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

**Амжилтгүй build:** `test/calculator.test.js` доторх `add(2, 3)`-ийн хүлээгдэж буй утгыг санаатайгаар `6` болгож өөрчилсөн. Үүний улмаас "Run tests" алхам улаан ❌ болж, лог дээр `Expected values to be strictly equal: 5 !== 6` гэсэн алдаа гарсан. Тест амжилтгүй болбол `npm test` тэгээс ялгаатай exit code буцаадаг тул GitHub Actions алхмыг failed гэж тэмдэглэнэ. Утгыг буцааж засаад push хийхэд CI дахин ногоон болсон.

## Screenshot-ууд

- Амжилттай: `screenshots/success.png`
- Амжилтгүй: `screenshots/failure.png`
