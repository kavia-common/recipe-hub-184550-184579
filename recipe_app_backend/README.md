# Recipe App Backend

Express backend providing REST APIs for a recipe application.

- Server port: 3001
- Docs: /docs (Swagger UI)
- Health: GET /health (also GET /)

## Run

- Install dependencies: npm install
- Start: npm start
- Dev (watch): npm run dev

The server will start on http://localhost:3001 and Swagger UI at http://localhost:3001/docs

## Endpoints

- GET /health -> { status: "ok", ... }
- GET /api/recipes -> Array of recipes
- GET /api/recipes/:id -> Single recipe
- POST /api/recipes -> Create recipe
- PUT /api/recipes/:id -> Update recipe
- DELETE /api/recipes/:id -> Delete recipe
- GET /api/users -> List users (placeholder)
- POST /api/users -> Create user (placeholder)

## Request/Response Examples

Seed data is included in memory; data resets on server restart.

Create a recipe:
curl -s -X POST http://localhost:3001/api/recipes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Pancakes",
    "description": "Fluffy pancakes",
    "ingredients": ["Flour","Eggs","Milk","Sugar","Butter"],
    "steps": ["Mix ingredients","Cook on skillet"]
  }' | jq .

List recipes:
curl -s http://localhost:3001/api/recipes | jq .

Get by id:
curl -s http://localhost:3001/api/recipes/1 | jq .

Update recipe:
curl -s -X PUT http://localhost:3001/api/recipes/1 \
  -H "Content-Type: application/json" \
  -d '{"description":"Updated desc"}' | jq .

Delete recipe:
curl -i -X DELETE http://localhost:3001/api/recipes/1

Users (placeholder):
curl -s http://localhost:3001/api/users | jq .

Create user (placeholder):
curl -s -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","displayName":"Alice"}' | jq .

## Notes

- No external database; uses in-memory store with simple incremental IDs.
- Basic validation for recipes with useful error messages.
- Centralized error handling and 404 handler included.
