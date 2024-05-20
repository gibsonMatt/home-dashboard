docker run -d --rm --name home-dashboard -v /var/run/docker.sock:/var/run/docker.sock -v /Users/mattgibson/home-dashboard/dashboard.yaml:/config/dashboard.yaml -p 4000:3000 home-dashboard
