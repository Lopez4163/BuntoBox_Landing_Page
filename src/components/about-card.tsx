import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { url } from "node:inspector";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
  siteUrl: string;
  bgImage?: string;
}

export function AboutCard({ title, description, subTitle, siteUrl, bgImage }: AboutCardProp) {
  return (
<Card shadow={false} {...({} as any)} className="bg-black shadow-[0_0_20px_rgba(168,85,247,0.5)]">
  <CardBody
    className="relative h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden"
    style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
    {...({} as any)}
  >
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl pointer-events-none" />

  {/* Content (on top of the overlay) */}
  <Typography variant="h6" className="mb-4 text-center text-white z-10" {...({} as any)}>
    {subTitle}
  </Typography>
  <Typography variant="h4" className="text-center text-white z-10" {...({} as any)}>
    {title}
  </Typography>
  <Typography
    className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-bold text-white z-10"
    {...({} as any)}
  >
    {description}
  </Typography>
  <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="z-10">
    <Button color="white" size="sm" {...({} as any)}>
      Go to {title}
    </Button>
  </a>
</CardBody>

    </Card>
  );
}


export default AboutCard;
