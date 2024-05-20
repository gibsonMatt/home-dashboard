"use server"

type Service = {
    name: string,
    url: string,
    desc: string,
    icon: string,
    containerName?: string,
    status?: string
}

import fs from 'fs'
import YAML from 'yaml'



export async function LoadConfig() {

    let config: any = {}
    try {
        const file = fs.readFileSync('/config/dashboard.yaml', 'utf8')
        config = YAML.parse(file)
    } catch {
        console.log("Cannot load config")
    }


    let servicedata: Service[] = []
    for (const key in config) {
        const entry: Service = config[key]

        servicedata.push(entry)
    }

    return servicedata
}



