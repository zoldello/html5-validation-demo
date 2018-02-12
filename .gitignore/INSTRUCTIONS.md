# Technical Challenge: Midlevel Frontend Position

Assignee: Philip Adenekan

Due Date: As soon as possible, or no later than 1/29 at 11:59PM.

## Objective:

Given the provided high-fidelity comps, create a styled code solution that is responsive, fully matches the provided designs, and adheres to the WCAG 2.0 Accessibility (AA Level) Guidelines (as they apply to the elements within the design).

Spend no more than 5 hours on the application itself, and then document any unfinished pieces of work in your Developer Journal (explained below).

Use your 5 hours wisely; if this were a real project for a client, how would you deliver the best possible solution that delivers on the objective within this timeframe?

### What to turn in at the end of the challenge in this repo:

1. **Application code that can be run by our team**

2. **A “Developer Journal": Include a section in your readme.md that outlines:**
> - The decisions you made in the process of completing this project and why. 
> - Please document the time you spend each day working on the project within the developer journal. If you'd like to provide some detail on where your time went (research, HTML, SASS, Angular, WCAG/Accessibility, etc) that would be helpful!
> - What your next steps would be on this project if you had more than 5 hours

## The Assignment:

Create a functional, responsive, and WCAG 2.0 standards compliant user interface for:

- [Case Study page with an email entry field, that links to the “Tell us about your course” page when the “Request a Demo” button is clicked](https://drive.google.com/open?id=0B-09YTKQTIOoRUZyZ2RxZU1JdmM)

- [“Tell us about your course” page that populates with the email address data originally entered by the user on the first page](https://drive.google.com/open?id=0B-09YTKQTIOoWERzbjdFSUIzQlk)

- Some form of confirmation that their submission was “successful” (mocking the functionality on the frontend, but no backend component should be submitted for this project). Design and functionality for this confirmation is left up to your discretion.

Please match the designs provided as closely as possible, adhering to the applicable WCAG 2.0 AA Level Standards.

For this exercise, you will be working on the frontend only, but your solution should consider best practices for how your frontend would interact with the theoretical backend of the system. No backend component should be submitted with this exercise; all interactions and functionality (submitting the demo request) should be mocked on the frontend only.

Important: Choose the best method for the short term storage of the email data from the first page to the second page. For example, you could choose to create an AngularJS Value, add to the routes state (which maintains that data until cache is cleared), add an AngularJS Service, use session storage, or leverage local storage. Please provide your rationale for what you chose in your readme.md.


### Your final solution should:

- **Use Grunt, Gulp or any other build system to build and package the application**

- **Use Angular for any interactive functionality**

- **Use SCSS for the creation of custom style files and compile them with node-sass or Compass**

- **Include a readme.md file with _detailed_ instructions for _building_ and _viewing_ your project**

- **Follow all applicable WCAG 2.0 Guidelines (AA Level) paying attention to:**
  - Semantic HTML
  - Color Contrast
  - *Note: The design contains a failing color contrast error. Find it, and correct the color of this failing issue.*
  - Add Aria Labels, where applicable
  - Use proper H tag hierarchy and order
  - Provide Image titles and Alt Tags for all images

- **Be uploaded to this Github repo by the deadline listed above**
  - Important: Commit and Push often. We want to see what your process is like as much as the end result


## The Designs and Assets:

You may access the designs and assets for this challenge in this Google Drive folder. The designs are included as PNG and PDF (for copying text for use in the final project). The assets are provided as SVG only, and should be used as SVG in the final project.

**Designs and Assets:** [https://drive.google.com/drive/folders/0B-09YTKQTIOoVTczSG5tWWg4N3c?usp=sharing](https://drive.google.com/drive/folders/0B-09YTKQTIOoVTczSG5tWWg4N3c?usp=sharing)

Typeface used is Open Sans, available as a free webfont through Google Fonts. 

Use tools or your own discretion to determine text size, and hexcode colors present in this design.

A few notes:

- Mobile designs have not been provided intentionally. Please use your own discretion to determine appropriate mobile/responsive behavior. The final submitted project should be responsive and have logical breakpoints for common screensizes.

- No design has been provided for the “confirmation” of the submitted demo request form. You should use your discretion to carry through the styling that you see in the elements present in the other mockups to extrapolate the design of the confirmation page. 

## Questions and Assistance

You may ask questions to the Packback team up to 48 hours from when you receive this repo. After that time, you will be expected to use external resources to attempt to solve your questions independently. This is to avoid a pileup of questions at the last minute and to encourage early planning.

Email codechallenge@packback.co with questions.
