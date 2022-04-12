docker rm app_recipe
docker rm db_recipes
docker volume rm recipe_postgres
docker-compose up --build -d
docker-compose up --build -d