<p align="center">
    <img  height="80" src="https://cdn.rawgit.com/ElemeFE/element/dev/element_logo.svg">
    <img width="88" height="80" src="https://vuejs.org/images/logo.png">
    <img width="300" src="https://laravel.com/assets/img/components/logo-laravel.svg">
</p>

## Tcode-Admin

- Based on [Laravel 5.4](http://d.laravel-china.org/docs/5.4)+[Vue 2.0](https://cn.vuejs.org/) using [Element](http://element.eleme.io/).
- [FontAwesome](http://fontawesome.io/icons/) icons.

## 环境要求
- PHP >= 5.6.4
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
## 安装
```
    cp .env.example .env
```
```
    vim .env        //修改数据库信息(DB_DATABASE, DB_USERNAME, DB_PASSWORD)
```
```
    php artisan key:generate
```
```
    php artisan migrate:refresh --seed   //生成数据库表
```



