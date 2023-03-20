# 301 Group Project: Server

## Group Members
- Michael Dulin
- Kirill Lesnykh
- Cody Lobdell

## Cooperation Plan
1. What are the key strengths of each person on the team?
  - Mike: Back-end, testing / debugging
  - Cody: Back-end, components
  - Kirill: Coding
2. How can you best utilize these strengths in the execution of your project?
  - We will utilize each members strength to produce the highest quality the 
3. In which professional competencies do you each want to develop greater strength?
  - Mike: Communication
  - Cody: technical knowledge/skills
  - Kirill: Communication/leadership
4. Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?
  - Required group standup/huddle in the mornings, and any other time needed to go over tasks of the day and figure out who wants to do what. Each of us will choose work we specifically dont want to do in order to get better at those tasks, and we will also do code review every day in the mornings to make sure we know what one anothers code is doing
  
## Conflict Plan
1. What will be your group’s process to resolve conflict, when it arises?
  - be 100% honest with one another, take group votes, and have good project prep in order to not have conflicts in the first place
2. What will your team do if one person is taking over the project and not letting the other members contribute?
  - part of being 100% with one another, and if the other two think that way that person owes the rest of the team coffee, also distribute tasks evenly
3. How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?
  - code reviews, if someone isn't understanding something then the other two help that person understand what's going on in the code
4. How will you raise concerns to members who are not adequately contributing?
  - be 100% with each other, we each agree that every one of us will put in 100% effort in this project, so if that person isn't contributing it means they're lagging behind in understanding the code and the rest of the group will try to help them understand. If that is going hard then we will incorporate remo T/A's or Michael Treat in helping that person understand what's going on
5. How and when will you escalate the conflict if your resolution attempts are unsuccessful?
  - bring it up to the teacher
  
## Communication Plan
1. What hours will you be available to communicate?
  - pretty much any time over text, and discord avaiable if agreed upon
2. What platforms will you use to communicate (ie. Slack, phone …)?
  - text, discord
3. How often will you take breaks?
  - whenever we need it
4. What is your plan if you start to fall behind?
  - if you're falling behind it means you don't understand the code or what you need to do, ask for help, be 100% with each other
5. How will you communicate after hours and on the weekend?
  - same way, text, discord
6. What is your strategy for ensuring everyone’s voice is heard?
  - we agree to not be afraid to speak up if we feel like we're not heard
7. How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?
  - same way
  
## Work Plan
1. How you will identify tasks, assign tasks, know when they are complete, and manage work in general?
  - We will huddle daily and clearly define tasks as well what all is expected from each member to complete per task
2. What project management tool will be used?
  - Trello
  
## Git Process 
1. What components of your project will live on GitHub?
  - backend and frontend
2. How will you share the repository with your teammates?
  - we'll make an organization first and add each person in
3. What is your Git flow?
  - make a new branch for any hard rated tasks/features and a separate pull request for that task/feature. If its an easy couple of tasks you can group them into one pull
4. Will you be using a PR review workflow? If so, consider:
  a. How many people must review a PR?
    - all 3
  b. Who merges PRs?
    - anyone who is the last person to review
  c. How often will you merge?
    - to our secondary branch every morning we will review pull request and then as a group merge to secondary branch, for main we will do it once our secondary is running the way we want
  d. How will you communicate that it’s time to merge?
    - its a given, every morning we know what our first step is
  
## Project Idea Pitches
1. Project Wingman 
  - A site which stores different project ideas
  - A single place to house all of our project ideas as well as the ability to upload / create a new project. This allows us to better plan new projects as well as access all our previous ideas or previous projects.
  - MVP:
    - add new project -> automatically upload to database
    - delete projects
    - get / display all projects
    - update existing projects
    - ability to sign into personal account
    - API: bored API         
  
2. Shit Manager
  - A customizable database for the user to store their personal commodities, hobbies, URL's to products they frequently use
  - Ex: As a user, I would like to save specifications on products I frequently use or items I know I may need in the future 
  - MVP:
    - Add / delete new or existing items
    - Get and display items 
    - Updating new items
    - ability to sign in 
    - API: chucknorrisfacts

## Wireframe


## Flowchart


## WRRC
![wrrc](wrrc/301FinalWRRC.jpg)

![wrrc](wrrc/301FinalWireFrame.jpg)

## Database Schema
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;
const itemSchema = new Schema({
  category: {type: String, required: true},
  itemName:  {type: String, required: true},
  links: {type: Boolean, required: true},
});
const ItemModel = mongoose.model('Item', itemSchema);
module.exports = ItemModel;



## User Stories
1. User Story 1
a. Login
b. As a user, I would like the ability to log in, to retrieve my personal items and have a
custom experience.
c. Implement Auth0 and allow personal data to be linked to each users unique email
address
d. Successfully logging in / logging out, as well as saving data properly per user
2. User Story 2
a. Data Tracking
b. As a user, I would like to be able to keep track of my personal items, which may
include a link to their purchase and details.
c. Using react-bootstrap, we will utilize certain components to structure our page which
neatly and accurately displays data
d. Organized data rendering successfully and appending to table
3. User Story 3
a. Add Items
b. As a user, I would like the ability to add new items to my database.
c. Implement add function using CRUD and REST methodology
d. Ability to add new items, which display properly with the other data
4. User Story 4
a. Remove / Update items
b. As a user, I would like the ability to remove items or update items I have already
stored.
c. Implement delete / update function using CRUD and REST methodology
d. Ability to remove / update items, which displays
5. User Story 5
a. Categories
b. As a user, I think it would be nice to separate my database items based on different
categories to have a more organized experience
c. Create separate components and CRUD / REST to add new categories which may
display task within that category or displays all categories
d. Ability to add new categories and separate data based on category




## Resources
1. [Presentation Deck Template](https://docs.google.com/presentation/d/1NeXKKEpjK2DDme8EwlZBsJndUqIgGYzWrY6FAYtNTf0/edit#slide=id.g2accd1c413_3_31)
2. [Trello](https://trello.com/b/fdsJJxC8/301-final-project)
3. [Netlify]()
4. [Render]()
