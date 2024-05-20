"use server"

type Service = {
    name: string,
    url: string,
    desc: string,
    icon: string,
    containerName?: string,
    status?: string,
    width?: number,
    height?: number
}

import fs from 'fs'
import YAML from 'yaml'



export async function LoadConfig() {

    let config: any = {}
    try {
        const env = process.env.NODE_ENV
        if (env == "development") {
            const file = fs.readFileSync(process.env.CONFIG_PATH_DEV as string, 'utf8')
            config = YAML.parse(file)

        } else {
            const file = fs.readFileSync('/config/dashboard.yaml', 'utf8')
            config = YAML.parse(file)

        }
        console.log("Loaded config")

    } catch {
        console.log("Cannot load config")
    }

    let metadata: any = {}

    let servicedata: Service[] = []
    for (const key in config) {
        const entry: Service = config[key]
        if (key != "metadata"){
            servicedata.push(entry)
        } else {
            metadata = entry
        }
    }

    const response: any = {services: servicedata, metadata: metadata}
    return response
}



