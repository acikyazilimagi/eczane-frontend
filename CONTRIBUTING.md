# Standartlar

## CSS standartlari

- Site genelinde kullanılan style'lar hariç düz css dosyaları kullanmayalım. MUI kesinlikle kullanmıyoruz. Dokunduğunuz dosyaların MUI kısımlarını temizlemek faydalı olur. emotion devam ediyor şimdilik. module.scss kullabiliriz.
- Çok küçük değerler haricinde px yerine rem kullanalım. Bu browser'ında yüksek font kullanan insanlar için (yaşlılar özellikle) kolaylık sağlayacak. px kullanırsak anlam ifade etmez.
- !important kullandıysak, neden kullanmak zorunda kaldığımızı PR'da belirtelim.

## React Standartları

- Constant değerleri component'lar dışında büyük harfle tanımlayalım. Component içinde 37.125 değeri olmamalı. ya da tüm icon'lar component içinde tanımlanmamalı.
- lib ve util'e aktarmamız gereken kısımları aktaralım.
- Çok büyük component'lardan kaçınalım. Reusable bir parça varsa kesinlikle ayıralım.
- utils'te yer alan fonksiyonlari bir kontrol edelim. Şu an çok az zaten ama reimplement etmeye gerek yok.
