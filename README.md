# ServiceNow-Assessment
This is my work for the coding exercise for ServiceNow for the role UI Engineer - Future Products.

## To run this application:
Clone this ServiceNow-Assessment repo.

Navigate to ServiceNow-Assessment/ServiceNow-Assessment.

Run `npm install`.

Run `ng serve --port 8082`.

In your browser, navigate to 'localhost:8082'.


## Requirements Overview
- [x] Use any modern frontend framework of your choice [Angular]
- [x] Meet or exceed all business requirements, defined in the user stories.
- [x] Please develop this web application using any front-end framework of your choice. [Angular]
- [x] You may use any component libraries you’d like but is completely optional. [Material]
- [x] If using a component library, the Card components displayed under STRY0001 must be
created from scratch. This is to test your ability to create reusable components.
- [x] You do not have to style exactly as shown in the mockups, but please keep all your styling
consistent throughout the app.
- [x] Please do not use any third-party libraries for sending AJAX requests.
- [x] The application should be responsive to all screen sizes, without losing functionality.
- [x] Navigation between different pages has not been mocked up for you. You are free to implement
any navigation you deem necessary.

#### Bonus
- [x] Style your app to have the same theme as the mockups.
- [x] State Management.
    - [x] What happens if your components/pages are loading? [I added a spinner component to display while the data is loading.]
    - [x] What if there’s an error communicating with the server? [I added error handling in my http requests.  If there is an error, an alert will show at the top of the screen displaying the error.]
    - [ ] What if fetches return empty? [I did not address this.  If successful fetches return empty, then no data will appear.]
- [x] Creating a new incident: STRY0002: As an IT service agent, I would like to be able to open a new
incident, in case something new has been reported. The mockup for this is not provided and it is up
to you how you decide the add a new record [I added a yellow "+" button on the top right of the page modeled after image A.  This opens a modal where users can input values for the new incident. If the psot is successful, a snackbar message appears at the bottom of the screen informing them it was successful. If there is an error, an error message alert will appear at the top of the screen.]


## Feature/Story Breakdown
I broke down the 2 given stories into smaller tasks as follows:

##### STRY001: As an IT service agent, I would like a page where I can see a list of ALL incidents, with the
ability to quickly see incidents BY ‘STATE’ (Open, In Progress, Resolved, Closed, which are shown as
clickable cards in this wireframe on top of the page). This will help me find incidents I can work on or
refer to for a solution. Clicking on any of the cards, will take the use to image B.

Required Criteria:
- [x]  Page A: Table: Display all incidents in table
- [x]  Page A: Cards: Display ‘STATE’ cards at top of screen
- [x]  Page A: Cards: Clicking ‘STATE’ cards will route to page B
- [x]  Page B: Table: display all incidents by state in table
- [x]  Page B: Header: back button to return to Page A
- [x]  Service: get ALL incidents
- [x]  Service: get incidents by state

Uncommitted Criteria:
- [x]  Page A&amp;B: spinner while loading
- [x]  Service: Handle errors… toaster messages?

##### STRY002: Creating a new incident: As an IT service agent, I would like to be able to open a new incident, in case something new has been reported. The mockup for this is not provided and it is up to you how you decide the add a new record

Uncommitted Criteria:
- [x] Service: insertIncident
- [x] Page A: Modal: Add new incident UI (button --> modal)


## Assumptions
Data is not modified after page has loaded.

I did not display duplicate values.  I assumed the user would not want to see multiple rows for the same incident.

I assumed that in Image B, the symbol next to the “Open” title was a back button to take the user back to the page in Image A.

I assumed that the number next to the “Open” title in Image B was the number of “Open” incidents. 

I assumed that the user could input any value for the “Number”, “Priority”, and “short_description” properties of an incident when creating a new incident. 