
import { Typography, Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <Card color="transparent" shadow={false} {...({} as any)}>
      <Typography variant="h1" className="font-bold" color="blue-gray" {...({} as any)}>
        {count}
      </Typography>
      <Typography variant="h6" color="blue-gray" className="mt-1 font-medium" {...({} as any)}>
        {title}
      </Typography>
    </Card>
  );
}


export default StatsCard;
