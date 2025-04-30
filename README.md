# Golf League
### An evolving application that aims to remove the need for manual calculation and circulation of my weekend golf league, as well as allow me to test out some new technologies I am passionate about learning!

![ERD](./golf_league_relationships.png)


### Potential Tech 
- Frontend: React Native (deployed to relavant stores)
- Backend API: Node.js with Express.js (intial deployment to Railway for testing, eventually Amazon EC2 for more control)
  - RESTful
  - JWT-based Authentication
  - ORM: Prisma
- Datbase: MySQL (deployed to Amazon RDS)

- Authentication & Authorization
  - JWT + Refresh Tokens
  - Social login (Google, Apple) via Expo or Firebase Auth (done firebase before, but will try Expo if time)
  - Role-based access control for admins vs players
- Notifications & Scheduling
  - Expo Push Notifications or Firebase Cloud Messaging
  - Backend cron jobs for reminders (node-cron)
- Testing & CI/CD
  - Jest, React Native Testing Library
  - GitHub Actions for automated tests and builds
- Developer Experience (DX)
  - TypeScript for full-stack typing
  - Postman to test API
  - ESLint, Prettier for consistent code quality