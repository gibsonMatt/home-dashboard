# Homelab NAS Server Dashboard

A simple Next.js dashboard for my home media server. 

![screenshot](images/screenshot.png)

## Build

```
docker build -t home-dashboard .
# or bash build.sh
```

## Configuration

Supply a yaml configuration file named `dashboard.yaml` to configure to the dashboard. E.g.,

```
metadata:
 name: homelab
Plex:
 name: Plex  <-- name as shown in UI
 url: https://plex.domain.com <-- link
 description: Plex Media Server
 icon: plex.svg <-- image for icon. can also be an https url with valid certificate. 
 containerName: plex <-- exact name of the service in your stack for status indicator icons. 
Nginx:
 name: Nginx
 url: <URL>
 description: Nginx Proxy
 icon: https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg
 container-name: Nginx-Proxy-Manager-Official
 width: 80 <-- Optionally specify icon width
 height: 80 <-- Optionally specify icon height

...more
```

> `dashboard.yaml` is parsed at runtime. It is not required to build the image. 


## Run

> You must give the container access to the docker socket in order to get service status indicators. 

> There could be permission issues depending on you system. 

> Be sure your config file is mounted at container path `/config/dashboard.yaml`


```
docker run --rm --name home-dashboard \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /path/to/dashboard.yaml:/config/dashboard.yaml \
  -p <PORT>:3000 home-dashboard
```

The server runs on port 3000 by default.


## Run dev server

```
npx next dev
```


