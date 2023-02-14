# eczane-frontend
[For english](README_ENG.md)

## Technologies used
- React 17
- LeafletJS
- NodeJS v16
- MaterialUI (We used it but we are slowly removing it)
- Prettier
- TODO: ESLint

## Quick Start
### Cloning Repo

```
git clone https://github.com/acikkaynak/eczane-frontend
```

### Requirements
For project [NodeJS (v16)](https://nodejs.org/en/download/) should be installed in your computer.
To install libraries after cloning project:

```
npm install
```

### To start
To run the project:

```
npm start
```

## Docker
In the section below, change the port to whichever port you want to open on your computer. For example 3000

```
docker build -t eczane-frontend
docker run -dp <port>:80 --rm --name eczane-frontend eczane-frontend
```

## Back-End Project: [eczane-backend](https://github.com/acikkaynak/eczane-backend)
## Admin Front-End Project [eczane-admin-frontend](https://github.com/acikkaynak/eczane-admin-frontend)
