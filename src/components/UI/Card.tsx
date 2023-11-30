import { Card, CardBody, Typography } from "@material-tailwind/react";

interface cardProps {
  image: string;
  title: string;
  description: string;
}

export default function CardWithImage({
  image,
  title,
  description,
}: cardProps) {
  return (
    <Card className="bg-[#f7f7f7] hover:shadow-lg hover:scale-105 transition-all duration-500">
      <CardBody className="flex flex-col items-center justify-center text-center p-6 min-h-[20rem]">
        <img src={image} alt={title} className="mb-4 w-36 h-36" />
        <div className="flex flex-col flex-grow w-full">
          <Typography variant="h5" className="mb-2 text-[#bfa260]">
            {title}
          </Typography>
          <Typography className="flex-grow">{description}</Typography>
        </div>
      </CardBody>
    </Card>
  );
}
