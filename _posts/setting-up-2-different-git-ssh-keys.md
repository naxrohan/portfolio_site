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


I have come across this situation few times where there is a need to connect to 2 or more different repositories at the same time, and configure ssh key for them all. 

&nbsp;
&nbsp;

**For example:** github.com, gitlab.com &amp; bitbucket simulations.

&nbsp;
&nbsp;

The simpler solution would be to add the same ssh key to all the 3 site, this is ok but can cause issues later, if it does the below suggestion is for you.

&nbsp;
&nbsp;

**Step 1:** Create a new SSH key, for the account.

&nbsp;
&nbsp;

First run below command, place in your email id. 

&nbsp;
&nbsp;

> $ ssh-keygen -t rsa -b 4096 -C "email.id@example.com"</blockquote>

&nbsp;
&nbsp;

Next important thing, add the full path to the file where the key must be generated, as indicated in the below image. Then enter your secret phrase.

&nbsp;
&nbsp;

![Create new ssh key.](https://tech4coderstack.files.wordpress.com/2019/12/screen12.png?w=524)

`Create new ssh key.`

&nbsp;
&nbsp;

**Step 2:** Update the ssh config file.

&nbsp;
&nbsp;

Navigate to the  ***~/.ssh*** folder on your machine, and open the config file with your favorite  text editor. If this file doesn’t  exist you can create one.

&nbsp;
&nbsp;

>$ vi ~/.ssh/config

&nbsp;
&nbsp;

Using the three keywords shown below add in the key details. 
- Host , this should be the domain of the repository being cloned.
- HostName, can be set similar to Host, in most cases.
- IdentityFile, should have the same path mentioned when creating the key.

&nbsp;
&nbsp;

```bash
# Gitlab.org
Host gitlab.com
  HostName gitlab.com
  IdentityFile ~/.ssh/gitlab
  UseKeychain yes
```

&nbsp;
&nbsp;

![Example of the finished file](https://tech4coderstack.files.wordpress.com/2019/12/screen1.png?w=364)

`Example of the finished file`

&nbsp;
&nbsp;

Once all the keys are created and added on the ssh config file, restart the terminal or command window. Try few pull requests, thats it.. it should work.
