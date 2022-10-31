---
title: 'LAMP stack with Docker'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: 'https://headstartdata.files.wordpress.com/2018/02/post.png'
date: 'Thu, 08 Aug 2019 12:24:02 +0000'
author:
  name: rohanjd
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: 'https://headstartdata.files.wordpress.com/2018/02/post.png'
category:
  - Docker
  - docker-compose
  - LAMP
---

### This post is a simple Tutorial on how to setup a LAMP stack using docker-compose.


If you have already installed docker &amp; docker-compose, you can ignore the below step.

&nbsp;
&nbsp;

```sh
$ sudo apt-get update
```

&nbsp;
&nbsp;

> $ sudo apt-get install docker-ce

&nbsp;
&nbsp;

Else follow instructions&nbsp;[here](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce-1)	


&nbsp;
&nbsp;

This LEMP stack uses: NGINX latest alpine MYSQL 5.6.40 PHP 7.1-fpm-alpine mailhog (local mailing service) adminer (database admin) traefik (load balancer) portainer (to debug docker)

&nbsp;
&nbsp;

We are using alpine image for this tutorial as they are small &amp; compact in size. 
Alternatively you can also use PHP 5.6-fpm-alpine image.

&nbsp;
&nbsp;

Assuming that you have cloned this repository. Now navigate to the repository directory, and run below listed commands.

&nbsp;
&nbsp;

> $ sudo docker build .

&nbsp;
&nbsp;

```
On first executing the build command it will down load all the specified docker images. 
Then it will execute commands specified in the Dockerfile, for each image.
```

&nbsp;
&nbsp;

> $ sudo docker-compose up -d

&nbsp;
&nbsp;

```
The docker-compose up command will start all the containers mentioned in the docker compose file in the detached mode, hence the -d. 
If all goes well, all the containers should be running now. You can verify this usin the below command.
```

&nbsp;
&nbsp;

> $ sudo docker-compose ps

&nbsp;
&nbsp;

```
This will display status of all the container either in up OR exit state.
```

&nbsp;
&nbsp;


> $ sudo docker exec -it lampdock_nginx /bin/sh

&nbsp;
&nbsp;

```
Above command can be used to attach to a running container (like a local bash). 
Alternatively you can change container name, to connect to other running containers.
```

&nbsp;
&nbsp;

### Further Reading &amp; References links:</h3>


&nbsp;
&nbsp;

- ["how-to-install-more-php-extensions](https://docs.docker.com/samples/library/php/#how-to-install-more-php-extensions)	
- ["tips-for-deploying-nginx-official-image-with-docker](https://blog.docker.com/2015/04/tips-for-deploying-nginx-official-image-with-docker/)	
- ["dockerise-your-php-application-with-nginx-and-php7-fpm](http://geekyplatypus.com/dockerise-your-php-application-with-nginx-and-php7-fpm/)	
- ["common mysql error](https://stackoverflow.com/questions/49427530/fatal-error-uncaught-error-call-to-undefined-function-mysqli-connect)	
- ["setup custom php ini file](https://serverfault.com/questions/840046/why-is-there-no-php-ini-file-when-i-install-php-in-a-docker-container)	
- ["laravel-docker-part-1-setup-for-development](https://medium.com/@shakyShane/laravel-docker-part-1-setup-for-development-e3daaefaf3c)	
