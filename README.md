# **Калькулятор (Calculator WebApp)**

**Простое веб-приложение калькулятора с базовыми математическими операциями, поддержкой степеней и локального хранения введенных данных.**

---

## **Функционал**
#### ✅ Сложение, вычитание, умножение, деление.  
#### ✅ Возведение в степень (`^`).  
#### ✅ Очистка экрана (`C`), удаление последнего символа (`DEL`).  
#### ✅ Сохранение текущего выражения в `localStorage` (сохраненные данные остаются после обновления страницы).  
#### ✅ Интерактивный дизайн с адаптацией для мобильных устройств.

---

## **Файловая структура**
```bash
/project-root
│── index.html         # Основной HTML-файл
│── scripts.js         # Основной JavaScript-код
│── /css               # Директория со стилями
│   │── index.css      # Главный CSS-файл, импортирует остальные
│   │── /blocks        # Блоки по методологии БЭМ
│   │   │── /calculator
│   │   │   │── calculator.css      # Основные стили калькулятора
│   │   │   │── __display.css       # Стили экрана вывода
│   │   │   │── __buttons.css       # Стили кнопочной панели
│   │   │── /button
│   │   │   │── button.css          # Общие стили кнопок
│   │   │   │── --equal.css         # Стили кнопки "="
│── README.md          # Документация проекта
```

---

## **Как использовать**

### 1️⃣ Запуск проекта локально

#### Склонируйте репозиторий:
```shell
git clone https://github.com/your-username/calculator-webapp.git
```

#### Перейдите в папку проекта:
```shell
cd calculator-webapp
```
### 2️⃣ Развертывание на GitHub Pages
1. Перейдите в настройки репозитория на GitHub.
2. В разделе Pages выберите ветку main и папку /root.
3. Дождитесь деплоя — ссылка появится в настройках.

---

## **Технологии**

* `HTML` — семантическая разметка.
* `CSS (Flexbox, Grid, БЭМ)` — стилизация и адаптивность.
* `JavaScript (localStorage, eval)` — логика вычислений и сохранение данных.
* `GitHub Pages` — развертывание проекта.