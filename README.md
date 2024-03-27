# Next.js ConnectRPC Firebase

Next.js serverless APP with Firebase, React Hooks and ConnectRPC Server, It's a demonstartion of how to write RPC. 

## Motivation 

Before this i used GRPC heavilly in multiple places but i never get chance to impliment stuff like a fullstack developer, It means job will start with proto change and end on production, It will include both frontend and backend changes.  

## Docs

### API Docs
- [Buf Docs](https://buf.build/yindia/fullstack/docs/main:cloud.fullstack.v1)


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

