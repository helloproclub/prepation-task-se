---
layout: post
title: blogAblog
date:   2021-04-24 20:54:10
categories: SE/Frontend
author: Moza Sajidah Putri Al Muzaffar
author_pic: https://github.com/svnflxvver/blogAblog-Frontend/blob/master/img/Moza.png
project_link: https://github.com/hidayattaufiqur/blogAblog // https://github.com/svnflxvver/blogAblog 
---


## Abstract
This application is created to give anyone the freedom of posting their first ever blog. 


## Description
blogAblog is a place for anyone to share any story. Story about life, love, school, hobby, funny things, or even as plain as how cute was that kitten you saw the other day, it's all welcomed here.


## How To
1. User accessing the url
2. Landing page shown to user
3. User navigates to the Blogs category
4. User creates new article (markdown format)
5. User is also able to read, edit, or delete articles


## Technology Used

| Platform | Framework | Bahasa Pemrograman |
| ------ | ------ | ------ |
| Backend | NodeJS ExpressJS | JavaScript |
| Frontend | Bootstrap | EJS & CSS |
| API | NodeJS ExpressJS | JavaScript |
| Database | Mongoose | MongoDB |

## API Documentation
- Method : GET
- URL : ```http://localhost:5000/articles/blog/title-of-a-longer-featured-blog-post```

```json
{
        "author": "Anonymous",
        "_id": "60819807b6826465d6feeee4",
        "createdAt": "2021-04-22T15:36:39.009Z",
        "title": "Title of a longer featured blog post",
        "description": "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.\r\n\r\n",
        "markdown": "Yeah, she dances to her own beat. Oh, no. You could've been the greatest. 'Cause, baby, you're a firework. Maybe a reason why all the doors are closed. Open up your heart and just let it begin. So très chic, yeah, she's a classic.\r\n\r\nBikinis, zucchinis, Martinis, no weenies. I know there will be sacrifice but that's the price. This is how we do it. I'm not sticking around to watch you go down. You think you're so rock and roll, but you're really just a joke. I know one spark will shock the world, yeah yeah. Can't replace you with a million rings.\r\n\r\nTrying to connect the dots, don't know what to tell my boss. Before you met me I was alright but things were kinda heavy. You just gotta ignite the light and let it shine. Glitter all over the room pink flamingos in the pool.\r\n\r\nHeading\r\nSuiting up for my crowning battle. If you only knew what the future holds. Bring the beat back. Peach-pink lips, yeah, everybody stares.\r\n\r\nSub-heading\r\nYou give a hundred reasons why, and you say you're really gonna try. Straight stuntin' yeah we do it like that. Calling out my name. ‘Cause I, I’m capable of anything.\r\n\r\nExample code block\r\nBefore you met me I was alright but things were kinda heavy. You just gotta ignite the light and let it shine.\r\n\r\nSub-heading\r\nYou got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out.\r\n\r\nGot a motel and built a fort out of sheets.\r\nYour kiss is cosmic, every move is magic.\r\nSuiting up for my crowning battle.\r\nTakes you miles high, so high, 'cause she’s got that one international smile.\r\n\r\nScared to rock the boat and make a mess.\r\nI could have rewrite your addiction.\r\nI know you get me so I let my walls come down.\r\nAfter a hurricane comes a rainbow.",
        "slug": "title-of-a-longer-featured-blog-post",
        "sanitizedHtml": "<p>Yeah, she dances to her own beat. Oh, no. You could've been the greatest. 'Cause, baby, you're a firework. Maybe a reason why all the doors are closed. Open up your heart and just let it begin. So très chic, yeah, she's a classic.</p>\n<p>Bikinis, zucchinis, Martinis, no weenies. I know there will be sacrifice but that's the price. This is how we do it. I'm not sticking around to watch you go down. You think you're so rock and roll, but you're really just a joke. I know one spark will shock the world, yeah yeah. Can't replace you with a million rings.</p>\n<p>Trying to connect the dots, don't know what to tell my boss. Before you met me I was alright but things were kinda heavy. You just gotta ignite the light and let it shine. Glitter all over the room pink flamingos in the pool.</p>\n<p>Heading\nSuiting up for my crowning battle. If you only knew what the future holds. Bring the beat back. Peach-pink lips, yeah, everybody stares.</p>\n<p>Sub-heading\nYou give a hundred reasons why, and you say you're really gonna try. Straight stuntin' yeah we do it like that. Calling out my name. ‘Cause I, I’m capable of anything.</p>\n<p>Example code block\nBefore you met me I was alright but things were kinda heavy. You just gotta ignite the light and let it shine.</p>\n<p>Sub-heading\nYou got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out.</p>\n<p>Got a motel and built a fort out of sheets.\nYour kiss is cosmic, every move is magic.\nSuiting up for my crowning battle.\nTakes you miles high, so high, 'cause she’s got that one international smile.</p>\n<p>Scared to rock the boat and make a mess.\nI could have rewrite your addiction.\nI know you get me so I let my walls come down.\nAfter a hurricane comes a rainbow.</p>\n",
        "__v": 0
    }
