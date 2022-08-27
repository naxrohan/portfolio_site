---
title: 'Configuring a Docker PHP image'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: 'https://headstartdata.files.wordpress.com/2018/02/post.png'
date: 'Tue, 31 Dec 2019 14:32:38 +0000'
author:
  name: rohanjd
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: 'https://headstartdata.files.wordpress.com/2018/02/post.png'
category:
  - Docker
  - docker-compose
  - Dockerfile
  - PHP
---

<p> This post is mostly intended for docker beginners. Now, Getting straight to the point. In most use cases PHP is never us as a standalone container but is always used along with any/all elementals of the LAMP or LEMP stack.</p>

<p>Docker has its own mechanism known as <a href="https://docs.docker.com/compose/">docker-compose </a> that is very helpful in running multiple containers as a single stack. All the services that make up your app/stack have to be placed in <strong><em>docker-compose.yml </em></strong>along with other required configurations like Environment variable, synced files, container names, ports. The next important file related to configs is the <em><strong>Dockerfile</strong></em>, where you can run almost any linux command to build your custom image.</p>

<p>With this 2 points taken care of, let's go to selecting the PHP image, For  the sake of this post lets stick to the below two. </p>

<ul><li>Official PHP image: <a style="background-color:rgba(0,0,0,0) !important;" href="https://hub.docker.com/_/php">https://hub.docker.com/_/php</a>, since this is the official image, it support the latest PHP releases</li><li>Developer Friendly Bitnami: <a style="background-color:rgba(0,0,0,0) !important;" href="https://hub.docker.com/r/bitnami/php-fpm">https://hub.docker.com/r/bitnami/php-fpm</a></li></ul>

<p>For this Tutorial we will use the Official PHP image.</p>

<p>First add configurations to the <em>docker-compose.yml </em>file, full example <a href="https://gist.github.com/naxrohan/ef98f7d40962af02eb27206e617d8d40">here</a>.</p>

<pre class="wp-block-syntaxhighlighter-code"> services:
  php:
   build:
      context: './php/'
      args:
       PHP_VERSION: 7.2
    container_name: "test_php"
    networks:
      - backend
    environment:
      PHP_SENDMAIL_PATH: /usr/sbin/sendmail -t -i -S mailhog:1025
      DB_HOST: $DB_HOST
      DB_USER: $DB_USER
      DB_PASSWORD: $DB_PASSWORD
      DB_NAME: $DB_NAME
      DB_DRIVER: $DB_DRIVER
    volumes:
        - ./src/:/usr/local/apache2/htdocs/ #set the docroot folder
        - ./php/php.ini:/usr/local/etc/php/php.ini #set custom php.ini file</pre>

<p>Here, "<em>context: './php/' "</em> is the location/folder of the PHP specific config files that we will discuss later. The next important thing is the volumes section, here we can set the docroot folder, and the customized php.ini file.</p>

<p>The section before the <strong>":"</strong> is the absolute path the local resource and the part after the colon is the absolute path inside the docker image.  The next question would be how do we get the php.ini file from the docker image ?  there is a docker command that can be used for this:</p>

<blockquote class="wp-block-quote"><p>docker cp docker-stack_php:/usr/local/etc/php/php.ini php.ini</p></blockquote>

<p>Next is the Dockerfile, example below, full example <a href="https://gist.github.com/naxrohan/cbc943a1b48ed4ab14a4384e19f4edf7">here</a>.</p>

<pre class="wp-block-syntaxhighlighter-code">FROM php:7.2

#======Install Linux Dependencies
RUN apt-get install libjpeg-dev -y
RUN apt-get install libpng-dev -y

#======PHP Extentions
RUN docker-php-ext-install gd
RUN docker-php-ext-install zip

#======Install Composer
RUN php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer

#======Install Composer packages like Drush
RUN composer global require drush/drush:8.x
RUN ln -s /root/.composer/vendor/drush/drush/drush /usr/bin/drush

#======Copy the php.ini file
#COPY  "php.ini" "$PHP_INI_DIR/php.ini"
</pre>

<p>"FROM" defines the target image, The "RUN" keyword can be used to run almost any linux command, The official docker image for php has a command "docker-php-ext-install" to install common  php extensions, more details can be found here <a href="https://hub.docker.com/_/php">https://hub.docker.com/_/php</a>. As can be see the Dockerfile is intended to house all your useful commands that can help build your custom docker image. As can be seen docker image are pretty straight forward to configure if you have some experience with using linux commands. Thats it thanks for reading. </p>

