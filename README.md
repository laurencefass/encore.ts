# encore.ts docker sandbox

Encore is an incredibly fast TS backend using a multi-threaded Rust core with run-time type safety [read more here](https://dev.to/encore/encorets-9x-faster-than-expressjs-3x-faster-than-bun-zod-4boe)

[Umatched Node Performance powered by Rust](https://encore.dev/blog/encore-for-typescript#unmatched-node-performance-powered-by-rust)

## general notes

- I wanted to try encore.ts without installing onto my host server
- This has been simply achieved with a dockerfile and a docker-compose
- encore runs a service and a dashboard - by default it runs processes on 127.0.0.0 which is not exposed to docker.
- Run encore with "encore run --listen 0.0.0.0:400x" to expose the service
- the dahboard address is not configurable see [github issue](https://github.com/encoredev/encore/issues/1490)
- as a workaround (preinstalled) socat is used to expose the dashboard to docker.
- Once built encore runs automatically on startup - just build the docker image and run the compose file

## Remote development and VSCode integration

- I develop code on a remote VPS using docker and remote extensions
- This is a partially containerised development environment using bind mounts
- Encore installs its own library encore.dev as a symlink to a folder in /root.
- Typescript module resolution wont work for /node_modules/encore.dev by connecting to remote host.
- To get full Typescript module resolution run the container and connect to running container through VSCode.
- Remember to map exposed docker ports on your remote machine in VScode (next to terminal tab) to access on your local browser

## note on encore/gc requirements

- encore needs gc installed in the container to install correctly
- i tried alpine for a minimal image size but this doesnt use gc libraries and all attempts led to errors
- the smallest image I could find was bullseye though would be good to reduce this further.
