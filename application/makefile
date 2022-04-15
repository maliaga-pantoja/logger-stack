IMAGE="nodeapp"
VERSION="v1.0.1"
LOCAL_PORT=8080
PWD=$(shell pwd)

base:
	docker run --rm -v "${PWD}:/app" -w /app node npm ${CMD}
init:
	$(MAKE) base CMD="init -y"
install_package:
	$(MAKE) base CMD="install ${PACKAGE}"
run:
	docker run --rm -v "${PWD}:/app" -w /app -p 3000:3000 node npm start

build:
	docker build -t ${IMAGE}:${VERSION} .
run_container:
	docker run --rm -p ${LOCAL_PORT}:3000 ${IMAGE}:${VERSION}