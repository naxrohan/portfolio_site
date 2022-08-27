---
title: 'Setting up 2 different git ssh keys'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: 'https://headstartdata.files.wordpress.com/2018/02/post.png'
date: 'Tue, 10 Dec 2019 19:49:43 +0000'
author:
  name: rohanjd
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: 'https://headstartdata.files.wordpress.com/2018/02/post.png'
category:
  - bitbucket
  - config
  - git
  - github
  - ssh
  - terminal
---

<p>I have come across this situation few times where there is a need to connect to 2 or more different repositories at the same time, and configure ssh key for them all. For example : github.com, gitlab.com &amp; bitbucket simulations.</p>
<p>The simpler solution would be to add the same ssh key to all the 3 site, this is ok but can cause issues later, if it does the below suggestion is for you.</p>
<h2>Step 1: Create a new SSH key, for the account.</h2>
<p>First run below command, place in your email id. </p>
<blockquote class="wp-block-quote"><p>$ ssh-keygen -t rsa -b 4096 -C "email.id@example.com"</p></blockquote>
<p>Next important thing, add the full path to the file where the key must be generated, as indicated in the below image. Then enter your secret phrase.</p>
<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://tech4coderstack.files.wordpress.com/2019/12/screen12.png?w=1024" alt=" class="wp-image-50" /><figcaption>Create new ssh key.</figcaption></figure></div>
<h2>Step 2: Update the ssh config file.</h2>
<p>Navigate to the  <em>~/.ssh</em> folder on your machine, and open the config file with your favorite  text editor. If this file doesn’t  exist you can create one.</p>
<blockquote class="wp-block-quote"><p>$ vi ~/.ssh/config</p></blockquote>
<p>Using the three keywords shown below add in the key details. </p>
<ul><li>Host , this should be the domain of the repository being cloned.</li><li>HostName, can be set similar to Host, in most cases.</li><li>IdentityFile, should have the same path mentioned when creating the key.</li></ul>
<blockquote class="wp-block-quote has-text-align-left"><p># Gitlab.org</p><p>Host gitlab.com</p><p>  HostName gitlab.com</p><p>  IdentityFile ~/.ssh/gitlab</p><p>  UseKeychain yes</p></blockquote>
<figure class="wp-block-image size-large"><img src="https://tech4coderstack.files.wordpress.com/2019/12/screen1.png?w=664" alt=" class="wp-image-52" /><figcaption>Example of the finished file.</figcaption></figure>
<p>Once all the keys are created and added on the ssh config file, restart the terminal or command window. Try few pull requests, thats it.. it should work.</p>
