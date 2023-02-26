const centers = {
  Adana: {
    id: 1,
    lat: 36.9914,
    lng: 35.3308,
  },
  Adıyaman: {
    id: 2,
    lat: 37.7636,
    lng: 38.2773,
  },
  Afyonkarahisar: {
    id: 3,
    lat: 38.7507,
    lng: 30.5567,
  },
  Ağrı: {
    id: 4,
    lat: 39.7191,
    lng: 43.0503,
  },
  Amasya: {
    id: 5,
    lat: 40.6499,
    lng: 35.8353,
  },
  Ankara: {
    id: 6,
    lat: 39.9208,
    lng: 32.8541,
  },
  Antalya: {
    id: 7,
    lat: 36.8841,
    lng: 30.7056,
  },
  Artvin: {
    id: 8,
    lat: 41.1828,
    lng: 41.8183,
  },
  Aydın: {
    id: 9,
    lat: 37.8564,
    lng: 27.8416,
  },
  Balıkesir: {
    id: 10,
    lat: 39.6484,
    lng: 27.8826,
  },
  Bilecik: {
    id: 11,
    lat: 40.1451,
    lng: 29.9799,
  },
  Bingöl: {
    id: 12,
    lat: 38.8852,
    lng: 40.4988,
  },
  Bitlis: {
    id: 13,
    lat: 38.3952,
    lng: 42.1255,
  },
  Bolu: {
    id: 14,
    lat: 40.7356,
    lng: 31.6012,
  },
  Burdur: {
    id: 15,
    lat: 37.7192,
    lng: 30.2903,
  },
  Bursa: {
    id: 16,
    lat: 40.1824,
    lng: 29.0651,
  },
  Çanakkale: {
    id: 17,
    lat: 40.1549,
    lng: 26.4142,
  },
  Çankırı: {
    id: 18,
    lat: 40.6012,
    lng: 33.6137,
  },
  Çorum: {
    id: 19,
    lat: 40.5503,
    lng: 34.9553,
  },
  Denizli: {
    id: 20,
    lat: 37.7765,
    lng: 29.0864,
  },
  Diyarbakır: {
    id: 21,
    lat: 37.9138,
    lng: 40.2306,
  },
  Edirne: {
    id: 22,
    lat: 41.6764,
    lng: 26.5553,
  },
  Elazığ: {
    id: 23,
    lat: 38.674,
    lng: 39.2232,
  },
  Erzincan: {
    id: 24,
    lat: 39.7507,
    lng: 39.4929,
  },
  Erzurum: {
    id: 25,
    lat: 39.9085,
    lng: 41.2769,
  },
  Eskişehir: {
    id: 26,
    lat: 39.7767,
    lng: 30.5206,
  },
  Gaziantep: {
    id: 27,
    lat: 37.0594,
    lng: 37.3821,
  },
  Giresun: {
    id: 28,
    lat: 40.9128,
    lng: 38.3895,
  },
  Gümüşhane: {
    id: 29,
    lat: 40.4603,
    lng: 39.4817,
  },
  Hakkari: {
    id: 30,
    lat: 37.5733,
    lng: 43.7408,
  },
  Hatay: {
    id: 31,
    lat: 36.4012,
    lng: 36.349,
  },
  Isparta: {
    id: 32,
    lat: 37.7648,
    lng: 30.5567,
  },
  Mersin: {
    id: 33,
    lat: 36.7956,
    lng: 34.6328,
  },
  İstanbul: {
    id: 34,
    lat: 41.0138,
    lng: 28.9497,
  },
  İzmir: {
    id: 35,
    lat: 38.4189,
    lng: 27.1287,
  },
  Kars: {
    id: 36,
    lat: 40.6088,
    lng: 43.0977,
  },
  Kastamonu: {
    id: 37,
    lat: 41.3888,
    lng: 33.7825,
  },
  Kayseri: {
    id: 38,
    lat: 38.7312,
    lng: 35.4784,
  },
  Kırklareli: {
    id: 39,
    lat: 41.7373,
    lng: 27.2264,
  },
  Kırşehir: {
    id: 40,
    lat: 39.1428,
    lng: 34.1706,
  },
  Kocaeli: {
    id: 41,
    lat: 40.8531,
    lng: 29.8815,
  },
  Konya: {
    id: 42,
    lat: 37.8715,
    lng: 32.4849,
  },
  Kütahya: {
    id: 43,
    lat: 39.4167,
    lng: 29.9833,
  },
  Malatya: {
    id: 44,
    lat: 38.3557,
    lng: 38.3096,
  },
  Manisa: {
    id: 45,
    lat: 38.6191,
    lng: 27.4289,
  },
  Kahramanmaraş: {
    id: 46,
    lat: 37.5853,
    lng: 36.9376,
  },
  Mardin: {
    id: 47,
    lat: 37.3117,
    lng: 40.7436,
  },
  Muğla: {
    id: 48,
    lat: 37.2164,
    lng: 28.3636,
  },
  Muş: {
    id: 49,
    lat: 38.7478,
    lng: 41.6612,
  },
  Nevşehir: {
    id: 50,
    lat: 38.6244,
    lng: 34.7239,
  },
  Niğde: {
    id: 51,
    lat: 37.9667,
    lng: 34.6833,
  },
  Ordu: {
    id: 52,
    lat: 40.9833,
    lng: 37.8833,
  },
  Rize: {
    id: 53,
    lat: 41.0204,
    lng: 40.5237,
  },
  Sakarya: {
    id: 54,
    lat: 40.7767,
    lng: 30.3789,
  },
  Samsun: {
    id: 55,
    lat: 41.2794,
    lng: 36.3433,
  },
  Siirt: {
    id: 56,
    lat: 37.9442,
    lng: 41.9325,
  },
  Sinop: {
    id: 57,
    lat: 42.0231,
    lng: 35.1533,
  },
  Sivas: {
    id: 58,
    lat: 39.7453,
    lng: 37.0144,
  },
  Tekirdağ: {
    id: 59,
    lat: 40.9833,
    lng: 27.5167,
  },
  Tokat: {
    id: 60,
    lat: 40.3167,
    lng: 36.55,
  },
  Trabzon: {
    id: 61,
    lat: 41.0053,
    lng: 39.7267,
  },
  Tunceli: {
    id: 62,
    lat: 39.1053,
    lng: 39.5303,
  },
  Şanlıurfa: {
    id: 63,
    lat: 37.1591,
    lng: 38.7968,
  },
  Uşak: {
    id: 64,
    lat: 38.6825,
    lng: 29.4089,
  },
  Van: {
    id: 65,
    lat: 38.49,
    lng: 43.38,
  },
  Yozgat: {
    id: 66,
    lat: 39.82,
    lng: 34.8042,
  },
  Zonguldak: {
    id: 67,
    lat: 41.4567,
    lng: 31.7986,
  },
  Aksaray: {
    id: 68,
    lat: 38.3667,
    lng: 34.0333,
  },
  Bayburt: {
    id: 69,
    lat: 40.2556,
    lng: 40.2244,
  },
  Karaman: {
    id: 70,
    lat: 37.175,
    lng: 33.2156,
  },
  Kırıkkale: {
    id: 71,
    lat: 39.8467,
    lng: 33.5158,
  },
  Batman: {
    id: 72,
    lat: 37.8819,
    lng: 41.1358,
  },
  Şırnak: {
    id: 73,
    lat: 37.5167,
    lng: 42.4667,
  },
  Bartın: {
    id: 74,
    lat: 41.6344,
    lng: 32.3372,
  },
  Ardahan: {
    id: 75,
    lat: 41.1106,
    lng: 42.7025,
  },
  Iğdır: {
    id: 76,
    lat: 39.9167,
    lng: 44.0333,
  },
  Yalova: {
    id: 77,
    lat: 40.65,
    lng: 29.2667,
  },
  Karabük: {
    id: 78,
    lat: 41.2,
    lng: 32.6333,
  },
  Kilis: {
    id: 79,
    lat: 36.7167,
    lng: 37.1167,
  },
  Osmaniye: {
    id: 80,
    lat: 37.0742,
    lng: 36.2469,
  },
  Düzce: {
    id: 81,
    lat: 40.8431,
    lng: 31.1565,
  },
};
export default centers;
