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


<h2>This post is a simple Tutorial on how to setup a LAMP stack using docker-compose.</h2>
<p>If you have already installed docker &amp; docker-compose, you can ignore the below step.</p>
<p><code>$ sudo apt-get update</code>&nbsp;<code>$ sudo apt-get install docker-ce</code></p>
<p>else follow instructions&nbsp;<a href="https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce-1">here</a></p>
<p>This LEMP stack uses: NGINX latest alpine MYSQL 5.6.40 PHP 7.1-fpm-alpine mailhog (local mailing service) adminer (database admin) traefik (load balancer) portainer (to debug docker)</p>
<p>We are using alpine image for this tutorial as they are small &amp; compact in size. Alternatively you can also use PHP 5.6-fpm-alpine image.</p>
<p>Assuming that you have cloned this repository. Now navigate to the repository directory, and run below listed commands.</p>
<p><code>$ sudo docker build .</code></p>
<blockquote class="wp-block-quote"><p>On first executing the build command it will down load all the specified docker images. Then it will execute commands specified in the Dockerfile, for each image.</p></blockquote>
<p><code>$ sudo docker-compose up -d</code></p>
<blockquote class="wp-block-quote"><p>The docker-compose up command will start all the containers mentioned in the docker compose file in the detached mode, hence the -d. If all goes well, all the containers should be running now. You can verify this usin the below command.</p></blockquote>
<p><code>$ sudo docker-compose ps</code></p>
<blockquote class="wp-block-quote"><p>This will display status of all the container either in up OR exit state.</p></blockquote>
<p><code>$ sudo docker exec -it lampdock_nginx /bin/sh</code></p>
<blockquote class="wp-block-quote"><p>Above command can be used to attach to a running container (like a local bash). Alternatively you can change container name, to connect to other running containers.</p></blockquote>
<p>//ToDo : add folder structure.</p>
<h3><a href="https://github.com/naxrohan/docker-lemp-stack#further-reading--references-links"></a>Further Reading &amp; References links:</h3>
<ul><li><a href="https://docs.docker.com/samples/library/php/#how-to-install-more-php-extensions">how-to-install-more-php-extensions</a>.</li><li><a href="https://blog.docker.com/2015/04/tips-for-deploying-nginx-official-image-with-docker/">tips-for-deploying-nginx-official-image-with-docker</a>.</li><li><a href="http://geekyplatypus.com/dockerise-your-php-application-with-nginx-and-php7-fpm/">dockerise-your-php-application-with-nginx-and-php7-fpm</a>.</li><li><a href="https://stackoverflow.com/questions/49427530/fatal-error-uncaught-error-call-to-undefined-function-mysqli-connect">common mysql error</a>.</li><li><a href="https://serverfault.com/questions/840046/why-is-there-no-php-ini-file-when-i-install-php-in-a-docker-container">setup custom php ini file</a>.</li><li><a href="https://medium.com/@shakyShane/laravel-docker-part-1-setup-for-development-e3daaefaf3c">laravel-docker-part-1-setup-for-development</a>.</li></ul>
