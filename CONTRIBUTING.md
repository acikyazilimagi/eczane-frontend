# Standartlar

## Dışardan Katkı Sağlamak İçin

[https://github.com/acikkaynak/eczane-frontend/issues](https://github.com/acikkaynak/eczane-frontend/issues) üzerinden
`to-do` ve `help-wanted` label'larının mevcut olduğu herhangi bir issue altında direkt assign talep edebilirsiniz.
Issues sıklıkla kontrol ediliyor. Çok gecikme yaşamadan katkı sağlamaya başlayabilirsiniz. Teşekkürler.

## CSS standartlari

- Site genelinde kullanılan style'lar hariç düz css dosyaları kullanmayalım. MUI kesinlikle kullanmıyoruz. Dokunduğunuz
  dosyaların MUI kısımlarını temizlemek faydalı olur. module.scss'e aktarıyoruz.
- Çok küçük değerler haricinde px yerine rem kullanalım. Bu browser'ında yüksek font kullanan insanlar için (yaşlılar
  özellikle) kolaylık sağlayacak. px kullanırsak anlam ifade etmez.
- !important kullandıysak, neden kullanmak zorunda kaldığımızı PR'da belirtelim.
- BREAKPOINT'lerimiz aşağıdaki şekide ve mobile first CSS yazıyoruz. Gerekli durumda ekstra eklenebilir. PR'da
  belirtilmelidir eklendiyse.

```
const mobileThreshold = 768;
const largeThreshold = 1024;
const xLargeThreshold = 1440;
const xxLargeThreshold = 1600;
const xxxLargeThreshold = 1920;
```

## React Standartları

- Constant değerleri component'lar dışında büyük harfle tanımlayalım. Component içinde 37.125 değeri olmamalı. ya da tüm
  icon'lar component içinde tanımlanmamalı.
- lib ve util'e aktarmamız gereken kısımları aktaralım.
- Çok büyük component'lardan kaçınalım. Reusable bir parça varsa kesinlikle ayıralım.
- utils'te yer alan fonksiyonlari bir kontrol edelim. Şu an çok az zaten ama reimplement etmeye gerek yok.
