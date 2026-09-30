# RedSocial (React + React Router)

```bash
npm install
npm run dev
```

Rutas (`src/App.jsx`): `/`, `/login`, `/registro`, `/perfil`, `/chat`, `/grupos`, `/configuracion`.

## Estructura

```
src/
├── App.jsx            rutas
├── constants.js       URL base de imágenes
├── data/              datos de ejemplo (publicaciones, chats, grupos)
├── pages/             una página por ruta (solo componen componentes)
└── components/
    ├── layout/        Layout, Navbar, Footer
    ├── common/        PageContainer, Avatar, FormField, AuthCard, Tabs, Accordion, AlertaCerrable, AdCard, EventCard
    ├── posts/         PostCard, PostComposer
    ├── profile/       ProfileCard, PhotoGrid, InterestTags, FriendRequest
    ├── chat/          ConversationList, ChatWindow, MessageBubble, MessageInput
    ├── groups/        GroupList, GroupSearch
    └── settings/      GeneralSettings, PrivacySettings, NotificationSettings
```
