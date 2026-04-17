# User Stories

## User Story Template

**As a** [type of user]  
**I need** [some goal]  
**So that** [some reason]

---

## User Story: User Registration

**As a** new user  
**I need** to register an account  
**So that** I can access the platform  

### Details and Assumptions
- Users must provide a username and password
- Username must be unique
- Password must be secure

### Acceptance Criteria

Given a new user is on the registration page  
When the user enters valid details  
Then the system should create a new account  

---

## User Story: View Items

**As a** user  
**I need** to view available items  
**So that** I can choose what I want  

### Details and Assumptions
- Items are stored in the database
- Each item has name, category, and description

### Acceptance Criteria

Given the user is on the homepage  
When the page loads  
Then all available items should be displayed  

---

## User Story: Search Items

**As a** user  
**I need** to search items by category  
**So that** I can find relevant items  

### Details and Assumptions
- Items are categorized
- Search uses category filter

### Acceptance Criteria

Given the user enters a category  
When the search is performed  
Then matching items should be displayed  
