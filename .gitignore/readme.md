# Introduction
This application accepts information from users and then gives them an acknowledgement, upon acceptance.  It is a demonstration of frontend work, so there is no backend work to process the information, though.

#Dependencies
* node.js (Any verson that supports ES2015)
* npm (any version that supports the version of node you use)


# Usage
This website supports evergreen browsers (e.g. Edge and Chrome.) IE 11 should work but not guaranteed (developed with IE 11 in mind but not tested). I am a Microsoft developer at work. But on my off-hours, I use Ubuntu, node and Python and other non-Microsft technologies. My Microsoft-environment is not really setup.

* Pull the code off github (there are numerous tutorials on this, e.g- https://zoldello.wordpress.com/2016/12/05/729/)
* Open up a terminal/command prompt
* Navigate to where the code is stored
* Run the command: `npm run demostart`
* Open the url: http://localhost:3000

# Missing Features
 Due to time constraints, some features had to be left out. Here are they:
 * CSS Preprocessing. There must of had been a bug with node-sass over the weekend. Then when it worked, I could not get the sass node-middleware to function. Since I did not put a lot of focus on fixing this because it was not crucial to design and time was limited. The code is set up for it though.

* The "Request a Demo" button on the home page violates WCAG standard 2.0 AA constrast ratio. Therefore, I changed the color from a light orange to green. I could not use battlestar gray as this also would cause a violation.



# Developer Journal
## Design Decisions
* I used query string to pass data between pages. The data is small and nothing that needs security (like password). So, I opted for that rather than cookies or local/session storage

* I used HTML5 form validation rather than Angular. It is a simplier solution that suffices.

* In a larger application, I would use webpack for managing build and angular for a SPA. However, the demands for this application are small, so I did not use them.

* I normally would have CSS structured with SMACSS (https://smacss.com/) or a similar structure. The goal would be to separate CSS for all pages from CSS for specific page and those from CSS for creating forms (like table-like organization), etc. However, due to the size of the application, I mingled the different CSS' together in one file.  


* NOTE: If the e-mail from the intro page is not a valid e-mail, it is not used to populate the e-mail address on the request page.

## Time Utilization
* Saturday: I did preliminary investigation of tools and basic code setup. I had trouble using node-sass
* Sunday: I added a buck of functionality. I had trouble using node-sass-middleware. There was a bug in node-sass as it worked fine on Sunday but not the previous Saturday. There were not tweets of a problem.
* Monday: Added a little more functionality and polish
* Tuesday: Last minute polish and submmission. I also finished up the readme file


## Further Works
* Get node-sass-middleware working. Currently css file is not generated off scss file.

* Spend more time investing h1..h6 tags. I got a feeling I did not use them as much as expected.
* Re-read requirements. I feel I may have missed a few small things here and there.  
