# Git undoing and backtracking

## Week 1, Lesson 5

This lesson reiterates the basics for fixing things when something goes awry with Git. It also covers Live Share.

## Learning objectives

* TNTs will understand what can go wrong with Git.
* TNTs will learn strategies for fixing things with Git.
* TNTs will practice strategies for resolving issues with Git.
* TNT will learn about Live Share for code collaboration.

## Time required and pace

Total time: 1.5 hours

* 40 minutes - explain: revisit tactics for backtracking and undoing with git
* 20 minutes - Your Turn: review, and investigations
* 20 minutes - Introducing Live Share in VS Code
* 5 minutes - Session Recap and questions

## Background / review

* Git Bash
* VS Code
* [Free Code Camp's guide to git reset and git revert](https://www.freecodecamp.org/news/the-ultimate-guide-to-git-reset-and-git-revert/)

## Lesson details

### Explain: revisit tactics for backtracking and undoing with Git (40 minutes)

We'll cover three scenarios: amending a commit, recovering a deleted file, and reverting a commit.

1. **Demo: Amending a commit**
    1. If your wrote the wrong thing in the last commit message, use "--amend" to overwrite the message. `git commit --amend -m "new message"`
    2. If you have staged changes, they will be added to the previous commit as well. In most cases it's better to create a new commit then amend when it comes to code changes.

2. **Demo: Recovering a deleted file**
    * ***Case 1: I deleted a file but didn’t commit***
  
      You deleted a file, and immediately realized it was a mistake?  
      If a file is accidentally deleted from a repository it can be recovered with `git checkout`. Using a specific file name will pull the file back from the index into the working tree.

      <img src="https://github.com/tnt-summer-academy/Curriculum-2022/blob/main/Week%201/images/[ENG1.5]recovering-a-deleted-file.png" alt="recovering a deleted file" style="zoom:65%;" />


    * ***Case 2: I deleted a file and committed the deletion***
    
        ![resetting](./images/[ENG1.5]-resetting.png)
    
        You made a commit deleting a file, but then realized you wanted to keep the file around after all? 
        Do a * *reset** to go back to the state before your commit `$ git reset --hard HEAD~1` (be careful: the "--hard" option means the command will discard changes to tracked files after the specified commit — you can also leave this option out in which case the file deletion will show up as an un-staged change along with any other changes you’ve made in your working tree. The file can then be restored as in the previous scenario)

    (Note: this presumes you haven’t already pushed your commit to a remote — this will be covered later next week.
    
    <img src="https://github.com/tnt-summer-academy/Curriculum-2022/blob/main/Week%201/images/[ENG1.5]recovering-a-deleted-file-aftercommit.png" alt="hard rest" style="zoom:65%;" />
    
    * ***Case3: I committed the deletion and then I did more commits***
  
      If you deleted a file, committed, then continued work and did more commits, only to find that deleting the file was a mistake, Git still has you covered! 
      
      <img src="https://github.com/tnt-summer-academy/Curriculum-2022/blob/main/Week%201/images/[ENG1.5]recover-deleted-after-newcommit-p1.png" alt="recovering a deleted file after new commit" style="zoom:70%;" />
      
      To find the right commit, first check the history for the deleted file: `$ git log -- <filename>` 
    
      <img src="https://github.com/tnt-summer-academy/Curriculum-2022/blob/main/Week%201/images/[ENG1.5]-hash-for-needed-file.png" alt="recovering a deleted file after new commit" style="zoom:70%;" />
    
      You can either work with the last commit that still had the file, or the commit that deleted the file. In the first case, just checkout the file from that commit: 
    
      `$ git checkout <commit hash> -- <filename>`
    
      In the second case, checkout the file from one commit before that:
    
      `$ git checkout <deletion commit hash>~1 -- <filename>`
    
      <img src="https://github.com/tnt-summer-academy/Curriculum-2022/blob/main/Week%201/images/[ENG1.5]recover-deleted-after-newcommit-p2.png" alt="recovering a deleted file after new commit" style="zoom:70%;" />

3. **Demo: Reverting a commit**

   ![revert](./images/[ENG1.5]-revert.png)

    Sometimes you just need to go back to a previous version. Refactoring some code didn't head the direction you thought. You accidentally deleted some code that you actually needed. The layout changed in a way you didn't predict and you want a fresh take at it. Don't worry, you've been committing your work in strong reasonable chunks.
    `git revert HEAD` makes a change that's exactly the opposite of the last commit.

    ***See below demo scenario steps in picture***

    <img src="https://github.com/tnt-summer-academy/Curriculum-2022/blob/main/Week%201/images/[ENG1.5]gitRevert.png" alt="git revert" style="zoom:85%;" /> 

***Note:*** `git revert HEAD` do the same as `git reset --hard HEAD^` but the second removes the most recent commit and history

#### Recap for the common scenarios

* I deleted a file but didn’t commit: use `$ git checkout HEAD <filename>`
* I deleted a file and committed the deletion: use `git revert HEAD` or `$ git reset --hard HEAD~1` the second removes the most recent commit and history
* I committed the deletion and then I did more commits: 
  * `$ git log -- <filename>` 
  * work with the last commit that still had the file, `$ git checkout <commit hash> -- <filename>`
  * or work with the commit that deleted the file, checkout the file from one commit before that: `$ git checkout <deletion commit hash>~1 -- <filename>`

### Your Turn: review, and investigations(25 minutes)

Complete the lesson and exercises: 
* [ ] in the learning module: [_Introduction to Git_](https://docs.microsoft.com/en-us/learn/modules/intro-to-git/) complete [_fix simple mistakes_](https://docs.microsoft.com/en-us/learn/modules/intro-to-git/6-fix-simple-mistakes) exercises.

The exercises suggests using the sandbox. **Instead** use `Git in VS Code and the integrated terminal`. There are lots of tools for using Git and these two are the ones that we will focus on.

### Introducing Live Share in VS Code (20 minutes)

* [Download VS Code Live Share extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
* Show Live Share [instruction details](https://github.com/tnt-summer-academy/Curriculum/blob/main/Reference/VSCode_Live_Share.md)
* Demo how to start and watch this short [video](https://www.youtube.com/watch?v=9QXwSg9-2qQ&feature=emb_title)
* Each small group to test Live share with each other
