yarn build
yarn bundle
docker rm -f quizzz-container
docker build -t quizzz:latest .
docker run -p 4201:80 --name quizzz-container -d quizzz:latest