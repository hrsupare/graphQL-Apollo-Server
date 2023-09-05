Steps to start the Apollo GraphQL server
1. `npm install`
2. `docker compose up`
3. `npm run prisma:generate` (this should be one time client generation for prisma.)
4. `npm run migrate:db` (if this command dont work then try: `prisma migrate dev`). 
5. `npm run start:dev`
6. Open website: http://localhost:4000


After each changes in prisma schema, to reflect changes in database, run the same migrate command: `npm run migrate:db`# graphQL-Apollo-Server
