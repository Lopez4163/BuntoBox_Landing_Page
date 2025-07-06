import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <Card shadow={false} {...({} as any)}>
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900" {...({} as any)}>
        <Typography variant="h6" className="mb-4 text-center" color="white" {...({} as any)}>
          {subTitle}
        </Typography>
        <Typography variant="h4" className="text-center" color="white" {...({} as any)}>
          {title}
        </Typography>
        <Typography
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
          {...({} as any)}
        >
          {description}
        </Typography>
        <Button color="white" size="sm"
          onClick={() => window.location.href = "http://192.168.0.138:8096"}
        {...({} as any)}>
          Go to {title}
        </Button>
      </CardBody>
    </Card>
  );
}


export default AboutCard;
