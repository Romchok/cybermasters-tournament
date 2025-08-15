# 🚀 Пошаговая настройка сайта CyberHub

## 📋 Что нужно настроить перед запуском

### 1. 🔍 Google Analytics
**Файл:** `index.html` (строки 32-36)

**Что делать:**
1. Зайдите на [Google Analytics](https://analytics.google.com/)
2. Создайте аккаунт и веб-сайт
3. Скопируйте ID измерения (например: G-XXXXXXXXXX)
4. Замените `GA_MEASUREMENT_ID` на ваш ID

**Пример:**
```html
<!-- Было -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- Стало -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. 📝 Форма регистрации (Formspree)
**Файл:** `index.html` (строка 350)

**Что делать:**
1. Зайдите на [Formspree](https://formspree.io/)
2. Создайте аккаунт
3. Создайте новую форму
4. Скопируйте ID формы
5. Замените `YOUR_FORM_ID` на ваш ID

**Пример:**
```html
<!-- Было -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- Стало -->
<form action="https://formspree.io/f/xayzwqab" method="POST">
```

### 3. 🗺️ Яндекс.Карты
**Файл:** `index.html` (строки 200-205)

**Что делать:**
1. Зайдите на [Яндекс.Карты](https://yandex.ru/maps/)
2. Найдите организацию CyberX или адрес: Республика Крым, Симферополь, улица Пушкина, 5
3. Нажмите "Поделиться" → "Встраивание карты"
4. Скопируйте код iframe
5. Замените существующий iframe

**Для организации CyberX:**
```html
<!-- Было -->
<iframe 
    src="https://yandex.ru/map-widget/v1/?um=constructor%3A123456789&amp;source=constructor&amp;ll=34.123456%2C44.123456&amp;z=16&amp;l=map&amp;pt=34.123456%2C44.123456%2Cpm2rdm"
    width="100%" 
    height="100%" 
    frameborder="0">
</iframe>

<!-- Стало (реальный код CyberX) -->
<div style="position:relative;overflow:hidden;">
    <a href="https://yandex.ru/maps/org/cyberx/115521029721/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">CyberX</a>
    <a href="https://yandex.ru/maps/146/simferopol/category/computer_club/97550856506/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Компьютерный клуб в Симферополе</a>
    <a href="https://yandex.ru/maps/146/simferopol/category/cybersport/119373172320/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Киберспорт в Симферополе</a>
    <iframe src="https://yandex.ru/map-widget/v1/org/cyberx/115521029721/?ll=34.099006%2C44.951497&z=15" width="100%" height="100%" frameborder="0" allowfullscreen="true" style="position:relative;"></iframe>
</div>
```

**Примечание:** Карта организации CyberX уже вставлена в сайт! Координаты: 34.099006, 44.951497 (Симферополь).

### 4. 📱 Telegram группа турнира
**Файл:** `index.html` (строка 420)

**Что делать:**
1. Telegram группа турнира уже настроена на [tournamentcyberx](https://t.me/+snRRzSwUnrQ5M2Zi)
2. Если нужно изменить, замените ссылку на вашу

**Пример:**
```html
<!-- Было -->
<a href="https://t.me/cyberhub_support" target="_blank">

<!-- Стало (уже настроено) -->
<a href="https://t.me/+snRRzSwUnrQ5M2Zi" target="_blank">
```

**Примечание:** Telegram группа турнира уже настроена и работает!

### 5. 🔗 Социальные сети
**Файлы:** `index.html` (строки 280-290, 380-390)

**Что делать:**
1. Замените `#` на реальные ссылки на ваши соцсети
2. Обновите иконки если нужно

**Пример:**
```html
<!-- Было -->
<a href="#" class="text-purple-400 hover:text-purple-300">

<!-- Стало -->
<a href="https://t.me/cyberhub_official" class="text-purple-400 hover:text-purple-300">
```

## 🎯 Дополнительные настройки

### Изменение даты турнира
**Файл:** `script.js` (строка 6)

```javascript
// Было
const targetDate = new Date('2025-08-24T10:00:00');

// Стало (например, 15 сентября 2025 в 14:00)
const targetDate = new Date('2025-09-15T14:00:00');
```

### Изменение призового фонда
**Файл:** `index.html` (строки 180, 400)

```html
<!-- Было -->
<p class="text-2xl font-bold text-red-400">35,000 ₽</p>

<!-- Стало -->
<p class="text-2xl font-bold text-red-400">50,000 ₽</p>
```

### Изменение контактной информации
**Файл:** `index.html` (строки 190-195, 430-435)

```html
<!-- Было -->
<p class="text-gray-300">Телефон: <a href="tel:+79876543210" class="text-blue-400 hover:text-blue-300">+7 987 654-32-10</a></p>
<p class="text-gray-300">Email: <a href="mailto:info@constructor.ru" class="text-blue-400 hover:text-blue-300">info@constructor.ru</a></p>

<!-- Стало (уже настроено) -->
<p class="text-gray-300">Телефон: <a href="tel:+79781232308" class="text-blue-400 hover:text-blue-300">+7 (978) 123-23-08</a></p>
<p class="text-gray-300">Email: <a href="mailto:cyberxcrimea@yandex.ru" class="text-blue-400 hover:text-blue-300">cyberxcrimea@yandex.ru</a></p>
```

**Примечание:** Контакты CyberX уже настроены и работают!
```

## 🧪 Тестирование

### 1. Проверьте форму регистрации
- Заполните все поля
- Попробуйте отправить
- Убедитесь, что данные приходят на email

### 2. Проверьте таймер
- Откройте сайт
- Убедитесь, что таймер работает
- Проверьте на разных устройствах

### 3. Проверьте адаптивность
- Откройте в разных браузерах
- Измените размер окна
- Проверьте на мобильном

## 🚀 Размещение на хостинге

### Netlify (бесплатно)
1. Зайдите на [netlify.com](https://netlify.com)
2. Создайте аккаунт
3. Перетащите папку с файлами
4. Получите ссылку на сайт

### GitHub Pages
1. Создайте репозиторий на GitHub
2. Загрузите файлы
3. Включите Pages в настройках
4. Получите ссылку вида: `username.github.io/repository-name`

### Vercel
1. Зайдите на [vercel.com](https://vercel.com)
2. Подключите GitHub репозиторий
3. Автоматическое развертывание

## ⚠️ Важные моменты

1. **Всегда тестируйте** изменения перед загрузкой на хостинг
2. **Сохраняйте резервные копии** файлов
3. **Проверяйте ссылки** после загрузки
4. **Настройте HTTPS** на хостинге
5. **Проверьте скорость загрузки** через PageSpeed Insights

## 🆘 Если что-то не работает

1. **Проверьте консоль браузера** (F12 → Console)
2. **Убедитесь, что все файлы загружены**
3. **Проверьте правильность ссылок**
4. **Очистите кэш браузера**
5. **Попробуйте в режиме инкогнито**

## 📞 Поддержка

Если нужна помощь:
- Телефон: +7 (978) 123-23-08

---

**Удачи в настройке! 🎯⚡**

---

**Примечание:** Дата турнира изменена на 31.08.2025, название организации - CyberMasters.

