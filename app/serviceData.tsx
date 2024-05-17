type Service = {
    name: string,
    url: string,
    desc: string,
    icon: string,
    width: number,
    height: number,
    containerName?: string,
    status?: string
}

export const servicedata: Service[] = [
    {
        name: "Plex",
        url: "https://plex.gibsonmatthew.com",
        desc: "Plex media server",
        icon: "plex.svg",
        width: 50,
        height: 50,
        containerName: "plex"
    },
    {
        name: "Wiki",
        url: "https://wiki.gibsonmatthew.com",
        desc: "Homelab Wiki",
        icon: "/wikijs.png",
        width: 50,
        height: 50,
        containerName: "wikijs"
    },
    {
        name: "qbitorrent",
        url: "http://192.168.68.76:8080/",
        desc: "Torrent Client",
        icon: "torrent.svg",
        width: 50,
        height: 50,
        containerName: "binhex-qbittorrentvpn"
    },
    {
        name: "radarr",
        url: "http://192.168.68.76:7878",
        desc: "Radarr",
        icon: "/radarr.png",
        width: 50,
        height: 50,
        containerName: "radarr"
    },
    {
        name: "sonarr",
        url: "http://192.168.68.76:8989/",
        desc: "Sonarr",
        icon: "/sonarr.png",
        width: 50,
        height: 50,
        containerName: "sonarr"
    },
]