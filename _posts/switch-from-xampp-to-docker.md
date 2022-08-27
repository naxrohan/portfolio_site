---
title: 'Switch from Xampp to Docker'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: 'https://headstartdata.files.wordpress.com/2018/02/post.png'
date: 'Thu, 08 Aug 2019 11:49:07 +0000'
author:
  name: rohanjd
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: 'https://headstartdata.files.wordpress.com/2018/02/post.png'
category:
  - containers
  - docker
  - PHP
  - xampp
---


<h2>Why switch from Xampp to Docker, for PHP developers, my experience.</h2>
<p>For the uninitiated, LAMP stands for: </p>
<ul><li>Linux</li><li>Apache (OR Nginx , in that case it become LEMP stack).</li><li>Mysql,  MariaDB</li><li>PHP, Perl or Python</li></ul>
<p>Many LAMP developer prefer using XAMPP or MAMPP to setup a quick development environment. Some developers even prefer installing the stack directly on their linux machines, These are great and convenient approaches for most cases.</p>
<p>However, there are few issue that I have faced after using these:</p>
<ul><li>Switching PHP version between 5.5 , 5.6 or 7.1, 7.2 or 7.3 can get messy at times, when using XAMPP.</li><li>Similarly MySql upgrade can have issues, when updating version.</li><li>If not done correctly you can end up with multiple  XAMPP setups.</li><li>Adding extensions like ssh2/gnupg..etc in different version of XAMPP/PHP can become a tedious task.</li><li>Directly installing LAMP on your Linux machine can open another can of worms, if not done correctly. Since there is not isolation between your Linux system and LAMP setup.</li></ul>
<p>As a beginner , I have myself had to format my Linux system many a times, to solve partitions issues or broken Dependencies.</p>
<p class=\"has-large-font-size\">Docker to the rescue...</p>
<p class=\"has-medium-font-size\">What is Docker ?</p>
<p>Simply said, <a href=\"https://en.wikipedia.org/wiki/Docker_(software)\">Docker</a> is a Containerization  Software, that runs on the Docker Engine, This make it easier to create, deploy, and run applications by using containers.</p>
<p class=\"has-medium-font-size\">Well then, What are Containers?</p>
<p>A <a href=\"https://www.docker.com/resources/what-container\">container</a> is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.</p>
<p class=\"has-normal-font-size\"><span style=\"text-decoration:underline;\">Well Docker is much more that this, and one of the leading technologies in the market place now, well there are lots of great articles out there on more advance topics. But with context to this Post,</span> am just explaining few basic advantages of Docker.</p>
<p class=\"has-medium-font-size\">How can Docker help LAMP developers?</p>
<ul><li>You can consider Docker as an isolated Container, where all process run in a sort of Sandbox.</li><li>This isolation is the a great advantage for developers. You can setup something and if you make a mistake,  no big deal you can destroy the Container and restart in few seconds.</li><li>Docker is Cross-platform, it can run on Linux, Mac or Windows.</li><li>You can replicate your exact production environment locally, if done correctly.</li><li>You can find official <a href=\"https://hub.docker.com/_/php\">PHP images</a> for Docker right from php 5.6 all the way up to latest PHP releases.</li><li>Switching PHP version OR adding extensions is streamlined &amp; can be done via the Dockerfile.</li><li>There are <a href=\"https://hub.docker.com/search?q=&amp;type=image\">Docker image </a>available  for almost everything from PHP to Mongodb, Couchdb, Redis, Solr ..and many more..</li><li>Integration &amp; installation of these services is effortless.</li><li>Docker image are immutable, meaning: the images are readonly and can be reused multiple times, in different setups.</li></ul>
<p class=\"has-medium-font-size\">Conclusion :</p>
<p>LAMP development is come a long way since Xampp, and Docker is a tool that will take it in to the future. Docker containerization is a vast &amp; interesting topic, using it to setup a local environment will just be the tip of the iceberg.</p>
