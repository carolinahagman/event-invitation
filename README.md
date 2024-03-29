<img src="https://media2.giphy.com/media/3ohjUScIRWI3NeDnCE/giphy.gif?cid=ecf05e47m1durhrs0gaubk87xloz69enwscqv3ny1410g4ly&rid=giphy.gif" width="100%">

# Event-invitation

## Built With

- HTML
- CSS
- Javascript

<details><summary>Project requirements</summary>

- A unique landing page that follows the same graphic manner of the chosen company.

- The website needs to be responsive and built mobile-first and follow the accessibility standard WCAG (https://a11yproject.com/checklist/).

- It must contain at least five animations, one of which is an in-animation when the page is first displayed.

- It should have a CTA where visitors can sign up via a form to the event. This form only needs to be shown visually.

- The landing page should be personalized via a link that can be sent out with query parameters. Suggestions for at least two ways to personify the site via the link such as name, country, pictures, occupational group, etc.

- The website should be built statically through HTML, CSS, and JavaScript.

- From day one, the website should be pushed up to a public repository on GitHub.

- The website should upload to a hosting service such as. Netlify, Vercel or GitHub Pages.

- The website should be optimized and have as high a score as possible on https://web.dev/ (optimize images, CSS and JS, tips are to use construction tools such as Parcel).

- Each group must submit a review of another group the day before the presentation. Code reviews must be submitted with a pull request.
</details>

## Code Review

1. `package.json`: It might be a good idea to install Prettier through npm for future project when you have collaborating developers.
2. `app.js`: Even though it's not too big in this particular project, diving your javascript into multiple files according to their function might be a good practice.
3. `app.js l:63: Even if the form is empty of input, the submit is still comfirming. Try switch your `click` eventListener to a `submit`and your required should work properly.
4. Good project structure, it's really easy to navigate what is what in your code.
5. Nice and clean design on your website, no animation feels overwhelming, they just add more life to the page. I like how you added the personified instagram post with the url parameter values.

> Awesome work, it was really hard even finding something to remark on.
> Keep up the good work! :raised_hands:

## License

This project is licensed under the MIT License - see the LICENSE file for details
