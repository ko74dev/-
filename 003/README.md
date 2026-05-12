# Персональная визитка — Педагог и IT-специалист
<img src=003.png width=50%>
## Описание
Адаптивный одностраничный лендинг-персональная визитка с тремя разделами: педагогическая деятельность, IT-компетенции и услуги. Содержит интерактивную форму обратной связи через EmailJS, анимированный градиентный фон и адаптивную верстку.

## Структура проекта

```
/
├── index.html              # Главная страница (единственный HTML-файл)
├── README.md               # Этот файл
├── robots.txt              # SEO: разрешение индексации
├── 0_photo_portret.jpg     # Фото портрета в шапке
├── pedagogy/
│   ├── photo_1.jpg         # Галерея: педагогическая деятельность
│   ├── photo_2.jpg
│   ├── photo_3.jpg
│   ├── photo_4.jpg
│   ├── photo_5.jpg
│   └── photo_6.jpg
└── it/
    ├── photo_1.jpg         # Галерея: IT-компетенции
    ├── photo_2.jpg
    ├── photo_3.jpg
    ├── photo_4.jpg
    ├── photo_5.jpg
    └── photo_6.jpg
```

## Деплой

### 1. Подготовка контента
Замените заглушки фотографий на реальные изображения:
- `0_photo_portret.jpg` — ваше фото для шапки (квадратное, минимум 128×128px)
- `pedagogy/photo_1.jpg` … `photo_6.jpg` — фото из педагогической практики
- `it/photo_1.jpg` … `photo_6.jpg` — фото из IT-деятельности

### 2. Настройка EmailJS (форма обратной связи)
1. Зарегистрируйтесь на [emailjs.com](https://www.emailjs.com/)
2. **Account → API Keys** — скопируйте **Public Key**
3. **Email Services** — создайте сервис (Gmail, Mail.ru, Yandex и т.д.) → скопируйте **Service ID**
4. **Email Templates** — создайте шаблон. Доступные переменные: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
5. В `index.html` замените три константы:
   ```js
   emailjs.init('ВАШ_PUBLIC_KEY');
   const SERVICE_ID = 'ВАШ_SERVICE_ID';
   const TEMPLATE_ID = 'ВАШ_TEMPLATE_ID';
   ```

### 3. Замена контактных данных
В разделе **Контакты** замените:
- `email@example.com` — ваш email
- `vk.com/username` — ссылка на ваш профиль ВКонтакте

### 4. Деплой на GitHub Pages (подробная инструкция)

GitHub Pages — бесплатный хостинг для статических сайтов.

#### Шаг 1. Создание репозитория
1. Перейдите на [github.com/new](https://github.com/new)
2. Введите имя репозитория, например `personal-landing`
3. Выберите **Public** (для бесплатного GitHub Pages)
4. Нажмите **Create repository**

#### Шаг 2. Загрузка файлов
Вариант A — через веб-интерфейс:
1. Откройте созданный репозиторий
2. Нажмите **Add file → Upload files**
3. Перетащите все файлы проекта (`index.html`, `README.md`, `robots.txt`, `0_photo_portret.jpg` и папки `pedagogy/`, `it/`)
4. Нажмите **Commit changes**

Вариант B — через Git (в терминале):
```bash
cd путь/к/папке/test
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ВАШ_НИК/personal-landing.git
git push -u origin main
```

#### Шаг 3. Включение GitHub Pages
1. В репозитории перейдите в **Settings → Pages** (вкладка слева)
2. В разделе **Build and deployment** выберите:
   - **Source**: Deploy from a branch
   - **Branch**: `main` / `root`
3. Нажмите **Save**
4. Через 1–3 минуты сайт будет доступен по адресу:
   `https://ВАШ_НИК.github.io/personal-landing/`

#### Шаг 4. Обновление сайта
После любых изменений в файлах повторите:
```bash
git add .
git commit -m "Update content"
git push origin main
```
Изменения появятся на сайте в течение нескольких минут.

### 5. Альтернативные платформы
| Платформа | Инструкция |
|-----------|------------|
| **Netlify** | Перетащите папку с файлами на [netlify.com](https://netlify.com) |
| **Vercel** | Импортируйте репозиторий на [vercel.com](https://vercel.com) |
| **Cloudflare Pages** | Загрузите через Dashboard или CLI |
| **Любой хостинг** | Загрузите `index.html` и папки `pedagogy/`, `it/` на сервер |

### 6. Дополнительно (опционально)
- **Домен**: настройте CNAME в панели хостинга
- **SSL**: включите HTTPS (обычно бесплатно на всех современных платформах)
- **SEO**: заполните `robots.txt` своим доменом

## Адаптивность
Сайт адаптирован под все устройства:
- **Desktop (>1024px)** — 3 колонки карточек, 3 колонки галереи
- **Tablet (≤1024px)** — 2 колонки карточек, 2 колонки галереи
- **Mobile (≤768px)** — шапка в столбик, 2 колонки галереи
- **Small Mobile (≤640px)** — 1 колонка карточек и галереи, полноширинная кнопка формы

## Технологии
- HTML5 + CSS3 (CSS Variables, Grid, Flexbox, Clamp)
- JavaScript (vanilla)
- EmailJS SDK v4
- Без сторонних CSS/JS-фреймворков
