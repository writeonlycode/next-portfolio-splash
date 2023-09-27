# Next Portfolio Splash

Next Portfolio Splash is a visually captivating portfolio website designed
specifically for developers to showcase their skills and projects in an elegant
and engaging manner.

![Next Portfolio Splash Screenshot](https://raw.githubusercontent.com/writeonlycode/next-portfolio-splash/master/src/assets/screenshots/next-portfolio-splash-hero.png)

## Demo Website

To see a live demo of the Next Landing website, please visit
[https://next-portfolio-splash.vercel.app/](https://next-portfolio-splash.vercel.app/).
Please note that this is a demo website and not a official website. If you have
any questions or feedback, please feel free to contact us!

## Technologies Used

- [Next.js](https://nextjs.org): A React framework for building server-rendered
  applications and static websites.
- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework for
  building responsive and stylish user interfaces.
- [ContentLayer](https://contentlayer.dev): A powerful tool for managing and
  querying content in Next.js applications.
- [React Circular
  Progressbar](https://github.com/kevinsqi/react-circular-progressbar): A
  customizable circular progress bar component for React.
- [React Icons](https://react-icons.github.io/react-icons): A library of
  customizable icons for React projects.
- [Resend](https://resend.com/): Is a service for building, testing, and
  sending transactional emails at scale.

## Instructions to Run Locally

1. Clone the repository:

   ```
   git clone https://github.com/writeonlycode/next-portfolio-splash.git
   ```

2. Navigate to the project directory:

   ```
   cd next-portfolio-splash
   ```

3. Install dependencies using npm:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your web browser and visit `http://localhost:3000` to see the website in action.

## Instructions to Deploy to Vercel

1. Sign up for a Vercel account at [https://vercel.com](https://vercel.com) if
   you don't have one.

2. Install the Vercel CLI globally:

   ```
   npm install -g vercel
   ```

3. Navigate to the project directory (if you're not already there):

   ```
   cd next-portfolio-splash
   ```

4. Run the following command to deploy to Vercel:

   ```
   vercel
   ```

5. Follow the prompts to link your Vercel account and configure your deployment
   settings.

6. Once the deployment is successful, your Next Portfolio Splash website will
   be live at the provided URL.

Feel free to customize and enhance the website according to your preferences
and showcase your work to the world!


## Configuring the Contact Form with Resend

To enable email functionality for the contact form, you'll need to configure
Resend with your API key. This will allow you to send emails to the specified
destination and provide confirmation to the user who submitted the form.

Before proceeding, you should go to [https://resend.com/](https://resend.com/),
create an account, and create an API key to use with your website.

### Local Configuration

1. Open the `.env` file in your project's root directory.

2. Set the following environment variables with your SMTP server details:

   ```dotenv
   RESEND_API_KEY=your-resend-api-key
   ```

3. Save the `.env` file.

4. Make sure you have Resend and any required dependencies installed in
   your project:

5. Make sure the `.env` file is in your .gitignore and that you don't commit it
   to a repository.

### Configuration on Vercel

1. Log in to your Vercel account and navigate to your project's dashboard.

2. Go to the project settings.

3. In the "Environment Variables" section, add the following environment
   variables with your SMTP server details:

   ```dotenv
   RESEND_API_KEY=your-resend-api-key
   ```

4. Save the changes.

5. Deploy your project to Vercel.

With these configurations in place, your contact form should now be able to
send emails using Resend both locally and when deployed to Vercel.


# Screenshots

![Hero Section](https://raw.githubusercontent.com/writeonlycode/next-portfolio-splash/master/src/assets/screenshots/next-portfolio-splash-hero.png)

![About Section](https://raw.githubusercontent.com/writeonlycode/next-portfolio-splash/master/src/assets/screenshots/next-portfolio-splash-about.png)

![Skills Section](https://raw.githubusercontent.com/writeonlycode/next-portfolio-splash/master/src/assets/screenshots/next-portfolio-splash-skills.png)

![Projects Section](https://raw.githubusercontent.com/writeonlycode/next-portfolio-splash/master/src/assets/screenshots/next-portfolio-splash-projects.png)

![Contact Section](https://raw.githubusercontent.com/writeonlycode/next-portfolio-splash/master/src/assets/screenshots/next-portfolio-splash-contact.png)

![Footer Section](https://raw.githubusercontent.com/writeonlycode/next-portfolio-splash/master/src/assets/screenshots/next-portfolio-splash-footer.png)

![Lighthouse Scores](https://raw.githubusercontent.com/writeonlycode/next-portfolio-splash/master/src/assets/screenshots/next-portfolio-splash-lighthouse.png)
