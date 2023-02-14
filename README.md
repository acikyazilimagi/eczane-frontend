# eczane-frontend
[For english](README_ENG.md)

## Kullanılan Teknoloji ve Sistemler
- React 17
- LeafletJS
- NodeJS v16
- MaterialUI (kullanıldı ancak yavaş yavaş tüm importları kaldırıyoruz)
- Prettier
- TODO: ESLint

## Kurulum
### Repoyu klonlama

```
git clone https://github.com/acikkaynak/eczane-frontend
```

### Gereksinimler
Proje için bilgisayarınızda [NodeJS (v16)](https://nodejs.org/en/download/) kurulu olmalıdır.
Proje klonlandiktan sonra gerekli kütüphaneleri kurmak için:

```
npm install
```

### Başlatma
Projeyi başlatmak için:

```
npm start
```

## Docker
Aşağıdaki kısımdan portu, kendi bilgisayarınızda hangi portta açmak istiyorsanız onunla değiştirin. Örneğin: 3000

```
docker build -t eczane-frontend
docker run -dp <port>:80 --rm --name eczane-frontend eczane-frontend
```

## Back-End Projesi: [eczane-backend](https://github.com/acikkaynak/eczane-backend)
## Admin Front-End Projesi: [eczane-admin-frontend](https://github.com/acikkaynak/eczane-admin-frontend)
