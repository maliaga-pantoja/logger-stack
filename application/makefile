APP_NAME="pyapp:v1.0.0"
build:
	docker build -t ${APP_NAME} .
run:
	docker run -p 9099:3001 ${APP_NAME}
all: build run