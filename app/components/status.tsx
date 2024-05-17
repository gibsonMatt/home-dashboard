"use server"
var Docker = require('dockerode');
import { Power, PowerOff } from 'lucide-react';


export async function ServiceStatus({ service }: { service: any }) {
  let status: string = "Off"

  try {
    const docker = new Docker({ socketPath: '/var/run/docker.sock' });
    const containers = await docker.listContainers();

    containers.forEach(function (serviceData: any) {
      const name = serviceData['Names'][0].replace(/\//g, "")
      if (name == service) {
        status = serviceData['State']
      }
    })
  }
  catch {
    console.log("Cant get containers")
  }


  return (
    <div>
      {status == 'running' && (<Power color="green" strokeWidth={"3px"}/>)}
      {status != 'running' && (<PowerOff color="red" strokeWidth={"3px"}/>)}

    </div>
  )
}

