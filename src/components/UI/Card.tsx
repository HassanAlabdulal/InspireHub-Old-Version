import { Card, CardBody, Typography } from "@material-tailwind/react";

// Define the type for the component's props
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
    <Card className="mt-6 w-96 bg-[#f7f7f7] hover:shadow-lg hover:scale-105 transition-all duration-500">
      <CardBody className="flex flex-col items-center justify-center text-center">
        <img src={image} alt={title} className="w-36 h-36 " />
        <Typography variant="h5" className="mb-2 text-[#bfa260]">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
    </Card>
  );
}
