docker-compose -f docker-compose.yml down
docker volume rm catalog_postgres
docker volume rm recipe_postgres
docker-compose up --build -d