# 🧪 Тестирование форм - Priority Agency

## 🚨 Проблема
Формы не отправляют письма на email.

## 🔍 Что проверить

### 1. Formspree настройки
- Перейдите на [formspree.io](https://formspree.io)
- Войдите в аккаунт
- Проверьте форму с ID `xjkeplve`
- Убедитесь, что email `priorityagency@proton.me` указан правильно

### 2. Тестовые формы
Создал 3 варианта форм для тестирования:

#### Вариант 1: Красивая форма
- URL: `yoursite.com/simple-contact.html`
- Стильная форма с анимациями
- Автоформатирование телефона

#### Вариант 2: Базовая форма
- URL: `yoursite.com/basic-form.html`
- Простая HTML форма без стилей
- Минимум кода

#### Вариант 3: Оригинальная форма
- URL: `yoursite.com/contact-form.html`
- HTML форма с базовыми стилями

### 3. Проверка Formspree
1. Откройте [formspree.io](https://formspree.io)
2. Найдите форму `xjkeplve`
3. Проверьте настройки:
   - Email получатель: `priorityagency@proton.me`
   - Статус: активна
   - Лимиты: не превышены

### 4. Тестирование
1. Откройте любую из тестовых форм
2. Заполните и отправьте
3. Проверьте:
   - Появляется ли сообщение об успехе
   - Приходит ли письмо на email
   - Есть ли заявка в Formspree Dashboard

## 🛠️ Альтернативные решения

### Если Formspree не работает:

#### 1. EmailJS (бесплатно)
```html
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
emailjs.init("YOUR_USER_ID");
</script>
```

#### 2. Netlify Forms (если на Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
```

#### 3. Простая почтовая ссылка
```html
<a href="mailto:priorityagency@proton.me?subject=Заявка с сайта&body=Имя: %0D%0AТелефон: %0D%0AСообщение:">
    Написать нам
</a>
```

## 📧 Проверка email

### ProtonMail
1. Войдите в `priorityagency@proton.me`
2. Проверьте папку "Входящие"
3. Проверьте папку "Спам"
4. Проверьте настройки фильтров

### Formspree Dashboard
1. Перейдите на [formspree.io](https://formspree.io)
2. Откройте форму `xjkeplve`
3. Посмотрите вкладку "Submissions"
4. Проверьте логи ошибок

## 🔧 Быстрое решение

Если ничего не работает, используйте простую почтовую ссылку:

```html
<div style="text-align: center; padding: 50px;">
    <h2>Связаться с нами</h2>
    <p>📞 <a href="tel:+79998981439">+7 999 898 14 39</a></p>
    <p>✉️ <a href="mailto:priorityagency@proton.me">priorityagency@proton.me</a></p>
    <p>✈️ <a href="https://t.me/priorityagencyru">@priorityagencyru</a></p>
</div>
```

## 📞 Контакты для тестирования

- **Телефон:** +7 999 898 14 39
- **Email:** priorityagency@proton.me
- **Telegram:** @priorityagencyru
- **Formspree ID:** xjkeplve

## 🎯 Следующие шаги

1. Протестируйте все 3 формы
2. Проверьте Formspree настройки
3. Проверьте email настройки
4. Если не работает - используйте простые контакты
5. Сообщите результат тестирования

**Главное - сайт работает, клиенты могут связаться!** 🚀
