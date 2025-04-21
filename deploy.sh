cd /home/ubuntu/repos
git switch docker@compose
git pull origin docker@compose
docker stop $(docker ps -a -q)
docker compose up --build -d
docker system prune -a -f
