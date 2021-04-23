# Housend App

| Judul | Tanggal | Kategori | Platform | Pembuat | Tautan Projek |
| ------ | ------ | ------ | ------ | ------ | ------ |
| Housend | 22 April 2021 | Software Engineering | Android | Hilman Taris Muttaqin | https://gitlab.com/housend/housend-backend <br/> https://gitlab.com/housend/housend-mobile |

## Abstrak

Project ini merupakan aplikasi untuk melihat list dari tempat penginapan dan juga kos kosan.

## Deskripsi

Aplikasi ini dibuat khusus untuk platform
android dengan spesifikasi minimum API SDK 24 atau android 7.0 [Nougat](https://developer.android.com/studio/releases/platforms?hl=id#7.0)
Terdiri dari 2 activity :
- Main Activity yang berisi list dari tempat penginapan dan juga kos kosan
- Detail Activity yang berisi detail dari tempat penginapan dan juga kos kosan

Data dari aplikasi ini diambil langsung dari server [Housend](https://housend-develop-proclub.000webhostapp.com/).

## Tech Stack

| Platform | Framework | Bahasa Pemrograman |
| ------ | ------ | ------ |
| Android | Android Native Framework | Kotlin |
| API / Backend | Laravel Framework 8.37.0  | PHP |
| Database | MySQL | MySQL |

## API Documentation

### Get List of Place
- Method : GET
- Host : https://housend-develop-proclub.000webhostapp.com/
- URL : ```/api/boarding?city=&province=```

```json
{
    "status": "success",
    "success": true,
    "code": 200,
    "message": "",
    "data": [
        {
            "id": 1,
            "name": "Sanctuary Home",
            "thumb": "https://firebasestorage.googleapis.com/v0/b/housend-6ae5a.appspot.com/o/room%2Fdeborah-cortelazzi-gREquCUXQLI-unsplash.jpg?alt=media&token=a808ed42-218a-41c3-ad7e-285b16bc1d01",
            "rating": 4.3,
            "price": 2000000,
            "unit": "bln",
            "street_name": "Jl.Cijawura",
            "city": "Bandung",
            "created_at": "2021-04-19T08:15:45.000000Z",
            "updated_at": "2021-04-19T08:15:45.000000Z"
        },
        {
            "id": 2,
            "name": "Daisy de jure",
            "thumb": "https://firebasestorage.googleapis.com/v0/b/housend-6ae5a.appspot.com/o/room%2Fchastity-cortijo-98WE9hWWjiQ-unsplash.jpg?alt=media&token=ddc8eab3-6f0e-4b3d-8d8f-f3397c9bff8c",
            "rating": 4,
            "price": 1500000,
            "unit": "bln",
            "street_name": "Jl.Buahbatu",
            "city": "Bandung",
            "created_at": "2021-04-21T09:08:22.000000Z",
            "updated_at": "2021-04-21T09:08:22.000000Z"
        }
    ]
}
```

### Get Detail Place
- Method : GET
- Host : https://housend-develop-proclub.000webhostapp.com/
- URL : ```/api/boarding?id=1```

```json
{
  "status": "success",
  "success": true,
  "code": 200,
  "message": "",
  "data": {
    "boarding": {
      "id": 1,
      "name": "Sanctuary Home",
      "thumb": "https://firebasestorage.googleapis.com/v0/b/housend-6ae5a.appspot.com/o/room%2Fdeborah-cortelazzi-gREquCUXQLI-unsplash.jpg?alt=media&token=a808ed42-218a-41c3-ad7e-285b16bc1d01",
      "rating": 4.3,
      "price": 2000000,
      "unit": "bln",
      "available": 5,
      "status": 1,
      "address": "Komp.Cijawura 19 No.13",
      "street_name": "Jl.Cijawura",
      "city": "Bandung",
      "province": "Jawa Barat",
      "lat": "-6.253098",
      "lng": "106.807535",
      "created_at": "2021-04-19T08:15:45.000000Z",
      "updated_at": "2021-04-19T08:15:45.000000Z"
    },
    "facilities": [
      {
        "facility": "WC Umum",
        "unit": "pcs",
        "quantity": 3
      },
      {
        "facility": "Laundry",
        "unit": "tempat",
        "quantity": 2
      }
    ],
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/housend-6ae5a.appspot.com/o/room%2Fian-dooley-Jg2bsrWF2_o-unsplash.jpg?alt=media&token=f59b3508-7b3e-4c8e-9dfb-9e43b72574cd",
      "https://firebasestorage.googleapis.com/v0/b/housend-6ae5a.appspot.com/o/room%2Fian-dooley-_-JR5TxKNSo-unsplash.jpg?alt=media&token=7ece0d69-a19e-482c-88d8-1a81487f94e9",
      "https://firebasestorage.googleapis.com/v0/b/housend-6ae5a.appspot.com/o/room%2Fpatrick-perkins-3wylDrjxH-E-unsplash.jpg?alt=media&token=1d520d06-356d-4144-80c0-8cc54283810d"
    ]
  }
}
```