# Assignment - JS Intro

**Due: Mon Feb 19, 11:59pm PT** 

# Goal

You will create a webpage that has:
- a horizontal navigation menu with one option
- at least 3 UI cards 
    - Content of your choice
- a distinct visual header and footer

When you click on a menu item, a dropdown menu of links will open
- When you click on the menu item again, the dropdown will close

## Dropdown Menu Requirements

- The various links in your menu should link to urls that could exist (not "#", but do not have to be working links, just urls to files that don't exist)
- The dropdown effect should NOT use :hover/:focus-within, it should only happen on a click (for this assignment only, we are testing your JS skill, not following best practices)
  - hover/focus effects for highlighting individual elements are fine, just not for the effect to make the menu "drop down"
  - That click to make the menu "drop down" should be doable with keyboard navigation! (Tab to the menu option, Enter to click)
  - Hint: 
    - Toggle a class on the element that you were looking at :hover/:focus-within on when the button is clicked
    - Have your CSS apply the same changes you did on :hover/:focus-within, but only when that extra class is present
    - Make sure to use a class name that is descriptive and semantic, such as "open"
    - Put another way, the above is saying that the CSS properties you use for the menu are no different than when you did the original dropdown assignment.  The SELECTORS are different, but the CSS properties are the same as that assignment.
- The menu HTML can be (likely should be) identical to what we use before, the difference is in how we are opening/closing the menu
- The menu can use a transition/animation to open/close, but it is not required

## Common Questions:
- There are no mobile requirements for this assignment, you are welcome to code a mobile-friendly version anyway
- Any images must have good alt attribute values
- There is no requirement for transition/animation.  They are optional.

## Additional Requirements
- Use the skills taught in class.  Googling can get you something that "works" but doesn't cover this skill.
- Do not use var
- Use let and const as described in class (preferring to use const if the variable isn't reassigned)
- Load your JS as described in class
- Use meaningful and helpful variable names as described in class
- Use consistent indentation and helpful whitespace to make your JS, HTML, and CSS easy to read
- Use semicolons appropriately as described in class
- Add event listener(s) as described in class using addEventListener()
- Do not use float
- Do not use tables or table-layouts
- Follow the best practices shared to date in this course

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'js-intro' (`git checkout -b js-intro`)
* Add the necessary files to have the required features
* Add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

