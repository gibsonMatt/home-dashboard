export const dynamic = "force-dynamic";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Server } from "lucide-react"
import { Separator } from "@/components/ui/separator"


import { ServiceStatus } from "./components/status";
import { LoadConfig } from "./serviceData";
import { Quote } from "./components/quote"




function Header({ name }: { name: string }) {

  return (

    <header className="flex mt-5 ml-4 ">
      <div className="text-emerald-600">
        <Server size={35} />
      </div>

      <div className="text-2xl font-extrabold font-mono align-middle ml-3 text-slate-600">
        {name}
      </div>

    </header>
  )
}

type serviceData = {
  services: any,
  metadata: any
}


export default async function Home() {

  const servicedata: serviceData = await LoadConfig()


  return (
    <div>

      <Header name={servicedata.metadata.name} />

      <div>

        <Quote />
        <h4 className="mt-5 ml-10 scroll-m-20 text-xl font-semibold">
          Services

          <Separator />

        </h4>
      </div>
      <div className="flex flex-wrap gap-6 ml-10 mr-10 mt-5">
        {servicedata.services.map((item: any) => {
          return (
            <div className="w-48">
              <a href={item.url}>
                <div>
                  <Card className="hover:bg-blue-50 h-48 grid">
                    <div className="ml-2 mt-2">
                      <ServiceStatus service={item.containerName} />
                    </div>
                    <CardHeader>
                      <Image
                        src={item.icon}
                        width={((item.width) ? item.width : 50)}
                        height={((item.height) ? item.height : 50)}
                        alt=""
                      />
                      <CardTitle className="">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
}
