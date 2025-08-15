# 🌐 Настройка домена tournamentcyberx.ru

## 🎯 Ваш домен:
**`tournamentcyberx.ru`** - отличный выбор для турнира!

## 📋 Что нужно настроить:

### **1. GitHub Pages**
- Репозиторий: `cybermasters-tournament`
- Custom domain: `tournamentcyberx.ru`
- Enforce HTTPS: ✅

### **2. DNS записи**
В панели регистратора домена `tournamentcyberx.ru` добавьте:

```
Type: CNAME
Name: @
Value: YOUR_USERNAME.github.io

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### **3. Проверка DNS**
После добавления записей подождите 5-10 минут для обновления.

## 🔍 Проверка настройки:

### **Проверка DNS:**
```bash
# Проверка записи @
dig tournamentcyberx.ru CNAME

# Проверка записи www
dig www.tournamentcyberx.ru CNAME
```

### **Проверка сайта:**
1. Откройте `tournamentcyberx.ru`
2. Должен открыться сайт турнира
3. Проверьте все функции

## 🎮 Что будет работать на сайте:

✅ **Название**: CyberMasters  
✅ **Дата турнира**: 31.08.2025  
✅ **Контакты**: +7 (978) 123-23-08  
✅ **Email**: cyberxcrimea@yandex.ru  
✅ **Telegram группа**: [tournamentcyberx](https://t.me/+snRRzSwUnrQ5M2Zi)  
✅ **Карта**: CyberX в Симферополе  
✅ **Форма регистрации** участников  

## 🚀 Преимущества вашего домена:

- **Короткий и запоминающийся**
- **Связан с CyberX**
- **Подходит для турнира**
- **Профессионально выглядит**

## ⚠️ Важные моменты:

1. **Репозиторий должен быть Public** для бесплатного хостинга
2. **DNS записи** могут обновляться до 24 часов
3. **HTTPS** будет работать автоматически
4. **Сайт обновляется** при каждом push в Git

## 🔄 Обновление сайта:

```bash
git add .
git commit -m "Описание изменений"
git push
```

GitHub Pages автоматически обновит сайт на `tournamentcyberx.ru`!

---

**Удачи с доменом tournamentcyberx.ru! 🎯⚡**

