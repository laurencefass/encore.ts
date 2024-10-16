# encore.ts docker sandbox

Encore is an incredibly fast TS backend using a multi-threaded Rust core with run-time type safety [read more here](https://dev.to/encore/encorets-9x-faster-than-expressjs-3x-faster-than-bun-zod-4boe)

## notes

- I wanted to try encore.ts without installing onto my host server
- This has been simply achieved with a dockerfile and a docker-compose
- encore runs a service and a dashboard - by default it runs processes on 127.0.0.0 which is not exposed to docker.
- "encore run --listen 0.0.0.0:4000" is used to expose the service
- the dahboard address is not configurable see [github issue](https://github.com/encoredev/encore/issues/1490)
- as a workaround (preinstalled) socat is used to expose the dashboard to docker.
- runs automatically on startup - just build the docker image and run the compose file

## note on encore/gc requirements

- encore needs gc installed in the container to install correctly
- i tried alpine for a minimal image size but this doesnt use gc libraries and all attempts led to errors
- the smallest image I could find is
