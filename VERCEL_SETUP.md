# 🚀 Vercel Setup - Priority Agency

## ✅ Что уже настроено

### 📧 Формы обратной связи
- **Formspree ID:** `xjkeplve` ✅
- **Email:** `priorityagency@proton.me` ✅
- **Vercel API Routes:** настроены ✅
- **Валидация:** все поля проверяются ✅

## 🔧 Структура для Vercel

```
Priority-Agency/
├── pages/
│   └── api/
│       └── contact.js      # Vercel API Route
├── public/
│   └── api/
│       └── contact.js      # Fallback (не нужен для Vercel)
├── netlify/                # Не нужен для Vercel
└── src/
    └── utils/
        └── formSubmission.ts # Обновлен для Vercel
```

## 🚀 Деплой на Vercel

### Автоматический деплой:
1. Перейдите на [vercel.com](https://vercel.com)
2. Войдите в аккаунт
3. Нажмите "New Project"
4. Подключите GitHub репозиторий: `agrsky13/Priority-Agency`
5. Vercel автоматически определит:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Нажмите "Deploy"

### Ручной деплой:
1. Установите Vercel CLI: `npm i -g vercel`
2. В папке проекта: `vercel`
3. Следуйте инструкциям

## 📋 После деплоя

### Проверьте формы:
1. Откройте сайт
2. Заполните форму обратной связи
3. Проверьте email `priorityagency@proton.me`
4. Проверьте [Formspree Dashboard](https://formspree.io)

### Проверьте API:
- URL: `https://yoursite.vercel.app/api/contact`
- Метод: POST
- Тело: JSON с данными формы

## 🔧 Настройки Vercel

### Environment Variables (если нужны):
- `FORMSPREE_ID` = `xjkeplve`
- `CONTACT_EMAIL` = `priorityagency@proton.me`

### Build Settings:
- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## 📊 Мониторинг

### Где смотреть заявки:
- **📧 Email:** `priorityagency@proton.me`
- **📱 Formspree:** [formspree.io](https://formspree.io)
- **💾 localStorage:** в консоли браузера

### Логи Vercel:
- **Functions:** в панели Vercel → Functions
- **Builds:** в панели Vercel → Deployments
- **Analytics:** в панели Vercel → Analytics

## 🎯 Преимущества Vercel

- ✅ **Быстрый деплой** - автоматически при push
- ✅ **Serverless Functions** - API работает без сервера
- ✅ **CDN** - быстрая загрузка по всему миру
- ✅ **HTTPS** - автоматически
- ✅ **Бесплатно** - до 100GB трафика

## 🚨 Устранение неполадок

### Форма не отправляется:
1. Проверьте консоль браузера
2. Проверьте Functions в панели Vercel
3. Убедитесь, что Formspree ID правильный

### API не работает:
1. Проверьте URL: `/api/contact`
2. Проверьте метод: POST
3. Проверьте Content-Type: application/json

## 🎉 Готово!

**Ваш сайт готов к деплою на Vercel!**
- ✅ API Routes настроены
- ✅ Формы работают
- ✅ Email настроен
- ✅ Код оптимизирован

**Просто подключите репозиторий к Vercel и деплойте!** 🚀
