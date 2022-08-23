const blogData = {
    "rss":{
       "channel":{
          "title":"Clay Apps blog",
          "link":"https://tech4coderstack.wordpress.com",
          "description":"My Web, Mobile, JS experiences & journey.",
          "pubDate":"Tue, 31 Dec 2019 19:36:41 +0000",
          "tags":[
            "bitbucket","config",
            "containers","docker","docker-compose",
            "dockerfile","git","github","gitlab",
            "lamp","php","ssh","terminal","xampp",
          ],

          "item":[
             {
                "title":"The Journey Begins",
                "link":"https://tech4coderstack.wordpress.com/2019/04/10/the-journey-begins/",
                "pubDate":"Wed, 10 Apr 2019 05:19:09 +0000",
                "dc:creator":"rohanjd",
                "guid":"https://tech4coderstack.wordpress.com/?p=3",
                "description":"",
                "content:encoded":{
                   "__cdata":"Thanks for joining me! <blockquote>Good company in a journey makes the way seem shorter. — Izaak Walton</blockquote><img class=\"wp-image-7 size-full\" src=\"https://headstartdata.files.wordpress.com/2018/02/post.png\" alt=\"post\" width=\"1000\" height=\"563\" />"
                },
                "excerpt:encoded":{
                   "__cdata":""
                },
                "wp:post_id":3,
                "wp:post_date":"2019-04-10 05:19:09",
                "wp:post_date_gmt":"2019-04-10 05:19:09",
                "wp:comment_status":"open",
                "wp:ping_status":"open",
                "wp:post_name":"the-journey-begins",
                "wp:status":"publish",
                "wp:post_parent":0,
                "wp:menu_order":0,
                "wp:post_type":"post",
                "wp:post_password":"",
                "wp:is_sticky":0,
                "category":{
                   "__cdata":"Uncategorized"
                },
             },
             {
                "title":"Home",
                "link":"https://tech4coderstack.wordpress.com/2019/04/10/home/",
                "pubDate":"Wed, 10 Apr 2019 05:24:10 +0000",
                "dc:creator":"rohanjd",
                "guid":"https://tech4coderstack.wordpress.com/2019/04/10/home/",
                "description":"",
                "content:encoded":{
                   "__cdata":""
                },
                "excerpt:encoded":{
                   "__cdata":""
                },
                "wp:post_id":6,
                "wp:post_date":"2019-04-10 05:24:10",
                "wp:post_date_gmt":"2019-04-10 05:24:10",
                "wp:comment_status":"closed",
                "wp:ping_status":"closed",
                "wp:post_name":"home",
                "wp:status":"publish",
                "wp:post_parent":0,
                "wp:menu_order":0,
                "wp:post_type":"nav_menu_item",
                "wp:post_password":"",
                "wp:is_sticky":0,
                "category":{
                   "__cdata":"Primary"
                }
             },
             {
                "title":"Switch from Xampp to Docker.",
                "link":"https://tech4coderstack.wordpress.com/2019/08/08/switch-from-xampp-to-docker/",
                "pubDate":"Thu, 08 Aug 2019 11:49:07 +0000",
                "dc:creator":"rohanjd",
                "guid":"https://tech4coderstack.wordpress.com/?p=9",
                "description":"",
                "content:encoded":{
                   "__cdata":"\n<h2>Why switch from Xampp to Docker, for PHP developers, my experience.</h2>\n\n\n\n<p>For the uninitiated, LAMP stands for: </p>\n\n\n\n<ul><li>Linux</li><li>Apache (OR Nginx , in that case it become LEMP stack).</li><li>Mysql,  MariaDB</li><li>PHP, Perl or Python</li></ul>\n\n\n\n<p>Many LAMP developer prefer using XAMPP or MAMPP to setup a quick development environment. Some developers even prefer installing the stack directly on their linux machines, These are great and convenient approaches for most cases.</p>\n\n\n\n<p>However, there are few issue that I have faced after using these:</p>\n\n\n\n<ul><li>Switching PHP version between 5.5 , 5.6 or 7.1, 7.2 or 7.3 can get messy at times, when using XAMPP.</li><li>Similarly MySql upgrade can have issues, when updating version.</li><li>If not done correctly you can end up with multiple  XAMPP setups.</li><li>Adding extensions like ssh2/gnupg..etc in different version of XAMPP/PHP can become a tedious task.</li><li>Directly installing LAMP on your Linux machine can open another can of worms, if not done correctly. Since there is not isolation between your Linux system and LAMP setup.</li></ul>\n\n\n\n<p>As a beginner , I have myself had to format my Linux system many a times, to solve partitions issues or broken Dependencies.</p>\n\n\n\n<p class=\"has-large-font-size\">Docker to the rescue...</p>\n\n\n\n<p class=\"has-medium-font-size\">What is Docker ?</p>\n\n\n\n<p>Simply said, <a href=\"https://en.wikipedia.org/wiki/Docker_(software)\">Docker</a> is a Containerization  Software, that runs on the Docker Engine, This make it easier to create, deploy, and run applications by using containers.</p>\n\n\n\n<p class=\"has-medium-font-size\">Well then, What are Containers?</p>\n\n\n\n<p>A <a href=\"https://www.docker.com/resources/what-container\">container</a> is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.</p>\n\n\n\n<p class=\"has-normal-font-size\"><span style=\"text-decoration:underline;\">Well Docker is much more that this, and one of the leading technologies in the market place now, well there are lots of great articles out there on more advance topics. But with context to this Post,</span> am just explaining few basic advantages of Docker.</p>\n\n\n\n<p class=\"has-medium-font-size\">How can Docker help LAMP developers?</p>\n\n\n\n<ul><li>You can consider Docker as an isolated Container, where all process run in a sort of Sandbox.</li><li>This isolation is the a great advantage for developers. You can setup something and if you make a mistake,  no big deal you can destroy the Container and restart in few seconds.</li><li>Docker is Cross-platform, it can run on Linux, Mac or Windows.</li><li>You can replicate your exact production environment locally, if done correctly.</li><li>You can find official <a href=\"https://hub.docker.com/_/php\">PHP images</a> for Docker right from php 5.6 all the way up to latest PHP releases.</li><li>Switching PHP version OR adding extensions is streamlined &amp; can be done via the Dockerfile.</li><li>There are <a href=\"https://hub.docker.com/search?q=&amp;type=image\">Docker image </a>available  for almost everything from PHP to Mongodb, Couchdb, Redis, Solr ..and many more..</li><li>Integration &amp; installation of these services is effortless.</li><li>Docker image are immutable, meaning: the images are readonly and can be reused multiple times, in different setups.</li></ul>\n\n\n\n<p class=\"has-medium-font-size\">Conclusion :</p>\n\n\n\n<p>LAMP development is come a long way since Xampp, and Docker is a tool that will take it in to the future. Docker containerization is a vast &amp; interesting topic, using it to setup a local environment will just be the tip of the iceberg.</p>\n"
                },
                "excerpt:encoded":{
                   "__cdata":""
                },
                "wp:post_id":9,
                "wp:post_date":"2019-08-08 11:49:07",
                "wp:post_date_gmt":"2019-08-08 11:49:07",
                "wp:comment_status":"open",
                "wp:ping_status":"open",
                "wp:post_name":"switch-from-xampp-to-docker",
                "wp:status":"publish",
                "wp:post_parent":0,
                "wp:menu_order":0,
                "wp:post_type":"post",
                "wp:post_password":"",
                "wp:is_sticky":0,
                "category":[
                   {
                      "__cdata":"Containers"
                   },
                   {
                      "__cdata":"Docker"
                   },
                   {
                      "__cdata":"PHP"
                   },
                   {
                      "__cdata":"Uncategorized"
                   },
                   {
                      "__cdata":"xampp"
                   }
                ]
             },
             {
                "title":"LAMP stack with Docker",
                "link":"https://tech4coderstack.wordpress.com/2019/08/08/lamp-stack-with-docker/",
                "pubDate":"Thu, 08 Aug 2019 12:24:02 +0000",
                "dc:creator":"rohanjd",
                "guid":"https://tech4coderstack.wordpress.com/?p=17",
                "description":"",
                "content:encoded":{
                   "__cdata":"\n<h2>This post is a simple Tutorial on how to setup a LAMP stack using docker-compose.</h2>\n\n\n\n<p>If you have already installed docker &amp; docker-compose, you can ignore the below step.</p>\n\n\n\n<p><code>$ sudo apt-get update</code>&nbsp;<code>$ sudo apt-get install docker-ce</code></p>\n\n\n\n<p>else follow instructions&nbsp;<a href=\"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce-1\">here</a></p>\n\n\n\n<p>This LEMP stack uses: NGINX latest alpine MYSQL 5.6.40 PHP 7.1-fpm-alpine mailhog (local mailing service) adminer (database admin) traefik (load balancer) portainer (to debug docker)</p>\n\n\n\n<p>We are using alpine image for this tutorial as they are small &amp; compact in size. Alternatively you can also use PHP 5.6-fpm-alpine image.</p>\n\n\n\n<p>Assuming that you have cloned this repository. Now navigate to the repository directory, and run below listed commands.</p>\n\n\n\n<p><code>$ sudo docker build .</code></p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>On first executing the build command it will down load all the specified docker images. Then it will execute commands specified in the Dockerfile, for each image.</p></blockquote>\n\n\n\n<p><code>$ sudo docker-compose up -d</code></p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>The docker-compose up command will start all the containers mentioned in the docker compose file in the detached mode, hence the -d. If all goes well, all the containers should be running now. You can verify this usin the below command.</p></blockquote>\n\n\n\n<p><code>$ sudo docker-compose ps</code></p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>This will display status of all the container either in up OR exit state.</p></blockquote>\n\n\n\n<p><code>$ sudo docker exec -it lampdock_nginx /bin/sh</code></p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>Above command can be used to attach to a running container (like a local bash). Alternatively you can change container name, to connect to other running containers.</p></blockquote>\n\n\n\n<p>//ToDo : add folder structure.</p>\n\n\n\n<h3><a href=\"https://github.com/naxrohan/docker-lemp-stack#further-reading--references-links\"></a>Further Reading &amp; References links:</h3>\n\n\n\n<ul><li><a href=\"https://docs.docker.com/samples/library/php/#how-to-install-more-php-extensions\">how-to-install-more-php-extensions</a>.</li><li><a href=\"https://blog.docker.com/2015/04/tips-for-deploying-nginx-official-image-with-docker/\">tips-for-deploying-nginx-official-image-with-docker</a>.</li><li><a href=\"http://geekyplatypus.com/dockerise-your-php-application-with-nginx-and-php7-fpm/\">dockerise-your-php-application-with-nginx-and-php7-fpm</a>.</li><li><a href=\"https://stackoverflow.com/questions/49427530/fatal-error-uncaught-error-call-to-undefined-function-mysqli-connect\">common mysql error</a>.</li><li><a href=\"https://serverfault.com/questions/840046/why-is-there-no-php-ini-file-when-i-install-php-in-a-docker-container\">setup custom php ini file</a>.</li><li><a href=\"https://medium.com/@shakyShane/laravel-docker-part-1-setup-for-development-e3daaefaf3c\">laravel-docker-part-1-setup-for-development</a>.</li></ul>\n"
                },
                "excerpt:encoded":{
                   "__cdata":""
                },
                "wp:post_id":17,
                "wp:post_date":"2019-08-08 12:24:02",
                "wp:post_date_gmt":"2019-08-08 12:24:02",
                "wp:comment_status":"open",
                "wp:ping_status":"open",
                "wp:post_name":"lamp-stack-with-docker",
                "wp:status":"publish",
                "wp:post_parent":0,
                "wp:menu_order":0,
                "wp:post_type":"post",
                "wp:post_password":"",
                "wp:is_sticky":0,
                "category":[
                   {
                      "__cdata":"Docker"
                   },
                   {
                      "__cdata":"docker-compose"
                   },
                   {
                      "__cdata":"LAMP"
                   },
                   {
                      "__cdata":"Uncategorized"
                   }
                ],
                
             },
             {
                "title":"Configuring a Docker PHP image",
                "link":"https://tech4coderstack.wordpress.com/2019/12/31/configuring-a-docker-php-image/",
                "pubDate":"Tue, 31 Dec 2019 14:32:38 +0000",
                "dc:creator":"rohanjd",
                "guid":"https://tech4coderstack.wordpress.com/?p=38",
                "description":"",
                "content:encoded":{
                   "__cdata":"\n<p> This post is mostly intended for docker beginners. Now, Getting straight to the point. In most use cases PHP is never us as a standalone container but is always used along with any/all elementals of the LAMP or LEMP stack.</p>\n\n\n\n<p>Docker has its own mechanism known as <a href=\"https://docs.docker.com/compose/\">docker-compose </a> that is very helpful in running multiple containers as a single stack. All the services that make up your app/stack have to be placed in <strong><em>docker-compose.yml </em></strong>along with other required configurations like Environment variable, synced files, container names, ports. The next important file related to configs is the <em><strong>Dockerfile</strong></em>, where you can run almost any linux command to build your custom image.</p>\n\n\n\n<p>With this 2 points taken care of, let's go to selecting the PHP image, For  the sake of this post lets stick to the below two. </p>\n\n\n\n<ul><li>Official PHP image: <a style=\"background-color:rgba(0,0,0,0) !important;\" href=\"https://hub.docker.com/_/php\">https://hub.docker.com/_/php</a>, since this is the official image, it support the latest PHP releases</li><li>Developer Friendly Bitnami: <a style=\"background-color:rgba(0,0,0,0) !important;\" href=\"https://hub.docker.com/r/bitnami/php-fpm\">https://hub.docker.com/r/bitnami/php-fpm</a></li></ul>\n\n\n\n<p>For this Tutorial we will use the Official PHP image.</p>\n\n\n\n<p>First add configurations to the <em>docker-compose.yml </em>file, full example <a href=\"https://gist.github.com/naxrohan/ef98f7d40962af02eb27206e617d8d40\">here</a>.</p>\n\n\n\n<pre class=\"wp-block-syntaxhighlighter-code\"> services:\n  php:\n   build:\n      context: './php/'\n      args:\n       PHP_VERSION: 7.2\n    container_name: \"test_php\"\n    networks:\n      - backend\n    environment:\n      PHP_SENDMAIL_PATH: /usr/sbin/sendmail -t -i -S mailhog:1025\n      DB_HOST: $DB_HOST\n      DB_USER: $DB_USER\n      DB_PASSWORD: $DB_PASSWORD\n      DB_NAME: $DB_NAME\n      DB_DRIVER: $DB_DRIVER\n    volumes:\n        - ./src/:/usr/local/apache2/htdocs/ #set the docroot folder\n        - ./php/php.ini:/usr/local/etc/php/php.ini #set custom php.ini file</pre>\n\n\n\n<p>Here, \"<em>context: './php/' \"</em> is the location/folder of the PHP specific config files that we will discuss later. The next important thing is the volumes section, here we can set the docroot folder, and the customized php.ini file.</p>\n\n\n\n<p>The section before the <strong>\":\"</strong> is the absolute path the local resource and the part after the colon is the absolute path inside the docker image.  The next question would be how do we get the php.ini file from the docker image ?  there is a docker command that can be used for this:</p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>docker cp docker-stack_php:/usr/local/etc/php/php.ini php.ini</p></blockquote>\n\n\n\n<p>Next is the Dockerfile, example below, full example <a href=\"https://gist.github.com/naxrohan/cbc943a1b48ed4ab14a4384e19f4edf7\">here</a>.</p>\n\n\n\n<pre class=\"wp-block-syntaxhighlighter-code\">FROM php:7.2\n\n#======Install Linux Dependencies\nRUN apt-get install libjpeg-dev -y\nRUN apt-get install libpng-dev -y\n\n#======PHP Extentions\nRUN docker-php-ext-install gd\nRUN docker-php-ext-install zip\n\n#======Install Composer\nRUN php -r \"readfile('http://getcomposer.org/installer');\" | php -- --install-dir=/usr/bin/ --filename=composer\n\n#======Install Composer packages like Drush\nRUN composer global require drush/drush:8.x\nRUN ln -s /root/.composer/vendor/drush/drush/drush /usr/bin/drush\n\n#======Copy the php.ini file\n#COPY  \"php.ini\" \"$PHP_INI_DIR/php.ini\"</pre>\n\n\n\n<p>\"FROM\" defines the target image, The \"RUN\" keyword can be used to run almost any linux command, The official docker image for php has a command \"docker-php-ext-install\" to install common  php extensions, more details can be found here <a href=\"https://hub.docker.com/_/php\">https://hub.docker.com/_/php</a>. As can be see the Dockerfile is intended to house all your useful commands that can help build your custom docker image. As can be seen docker image are pretty straight forward to configure if you have some experience with using linux commands. Thats it thanks for reading. </p>\n\n\n\n<p></p>\n"
                },
                "excerpt:encoded":{
                   "__cdata":""
                },
                "wp:post_id":38,
                "wp:post_date":"2019-12-31 14:32:38",
                "wp:post_date_gmt":"2019-12-31 14:32:38",
                "wp:comment_status":"open",
                "wp:ping_status":"open",
                "wp:post_name":"configuring-a-docker-php-image",
                "wp:status":"publish",
                "wp:post_parent":0,
                "wp:menu_order":0,
                "wp:post_type":"post",
                "wp:post_password":"",
                "wp:is_sticky":0,
                "category":[
                   {
                      "__cdata":"Docker"
                   },
                   {
                      "__cdata":"docker-compose"
                   },
                   {
                      "__cdata":"Dockerfile"
                   },
                   {
                      "__cdata":"PHP"
                   },
                   {
                      "__cdata":"Uncategorized"
                   }
                ],
                
             },
             {
                "title":"Setting up 2 different git ssh keys.",
                "link":"https://tech4coderstack.wordpress.com/2019/12/10/setting-up-2-different-git-ssh-keys/",
                "pubDate":"Tue, 10 Dec 2019 19:49:43 +0000",
                "dc:creator":"rohanjd",
                "guid":"https://tech4coderstack.wordpress.com/?p=47",
                "description":"",
                "content:encoded":{
                   "__cdata":"\n<p>I have come across this situation few times where there is a need to connect to 2 or more different repositories at the same time, and configure ssh key for them all. For example : github.com, gitlab.com &amp; bitbucket simulations.</p>\n\n\n\n<p>The simpler solution would be to add the same ssh key to all the 3 site, this is ok but can cause issues later, if it does the below suggestion is for you.</p>\n\n\n\n<h2>Step 1: Create a new SSH key, for the account.</h2>\n\n\n\n<p>First run below command, place in your email id. </p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>$ ssh-keygen -t rsa -b 4096 -C \"email.id@example.com\"</p></blockquote>\n\n\n\n<p>Next important thing, add the full path to the file where the key must be generated, as indicated in the below image. Then enter your secret phrase.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"aligncenter size-large\"><img src=\"https://tech4coderstack.files.wordpress.com/2019/12/screen12.png?w=1024\" alt=\"\" class=\"wp-image-50\" /><figcaption>Create new ssh key.</figcaption></figure></div>\n\n\n\n<h2>Step 2: Update the ssh config file.</h2>\n\n\n\n<p>Navigate to the  <em>~/.ssh</em> folder on your machine, and open the config file with your favorite  text editor. If this file doesn’t  exist you can create one.</p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>$ vi ~/.ssh/config</p></blockquote>\n\n\n\n<p>Using the three keywords shown below add in the key details. </p>\n\n\n\n<ul><li>Host , this should be the domain of the repository being cloned.</li><li>HostName, can be set similar to Host, in most cases.</li><li>IdentityFile, should have the same path mentioned when creating the key.</li></ul>\n\n\n\n<blockquote class=\"wp-block-quote has-text-align-left\"><p># Gitlab.org</p><p>Host gitlab.com</p><p>  HostName gitlab.com</p><p>  IdentityFile ~/.ssh/gitlab</p><p>  UseKeychain yes</p></blockquote>\n\n\n\n<figure class=\"wp-block-image size-large\"><img src=\"https://tech4coderstack.files.wordpress.com/2019/12/screen1.png?w=664\" alt=\"\" class=\"wp-image-52\" /><figcaption>Example of the finished file.</figcaption></figure>\n\n\n\n<p>Once all the keys are created and added on the ssh config file, restart the terminal or command window. Try few pull requests, thats it.. it should work.</p>\n"
                },
                "excerpt:encoded":{
                   "__cdata":""
                },
                "wp:post_id":47,
                "wp:post_date":"2019-12-10 19:49:43",
                "wp:post_date_gmt":"2019-12-10 19:49:43",
                "wp:comment_status":"open",
                "wp:ping_status":"open",
                "wp:post_name":"setting-up-2-different-git-ssh-keys",
                "wp:status":"publish",
                "wp:post_parent":0,
                "wp:menu_order":0,
                "wp:post_type":"post",
                "wp:post_password":"",
                "wp:is_sticky":0,
                "category":[
                   {
                      "__cdata":"bitbucket"
                   },
                   {
                      "__cdata":"config"
                   },
                   {
                      "__cdata":"git"
                   },
                   {
                      "__cdata":"github"
                   },
                   {
                      "__cdata":"ssh"
                   },
                   {
                      "__cdata":"terminal"
                   },
                   {
                      "__cdata":"Uncategorized"
                   }
                ],
             }
          ]
       }
    }
 }; export default blogData;