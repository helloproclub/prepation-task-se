---
layout: post
title: "Personal Blog API"
date:   2021-04-22 19:49:24 +0900
categories: softwrae engineering / backend
author: Kadek Rizky Fransisca Putra
author_pic: cek my instagram:D => rizkyfransisca
project_link: https://github.com/rizkyfransisca/personal-blog-rizkyf-api
documentation: https://documenter.getpostman.com/view/11737444/TzJshe8o
---

## Abstrak
Ini adalah sebuah API Personal Blog Site yang digunakan untuk membuat artikel baru, melihat semua artikel,
melihat artikel yang spesifik atau satu artikel, mengupdate sebuah artikel dan menghapus sebuah artikel yang ada.

## Deskripsi
API ini menyediakan CRUD endpoints untuk Personal Blog Site saya, yang memiliki fitur seperti yang sudah saya sebutkan pada abstrak.

## Cara Kerja
1. Membuat artikel baru => hit endpoint "https://personal-blog-rizkyf-api.herokuapp.com/api/v1/blog" dan isi data sesuai yang diinginkan
2. Melihat semua artikel => hit endpoint "https://personal-blog-rizkyf-api.herokuapp.com/api/v1/blog"
3. Melihat artikel yang spesifik atau satu artikel => hit endpoint "https://personal-blog-rizkyf-api.herokuapp.com/api/v1/blog/:slug" , Contoh : "https://personal-blog-rizkyf-api.herokuapp.com/api/v1/blog/pengalaman-menjadi-anggota-baru-di-proclub"
4. Mengupdate sebuah artikel => hit endpoint "https://personal-blog-rizkyf-api.herokuapp.com/api/v1/blog/:idYangInginDiUpdate" , Contoh : "https://personal-blog-rizkyf-api.herokuapp.com/api/v1/blog/db7640bc-08a1-44c1-a980-c74f845a3547"
5. Menghapus sebuah artikel => hit endpoint "https://personal-blog-rizkyf-api.herokuapp.com/api/v1/blog/:idYangInginDihapus" , Contoh : "https://personal-blog-rizkyf-api.herokuapp.com/api/v1/blog/eadcb376-4251-492f-85ed-1f1e75cdbad8"


- Teknologi yang digunakan
- Bahasa pemrograman         : JavaScripts
- Database                   : PostgreSQL
- REST Server                : NodeJs dan ExpressJs