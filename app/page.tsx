import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ServiceStatus } from "./components/status";
import { LoadConfig } from "./serviceData";

export const dynamic = "force-dynamic";

export default async function Home() {

  const servicedata = await LoadConfig()
  console.log(servicedata)
  return (
    <div className="flex flex-wrap gap-6 ml-10 mr-10 mt-10">
      {servicedata.map((item) => {
        return (
          <div className="w-48">
            <a href={item.url}>
              <div>
                <Card className="hover:bg-gray-100">
                  <div className="ml-2 mt-2">
                    <ServiceStatus service={item.containerName} />
                  </div>
                  <CardHeader>
                    <Image
                      src={item.icon}
                      width={50}
                      height={50}
                      alt=""
                    />
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </a>
          </div>
        )
      })}
    </div>
  );
}
