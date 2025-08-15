# 🚀 Настройка GitHub Pages для CyberMasters Tournament

## 📋 Что уже готово:

✅ **Git репозиторий** инициализирован  
✅ **Все файлы** добавлены в Git  
✅ **Первый коммит** создан  
✅ **.gitignore** настроен  

## 🌐 Шаг 1: Создание репозитория на GitHub

1. **Зайдите на [github.com](https://github.com)**
2. **Нажмите "New repository"** (зеленая кнопка)
3. **Заполните поля**:
   - **Repository name**: `cybermasters-tournament`
   - **Description**: "Сайт турнира по Dota 2 от CyberMasters"
   - **Public** ✅ (обязательно для бесплатного хостинга)
   - **Add a README file** ✅
4. **Нажмите "Create repository"**

## 🔗 Шаг 2: Подключение к удаленному репозиторию

**Замените `YOUR_USERNAME` на ваше имя пользователя GitHub:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/cybermasters-tournament.git
git branch -M main
git push -u origin main
```

## 📱 Шаг 3: Включение GitHub Pages

1. **В репозитории** найдите вкладку "Settings"
2. **Прокрутите вниз** до раздела "Pages"
3. **В "Source"** выберите "Deploy from a branch"
4. **В "Branch"** выберите "main" и папку "/ (root)"
5. **Нажмите "Save"**

## 🌍 Шаг 4: Получение URL сайта

После настройки GitHub Pages вы получите URL вида:
**`https://YOUR_USERNAME.github.io/cybermasters-tournament`**

## 🔧 Шаг 5: Подключение вашего домена

1. **В настройках Pages** найдите "Custom domain"
2. **Введите ваш домен** (например: `cybermasters.ru`)
3. **Поставьте галочку** "Enforce HTTPS"
4. **Нажмите "Save"**

## 📝 Шаг 6: Настройка DNS

В панели регистратора домена добавьте записи:

```
Type: CNAME
Name: @
Value: YOUR_USERNAME.github.io

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

## ⚡ Шаг 7: Проверка работы

1. **Подождите 5-10 минут** для обновления DNS
2. **Откройте ваш домен** в браузере
3. **Проверьте все функции** сайта

## 🎯 Что работает на GitHub Pages:

✅ **Статические файлы** (HTML, CSS, JS)  
✅ **Автоматический SSL** сертификат  
✅ **CDN** по всему миру  
✅ **Бесплатный хостинг**  
✅ **Интеграция с Git**  

## 🔄 Обновление сайта:

При изменении файлов:
```bash
git add .
git commit -m "Описание изменений"
git push
```

GitHub Pages автоматически обновит сайт!

## 📊 Преимущества GitHub Pages:

- **Бесплатно** навсегда
- **Надежность** GitHub
- **Автоматический SSL**
- **Простота настройки**
- **Интеграция с Git**

## 🆘 Если что-то не работает:

1. **Проверьте настройки** Pages в репозитории
2. **Убедитесь, что репозиторий Public**
3. **Проверьте DNS** записи
4. **Подождите** обновления DNS (до 24 часов)

---

**Удачи в настройке! 🎮⚡**
