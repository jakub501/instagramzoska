Ls – vypíše obsah directory (vypíše obsah súborov a priečinkov toho, v čom sa nachádzame)

cd – change directory. Presunie nás tam, kam chceme. Napríklad, Dokumenty/dev. Presunie nás do dokumentov a priečinku dev. 

npx create-next-app@latest – inštalácia next js

npm run dev – nodded package manager – startovanie servera

skratka crl-c – kill process. Zastavi beziaci proces

Camel style – každé slovo začína veľkým písmenom

Layout – Rozloženie stránky (Box a greet)

Postup, ako sa dostať do Githubu (terminal):
1. git init
2. git branch -m main
3. git config –global user.name „jakub501“ (synchronizácia používaťelského mena z GitHubu)
4. git config --global user.email "jakub.kockovsky@gmail.com" (synchronizácia emailu)
5. git remote add origin https://github.com/jakub501/instagramzoska.git (prepojenie s konkrétnou stránkou)
6. git remote -v
7. git add . (Všetko sa pridalo do GitHubu)
8. npm run build (spustíme celú zostavu)
9. Následne comittujeme. Píšeme správu aktualizácie súboru, ku ktorej sa v prípade potreby vieme v budúcnosti vrátiť.

Vypísala sa mi chyba. Z toho dôvodu trebalo nájsť zdroj problému. Zdroj problému bol v kóde, keďže bol použitý apostrof. Po opravení sme znova spustili konfiguráciu npm run build a potom sme zosynchronizovali všetky informácie s Gitom, a následne Vercelom.


Assignment: Build a Basic Next.js App with Material UI Menu component

Objective: Your task is to create a simple Next.js app with basic routing via Material UI Menu component. You will set up Git and a GitHub repository to manage your version control. The app will not include any authentication.
Assignment Tasks:

    Initialize a Next.js App:
        Create a new Next.js project in your /YourOneDrive folder named pisomka1-meno-priezvisko.
        Set up the app with basic routing and a clean project structure.

    Set up Git and GitHub:
        Initialize a Git repository for your project.
        Make regular commits with meaningful commit messages.
        Push your project to a new GitHub repository named pisomka1-meno-priezvisko.

    Create the Required Pages:
        Home Page (/): Display a welcome message and a link to the About page.
        About Page (/o-nas): Provide some text about the app or placeholder content.
        Contact Page (/kontakt): Display a contact form with fields for Name, Email, and Message (no backend needed).
        Posts Page (/prispevky): Create a page to display posts. This page can be a simple placeholder with sample post titles or content.

    Material UI Integration:
        Use Material UI to style the app, including form elements and buttons.
        Implement a simple navigation menu using Material UI’s Menu component.
        Ensure that the Menu has links to the Home, About, Contact, and Posts pages.

    Set up Vercel Deployment:
        Deploy your app to Vercel.
        Set up both a local development server and a production server on Vercel:
            Local Development Server: Use npm run dev to run the app locally at http://localhost:3000 during development.
            Production Server on Vercel: Deploy your app to Vercel’s production environment so it can be accessed publicly.
        Submit the Vercel production server link as part of the assignment.

Project Requirements:

    Home Page:
        Display a welcome message with a Material UI Container, Typography component.
        Provide a link to the About page.

    About Page:
        Use Material UI Typography and Box components to style this page.
        Provide placeholder content about the app.

    Contact Page:
        Create a contact form with fields for Name, Email, and Message.
        Style the form with Material UI components (TextField, Button).

    Posts Page:
        Display a list of sample posts with Material UI Card components or similar styling, e.g. Container...

    Menu Navigation:
        Implement a simple Menu using Material UI’s Menu component.
        Ensure it includes links to the Home, About, Contact, and Posts pages.

Marking Criteria:

    Correct Setup of Next.js App (10%):
        Is the Next.js app set up correctly with a clean project structure?

    Material UI Usage (40%):
        Are Material UI components used to style the app?
        Are buttons, forms, menus, and layouts well-designed?

    Routing and Navigation (30%):
        Is the routing set up correctly for Home, About, Contact, and Posts pages?
        Does the navigation menu work correctly?

    Git and GitHub Setup (10%):
        Is the project correctly version-controlled using Git?
        Is the code pushed to a GitHub repository?

    Vercel Production Deployment (10%):
        Is the app deployed on Vercel’s production server?
        Is the deployed link accessible?

Additional Notes:

    Ensure that your GitHub repository is public so the instructor can view your code.
    Submit the link to your Vercel production server deployment and the link to your GitHub repository.

Good luck!
