# Homelab NAS Server Dashboard

## Build

```
docker build -t home-dashboard .
# or bash build.sh
```

## Run

> You must give the container access to the docker socket in order to get service status indicators. 

> There could be permission issues depending on you system. 

```
docker run --rm --name home-dashboard -v /var/run/docker.sock:/var/run/docker.sock -p <PORT>:3000 home-dashboard
# or bash run.sh
```

## Run dev server

```
npx next dev
```


## Customize

To add a service, update the `servicedata` list in [serviceData.tsx](app/serviceData.tsx) and add a corresponding icon to the `public` directory. 