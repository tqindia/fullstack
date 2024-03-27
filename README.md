# Next.js ConnectRPC Firebase

Next.js serverless APP with Firebase, React Hooks and ConnectRPC Server, It's a demonstration of how to write RPC. 

## Motivation 

Previously, I extensively utilized GRPC across various projects, but I hadn't had the opportunity to implement solutions holistically like a full-stack developer. This role entails managing tasks from proto changes to production deployment, encompassing both frontend and backend development tasks. 

## Docs

### API Docs
- [Buf Docs](https://buf.build/yindia/fullstack/docs/main:cloud.fullstack.v1)

## Tech Stack
- NextJS
- React 
- Typescript
- React hooks
- Firebase (Auth + Datastore)
- Tailwind 
- [Components - shadcn/ui](https://ui.shadcn.com/)
- Protobuf
- ConnectRPC
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)

### Code Structure 

```
./src
├── cloud
│   ├── todo
│   └── validate
├── components
│   ├── dashboard
│   ├── header
│   ├── home
│   ├── theme
│   └── ui
├── configurations.ts
├── core
│   └── ThemeProvider.tsx
├── firebase
│   ├── adminApp.ts
│   ├── auth
│   └── clientApp.ts
├── globals.css
├── lib
│   ├── genericUtils.tsx
│   ├── hooks
│   ├── server
│   ├── tasks
│   └── utils.ts
├── pages
│   ├── _app.tsx
│   ├── api
│   └── index.tsx
└── services
    └── cloud.ts`

```

## Getting Started

- Update `.env` file with all the firebase secret

- Install all dependancy
```bash
npm install 
```

- Run as a dev server 
```bash
npm run dev 
```

Open : [localhost](http://localhost:8080)

- Build 
```bash
npm run build 
```

- Serve
```bash
npm run start 
```
