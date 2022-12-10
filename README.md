Website: https://jaywcjlove.github.io/reference
## Docker

[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/reference)](https://hub.docker.com/r/wcjiang/reference) [![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/reference)](https://hub.docker.com/r/wcjiang/reference) [![Docker Pulls](https://img.shields.io/docker/pulls/wcjiang/reference)](https://hub.docker.com/r/wcjiang/reference)

轻松通过 `docker` 部署 `Quick Reference` 网站。

```bash
docker pull wcjiang/reference
```

```bash
docker run --name reference --rm -d -p 9667:3000 wcjiang/reference:latest
# Or
docker run --name reference -itd -p 9667:3000 wcjiang/reference:latest
```

在浏览器中访问以下 URL

```bash
http://localhost:9667/
```
